import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Monitor, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Thulir Institute of Computer Education & Skill Development Centre";
  }, []);

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
                  <li className="breadcrumb-item active text-secondary" aria-current="page">About Us</li>
                </ol>
              </nav>
              <span className="badge-eyebrow">INSTITUTE OVERVIEW</span>
              <h1 className="display-5 fw-bold text-dark mb-3">
                Empowering Madurai Through Practical Computer & Accounting Skills
              </h1>
              <p className="lead text-secondary mb-0">
                A dedicated centre for foundational IT knowledge, computerized financial accounting, taxation practice, and enterprise software familiarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Story */}
      <section className="section-padding position-relative" style={{ backgroundColor: '#FAF6EE' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning in computer classroom"
                  className="rounded-4 shadow-lg w-100"
                  style={{ height: '440px', objectFit: 'cover', border: '4px solid #FAF6EE' }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 m-3 p-3 rounded-3 shadow-md border d-flex align-items-center gap-3"
                  style={{ 
                    maxWidth: '320px', 
                    backgroundColor: '#FAF6EE',
                    borderColor: '#DDD4C4'
                  }}
                >
                  <Building size={28} className="text-primary flex-shrink-0" />
                  <div className="small">
                    <span className="fw-bold d-block text-dark">Gnanaolivupuram, Madurai</span>
                    <span className="text-secondary">Dedicated computer classroom and practice environment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <span className="badge-eyebrow">OUR MISSION & LEADERSHIP</span>
              <h2 className="section-title text-dark">Learn Skills That Move You Forward</h2>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: '#FAF0DC', border: '1px solid #EAD49E', color: '#92400E', fontSize: '0.85rem', fontWeight: 700 }}>
                <span>A Project of Pneuma Trust • 24 Years Tax Mentorship</span>
              </div>
              <p className="lead fw-medium mb-3 text-dark" style={{ fontSize: '1.05rem' }}>
                Thulir Institute of Computer Education & Skill Development Centre operates with a clear mandate: empower students, job seekers, and working professionals with commercial-grade computer, accounting, and taxation skills.
              </p>
              <p className="mb-3 text-secondary" style={{ lineHeight: 1.75 }}>
                Under the strategic guidance of an esteemed <strong>24 Years Experience Tax Consultant and expert Chartered Accountant (CA) faculty</strong>, learners don't just study textbook theory—they execute real GST portal filings, GSTR-2B reconciliations, Tally Prime company accounts, and enterprise SAP FICO end-user transactions.
              </p>
              <p className="mb-4 text-secondary" style={{ lineHeight: 1.75 }}>
                Classes are structured flexibly from <strong>6:00 AM to 8:00 PM (Monday – Sunday)</strong> with dedicated weekend batches at our Gnanaolivupuram and Arapalayam centres in Madurai.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/courses" className="btn-thulir-primary text-decoration-none">
                  <span>Explore Courses</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-thulir-secondary text-decoration-none">
                  <span>Contact Centre</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Educational Pillars */}
      <section className="section-padding position-relative" style={{ backgroundColor: '#EAE3D5', borderTop: '1px solid #DDD4C4', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-eyebrow">OUR FOCUS AREAS</span>
            <h2 className="section-title text-dark">Core Disciplines We Teach</h2>
            <p className="section-subtitle">
              Every course is structured with clear, step-by-step topic breakdowns.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div 
                className="card h-100 p-4 rounded-4 shadow-sm card-hover-lift"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3" 
                  style={{ width: 'fit-content', backgroundColor: '#E2ECFA', color: '#1D4ED8' }}
                >
                  <Monitor size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Office Productivity</h3>
                <p className="small text-secondary mb-0" style={{ lineHeight: 1.6 }}>
                  From basic keyboarding to advanced Excel formulas, PivotTables, and professional PowerPoint decks.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div 
                className="card h-100 p-4 rounded-4 shadow-sm card-hover-lift"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3" 
                  style={{ width: 'fit-content', backgroundColor: '#E6F4ED', color: '#047857' }}
                >
                  <BookOpen size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Computerized Accounting</h3>
                <p className="small text-secondary mb-0" style={{ lineHeight: 1.6 }}>
                  Double-entry bookkeeping concepts translated into practical Tally Prime company and ledger management.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div 
                className="card h-100 p-4 rounded-4 shadow-sm card-hover-lift"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3" 
                  style={{ width: 'fit-content', backgroundColor: '#FAF0DC', color: '#B45309' }}
                >
                  <ShieldCheck size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Taxation & GST</h3>
                <p className="small text-secondary mb-0" style={{ lineHeight: 1.6 }}>
                  Invoicing rules, Input Tax Credit (ITC), return concepts, TDS deduction rates, and basic ITR fundamentals.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div 
                className="card h-100 p-4 rounded-4 shadow-sm card-hover-lift"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <div 
                  className="p-3 rounded-3 d-inline-block mb-3" 
                  style={{ width: 'fit-content', backgroundColor: '#E0F2F7', color: '#0E7490' }}
                >
                  <Layers size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Enterprise SAP FICO</h3>
                <p className="small text-secondary mb-0" style={{ lineHeight: 1.6 }}>
                  SAP GUI navigation, transaction codes, and standard end-user accounts payable/receivable workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Lab Environment & Location */}
      <section className="section-padding position-relative" style={{ backgroundColor: '#FAF6EE' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <span className="badge-eyebrow">LEARNING ENVIRONMENT</span>
              <h2 className="section-title text-dark">Dedicated Practice & Transparent Support</h2>
              <p className="mb-3 text-secondary" style={{ lineHeight: 1.75 }}>
                Our learning centre at Gnanaolivupuram features an organized computer laboratory setup. Learners are encouraged to spend time on the machines, executing assignments and practicing software commands without rush.
              </p>
              
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-2.5 small fw-semibold text-secondary">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span>Hands-on practice during every course module</span>
                </div>
                <div className="d-flex align-items-center gap-2.5 small fw-semibold text-secondary">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span>Transparent communication on course topics and syllabi</span>
                </div>
                <div className="d-flex align-items-center gap-2.5 small fw-semibold text-secondary">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                  <span>Direct WhatsApp contact with institute coordinators</span>
                </div>
              </div>

              <div 
                className="card p-3 rounded-3"
                style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}
              >
                <div className="d-flex align-items-center gap-2 text-dark fw-bold small mb-1">
                  <MapPin size={16} className="text-primary" />
                  <span>Centrally Located in Madurai:</span>
                </div>
                <p className="small text-secondary mb-0">
                  {siteConfig.location.fullAddress}
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div 
                className="rounded-4 overflow-hidden shadow-lg"
                style={{ border: '4px solid #F3EFE6' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Interactive learning discussions at Thulir Institute"
                  className="w-100"
                  style={{ height: '380px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
