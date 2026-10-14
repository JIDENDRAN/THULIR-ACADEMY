import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Monitor, 
  Calculator, 
  ChevronDown,
  Building2,
  FileSpreadsheet,
  Layers,
  Star,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper-attractive bg-pattern-dots position-relative overflow-hidden">
      {/* Dynamic Ambient Lighting Accents */}
      <div 
        className="aurora-orb aurora-blue" 
        style={{ top: '-140px', right: '-100px', width: '580px', height: '580px', opacity: 0.15 }}
      />
      <div 
        className="aurora-orb aurora-amber" 
        style={{ bottom: '-120px', left: '-80px', width: '520px', height: '520px', opacity: 0.15 }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Top Attention-Grabbing Ribbon Banner */}
        <div className="d-flex justify-content-center mb-4">
          <div 
            className="d-inline-flex flex-wrap align-items-center justify-content-center gap-2 px-3.5 py-1.5 rounded-pill shadow-xs"
            style={{
              backgroundColor: '#FAF0DC',
              border: '1px solid #EAD49E',
              color: '#92400E',
              fontSize: '0.825rem'
            }}
          >
            <span className="badge rounded-pill bg-warning text-dark px-2 py-0.5 fw-bold small">
              ADMISSIONS 2026
            </span>
            <span className="fw-semibold">
              New Batches Commencing • Weekday & Weekend Slots Available in Madurai
            </span>
            <Sparkles size={14} className="text-warning-emphasis d-none d-sm-inline" />
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Column: Headline, Trust Badges & CTAs */}
          <div className="col-12 col-lg-6">
            {/* Institution Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-3"
            >
              <div className="badge-eyebrow">
                <Building2 size={14} style={{ color: '#B45309' }} />
                <span>GOVT. REGISTERED SKILL DEVELOPMENT CENTRE</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="hero-title mb-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              Build Practical Skills. <br />
              Master Real Tools. <br />
              <span style={{ color: '#C59B27' }}>Create Your Career.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p 
              className="hero-lead mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              Learn in a 100% practical computer lab with individual workstations. Master Advanced Excel, Tally Prime with GST, Indian statutory tax filing, and enterprise SAP FICO end-user workflows at Gnanaolivupuram, Madurai.
            </motion.p>

            {/* Program Quick Navigation Badges */}
            <motion.div
              className="d-flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link to="/courses/advanced-excel" className="quick-pill text-decoration-none">
                <FileSpreadsheet size={14} className="text-success" />
                <span>Advanced Excel</span>
              </Link>
              <Link to="/courses/tally-with-gst" className="quick-pill text-decoration-none">
                <Calculator size={14} className="text-primary" />
                <span>Tally Prime with GST</span>
              </Link>
              <Link to="/courses/sap-fico-training" className="quick-pill text-decoration-none">
                <Layers size={14} className="text-info" style={{ color: '#0E7490' }} />
                <span>SAP FICO Systems</span>
              </Link>
              <Link to="/courses/ms-office-basic" className="quick-pill text-decoration-none">
                <Monitor size={14} className="text-primary" />
                <span>MS Office Suite</span>
              </Link>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="d-flex flex-wrap gap-3 align-items-center mb-4 pb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <Link to="/courses" className="btn-thulir-primary text-decoration-none">
                <span>Explore All Programs</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-thulir-secondary text-decoration-none">
                <span>Book Lab Visit</span>
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-hero text-decoration-none"
                title="Direct WhatsApp Helpdesk"
              >
                <MessageSquare size={16} />
                <span>WhatsApp: {siteConfig.contact.phoneFormatted}</span>
              </a>
            </motion.div>

            {/* Verified Institutional Highlights */}
            <motion.div 
              className="d-flex flex-wrap align-items-center gap-4 pt-3 border-top border-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              <div className="d-flex align-items-center gap-2 small fw-semibold text-secondary">
                <CheckCircle2 size={16} className="text-success" />
                <span>1:1 Workstation Allocation</span>
              </div>
              <div className="d-flex align-items-center gap-2 small fw-semibold text-secondary">
                <CheckCircle2 size={16} className="text-success" />
                <span>Commercial Invoicing Labs</span>
              </div>
              <div className="d-flex align-items-center gap-2 small fw-semibold text-secondary">
                <CheckCircle2 size={16} className="text-success" />
                <span>Central Madurai Location</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Visual Presentation with Floating Badges */}
          <div className="col-12 col-lg-6">
            <div className="position-relative">
              {/* Main Photo Frame */}
              <motion.div 
                className="rounded-4 overflow-hidden position-relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                style={{
                  border: '4px solid #FAF6EE',
                  boxShadow: '0 25px 50px -12px rgba(11, 34, 56, 0.18), 0 0 30px rgba(197, 155, 39, 0.1)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Students engaged in practical computer and accounting training at Thulir Institute"
                  className="w-100"
                  style={{
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Vignette Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11, 34, 56, 0) 50%, rgba(11, 34, 56, 0.9) 100%)'
                  }}
                />
                
                {/* Bottom Overlay Label */}
                <div className="position-absolute bottom-0 start-0 p-4 text-white">
                  <div className="d-flex align-items-center gap-2 mb-1.5">
                    <span className="badge bg-primary text-white px-2.5 py-1 small rounded-pill">
                      Madurai Academic Centre
                    </span>
                    <span className="badge bg-success text-white px-2.5 py-1 small rounded-pill">
                      100% Practical Lab
                    </span>
                  </div>
                  <h3 className="h6 mb-0 text-white fw-bold">
                    Thulir Institute of Computer Education & Skill Development
                  </h3>
                </div>
              </motion.div>

              {/* Floating Badge 1 (Top Right): 1:1 Dedicated Machine Lab */}
              <motion.div 
                className="floating-pill d-none d-sm-flex animate-float shadow-lg"
                style={{
                  top: '-20px',
                  right: '-15px',
                  zIndex: 10,
                  backgroundColor: '#FAF6EE',
                  border: '1.5px solid #DDD4C4',
                  borderRadius: '16px'
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '44px', height: '44px', background: '#E2ECFA', color: '#1D4ED8' }}
                >
                  <Monitor size={22} />
                </div>
                <div>
                  <div className="fw-bold text-dark small" style={{ lineHeight: 1.2 }}>Dedicated Machine Lab</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Individual Workstations</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left): Student Trust Rating */}
              <motion.div 
                className="floating-pill d-none d-sm-flex animate-float-reverse shadow-lg"
                style={{
                  bottom: '-20px',
                  left: '-15px',
                  zIndex: 10,
                  backgroundColor: '#FAF6EE',
                  border: '1.5px solid #EAD49E',
                  borderRadius: '16px'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '44px', height: '44px', background: '#FAF0DC', color: '#B45309' }}
                >
                  <Star size={22} fill="#B45309" />
                </div>
                <div>
                  <div className="fw-bold text-dark small" style={{ lineHeight: 1.2 }}>Top Rated Learning Centre</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Gnanaolivupuram, Madurai</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll invitation */}
        <div className="text-center pt-5 d-none d-md-block">
          <a 
            href="#highlights" 
            className="text-decoration-none text-secondary d-inline-flex flex-column align-items-center gap-1 small"
          >
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', fontWeight: 600 }}>DISCOVER ALL PROGRAM MODULES</span>
            <ChevronDown size={17} style={{ color: '#C59B27' }} />
          </a>
        </div>
      </div>
    </section>
  );
};
