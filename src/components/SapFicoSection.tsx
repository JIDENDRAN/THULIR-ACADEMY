import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Terminal, 
  Database,
  Building
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const SapFicoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fi' | 'co'>('fi');

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.courseEnquiry("SAP FICO End-User Training")
  )}`;

  const tcodes = [
    { code: "FB50", desc: "G/L Document Posting" },
    { code: "FB60", desc: "Vendor Invoice Booking" },
    { code: "F-53", desc: "Vendor Outgoing Payment" },
    { code: "FB70", desc: "Customer Billing Entry" },
    { code: "FS10N", desc: "G/L Account Balance Display" },
    { code: "FBL3N", desc: "G/L Line Item Extract" }
  ];

  return (
    <section 
      className="sap-fico-section section-padding position-relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(14, 116, 144, 0.35), transparent 70%), linear-gradient(180deg, #0B2238 0%, #061524 100%)',
        color: '#FFFFFF'
      }}
    >
      {/* Decorative ambient background orbs */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.6
        }}
      />
      <div 
        className="position-absolute rounded-circle pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          top: '-100px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 1
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-12 col-lg-6">
            <div 
              className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                color: '#E0F2FE'
              }}
            >
              <Building size={14} style={{ color: '#38BDF8' }} />
              <span className="small fw-bold letter-spacing-1">ENTERPRISE FINANCE SYSTEMS</span>
            </div>

            <h2 className="display-6 fw-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Explore Enterprise <br />
              <span style={{ color: '#38BDF8' }}>SAP FICO End-User Training</span>
            </h2>

            <p className="lead mb-4 fs-6" style={{ color: '#E2E8F0', lineHeight: 1.75 }}>
              Discover SAP Financial Accounting (FI) and Controlling (CO) core concepts, GUI navigation, and standard end-user workflows through a structured learning program based at our Madurai centre.
            </p>

            {/* Interactive Module Tabs (FI vs CO) */}
            <div 
              className="d-flex gap-2 p-1.5 rounded-3 mb-4" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                width: 'fit-content' 
              }}
            >
              <button
                type="button"
                className={`btn btn-sm px-3.5 py-1.5 rounded-2 fw-semibold transition-fast ${
                  activeTab === 'fi'
                    ? 'btn-light text-dark shadow-sm'
                    : 'text-white border-0 bg-transparent opacity-80'
                }`}
                onClick={() => setActiveTab('fi')}
              >
                Financial Accounting (FI)
              </button>
              <button
                type="button"
                className={`btn btn-sm px-3.5 py-1.5 rounded-2 fw-semibold transition-fast ${
                  activeTab === 'co'
                    ? 'btn-light text-dark shadow-sm'
                    : 'text-white border-0 bg-transparent opacity-80'
                }`}
                onClick={() => setActiveTab('co')}
              >
                Controlling (CO) Overview
              </button>
            </div>

            {/* Active Tab Highlights */}
            {activeTab === 'fi' ? (
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: '#38BDF8' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="h6 text-white fw-bold mb-1">General Ledger (GL) Postings</h4>
                    <p className="small mb-0" style={{ color: '#CBD5E1' }}>
                      Master Chart of Accounts, document types, posting keys, and financial statement versions.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: '#38BDF8' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="h6 text-white fw-bold mb-1">Accounts Payable & Receivable (AP / AR)</h4>
                    <p className="small mb-0" style={{ color: '#CBD5E1' }}>
                      Standard vendor invoice booking (FB60), payments (F-53), and customer billing entries (FB70).
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: '#38BDF8' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="h6 text-white fw-bold mb-1">Cost Center & Internal Orders</h4>
                    <p className="small mb-0" style={{ color: '#CBD5E1' }}>
                      Gain conceptual clarity on tracking managerial costs and organizational expense allocation.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 size={18} style={{ color: '#38BDF8' }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="h6 text-white fw-bold mb-1">Profit Center Accounting Fundamentals</h4>
                    <p className="small mb-0" style={{ color: '#CBD5E1' }}>
                      Explore internal reporting structures utilized by enterprise and multinational corporations.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Link 
                to="/courses/sap-fico-training" 
                className="btn fw-semibold px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: '#0284C7',
                  borderColor: '#0284C7',
                  color: '#FFFFFF'
                }}
              >
                <span>View Complete Curriculum</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light fw-medium px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  color: '#FFFFFF'
                }}
              >
                <MessageSquare size={16} style={{ color: '#34D399' }} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            <div className="d-flex align-items-center gap-2 mt-4 pt-2 small" style={{ color: '#94A3B8' }}>
              <ShieldCheck size={16} style={{ color: '#38BDF8' }} />
              <span>Program focuses on practical end-user skills & software familiarisation in Madurai.</span>
            </div>
          </div>

          {/* Right Console Column */}
          <div className="col-12 col-lg-6">
            <div 
              className="rounded-4 p-4 p-md-5" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-between pb-3 mb-4"
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <Terminal size={18} style={{ color: '#38BDF8' }} />
                  <span className="text-white fw-bold small">SAP GUI Standard Transactions</span>
                </div>
                <span 
                  className="badge px-2.5 py-1.5 rounded-pill small"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#E0F2FE',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  End-User Module
                </span>
              </div>

              {/* T-Codes Grid */}
              <div className="mb-4">
                <span className="small d-block mb-3 fw-semibold" style={{ color: '#E2E8F0' }}>
                  Standard T-Codes Covered:
                </span>
                <div className="row g-2.5">
                  {tcodes.map((item, idx) => (
                    <div key={idx} className="col-6">
                      <div 
                        className="p-3 rounded-2 d-flex flex-column transition-fast"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.14)'
                        }}
                      >
                        <span className="fw-bold font-monospace small mb-1" style={{ color: '#38BDF8' }}>
                          {item.code}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#CBD5E1', lineHeight: 1.35 }}>
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Framework Callout */}
              <div 
                className="p-3 rounded-2"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <div className="d-flex align-items-center gap-2.5">
                  <Database size={22} style={{ color: '#34D399' }} className="flex-shrink-0" />
                  <div>
                    <span className="text-white small fw-bold d-block">
                      Enterprise Process Cycles
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
                      Procure-to-Pay (P2P) & Order-to-Cash (O2C) finance workflows.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
