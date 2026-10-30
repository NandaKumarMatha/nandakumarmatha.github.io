import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { credentialsData } from '../../data/credentialsData';
import './credentials.css';

const Credentials = () => {
  return (
    <section className="credentials-section" id="credentials">
      <div className="credentials-ambient credentials-ambient-1" aria-hidden="true" />
      <div className="credentials-ambient credentials-ambient-2" aria-hidden="true" />

      <div className="credentials-header">
        <div className="credentials-pill">
          <WorkspacePremiumIcon className="credentials-pill-icon" />
          <span>Verified Accreditations</span>
        </div>
        <h2 className="credentials-title">
          Badges & <span className="credentials-title-gradient">Credentials</span>
        </h2>
        <p className="credentials-subtitle">
          Industry-recognized certifications, verified agentic AI accreditations, cloud specializations, and professional excellence awards.
        </p>
      </div>

      <div className="credentials-grid">
        {credentialsData.map((cred) => (
          <div
            key={cred.id}
            className="credential-card glass-card"
            style={{ '--glow-color': cred.glowColor }}
          >
            <div className="credential-top-bar">
              <span className="credential-badge-category">
                <MilitaryTechIcon className="category-icon" fontSize="small" />
                {cred.category}
              </span>
              <span className="credential-date">{cred.issueDate}</span>
            </div>

            <div className="credential-body">
              <div className="credential-visual-wrap">
                {cred.badgeImg ? (
                  <img
                    src={cred.badgeImg}
                    alt={cred.title}
                    className="credential-badge-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="credential-placeholder-badge">
                    <VerifiedIcon className="placeholder-icon" />
                  </div>
                )}
              </div>

              <div className="credential-info">
                <span className="credential-issuer">{cred.issuer}</span>
                <h3 className="credential-name">{cred.title}</h3>
                <p className="credential-desc">{cred.description}</p>
              </div>
            </div>

            <div className="credential-actions">
              {cred.verifyUrl && (
                <a
                  href={cred.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-btn credential-btn-verify"
                  aria-label={`Verify ${cred.title}`}
                >
                  <VerifiedIcon fontSize="small" />
                  <span>Verify Badge</span>
                  <OpenInNewIcon fontSize="small" className="btn-ext-icon" />
                </a>
              )}
              {cred.certPdf && (
                <a
                  href={cred.certPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-btn credential-btn-pdf"
                  aria-label={`View Certificate for ${cred.title}`}
                >
                  <PictureAsPdfIcon fontSize="small" />
                  <span>View PDF</span>
                  <OpenInNewIcon fontSize="small" className="btn-ext-icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credentials;
