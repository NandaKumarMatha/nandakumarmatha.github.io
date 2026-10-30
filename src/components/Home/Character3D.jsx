import React, { useEffect, useRef, useState, useCallback } from 'react';
import './character3d.css';

/**
 * Interactive 3D Character Stage with real-time cursor tracking,
 * 3D multi-plane parallax depth, cybernetic orbital rings,
 * floating holographic badges, and scroll-responsive transformations.
 */
const Character3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Smooth lerp state
  const mouseState = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    isHovering: false,
  });

  const scrollState = useRef({
    scrollProgress: 0,
    targetScroll: 0,
  });

  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)',
    glareX: 50,
    glareY: 50,
    glareOpacity: 0.15,
  });

  // 3D Starfield / Particle Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth || 340);
    let height = (canvas.height = canvas.offsetHeight || 420);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 340;
      height = canvas.height = canvas.offsetHeight || 420;
    };
    window.addEventListener('resize', onResize);

    // Particle nodes in 3D-projected space
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.4,
      y: (Math.random() - 0.5) * height * 1.4,
      z: Math.random() * 600 + 50,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#8750f7' : Math.random() > 0.5 ? '#06ffa5' : '#ff006e',
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const fov = 350;
      const cx = width / 2;
      const cy = height / 2;
      const offsetX = mouseState.current.currentX * 35;
      const offsetY = mouseState.current.currentY * 35;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;

        const scale = fov / (fov + p.z);
        const screenX = cx + (p.x + offsetX) * scale;
        const screenY = cy + (p.y + offsetY) * scale;
        const radius = Math.max(0.6, p.size * scale);

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(0.85, (1 - p.z / 700) * 0.85);
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });

      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Cursor & Scroll 3D Loop with smooth damping
  useEffect(() => {
    let animFrame;

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();

      // Normalize coordinates (-1 to +1) relative to center of the container
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      // Clamped range
      mouseState.current.targetX = Math.max(-1.4, Math.min(1.4, x));
      mouseState.current.targetY = Math.max(-1.4, Math.min(1.4, y));
      mouseState.current.isHovering = true;
    };

    const handleWindowMouseMove = (e) => {
      // Window-wide subtle parallax even when not directly hovering container
      if (!mouseState.current.isHovering) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        mouseState.current.targetX = x * 0.45;
        mouseState.current.targetY = y * 0.45;
      }
    };

    const handleMouseLeave = () => {
      mouseState.current.isHovering = false;
      mouseState.current.targetX = 0;
      mouseState.current.targetY = 0;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight || 800;
      const progress = Math.min(1.5, Math.max(0, scrollY / viewportH));
      scrollState.current.targetScroll = progress;
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    let time = 0;
    const updateLoop = () => {
      time += 0.02;

      // Damped interpolation (lerp)
      const factor = 0.085;
      mouseState.current.currentX += (mouseState.current.targetX - mouseState.current.currentX) * factor;
      mouseState.current.currentY += (mouseState.current.targetY - mouseState.current.currentY) * factor;
      scrollState.current.scrollProgress += (scrollState.current.targetScroll - scrollState.current.scrollProgress) * 0.1;

      const mx = mouseState.current.currentX;
      const my = mouseState.current.currentY;
      const scroll = scrollState.current.scrollProgress;

      // Ambient idle oscillation when idle
      const idleTiltX = Math.sin(time * 1.2) * 3;
      const idleTiltY = Math.cos(time * 0.9) * 3.5;
      const idleFloatY = Math.sin(time * 1.5) * 6;

      // Calculated 3D Rotation Angles
      const rotY = mx * 22 + idleTiltY + scroll * -28;
      const rotX = -my * 20 + idleTiltX + scroll * 8;
      const rotZ = mx * -3 + scroll * -6;
      const transZ = Math.abs(mx) * 25 + Math.abs(my) * 15 + scroll * 40;
      const transY = idleFloatY + scroll * 80;

      // Glare highlight position
      const glareX = 50 + mx * 35;
      const glareY = 50 + my * 35;
      const glareOpacity = 0.15 + (Math.abs(mx) + Math.abs(my)) * 0.22;

      setTiltStyle({
        transform: `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) translateY(${transY.toFixed(2)}px) translateZ(${transZ.toFixed(2)}px)`,
        glareX,
        glareY,
        glareOpacity,
      });

      animFrame = requestAnimationFrame(updateLoop);
    };

    updateLoop();

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div className="char3d-viewport" ref={containerRef}>
      {/* 3D Depth Particle Canvas */}
      <canvas className="char3d-canvas" ref={canvasRef} />

      {/* Cybernetic Gyro Rings in 3D Space */}
      <div className="char3d-gyro-ring char3d-gyro-ring-1" aria-hidden="true" />
      <div className="char3d-gyro-ring char3d-gyro-ring-2" aria-hidden="true" />
      <div className="char3d-gyro-ring char3d-gyro-ring-3" aria-hidden="true" />

      {/* The Central 3D Transforming Stage */}
      <div className="char3d-stage" style={{ transform: tiltStyle.transform }}>
        {/* Holographic Specular Glare Layer */}
        <div
          className="char3d-glare"
          style={{
            background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(212, 170, 255, 0.25) 30%, transparent 65%)`,
            opacity: tiltStyle.glareOpacity,
          }}
        />

        {/* Cyber Holographic Framing & Corner HUD */}
        <div className="char3d-hud-corner hud-tl" />
        <div className="char3d-hud-corner hud-tr" />
        <div className="char3d-hud-corner hud-bl" />
        <div className="char3d-hud-corner hud-br" />

        {/* Character Portrait with 3D Elevation */}
        <div className="char3d-card-body">
          <img
            src="mnkumar.jpg"
            alt="Nanda Kumar Matha"
            className="char3d-avatar-img"
            loading="eager"
          />
          <div className="char3d-scanlines" />
        </div>

        {/* Floating 3D Holographic Badges with stereoscopic depth */}
        <div className="char3d-badge char3d-badge-top">
          <span className="badge-glow-dot" />
          <span className="badge-text">Sr. Associate @ Synechron</span>
        </div>

        <div className="char3d-badge char3d-badge-bottom">
          <span className="badge-icon">⚡</span>
          <span className="badge-text">AI / ML & Automation</span>
        </div>

        <div className="char3d-status-pill">
          <span className="status-live-dot" />
          <span>Active Maven</span>
        </div>
      </div>
    </div>
  );
};

export default Character3D;

