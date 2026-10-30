import React from 'react';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './footer.css';

const NAV_LINKS = [
  { href: '#home',         label: 'Home' },
  { href: '#projects',     label: 'Projects' },
  { href: '#resume',       label: 'Roadmap' },
  { href: '#skills',       label: 'Skills' },
  { href: '#credentials',  label: 'Credentials' },
  { href: '#contact',      label: 'Contact' },
];

const SOCIALS = [
  { Icon: LinkedIn, href: 'https://www.linkedin.com/in/nandakumar-matha', label: 'LinkedIn', color: '#0077b5' },
  { Icon: GitHub,   href: 'https://github.com/NandaKumarMatha',            label: 'GitHub',   color: '#e0e0e0' },
  { Icon: WhatsApp, href: 'https://wa.me/919493785134',                    label: 'WhatsApp', color: '#25d366' },
  { Icon: EmailIcon,href: 'mailto:matha.nandakumar@outlook.com',           label: 'Email',    color: '#8750f7' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top neon divider */}
      <div className="footer-divider" aria-hidden />

      <div className="footer-inner">
        {/* ── Brand column ── */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-icon">⬡</span>
            <span className="footer-brand-name">NKM</span>
          </a>
          <p className="footer-tagline">
            Sr. Associate @ Synechron<br />
            AI/ML · Automation · Cloud & Web Dev
          </p>
          <div className="footer-socials">
            {SOCIALS.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={label}
                style={{ '--btn-color': color }}
              >
                <Icon fontSize="small" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick links ── */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <nav aria-label="Footer navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="footer-link">{label}</a>
            ))}
          </nav>
        </div>

        {/* ── Contact mini ── */}
        <div className="footer-contact-col">
          <h4 className="footer-col-title">Contact</h4>
          <a href="mailto:matha.nandakumar@outlook.com" className="footer-contact-item">
            <EmailIcon fontSize="small" />
            <span>matha.nandakumar@outlook.com</span>
          </a>
          <a href="https://wa.me/919493785134" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <WhatsApp fontSize="small" />
            <span>+91 9493785134</span>
          </a>
          <p className="footer-location">📍 Visakhapatnam, India</p>
          <div className="footer-avail">
            <span className="footer-avail-dot" />
            Open to opportunities
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {year} <a href="#home" className="footer-copy-link">Nanda Kumar Matha</a>. All rights reserved.
        </span>
        <span className="footer-made">
          Built with <span className="footer-heart">♥</span> React + Vite
        </span>
        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <KeyboardArrowUpIcon fontSize="small" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
