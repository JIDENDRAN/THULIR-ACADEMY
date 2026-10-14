import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar d-none d-md-block">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left: Location & Working Hours */}
          <div className="d-flex align-items-center gap-4">
            <span className="d-flex align-items-center gap-1.5 text-light opacity-90">
              <MapPin size={13} className="text-primary-emphasis" />
              <span>Gnanaolivupuram, Madurai – 625016</span>
            </span>
            <span className="text-secondary opacity-40">|</span>
            <span className="d-flex align-items-center gap-1.5 text-light opacity-90">
              <Clock size={13} className="text-warning" />
              <span>Timings: 6:00 AM – 8:00 PM (Mon – Sun) | Weekend Batches</span>
            </span>
          </div>

          {/* Right: Verified Institutional Contact */}
          <div className="d-flex align-items-center gap-3">
            <span className="d-none d-lg-flex align-items-center gap-1.5 small" style={{ color: '#E2E8F0' }}>
              <ShieldCheck size={13} style={{ color: '#DFB847' }} />
              <span style={{ color: '#DFB847', fontWeight: 600 }}>Skill Development Centre</span>
            </span>
            <span className="text-secondary opacity-40 d-none d-lg-inline">|</span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-decoration-none fw-medium"
              title="Call Institute Office"
            >
              <Phone size={12} className="text-info" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-secondary opacity-40">|</span>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-success-emphasis fw-medium"
              title="Official WhatsApp Desk"
            >
              <MessageSquare size={12} className="text-success" />
              <span>Admissions WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
