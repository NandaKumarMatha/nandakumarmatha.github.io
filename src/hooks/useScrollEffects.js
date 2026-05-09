import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed motion (progress tied to scroll), closer to premium scroll sites
 * than one-shot “fade in when visible”.
 */
export function useScrollEffects() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: reduce)', () => {});

    /* Desktop: pin hero while scrubbing a full 3D-style exit */
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 900px)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=85%',
          scrub: 1.35,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      tl.to('.hero-content', { yPercent: -16, autoAlpha: 0.38 }, 0);
      tl.to(
        '.hero-image, .ss-hero-image',
        {
          y: 130,
          scale: 0.9,
          rotateY: -12,
          rotateX: 5,
          transformPerspective: 1200,
        },
        0
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    /* Mobile / small tablet: no pin — scrub only while hero passes */
    mm.add('(prefers-reduced-motion: no-preference) and (max-width: 899px)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.3,
        },
      });

      tl.to('.hero-content', { yPercent: -5, autoAlpha: 0.72 }, 0);
      tl.to(
        '.hero-image, .ss-hero-image',
        {
          y: 32,
          scale: 0.97,
          rotateY: 4,
          transformPerspective: 1000,
        },
        0
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    /* Sections: scrubbed reveal while they cross the viewport */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tweens = gsap.utils.toArray('.section-scroll').map((el) =>
        gsap.fromTo(
          el,
          { y: 48, skewY: 0.6, autoAlpha: 0.82 },
          {
            y: 0,
            skewY: 0,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 42%',
              scrub: 1.25,
            },
          }
        )
      );

      return () => {
        tweens.forEach((t) => t.kill());
      };
    });

    /* Recent Works / Projects: scrub header → filters → cards → Snap rows */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const root = document.querySelector('#projects');
      if (!root) return undefined;

      const wraps = gsap.utils.toArray(
        '#projects .project-card-scroll-wrap, #projects .projects-snap-scroll-wrap'
      );

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 82%',
          end: 'bottom 42%',
          scrub: 1.2,
        },
      });

      tl.fromTo(
        '#projects .projects-section__title',
        { y: 36, autoAlpha: 0.65, skewY: 0.65 },
        { y: 0, autoAlpha: 1, skewY: 0 },
        0
      );

      tl.fromTo(
        '#projects .projects-section__intro',
        { y: 24, autoAlpha: 0.72 },
        { y: 0, autoAlpha: 1 },
        0.05
      );

      tl.fromTo(
        '#projects .projects-section__filters',
        { y: 18, scale: 0.98, autoAlpha: 0.75 },
        { y: 0, scale: 1, autoAlpha: 1 },
        0.09
      );

      tl.fromTo(
        '#projects .projects-section__grid',
        { y: 14, skewY: 0.35 },
        { y: 0, skewY: 0 },
        0.12
      );

      wraps.forEach((el, i) => {
        tl.fromTo(
          el,
          {
            y: 44 + i * 6,
            rotateX: 3.5,
            autoAlpha: 0.74,
            transformPerspective: 1000,
          },
          { y: 0, rotateX: 0, autoAlpha: 1 },
          0.14 + i * 0.035
        );
      });

      tl.fromTo(
        '#projects .projects-section__snap',
        { y: 22, autoAlpha: 0.76 },
        { y: 0, autoAlpha: 1 },
        0.16
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);
}
