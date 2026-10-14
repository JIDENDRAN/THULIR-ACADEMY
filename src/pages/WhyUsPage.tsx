import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Laptop, 
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Flame,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhyUsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Why Choose Us | Thulir Institute of Computer Education Madurai";
  }, []);

  const advantages = [
    {
      icon: <Laptop size={26} className="text-primary" />,
      title: "1:1 Dedicated PC Allocation",
      desc: "Every learner is assigned an individual workstation. No terminal sharing or turn-taking during lab hours.",
      bg: "#E2ECFA",
      badge: "Zero Compromise Lab"
    },
    {
      icon: <Award size={26} style={{ color: '#B45309' }} />,
      title: "24 Years Tax Mentorship & CA Faculty",
      desc: "Direct academic guidance from an experienced 24-year tax consultant and practicing Chartered Accountants.",
      bg: "#FAF0DC",
      badge: "Expert CA Mentorship"
    },
    {
      icon: <Calculator size={26} className="text-success" />,
      title: "Real Invoices & Live GST Portals",
      desc: "Practice with authentic business data, GSTR-1, GSTR-2B reconciliation, GSTR-3B filings, and E-Way bills.",
      bg: "#E6F4ED",
      badge: "100% Practical Invoicing"
    },
    {
      icon: <Briefcase size={26} style={{ color: '#0E7490' }} />,
      title: "Enterprise SAP FICO End-User Practice",
      desc: "Hands-on SAP GUI transaction codes (T-Codes), general ledger postings, and accounts payable/receivable cycles.",
      bg: "#E0F2F7",
      badge: "Enterprise Standard"
    },
    {
      icon: <Clock size={26} style={{ color: '#7C3AED' }} />,
      title: "Flexible Timings: 6:00 AM – 8:00 PM",
      desc: "Convenient batch slots Monday to Sunday with dedicated weekend batches for college students and working people.",
      bg: "#EDE9FE",
      badge: "Mon–Sun & Weekends"
    },
    {
      icon: <ShieldCheck size={26} style={{ color: '#059669' }} />,
      title: "Recognised Certification & Placement Help",
      desc: "Govt. registered skill development centre under Pneuma Trust providing verified career credentials and interview prep.",
      bg: "#D1FAE5",
      badge: "Career Ready"
    }
  ];

  return (
    <div style={{ backgroundColor: '#F3EFE6', minHeight: '100vh' }}>
      {/* Page Header Banner */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small mb-2">
                  <li className="breadcrumb-item"><Link to="/" className="text-primary text-decoration-none">Home</Link></li>
                  <li className="breadcrumb-item active text-secondary" aria-current="page">Why Choose Us</li>
                </ol>
              </nav>
              <span className="badge-eyebrow">INSTITUTIONAL METHODOLOGY</span>
              <h1 className="display-5 fw-bold text-dark mb-3">
                Why Students & Professionals Choose Thulir Institute
              </h1>
              <p className="lead text-secondary mb-0">
                A structured, 100% practical learning approach backed by 24 years of taxation expertise and individual workstation labs in Madurai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: '#FAF0DC', border: '1px solid #EAD49E', color: '#92400E' }}>
              <Flame size={15} className="text-danger" />
              <span className="small fw-bold letter-spacing-1">THE THULIR ADVANTAGE</span>
            </div>
            <h2 className="section-title text-dark">6 Reasons Why We Stand Apart</h2>
            <p className="section-subtitle">
              We eliminate empty textbook theory. You learn on real software tools used across commercial businesses and accounting firms.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {advantages.map((adv, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div 
                  className="card h-100 p-4 rounded-4 shadow-sm transition-normal d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: '#FAF6EE',
                    border: '1.5px solid #DDD4C4',
                    boxShadow: '0 4px 16px rgba(11, 34, 56, 0.06)'
                  }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div 
                        className="rounded-3 d-flex align-items-center justify-content-center p-2.5"
                        style={{ width: '50px', height: '50px', backgroundColor: adv.bg }}
                      >
                        {adv.icon}
                      </div>
                      <span 
                        className="badge rounded-pill small fw-semibold px-2.5 py-1"
                        style={{ backgroundColor: '#F3EFE6', color: '#0B2238', border: '1px solid #DDD4C4' }}
                      >
                        {adv.badge}
                      </span>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">{adv.title}</h3>
                    <p className="small text-secondary mb-0" style={{ lineHeight: 1.65 }}>
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mentorship Spotlight Banner */}
          <div 
            className="p-4 p-md-5 rounded-4 position-relative overflow-hidden mb-5"
            style={{
              backgroundColor: '#0B2238',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 40px rgba(11, 34, 56, 0.25)'
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-8">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 text-warning small fw-bold mb-3">
                  <Award size={14} />
                  <span>DIRECT INDUSTRY MENTORSHIP</span>
                </div>
                <h3 className="h3 fw-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Learn from 24 Years of Taxation Experience & CA Faculty
                </h3>
                <p className="text-light opacity-85 mb-4" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                  Accounting isn't just about passing exam vouchers—it's about handling vendor invoices, managing TDS deductions without penalties, and reconciling portal ledgers. At Thulir Institute (A Project of Pneuma Trust), you receive free career & tax counselling directly from experienced tax practitioners in Madurai.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/courses" className="btn btn-warning text-dark fw-bold px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2 shadow-sm">
                    <span>Explore Our Courses</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light text-white px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2"
                  >
                    <MessageSquare size={16} className="text-success" />
                    <span>WhatsApp Enquiry: {siteConfig.contact.phoneFormatted}</span>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4 text-center">
                <div 
                  className="p-4 rounded-4 text-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <div className="display-4 fw-bold text-warning mb-1">24+</div>
                  <div className="fw-bold text-white mb-2">Years of Industry Practice</div>
                  <p className="small text-light opacity-75 mb-0">
                    Trusted guidance across Gnanaolivupuram and Arapalayam, Madurai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Strip */}
          <div 
            className="p-4 rounded-4"
            style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-4">
                <h4 className="h5 fw-bold text-dark mb-2">Ready to Start?</h4>
                <p className="small text-secondary mb-3">
                  Visit our lab at Gnanaolivupuram or Arapalayam to inspect the workstations and meet our faculty.
                </p>
                <Link to="/contact" className="btn-thulir-primary text-decoration-none">
                  <span>Visit Institute / Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}>
                      <span className="fw-bold text-dark d-block small mb-1">Lab Hours:</span>
                      <span className="small text-secondary">6:00 AM to 8:00 PM (Mon – Sun)</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}>
                      <span className="fw-bold text-dark d-block small mb-1">Mode of Study:</span>
                      <span className="small text-secondary">Classroom Lab & Online Live Classes</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}>
                      <span className="fw-bold text-dark d-block small mb-1">Eligibility:</span>
                      <span className="small text-secondary">School, College, Homemakers, Working Pros</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}>
                      <span className="fw-bold text-dark d-block small mb-1">Counselling:</span>
                      <span className="small text-secondary">100% Free Career & Tax Advice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
