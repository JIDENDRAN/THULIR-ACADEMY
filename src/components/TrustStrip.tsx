import React from 'react';
import { 
  Monitor, 
  FileSpreadsheet, 
  Calculator, 
  Layers, 
  CheckCircle2, 
  Snowflake, 
  UserCheck, 
  Clock, 
  Award 
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const highlights = [
    {
      icon: <Monitor size={24} style={{ color: '#1D4ED8' }} />,
      bg: '#E2ECFA',
      borderColor: '#3B82F6',
      badge: 'Foundation to Pro',
      badgeBg: '#DBEAFE',
      badgeColor: '#1D4ED8',
      metric: '1:1 PC',
      title: "Computer Applications",
      subtitle: "MS Office 365, Word, Excel & Keyboarding Fundamentals",
      feature: "Individual Workstation"
    },
    {
      icon: <FileSpreadsheet size={24} style={{ color: '#047857' }} />,
      bg: '#E6F4ED',
      borderColor: '#10B981',
      badge: 'High Demand',
      badgeBg: '#DCFCE7',
      badgeColor: '#047857',
      metric: '100% Practical',
      title: "Advanced Excel Lab",
      subtitle: "VLOOKUP, XLOOKUP, Pivot Tables & MIS Reports",
      feature: "Real Business Datasets"
    },
    {
      icon: <Calculator size={24} style={{ color: '#B45309' }} />,
      bg: '#FAF0DC',
      borderColor: '#F59E0B',
      badge: 'Job Ready',
      badgeBg: '#FEF3C7',
      badgeColor: '#92400E',
      metric: 'GST Invoices',
      title: "Tally Prime & GST",
      subtitle: "Double Entry, Voucher Entries, E-Way Bill & BRS",
      feature: "Live GST Compliance"
    },
    {
      icon: <Layers size={24} style={{ color: '#0E7490' }} />,
      bg: '#E0F2F7',
      borderColor: '#06B6D4',
      badge: 'Enterprise ERP',
      badgeBg: '#CFFAFE',
      badgeColor: '#0E7490',
      metric: 'T-Codes',
      title: "SAP FICO Systems",
      subtitle: "GL, AP/AR Workflows & SAP GUI End-User Practice",
      feature: "Corporate Standard"
    }
  ];

  return (
    <section id="highlights" className="trust-strip position-relative" style={{ backgroundColor: '#EAE3D5' }}>
      <div className="container">
        {/* 4 Feature Value Cards */}
        <div className="row g-3 g-lg-4 mb-4">
          {highlights.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div 
                className="metric-card-attractive h-100 d-flex flex-column justify-content-between"
                style={{
                  borderTop: `4px solid ${item.borderColor}`,
                  background: '#FAF6EE',
                  borderColor: '#DDD4C4'
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div 
                      className="trust-icon-box"
                      style={{ backgroundColor: item.bg }}
                    >
                      {item.icon}
                    </div>
                    <span 
                      className="badge rounded-pill fw-semibold"
                      style={{ 
                        backgroundColor: item.badgeBg, 
                        color: item.badgeColor,
                        fontSize: '0.72rem',
                        padding: '0.35rem 0.65rem',
                        border: `1px solid ${item.borderColor}33`
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="h6 mb-1 fw-bold text-dark">{item.title}</h3>
                  <p className="text-secondary small mb-3" style={{ lineHeight: 1.5, minHeight: '42px' }}>
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-top d-flex align-items-center justify-content-between text-secondary" style={{ borderColor: '#DDD4C4', fontSize: '0.75rem' }}>
                  <span className="d-inline-flex align-items-center gap-1 fw-semibold text-dark">
                    <CheckCircle2 size={13} className="text-success" />
                    <span>{item.feature}</span>
                  </span>
                  <span 
                    className="badge border px-2 py-0.5"
                    style={{ backgroundColor: '#F0EAE0', color: '#0B2238', borderColor: '#DDD4C4' }}
                  >
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eye-Catching Lab Facilities Highlight Strip */}
        <div 
          className="rounded-4 p-3 p-md-3.5 shadow-sm border"
          style={{ 
            background: 'linear-gradient(135deg, #FAF6EE 0%, #F1EAE0 100%)',
            borderColor: '#DDD4C4'
          }}
        >
          <div className="row g-3 align-items-center text-center text-md-start">
            <div className="col-12 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2.5">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: '#E2ECFA', color: '#1D4ED8' }}
                >
                  <Snowflake size={20} />
                </div>
                <div>
                  <div className="fw-bold text-dark small">A/C Lab Facilities</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>Comfortable Practice Space</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2.5">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: '#E6F4ED', color: '#047857' }}
                >
                  <UserCheck size={20} />
                </div>
                <div>
                  <div className="fw-bold text-dark small">1:1 Dedicated PC</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>Zero Shared Terminals</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2.5">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: '#FAF0DC', color: '#B45309' }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <div className="fw-bold text-dark small">6:00 AM – 8:00 PM</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>Mon–Sun & Weekend Batches</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2.5">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: '#E0F2F7', color: '#0E7490' }}
                >
                  <Award size={20} />
                </div>
                <div>
                  <div className="fw-bold text-dark small">24 Yrs Tax Mentorship</div>
                  <div className="text-secondary" style={{ fontSize: '0.75rem' }}>CA Faculty & Practical Cert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
