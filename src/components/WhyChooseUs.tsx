import React from 'react';
import { 
  MonitorCheck, 
  Calculator, 
  BarChart3, 
  Laptop, 
  Briefcase,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const WhyChooseUs: React.FC = () => {
  const containerRef = useGsapReveal({ y: 25, duration: 0.6, stagger: 0.1 });

  return (
    <section 
      id="why-us" 
      ref={containerRef} 
      className="section-padding position-relative"
      style={{ backgroundColor: '#EAE3D5', borderTop: '1px solid #DDD4C4', borderBottom: '1px solid #DDD4C4' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center gsap-reveal">
          <span className="badge-eyebrow">INSTITUTIONAL METHODOLOGY</span>
          <h2 className="section-title text-dark">A Practical Approach to Skill Development</h2>
          <p className="section-subtitle">
            Our curriculum focuses directly on commercial applications, verified accounting principles, and statutory tax invoicing practiced daily in Indian corporate and trade offices.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="row g-4 align-items-stretch">
          {/* Card 1: Office Productivity & Advanced Spreadsheets */}
          <div className="col-12 col-lg-7 gsap-reveal">
            <div 
              className="bento-card-main p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="p-3 rounded-3 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '54px', height: '54px', backgroundColor: '#E2ECFA', color: '#1D4ED8' }}
                  >
                    <MonitorCheck size={28} />
                  </div>
                  <span 
                    className="badge rounded-pill px-3 py-1 small fw-semibold"
                    style={{ backgroundColor: '#FAF0DC', color: '#92400E', border: '1px solid #EAD49E' }}
                  >
                    Foundation to Advanced
                  </span>
                </div>

                <h3 className="h4 fw-bold text-dark mb-2">
                  Computer Applications & Executive Office Skills
                </h3>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.7 }}>
                  Structured training from keyboarding fundamentals and file management to professional Microsoft Word corporate templates, multi-sheet Advanced Excel financial models, and executive slide presentations.
                </p>

                {/* Sub Features */}
                <div className="row g-2 mb-4">
                  <div className="col-6 col-sm-4">
                    <div 
                      className="p-2.5 rounded-2 small text-dark fw-semibold d-flex align-items-center gap-1.5"
                      style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}
                    >
                      <CheckCircle2 size={14} className="text-success" />
                      <span>Typing & OS</span>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div 
                      className="p-2.5 rounded-2 small text-dark fw-semibold d-flex align-items-center gap-1.5"
                      style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}
                    >
                      <CheckCircle2 size={14} className="text-success" />
                      <span>VLOOKUP & Pivot</span>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div 
                      className="p-2.5 rounded-2 small text-dark fw-semibold d-flex align-items-center gap-1.5"
                      style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}
                    >
                      <CheckCircle2 size={14} className="text-success" />
                      <span>Executive Decks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top d-flex justify-content-between align-items-center" style={{ borderColor: '#DDD4C4' }}>
                <span className="small text-secondary">Complete desktop productivity sequence</span>
                <Link to="/courses" className="small fw-semibold text-primary text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>Explore Courses</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Computerized Accounting & GST */}
          <div className="col-12 col-lg-5 gsap-reveal">
            <div 
              className="bento-card-main p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="p-3 rounded-3 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '54px', height: '54px', backgroundColor: '#E6F4ED', color: '#065F46' }}
                  >
                    <Calculator size={28} />
                  </div>
                  <span 
                    className="badge rounded-pill px-3 py-1 small fw-semibold"
                    style={{ backgroundColor: '#E6F4ED', color: '#065F46', border: '1px solid #BCE4CE' }}
                  >
                    Commerce & Taxation
                  </span>
                </div>

                <h3 className="h4 fw-bold text-dark mb-2">
                  Tally Prime with GST Invoicing
                </h3>
                <p className="text-secondary mb-4" style={{ lineHeight: 1.7 }}>
                  Connecting textbook double-entry accounting with live commercial voucher entries, HSN codes, GST tax slabs, and balance sheet compilation.
                </p>

                <div className="d-flex flex-column gap-2 mb-4">
                  <div className="d-flex align-items-center gap-2 small text-dark fw-medium">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                    <span>Company, Ledger & Inventory Creation</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-dark fw-medium">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                    <span>CGST, SGST & IGST Tax Invoices</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-dark fw-medium">
                    <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                    <span>Bank Reconciliation (BRS) & Financial Reports</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top d-flex justify-content-between align-items-center" style={{ borderColor: '#DDD4C4' }}>
                <span className="small text-secondary">Commercial compliance training</span>
                <Link to="/courses/tally-with-gst" className="small fw-semibold text-success text-decoration-none d-inline-flex align-items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Dedicated Machine Lab */}
          <div className="col-12 col-md-6 col-lg-4 gsap-reveal">
            <div 
              className="bento-card-main p-4 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <div>
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3"
                  style={{ backgroundColor: '#E2ECFA', color: '#1D4ED8' }}
                >
                  <Laptop size={24} />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">Dedicated Lab Terminals</h3>
                <p className="small text-secondary mb-3" style={{ lineHeight: 1.65 }}>
                  Every learner is allocated an individual computer terminal during laboratory hours to execute, test, and troubleshoot assignments hands-on.
                </p>
              </div>
              <span 
                className="badge small py-1.5 px-2.5 align-self-start"
                style={{ backgroundColor: '#F3EFE6', color: '#0B2238', border: '1px solid #DDD4C4' }}
              >
                1:1 Terminal Allocation
              </span>
            </div>
          </div>

          {/* Card 4: Structured Progression */}
          <div className="col-12 col-md-6 col-lg-4 gsap-reveal">
            <div 
              className="bento-card-main p-4 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <div>
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3"
                  style={{ backgroundColor: '#FAF0DC', color: '#B45309' }}
                >
                  <BarChart3 size={24} />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">Progressive Course Levels</h3>
                <p className="small text-secondary mb-3" style={{ lineHeight: 1.65 }}>
                  Begin with foundational computer basics, progress to intermediate reporting, or enroll directly into specialized tax and ERP programs.
                </p>
              </div>
              <span 
                className="badge small py-1.5 px-2.5 align-self-start"
                style={{ backgroundColor: '#F3EFE6', color: '#0B2238', border: '1px solid #DDD4C4' }}
              >
                Adaptive Learning Paths
              </span>
            </div>
          </div>

          {/* Card 5: Enterprise SAP FICO Familiarisation */}
          <div className="col-12 col-md-6 col-lg-4 gsap-reveal">
            <div 
              className="bento-card-main p-4 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <div>
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3"
                  style={{ backgroundColor: '#E0F2F7', color: '#0E7490' }}
                >
                  <Briefcase size={24} />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">Enterprise SAP FICO</h3>
                <p className="small text-secondary mb-3" style={{ lineHeight: 1.65 }}>
                  Hands-on familiarity with SAP GUI screens, transaction codes (T-Codes), and standard accounts payable/receivable corporate workflows.
                </p>
              </div>
              <span 
                className="badge small py-1.5 px-2.5 align-self-start"
                style={{ backgroundColor: '#F3EFE6', color: '#0B2238', border: '1px solid #DDD4C4' }}
              >
                Corporate ERP Workflows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
