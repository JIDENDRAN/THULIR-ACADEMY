import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const LearningJourney: React.FC = () => {
  const containerRef = useGsapReveal({ y: 30, duration: 0.7, stagger: 0.15 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: <Compass size={24} />,
      color: "#1D4ED8",
      bgColor: "#E2ECFA",
      title: "Explore Available Courses",
      description: "Review our course catalog across Computer Applications, Tally with GST, Taxation, or SAP FICO."
    },
    {
      number: "02",
      icon: <BookOpen size={24} />,
      color: "#047857",
      bgColor: "#E6F4ED",
      title: "Choose Your Learning Path",
      description: "Match your current experience with a beginner or advanced module paced for your career aspirations."
    },
    {
      number: "03",
      icon: <Laptop size={24} />,
      color: "#B45309",
      bgColor: "#FAF0DC",
      title: "Develop Practical Knowledge",
      description: "Engage in step-by-step practical laboratory practice on dedicated machines at our Madurai centre."
    },
    {
      number: "04",
      icon: <CheckCircle2 size={24} />,
      color: "#6D28D9",
      bgColor: "#F3E8FF",
      title: "Apply Your Capabilities",
      description: "Gain the real hands-on confidence to handle workplace spreadsheets, vouchers, tax filings, and reports."
    }
  ];

  return (
    <section ref={containerRef} className="section-padding position-relative" style={{ backgroundColor: '#F3EFE6' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center gsap-reveal">
          <span className="badge-eyebrow">STEP-BY-STEP PROGRESSION</span>
          <h2 className="section-title text-dark">Your Learning Journey at Thulir</h2>
          <p className="section-subtitle">
            A structured, progressive roadmap engineered to transition you from foundational concepts to confident workplace execution.
          </p>
        </div>

        {/* Steps Grid with Connected Pipeline */}
        <div className="row g-4 position-relative">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index} 
                className="col-12 col-md-6 col-lg-3 gsap-reveal"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="card h-100 p-4 rounded-4 transition-fast position-relative card-hover-lift"
                  style={{
                    backgroundColor: isHovered ? '#FDFBF7' : '#FAF6EE',
                    borderColor: isHovered ? step.color : '#DDD4C4',
                    boxShadow: isHovered ? '0 12px 28px rgba(11, 34, 56, 0.12)' : '0 4px 14px rgba(11, 34, 56, 0.05)',
                    transition: 'all 0.35s ease'
                  }}
                >
                  {/* Step Number Top Badge */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '52px', 
                        height: '52px',
                        backgroundColor: step.bgColor,
                        color: step.color
                      }}
                    >
                      {step.icon}
                    </div>

                    <span 
                      className="fw-bold px-2.5 py-1 rounded-pill small"
                      style={{
                        backgroundColor: isHovered ? step.bgColor : '#EAE3D5',
                        color: isHovered ? step.color : '#607282',
                        fontSize: '0.85rem'
                      }}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="h5 fw-bold text-dark mb-2">{step.title}</h3>
                  <p className="small text-secondary mb-0" style={{ lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="text-center mt-5 pt-3">
          <Link 
            to="/courses" 
            className="btn-thulir-primary text-decoration-none"
          >
            <span>Begin Step 01 — Browse All Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
