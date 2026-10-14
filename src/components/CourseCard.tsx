import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Clock, Monitor, Star, Sparkles } from 'lucide-react';
import type { Course } from '../data/courses';
import { siteConfig } from '../data/siteConfig';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Category styling for warm linen theme
  const getCategoryStyles = (category: Course['category']) => {
    switch (category) {
      case 'computer':
        return {
          badgeClass: 'badge-computer',
          topBorder: '#1D4ED8',
          accentColor: '#1D4ED8',
          lightBg: '#E8F0FC',
          accentText: '#1D4ED8'
        };
      case 'accounting':
        return {
          badgeClass: 'badge-accounting',
          topBorder: '#065F46',
          accentColor: '#065F46',
          lightBg: '#EBF7F0',
          accentText: '#065F46'
        };
      case 'taxation':
        return {
          badgeClass: 'badge-taxation',
          topBorder: '#B45309',
          accentColor: '#B45309',
          lightBg: '#FBF4E6',
          accentText: '#92400E'
        };
      case 'erp':
        return {
          badgeClass: 'badge-erp',
          topBorder: '#0E7490',
          accentColor: '#0E7490',
          lightBg: '#E5F5F9',
          accentText: '#0E7490'
        };
      default:
        return {
          badgeClass: 'badge-computer',
          topBorder: '#1D4ED8',
          accentColor: '#1D4ED8',
          lightBg: '#E8F0FC',
          accentText: '#1D4ED8'
        };
    }
  };

  const catStyle = getCategoryStyles(course.category);

  // WhatsApp pre-filled message
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.courseEnquiry(course.title)
  )}`;

  return (
    <div 
      className="course-card position-relative card-hover-lift h-100"
      style={{
        borderTop: `4px solid ${catStyle.topBorder}`,
        backgroundColor: '#FAF6EE',
        borderColor: '#DDD4C4',
        boxShadow: '0 4px 16px -2px rgba(11, 34, 56, 0.08)'
      }}
    >
      {/* Course Image & Badges */}
      <div className="course-card-image img-zoom-container position-relative">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
        />
        
        {/* Category Pill */}
        <div className="position-absolute top-0 start-0 m-3 d-flex gap-2" style={{ zIndex: 2 }}>
          <span className={`badge-category ${catStyle.badgeClass} shadow-xs`}>
            {course.categoryLabel}
          </span>
        </div>

        {/* Highlight Badge */}
        {course.badge && (
          <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 2 }}>
            <span 
              className="badge shadow-xs text-white small px-2.5 py-1 rounded-pill fw-semibold"
              style={{ backgroundColor: 'rgba(11, 34, 56, 0.88)', backdropFilter: 'blur(4px)' }}
            >
              {course.badge}
            </span>
          </div>
        )}

        {/* Rating Overlay Pill at bottom of image */}
        <div className="position-absolute bottom-0 start-0 m-2.5" style={{ zIndex: 2 }}>
          <span 
            className="d-inline-flex align-items-center gap-1 px-2.5 py-1 rounded-pill text-dark fw-bold"
            style={{ 
              backgroundColor: 'rgba(250, 246, 238, 0.95)',
              border: '1px solid #DDD4C4',
              fontSize: '0.72rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
            }}
          >
            <Star size={12} fill="#F59E0B" color="#F59E0B" />
            <span>4.9</span>
            <span className="text-secondary fw-normal">• Practical Lab</span>
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-card-body">
        {/* Meta info strip */}
        <div className="d-flex align-items-center justify-content-between text-muted small mb-2.5 pb-1 border-bottom" style={{ borderColor: '#DDD4C4' }}>
          <span className="d-inline-flex align-items-center gap-1.5 fw-medium text-secondary">
            <Clock size={13} style={{ color: catStyle.accentColor }} />
            <span>{course.duration}</span>
          </span>
          <span className="d-inline-flex align-items-center gap-1 text-success fw-semibold" style={{ fontSize: '0.75rem' }}>
            <Monitor size={12} />
            <span>1:1 Dedicated PC</span>
          </span>
        </div>

        <h3 className="course-card-title text-dark">{course.title}</h3>
        <p className="course-card-desc">{course.shortDescription}</p>

        {/* Highlights / Sample Topics */}
        <div 
          className="mb-3.5 p-2.5 rounded-3 border"
          style={{ 
            backgroundColor: catStyle.lightBg,
            borderColor: '#DDD4C4'
          }}
        >
          <div 
            className="text-uppercase fw-bold mb-1.5 d-flex align-items-center gap-1"
            style={{ fontSize: '0.7rem', letterSpacing: '0.06em', color: catStyle.accentText }}
          >
            <Sparkles size={11} />
            <span>Core Practical Curriculum:</span>
          </div>
          <ul className="course-topics-list mb-0">
            {course.topics.slice(0, 3).map((topic, idx) => (
              <li key={idx} className="small py-0.5 text-dark fw-medium">
                <CheckCircle2 size={13} className="text-success flex-shrink-0" />
                <span className="text-truncate">{topic.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between gap-2" style={{ borderColor: '#DDD4C4' }}>
          <Link
            to={`/courses/${course.slug}`}
            className="btn btn-sm btn-outline-primary fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2 rounded-2 flex-grow-1 justify-content-center"
          >
            <span>Syllabus</span>
            <ArrowRight size={14} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-success fw-semibold d-inline-flex align-items-center gap-1.5 px-3 py-2 rounded-2"
            title={`Enquire on WhatsApp about ${course.title}`}
          >
            <MessageSquare size={14} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
