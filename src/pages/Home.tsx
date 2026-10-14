import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  MapPin, 
  Star 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { SpecialOffersSection } from '../components/SpecialOffersSection';
import { CourseCard } from '../components/CourseCard';
import { CourseFilters } from '../components/CourseFilters';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { LearningJourney } from '../components/LearningJourney';
import { SapFicoSection } from '../components/SapFicoSection';
import { GalleryPreview } from '../components/GalleryPreview';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQSection } from '../components/FAQSection';
import { coursesData, type CourseCategory } from '../data/courses';
import { siteConfig } from '../data/siteConfig';

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'all'>('all');

  useEffect(() => {
    document.title = "Thulir Institute of Computer Education & Skill Development Centre | Madurai";
  }, []);

  // Filter courses based on active pill
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'all') {
      return coursesData;
    }
    return coursesData.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  // Compute counts per category
  const counts = useMemo(() => {
    const res: Record<string, number> = { all: coursesData.length };
    coursesData.forEach((c) => {
      res[c.category] = (res[c.category] || 0) + 1;
    });
    return res;
  }, []);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip Highlights & Lab Facility Advantage */}
      <TrustStrip />

      {/* 2.5 Animated Software Marquee Strip */}
      <MarqueeTicker />

      {/* 2.8 Official Special Admissions & Package Offers */}
      <SpecialOffersSection />

      {/* 3. About Institute Intro Section */}
      <section className="section-padding bg-pattern-dots position-relative" style={{ backgroundColor: '#FAF6EE' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image Column */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="position-relative">
                <div 
                  className="rounded-4 overflow-hidden shadow-lg position-relative"
                  style={{
                    border: '4px solid #FAF6EE',
                    boxShadow: '0 20px 40px -10px rgba(11, 34, 56, 0.15)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                    alt="Classroom and lab environment at Thulir Institute"
                    className="w-100"
                    style={{ height: '420px', objectFit: 'cover' }}
                  />
                  {/* Subtle gradient vignette */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11, 34, 56, 0) 50%, rgba(11, 34, 56, 0.75) 100%)'
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 text-white">
                    <span className="badge bg-warning text-dark fw-bold px-2.5 py-1 mb-1 rounded-pill small">
                      Hands-On Lab Practice
                    </span>
                    <div className="fw-semibold text-white small">Gnanaolivupuram Training Facility</div>
                  </div>
                </div>

                {/* Overlay Quote Badge */}
                <div
                  className="position-absolute top-0 end-0 p-3 rounded-4 shadow-xl border m-3 d-none d-sm-block"
                  style={{ 
                    maxWidth: '240px', 
                    backgroundColor: '#FAF6EE',
                    borderColor: '#DDD4C4' 
                  }}
                >
                  <div className="d-flex align-items-center gap-1.5 text-warning fw-bold small mb-1">
                    <Star size={14} fill="#F59E0B" />
                    <Star size={14} fill="#F59E0B" />
                    <Star size={14} fill="#F59E0B" />
                    <Star size={14} fill="#F59E0B" />
                    <Star size={14} fill="#F59E0B" />
                  </div>
                  <div className="fw-bold text-dark small">100% Practical Focus</div>
                  <p className="mb-0 text-secondary" style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                    Every student works on a dedicated PC with step-by-step faculty guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <span className="badge-eyebrow">
                <Sparkles size={13} style={{ color: '#B45309' }} />
                <span>ABOUT THULIR INSTITUTE</span>
              </span>
              <h2 className="section-title text-dark">Learn Practical Skills That Accelerate Your Career</h2>
              <p className="lead fw-medium mb-3 text-dark" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                Thulir Institute of Computer Education & Skill Development Centre focuses on practical computer applications, computerized accounting, and enterprise financial software in Madurai.
              </p>
              <p className="mb-4 text-secondary" style={{ lineHeight: 1.7, fontSize: '0.925rem' }}>
                Whether you are stepping into a computer lab for the first time or advancing into GST compliance and Tally Prime, our curriculum is paced to build genuine operational confidence with commercial accuracy.
              </p>

              {/* 4 Feature Highlights with warm linen card backgrounds */}
              <div className="row g-2.5 mb-4">
                <div className="col-sm-6">
                  <div 
                    className="p-2.5 rounded-3 border d-flex align-items-center gap-2"
                    style={{ backgroundColor: '#F3EFE6', borderColor: '#DDD4C4' }}
                  >
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small fw-semibold text-dark">Individual Workstations (1:1)</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div 
                    className="p-2.5 rounded-3 border d-flex align-items-center gap-2"
                    style={{ backgroundColor: '#F3EFE6', borderColor: '#DDD4C4' }}
                  >
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small fw-semibold text-dark">Tally Prime & GST Filing</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div 
                    className="p-2.5 rounded-3 border d-flex align-items-center gap-2"
                    style={{ backgroundColor: '#F3EFE6', borderColor: '#DDD4C4' }}
                  >
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small fw-semibold text-dark">Advanced Excel Modeling</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div 
                    className="p-2.5 rounded-3 border d-flex align-items-center gap-2"
                    style={{ backgroundColor: '#F3EFE6', borderColor: '#DDD4C4' }}
                  >
                    <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                    <span className="small fw-semibold text-dark">SAP FICO ERP Familiarity</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link to="/courses" className="btn-thulir-primary text-decoration-none">
                  <span>Explore All Courses</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn-thulir-secondary text-decoration-none">
                  <span>Institute Overview</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Course Catalogue Section with Working Filters */}
      <section className="section-padding position-relative" style={{ backgroundColor: '#F3EFE6' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-eyebrow">COURSE CATALOGUE</span>
            <h2 className="section-title text-dark">Explore Our Practical Training Programs</h2>
            <p className="section-subtitle">
              Discover industry-focused courses designed to develop practical capability in office software, accounting, and business taxation.
            </p>
          </div>

          {/* Interactive Filters */}
          <CourseFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={counts}
          />

          {/* Course Cards Grid */}
          <div className="row g-4">
            {filteredCourses.map((course) => (
              <div key={course.id} className="col-12 col-md-6 col-lg-4">
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          {/* View All Courses Link */}
          <div className="text-center mt-5 pt-2">
            <Link to="/courses" className="btn-thulir-outline text-decoration-none px-4 py-2.5">
              <span>View Full Course Syllabus & Topics ({coursesData.length} Courses)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 High-Attraction Mid-Page Conversion Banner */}
      <section className="py-5" style={{ backgroundColor: '#EAE3D5' }}>
        <div className="container">
          <div className="cta-banner-attractive p-4 p-md-5 text-white">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-8">
                <div 
                  className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold mb-3 border"
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#FCD34D',
                    borderColor: 'rgba(245, 158, 11, 0.35)'
                  }}
                >
                  <Sparkles size={14} />
                  <span>FREE 1-DAY PRACTICAL LAB TRIAL IN MADURAI</span>
                </div>
                
                <h3 className="h2 fw-bold text-white mb-3">
                  Experience Our Dedicated Computer & Accounting Lab Before Enrolling
                </h3>
                
                <p className="text-light mb-4" style={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '620px' }}>
                  Visit our air-conditioned training centre at Gnanaolivupuram, Madurai. Sit at an individual workstation, test sample practical exercises in Excel or Tally, and talk directly with our faculty.
                </p>

                <div className="row g-2 mb-4">
                  <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-2 small text-light">
                      <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                      <span>Zero Registration Fee for Lab Visit</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-2 small text-light">
                      <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                      <span>Hands-On Trial on Live Practice Files</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-2 small text-light">
                      <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                      <span>Flexible Morning & Evening Batch Slots</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="d-flex align-items-center gap-2 small text-light">
                      <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                      <span>Course Completion Certificate Included</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                      "Hello Thulir Institute, I would like to book a Free Lab Demo Session in Madurai."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning text-dark fw-bold px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2 shadow-sm"
                  >
                    <MessageSquare size={16} />
                    <span>Book Free Lab Demo on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="btn btn-outline-light fw-semibold px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2"
                  >
                    <PhoneCall size={16} />
                    <span>Call: {siteConfig.contact.phoneFormatted}</span>
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-4 text-center">
                <div 
                  className="p-4 rounded-4 text-white text-center d-inline-block w-100"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <div 
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '64px', height: '64px', backgroundColor: 'rgba(245, 158, 11, 0.25)', color: '#FCD34D' }}
                  >
                    <MapPin size={32} />
                  </div>
                  <h4 className="h5 fw-bold text-white mb-1">Madurai Centre</h4>
                  <p className="small text-light mb-3" style={{ opacity: 0.85, fontSize: '0.8rem', lineHeight: 1.5 }}>
                    St. John Paul Valagam, Vaikkal Karai St, Gnanaolivupuram, Madurai - 625016
                  </p>
                  <div 
                    className="badge px-3 py-1.5 fw-bold rounded-pill"
                    style={{ backgroundColor: '#F59E0B', color: '#0B2238' }}
                  >
                    Mon - Sat • 9:00 AM - 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Thulir */}
      <WhyChooseUs />

      {/* 6. Learning Journey (4 steps) */}
      <LearningJourney />

      {/* 7. Featured SAP FICO Section */}
      <SapFicoSection />

      {/* 8. Gallery Preview */}
      <GalleryPreview />

      {/* 9. Enquiry & Admission Section */}
      <section className="section-padding position-relative" style={{ backgroundColor: '#F3EFE6', borderTop: '1px solid #DDD4C4' }} id="enquiry">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="text-center mb-4">
                <span className="badge-eyebrow">ADMISSIONS & ENQUIRIES</span>
                <h2 className="section-title text-dark mb-2">Take the Next Step in Your Career Journey</h2>
                <p className="max-w-lg mx-auto text-secondary">
                  Interested in a course? Contact Thulir Institute to learn more about course availability, fees, duration, and upcoming batch timings.
                </p>
              </div>

              {/* Enquiry Form */}
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};
