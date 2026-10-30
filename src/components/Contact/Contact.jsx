import React, { useState } from 'react';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import WhatsApp from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './contact.css';

const SOCIALS = [
  {
    Icon: LinkedIn,
    label: 'LinkedIn',
    sub: 'nandakumar-matha',
    href: 'https://www.linkedin.com/in/nandakumar-matha',
    color: '#0077b5',
    glow: 'rgba(0,119,181,0.4)',
  },
  {
    Icon: GitHub,
    label: 'GitHub',
    sub: 'NandaKumarMatha',
    href: 'https://github.com/NandaKumarMatha',
    color: '#e0e0e0',
    glow: 'rgba(200,200,200,0.25)',
  },
  {
    Icon: WhatsApp,
    label: 'WhatsApp',
    sub: '+91 9493785134',
    href: 'https://wa.me/919493785134',
    color: '#25d366',
    glow: 'rgba(37,211,102,0.35)',
  },
];

const Contact = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section className="contact-section" id="contact-content">
      {/* Ambient orbs */}
      <div className="contact-orb contact-orb-a" aria-hidden />
      <div className="contact-orb contact-orb-b" aria-hidden />
      <div className="contact-orb contact-orb-c" aria-hidden />

      <div className="contact-inner">
        {/* ── Header ── */}
        <div className="contact-header">
          <span className="contact-tag">GET IN TOUCH</span>
          <h2 className="contact-title">Let's Build Something <span className="contact-title-accent">Together</span></h2>
          <p className="contact-subtitle">
            Open to collaborations, freelance projects, and exciting opportunities.
            Drop a message — I respond within 24 hours.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="contact-body">

          {/* Left — contact info */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Contact Info</h3>

            {/* Email */}
            <button
              className="contact-info-row"
              onClick={() => copyToClipboard('matha.nandakumar@outlook.com', 'email')}
              title="Click to copy"
            >
              <span className="contact-info-icon-wrap">
                <EmailIcon className="contact-info-icon" />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">matha.nandakumar@outlook.com</span>
              </span>
              <span className="contact-copy-hint">{copied === 'email' ? '✓ Copied!' : 'Copy'}</span>
            </button>

            {/* Phone */}
            <button
              className="contact-info-row"
              onClick={() => copyToClipboard('+91 9493785134', 'phone')}
              title="Click to copy"
            >
              <span className="contact-info-icon-wrap">
                <PhoneIcon className="contact-info-icon" />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">+91 9493785134</span>
              </span>
              <span className="contact-copy-hint">{copied === 'phone' ? '✓ Copied!' : 'Copy'}</span>
            </button>

            {/* Location */}
            <div className="contact-info-row contact-info-row--static">
              <span className="contact-info-icon-wrap">
                <LocationOnIcon className="contact-info-icon" />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Visakhapatnam, Andhra Pradesh, India</span>
              </span>
            </div>

            {/* Availability badge */}
            <div className="contact-availability">
              <span className="contact-avail-dot" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Right — socials */}
          <div className="contact-social-col">
            <h3 className="contact-col-title">Find Me On</h3>
            <div className="contact-social-list">
              {SOCIALS.map(({ Icon, label, sub, href, color, glow }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-card"
                  style={{ '--card-color': color, '--card-glow': glow }}
                >
                  <span className="contact-social-icon-wrap">
                    <Icon style={{ color }} />
                  </span>
                  <span className="contact-social-text">
                    <span className="contact-social-label">{label}</span>
                    <span className="contact-social-sub">{sub}</span>
                  </span>
                  <OpenInNewIcon className="contact-social-ext" fontSize="small" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
