import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../data/siteConfig';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Column 1: Brand & Identity */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-3">
              <BrandLogo variant="light" size="md" />
            </div>
            <p className="small text-light-emphasis pe-lg-3 mb-4" style={{ lineHeight: 1.7 }}>
              {siteConfig.fullName} provides structured, career-focused training in computer productivity, computerized accounting, taxation, and enterprise finance workflows in Madurai.
            </p>
            <div>
              <span className="d-block text-white small fw-semibold mb-2">Connect With Us:</span>
              <div className="d-flex align-items-center gap-2">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill"
                  title="Official Instagram Profile"
                >
                  <InstagramIcon size={15} className="text-warning" />
                  <span>{siteConfig.contact.instagramHandle}</span>
                  <ExternalLink size={12} className="opacity-75" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5>Navigation</h5>
            <ul className="list-unstyled d-flex flex-column gap-2.5 small">
              <li>
                <Link to="/" className="text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-decoration-none">All Courses</Link>
              </li>
              <li>
                <Link to="/why-us" className="text-decoration-none">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-decoration-none">Gallery & Lab</Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none">Contact & Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5>Training Programs</h5>
            <ul className="list-unstyled d-flex flex-column gap-2.5 small">
              <li>
                <Link to="/courses/ms-office-basic" className="text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>MS Office Basic</span>
                  <ArrowUpRight size={13} className="opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/courses/advanced-excel" className="text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>Advanced Excel</span>
                  <ArrowUpRight size={13} className="opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/courses/tally-with-gst" className="text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>Tally with GST</span>
                  <ArrowUpRight size={13} className="opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/courses/gst-practitioner-training" className="text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>GST Practitioner Training</span>
                  <ArrowUpRight size={13} className="opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/courses/sap-fico-training" className="text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>SAP FICO End-User</span>
                  <ArrowUpRight size={13} className="opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Madurai Centres</h5>
            <div className="d-flex flex-column gap-2.5 small text-light-emphasis">
              <div className="d-flex gap-2">
                <MapPin size={17} className="text-info flex-shrink-0 mt-1" />
                <span>
                  {siteConfig.location.fullAddress}
                  <span className="d-block text-warning small mt-0.5">Branch: Arapalayam, Madurai</span>
                </span>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <Phone size={15} className="text-info flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-decoration-none text-white fw-medium">
                  {siteConfig.contact.phoneFormatted} / {siteConfig.contact.secondaryPhone}
                </a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <MessageSquare size={15} className="text-success flex-shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-success fw-medium"
                >
                  WhatsApp: +91 99942 46918
                </a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <span className="text-info">✉</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-decoration-none text-light opacity-90">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="p-2 rounded bg-white bg-opacity-5 border border-white border-opacity-10 text-white small">
                <div className="fw-semibold text-warning">Batch Timings:</div>
                <div className="text-light opacity-85">6:00 AM to 8:00 PM (Mon - Sun)</div>
                <div className="text-info" style={{ fontSize: '0.75rem' }}>Weekend Special Batches Available</div>
              </div>
              <div className="pt-1">
                <Link to="/contact" className="btn btn-sm btn-outline-info rounded-pill px-3 py-1.5 w-100 text-center">
                  Get Directions & Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>
            © 2026 Thulir Institute. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-2 text-secondary">
            <span>Website concept by</span>
            <a
              href={siteConfig.meta.creditCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fw-medium text-decoration-none border-bottom border-secondary pb-0.5"
            >
              CodeThrive Infotech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
