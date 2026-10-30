import React, { useState, useEffect, useRef } from 'react';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css';

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume',   label: 'Resume' },
  { href: '#skills',   label: 'Skills' },
  { href: '#contact',  label: 'Contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('#home');
  const [open,     setOpen]     = useState(false);
  const [glowX,    setGlowX]    = useState(0);
  const [glowShow, setGlowShow] = useState(false);
  const barRef = useRef(null);

  /* Scroll — compact bar + active section highlight */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const mid = window.scrollY + window.innerHeight * 0.4;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.querySelector(NAV_LINKS[i].href);
        if (el && el.offsetTop <= mid) { setActive(NAV_LINKS[i].href); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on resize back to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Body scroll lock when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (href) => { setActive(href); setOpen(false); };

  return (
    /* Wrapper — nav-bar and mobile drawer are siblings so overflow:hidden on bar never clips drawer */
    <div className="nav-root">
      {/* ── Fixed bar ── */}
      <header
        ref={barRef}
        className={`nav-bar${scrolled ? ' nav-bar--scrolled' : ''}`}
        onMouseMove={(e) => {
          if (!barRef.current) return;
          setGlowX(e.clientX - barRef.current.getBoundingClientRect().left);
          setGlowShow(true);
        }}
        onMouseLeave={() => setGlowShow(false)}
        role="banner"
      >
        {/* Cursor glow */}
        <div
          className="nav-cursor-glow"
          style={{ left: glowX, opacity: glowShow ? 1 : 0 }}
          aria-hidden
        />

        <div className="nav-inner">
          {/* Brand */}
          <a href="#home" className="nav-brand" onClick={() => handleNavClick('#home')}>
            <span className="nav-brand-icon">⬡</span>
            <span className="nav-brand-text">NKM</span>
          </a>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link${active === href ? ' nav-link--active' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
                <span className="nav-link-underline" />
              </a>
            ))}
          </nav>

          {/* Desktop socials */}
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/nandakumar-matha" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="LinkedIn">
              <LinkedIn fontSize="small" />
            </a>
            <a href="https://github.com/NandaKumarMatha" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="GitHub">
              <GitHub fontSize="small" />
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-mobile-drawer"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer — sibling of header, NOT inside it ── */}
      <div
        id="nav-mobile-drawer"
        className={`nav-drawer${open ? ' nav-drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-drawer-link${active === href ? ' nav-drawer-link--active' : ''}`}
              onClick={() => handleNavClick(href)}
              tabIndex={open ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-drawer-socials">
          <a href="https://www.linkedin.com/in/nandakumar-matha" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="LinkedIn"><LinkedIn /></a>
          <a href="https://github.com/NandaKumarMatha" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="GitHub"><GitHub /></a>
        </div>
      </div>

      {/* Backdrop overlay — tap outside to close */}
      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </div>
  );
}

export default Navbar;
