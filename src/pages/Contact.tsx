import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Navigation
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { EnquiryForm } from '../components/EnquiryForm';
import { InstagramIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact & Admissions | Thulir Institute Madurai";
  }, []);

  return (
    <div style={{ backgroundColor: '#F3EFE6', minHeight: '100vh' }}>
      {/* Banner */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow">GET IN TOUCH</span>
            <h1 className="display-5 fw-bold text-dark mb-2">
              Contact & Admission Enquiries
            </h1>
            <p className="lead text-secondary mb-0">
              Have questions about course fees, syllabus, or upcoming batches in Madurai? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Left Column: Verified Location & Contact Cards */}
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-column gap-4">
                {/* Address Card */}
                <div 
                  className="card p-4 rounded-4 shadow-sm"
                  style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div 
                      className="p-3 rounded-3 flex-shrink-0"
                      style={{ backgroundColor: '#E2ECFA', color: '#1D4ED8' }}
                    >
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="small fw-bold text-uppercase d-block mb-1 text-primary">
                        Institute Address
                      </span>
                      <h3 className="h6 fw-bold text-dark mb-1">Thulir Institute</h3>
                      <p className="small mb-0 text-secondary" style={{ lineHeight: 1.6 }}>
                        {siteConfig.location.fullAddress}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-top" style={{ borderColor: '#DDD4C4' }}>
                    <a
                      href={siteConfig.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1.5 rounded-pill px-3 py-1.5"
                    >
                      <Navigation size={13} />
                      <span>Get Directions in Google Maps</span>
                      <ExternalLink size={12} className="opacity-75" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div 
                  className="card p-4 rounded-4 shadow-sm"
                  style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div 
                      className="p-3 rounded-3 flex-shrink-0"
                      style={{ backgroundColor: '#E6F4ED', color: '#047857' }}
                    >
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <span className="small fw-bold text-uppercase d-block mb-1 text-success">
                        Direct Phones & Official WhatsApp
                      </span>
                      <h3 className="h6 fw-bold text-dark mb-1">Admission Desk</h3>
                      <p className="small mb-2 text-secondary">
                        Available Monday to Sunday (6:00 AM – 8:00 PM) for course counseling, fees, and batch allocation.
                      </p>
                      <div className="d-flex flex-column gap-1.5 mb-2">
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="fw-bold text-dark text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                          <Phone size={15} className="text-primary" />
                          <span>{siteConfig.contact.phoneFormatted} (Primary)</span>
                        </a>
                        <a
                          href={`tel:${siteConfig.contact.secondaryPhone}`}
                          className="fw-bold text-dark text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                          <Phone size={15} className="text-primary" />
                          <span>{siteConfig.contact.secondaryPhone} (Office)</span>
                        </a>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="small text-secondary text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                          <span>✉</span>
                          <span>{siteConfig.contact.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-top d-flex flex-column gap-2" style={{ borderColor: '#DDD4C4' }}>
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-success d-inline-flex align-items-center justify-content-center gap-1.5 rounded-pill px-3 py-2 fw-semibold shadow-xs"
                    >
                      <MessageSquare size={14} />
                      <span>Chat on WhatsApp (+91 99942 46918)</span>
                    </a>
                  </div>
                </div>

                {/* Social Connect Card */}
                <div 
                  className="card p-4 rounded-4 shadow-sm"
                  style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="p-3 rounded-3 flex-shrink-0"
                      style={{ backgroundColor: '#FAF0DC', color: '#B45309' }}
                    >
                      <InstagramIcon size={24} />
                    </div>
                    <div>
                      <span className="small fw-bold text-uppercase d-block mb-1 text-warning-emphasis">
                        Instagram Profile
                      </span>
                      <h3 className="h6 fw-bold text-dark mb-1">@thulir_education</h3>
                      <p className="small mb-3 text-secondary">
                        Follow our official Instagram profile for updates, course announcements, and student activities.
                      </p>
                      <a
                        href={siteConfig.contact.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-dark rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5"
                      >
                        <InstagramIcon size={14} />
                        <span>Visit Instagram Profile</span>
                        <ExternalLink size={12} className="opacity-75" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Embedded Map */}
                <div 
                  className="card rounded-4 overflow-hidden shadow-sm"
                  style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                >
                  <div 
                    className="p-3 border-bottom d-flex align-items-center justify-content-between"
                    style={{ backgroundColor: '#EAE3D5', borderColor: '#DDD4C4' }}
                  >
                    <span className="small fw-semibold text-dark">Location in Gnanaolivupuram</span>
                    <span className="badge bg-primary text-white small">Madurai - 625016</span>
                  </div>
                  <div style={{ height: '220px', width: '100%' }}>
                    <iframe
                      title="Thulir Institute Location"
                      src={siteConfig.location.embedMapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Admission Enquiry Form */}
            <div className="col-12 col-lg-7">
              <EnquiryForm sourceContext="Contact Page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
