import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Monitor, 
  CheckCircle2, 
  MessageSquare, 
  ArrowLeft, 
  UserCheck, 
  BookOpen
} from 'lucide-react';
import { coursesData } from '../data/courses';
import { siteConfig } from '../data/siteConfig';
import { EnquiryForm } from '../components/EnquiryForm';
import { CourseCard } from '../components/CourseCard';

export const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const course = coursesData.find((c) => c.slug === slug);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} | Thulir Institute Madurai`;
    }
  }, [course]);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Pre-filled WhatsApp link
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.courseEnquiry(course.title)
  )}`;

  // Related courses (excluding current)
  const relatedCourses = coursesData
    .filter((c) => c.id !== course.id && (c.category === course.category || c.featured))
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: '#F3EFE6', minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Course Banner */}
      <section className="py-4 py-lg-5 position-relative" style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small mb-3">
              <li className="breadcrumb-item"><Link to="/" className="text-primary text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/courses" className="text-primary text-decoration-none">Courses</Link></li>
              <li className="breadcrumb-item active text-secondary" aria-current="page">{course.title}</li>
            </ol>
          </nav>

          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-category badge-computer shadow-xs">
                  {course.categoryLabel}
                </span>
                {course.badge && (
                  <span className="badge bg-warning text-dark fw-semibold px-3 py-1.5 rounded-pill small">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="display-6 fw-bold text-dark mb-3">
                {course.title}
              </h1>

              <p className="lead mb-4 fs-6 text-secondary" style={{ lineHeight: 1.7 }}>
                {course.overview}
              </p>

              <div className="d-flex flex-wrap align-items-center gap-4 text-secondary small pb-2">
                <div className="d-flex align-items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span>Duration: <strong className="text-dark">{course.duration}</strong></span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Monitor size={16} className="text-success" />
                  <span>Mode: <strong className="text-dark">{course.mode}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="col-12 col-lg-4">
              <div 
                className="card p-4 rounded-4 shadow-sm"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <h3 className="h6 fw-bold text-dark mb-3">Enquire About This Program</h3>
                <p className="small mb-4 text-secondary">
                  Batches are organized with individual lab computers. Contact the centre to confirm current availability.
                </p>
                <div className="d-flex flex-column gap-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-hero text-decoration-none text-center"
                  >
                    <MessageSquare size={16} />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <a
                    href="#enquire-form"
                    className="btn-thulir-secondary text-decoration-none text-center"
                  >
                    <span>Send Online Enquiry</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="btn btn-sm btn-link text-primary text-decoration-none text-center"
                  >
                    Call: {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left 8 cols: Detailed Syllabus & Topics */}
            <div className="col-12 col-lg-8">
              {/* Image banner */}
              <div 
                className="rounded-4 overflow-hidden shadow-sm mb-5"
                style={{ border: '3px solid #FAF6EE' }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-100"
                  style={{ maxHeight: '360px', objectFit: 'cover' }}
                />
              </div>

              {/* Detailed Syllabus Accordion / Cards */}
              <div className="mb-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h2 className="h4 fw-bold text-dark mb-0">Detailed Course Topics & Syllabus</h2>
                  <span 
                    className="badge border"
                    style={{ backgroundColor: '#FAF6EE', color: '#0B2238', borderColor: '#DDD4C4' }}
                  >
                    {course.topics.length} Key Modules
                  </span>
                </div>

                <div className="d-flex flex-column gap-3">
                  {course.topics.map((topic, index) => (
                    <div 
                      key={index} 
                      className="card p-4 rounded-3 shadow-sm"
                      style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                    >
                      <div className="d-flex align-items-center gap-2.5 mb-2">
                        <span 
                          className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold"
                          style={{ width: '26px', height: '26px', fontSize: '0.75rem', backgroundColor: '#0B2238', color: '#FFFFFF' }}
                        >
                          {index + 1}
                        </span>
                        <h3 className="h6 fw-bold text-dark mb-0">{topic.title}</h3>
                      </div>
                      <ul className="mb-0 ps-4 small text-secondary" style={{ lineHeight: 1.8 }}>
                        {topic.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div 
                className="card p-4 rounded-4 shadow-sm mb-5"
                style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
              >
                <h3 className="h5 fw-bold text-dark mb-3">What You Will Achieve</h3>
                <div className="row g-3">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="col-12 col-md-6">
                      <div className="d-flex align-items-start gap-2.5">
                        <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="small text-secondary">{outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is This For & Prerequisites */}
              <div className="row g-4 mb-5">
                <div className="col-12 col-md-6">
                  <div 
                    className="card h-100 p-4 rounded-4 shadow-sm"
                    style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                  >
                    <h3 className="h6 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                      <UserCheck size={18} className="text-primary" />
                      <span>Target Audience</span>
                    </h3>
                    <ul className="mb-0 ps-3 small text-secondary" style={{ lineHeight: 1.7 }}>
                      {course.targetAudience.map((target, idx) => (
                        <li key={idx}>{target}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div 
                    className="card h-100 p-4 rounded-4 shadow-sm"
                    style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                  >
                    <h3 className="h6 fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                      <BookOpen size={18} className="text-success" />
                      <span>Prerequisites</span>
                    </h3>
                    <p className="small mb-0 text-secondary" style={{ lineHeight: 1.7 }}>
                      {course.prerequisites}
                    </p>
                  </div>
                </div>
              </div>

              {/* Admission Enquiry Form Anchor */}
              <div id="enquire-form" className="pt-3">
                <EnquiryForm initialCourse={course.title} />
              </div>
            </div>

            {/* Right 4 cols: Sticky Sidebar */}
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-4" style={{ position: 'sticky', top: '100px' }}>
                {/* Centre Highlights Card */}
                <div 
                  className="card p-4 rounded-4 shadow-sm"
                  style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
                >
                  <h4 className="h6 fw-bold text-dark mb-3">Thulir Training Advantage</h4>
                  <div className="d-flex flex-column gap-3 small text-secondary">
                    <div className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                      <span>100% Practical laboratory sessions</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                      <span>Individual workstation allocation</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                      <span>Structured syllabus paced for comprehension</span>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                      <span>Centrally located in Gnanaolivupuram, Madurai</span>
                    </div>
                  </div>
                </div>

                {/* Back to courses */}
                <Link
                  to="/courses"
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2.5 rounded-3 fw-medium"
                  style={{ backgroundColor: '#FAF6EE', borderColor: '#DDD4C4', color: '#0B2238' }}
                >
                  <ArrowLeft size={16} />
                  <span>Browse All Courses</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Courses Section */}
          {relatedCourses.length > 0 && (
            <div className="mt-5 pt-5 border-top" style={{ borderColor: '#DDD4C4' }}>
              <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                  <span className="badge-eyebrow">EXPLORE MORE</span>
                  <h3 className="h4 fw-bold text-dark mb-0">Related Programs</h3>
                </div>
                <Link to="/courses" className="small fw-semibold text-primary text-decoration-none">
                  View All &rarr;
                </Link>
              </div>
              <div className="row g-4">
                {relatedCourses.map((rel) => (
                  <div key={rel.id} className="col-12 col-md-4">
                    <CourseCard course={rel} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
