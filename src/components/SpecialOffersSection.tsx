import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Award, 
  BookOpen, 
  Maximize2, 
  X,
  Flame
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface AdmissionOffer {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  regularPrice: string;
  offerPrice: string;
  discountText: string;
  posterImage: string;
  highlights: string[];
  audience: string;
  whatsappMessage: string;
  timingNotice: string;
}

export const SpecialOffersSection: React.FC = () => {
  const [activePosterModal, setActivePosterModal] = useState<string | null>(null);

  const offers: AdmissionOffer[] = [
    {
      id: "accounting-package",
      badge: "SPECIAL ADMISSION PACKAGE",
      title: "Complete Accounting Course Package",
      subtitle: "Master complete practical accounting, taxation, and computerized financial workflow.",
      duration: "3 Months",
      regularPrice: "₹45,000",
      offerPrice: "₹34,888/-",
      discountText: "SAVE ₹10,112",
      posterImage: "/images/official/offer-accounting-package.jpg",
      highlights: [
        "MS Office Suite Essentials",
        "Advanced Excel Formulas & Dashboards",
        "Basic & Financial Accounting Concepts",
        "Tally Prime with GST & TDS Entries",
        "Live Practical GST Portal Filing"
      ],
      audience: "Any Degree Students • Graduates • Homemakers • Working People",
      whatsappMessage: "Hello Thulir Institute, I am interested in the Complete Accounting 3-Month Package (Offer Price: Rs 34,888). Please share upcoming batch dates.",
      timingNotice: "6:00 AM - 8:00 PM | Offline & Online"
    },
    {
      id: "sap-fico-45days",
      badge: "FESTIVAL OFFER • LIMITED SEATS",
      title: "SAP FICO End-User 45 Days Program",
      subtitle: "Learn SAP FICO from basics to real-time enterprise business processes.",
      duration: "45 Days",
      regularPrice: "₹39,999",
      offerPrice: "₹34,999/-",
      discountText: "FLAT ₹5,000 DISCOUNT",
      posterImage: "/images/official/sap-fico-45days.jpg",
      highlights: [
        "FI: General Ledger, AP, AR & Asset Accounting",
        "Bank Accounting & Document Entry/Posting",
        "CO: Cost Center & Internal Orders",
        "Profit Center Accounting & MIS Reports",
        "100% Practical & Hands-on ERP GUI Training"
      ],
      audience: "Commerce Graduates • Accountants • Finance Job Seekers",
      whatsappMessage: "Hello Thulir Institute, I would like to join the 45-Day SAP FICO End-User Training (Offer: Rs 34,999). Please provide registration details.",
      timingNotice: "Weekend & Weekday Batches Available"
    },
    {
      id: "gst-10-days",
      badge: "EXECUTIVE FAST-TRACK",
      title: "Become GST Practitioner in 10 Days",
      subtitle: "Executive crash course mentored by 24 Years Experienced Tax Consultant & CA Faculty.",
      duration: "10 Days Intensive",
      regularPrice: "Custom",
      offerPrice: "Special Batch",
      discountText: "FREE CA COUNSELLING",
      posterImage: "/images/official/gst-10-days.jpg",
      highlights: [
        "GST Registration & Documentation",
        "GSTR-1 Outward Supply Return Filing",
        "GSTR-2B Input Tax Credit Reconciliation",
        "GSTR-3B Monthly Return & Tax Settlement",
        "E-Way Bill Generation & Compliance Rules"
      ],
      audience: "Commerce Students • Business Owners • Accounts Executives",
      whatsappMessage: "Hello Thulir Institute, I want to enrol in the 10-Day GST Practitioner Executive program with Expert CA Faculty at Arapalayam/Gnanaolivupuram, Madurai.",
      timingNotice: "Arapalayam & Gnanaolivupuram, Madurai"
    }
  ];

  return (
    <section className="section-padding position-relative overflow-hidden" style={{ backgroundColor: '#EAE3D5' }}>
      {/* Background Decorative Accent */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(11, 34, 56, 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: '#FAF0DC', border: '1px solid #EAD49E', color: '#92400E' }}>
            <Flame size={15} className="text-danger" />
            <span className="small fw-bold letter-spacing-1">OFFICIAL ADMISSIONS & PACKAGES</span>
          </div>
          <h2 className="display-6 fw-bold text-dark mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Special Admission Offers & Fast-Track Batches
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '720px', fontSize: '1rem', lineHeight: 1.6 }}>
            Enroll in our verified high-demand training packages at Thulir Institute. Get individual lab PCs, expert mentor guidance, and verified certification upon completion.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="row g-4 justify-content-center">
          {offers.map((offer) => (
            <div key={offer.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="h-100 rounded-4 overflow-hidden d-flex flex-column transition-normal"
                style={{
                  backgroundColor: '#FAF6EE',
                  border: '1.5px solid #DDD4C4',
                  boxShadow: '0 8px 24px rgba(11, 34, 56, 0.08)'
                }}
              >
                {/* Poster Preview Header with Zoom Modal Trigger */}
                <div className="position-relative overflow-hidden" style={{ height: '220px', backgroundColor: '#0B2238' }}>
                  <img 
                    src={offer.posterImage} 
                    alt={offer.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.96)' }}
                  />
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100" 
                    style={{ background: 'linear-gradient(180deg, rgba(11,34,56,0.2) 0%, rgba(11,34,56,0.7) 100%)' }}
                  />

                  {/* Top Badge */}
                  <div className="position-absolute top-0 start-0 p-3">
                    <span 
                      className="badge fw-bold px-2.5 py-1.5 rounded-pill shadow-sm"
                      style={{ backgroundColor: '#0B2238', color: '#C59B27', border: '1px solid rgba(197, 155, 39, 0.4)' }}
                    >
                      {offer.badge}
                    </span>
                  </div>

                  {/* Zoom Button */}
                  <button
                    type="button"
                    onClick={() => setActivePosterModal(offer.posterImage)}
                    className="position-absolute top-0 end-0 m-3 btn btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center shadow"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#0B2238' }}
                    title="View Official Poster"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Duration Overlay Pill */}
                  <div className="position-absolute bottom-0 start-0 p-3 d-flex align-items-center gap-2">
                    <span className="badge bg-primary text-white d-inline-flex align-items-center gap-1 px-2.5 py-1 rounded-pill small">
                      <Clock size={12} />
                      <span>{offer.duration}</span>
                    </span>
                    <span className="badge bg-warning text-dark fw-bold px-2.5 py-1 rounded-pill small">
                      {offer.discountText}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h5 fw-bold text-dark mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {offer.title}
                  </h3>
                  <p className="small text-secondary mb-3" style={{ lineHeight: 1.5 }}>
                    {offer.subtitle}
                  </p>

                  {/* Pricing Box */}
                  <div 
                    className="p-3 rounded-3 mb-3 d-flex align-items-center justify-content-between"
                    style={{ backgroundColor: '#F3EFE6', border: '1px solid #DDD4C4' }}
                  >
                    <div>
                      {offer.regularPrice !== "Custom" && (
                        <div className="text-secondary text-decoration-line-through small" style={{ fontSize: '0.8rem' }}>
                          Standard: {offer.regularPrice}
                        </div>
                      )}
                      <div className="fw-bold" style={{ color: '#0B2238', fontSize: '1.25rem' }}>
                        {offer.offerPrice}
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge rounded-pill bg-success text-white small px-2 py-1">
                        Verified Rate
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-3">
                    <span className="d-block small fw-bold text-dark mb-2">What You'll Learn:</span>
                    <div className="d-flex flex-column gap-1.5">
                      {offer.highlights.map((h, i) => (
                        <div key={i} className="d-flex align-items-start gap-2">
                          <CheckCircle2 size={14} className="text-success flex-shrink-0 mt-1" />
                          <span className="small text-dark" style={{ fontSize: '0.825rem', lineHeight: 1.4 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience Pill */}
                  <div className="p-2 rounded-2 mb-4" style={{ backgroundColor: '#ECE5D8', fontSize: '0.75rem', color: '#475569' }}>
                    <span className="fw-semibold d-block text-dark mb-0.5">Eligibility:</span>
                    {offer.audience}
                  </div>

                  {/* CTA Actions */}
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(offer.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2.5 rounded-3 shadow-xs"
                      style={{
                        backgroundColor: '#059669',
                        color: '#FFFFFF'
                      }}
                    >
                      <MessageSquare size={16} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Chart Callout Banner */}
        <div 
          className="mt-5 p-4 p-md-5 rounded-4 position-relative overflow-hidden"
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
                <span>OFFICIAL COURSE CURRICULUM</span>
              </div>
              <h3 className="h4 fw-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                View Master Courses Chart & Schedule
              </h3>
              <p className="text-light opacity-85 mb-3" style={{ fontSize: '0.925rem' }}>
                All 8 standard programs from MS Office Basic to SAP FICO are available across <strong>Offline & Online modes (Monday to Sunday, 6:00 AM – 8:00 PM)</strong> with special weekend batches.
              </p>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button
                  type="button"
                  onClick={() => setActivePosterModal('/images/official/courses-master-chart.jpg')}
                  className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-3 d-inline-flex align-items-center gap-2 shadow-sm"
                >
                  <BookOpen size={16} />
                  <span>Inspect Official Chart Poster</span>
                </button>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="btn btn-outline-light px-3.5 py-2 rounded-3 text-white d-inline-flex align-items-center gap-2"
                >
                  <span>Call {siteConfig.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-4 text-center">
              <div 
                className="rounded-3 overflow-hidden border border-white border-opacity-20 shadow cursor-pointer mx-auto"
                style={{ maxWidth: '240px', cursor: 'pointer' }}
                onClick={() => setActivePosterModal('/images/official/courses-master-chart.jpg')}
                title="Click to view full chart"
              >
                <img 
                  src="/images/official/courses-master-chart.jpg" 
                  alt="Thulir Institute Courses Master Chart" 
                  className="w-100"
                  style={{ display: 'block' }}
                />
                <div className="p-1.5 bg-dark text-white small" style={{ fontSize: '0.75rem' }}>
                  Click to Expand Chart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Official Poster */}
      {activePosterModal && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            zIndex: 1060,
            backgroundColor: 'rgba(11, 34, 56, 0.88)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setActivePosterModal(null)}
        >
          <div 
            className="position-relative bg-white rounded-4 overflow-hidden shadow-2xl p-2"
            style={{ maxWidth: '720px', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePosterModal(null)}
              className="position-absolute top-0 end-0 m-3 btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center shadow-lg"
              style={{ zIndex: 10, width: '40px', height: '40px' }}
              aria-label="Close poster preview"
            >
              <X size={20} />
            </button>
            <div className="overflow-auto" style={{ maxHeight: '85vh' }}>
              <img 
                src={activePosterModal} 
                alt="Official Thulir Institute Announcement" 
                className="img-fluid rounded-3"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
