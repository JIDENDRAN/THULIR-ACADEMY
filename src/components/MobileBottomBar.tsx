import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, MessageSquare, PhoneCall } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const MobileBottomBar: React.FC = () => {
  return (
    <div 
      className="mobile-bottom-bar d-lg-none position-fixed bottom-0 start-0 end-0"
      style={{
        zIndex: 1035,
        backgroundColor: 'rgba(250, 246, 238, 0.98)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1.5px solid #DDD4C4',
        boxShadow: '0 -4px 18px rgba(11, 34, 56, 0.08)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div className="container px-2">
        <div className="d-flex align-items-center justify-content-around py-2">
          {/* 1. Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => 
              `d-flex flex-column align-items-center justify-content-center text-decoration-none px-2 py-1 rounded-2 transition-fast ${
                isActive ? 'text-primary fw-bold' : 'text-secondary opacity-80'
              }`
            }
            style={{ fontSize: '0.72rem', minWidth: '60px' }}
          >
            <Home size={19} className="mb-0.5" />
            <span>Home</span>
          </NavLink>

          {/* 2. Courses */}
          <NavLink
            to="/courses"
            className={({ isActive }) => 
              `d-flex flex-column align-items-center justify-content-center text-decoration-none px-2 py-1 rounded-2 transition-fast ${
                isActive ? 'text-primary fw-bold' : 'text-secondary opacity-80'
              }`
            }
            style={{ fontSize: '0.72rem', minWidth: '60px' }}
          >
            <BookOpen size={19} className="mb-0.5" />
            <span>Courses</span>
          </NavLink>

          {/* 3. WhatsApp Instant Demo */}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center justify-content-center text-decoration-none px-2.5 py-1 rounded-pill"
            style={{
              backgroundColor: '#059669',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 700,
              boxShadow: '0 2px 10px rgba(5, 150, 105, 0.35)',
              minWidth: '78px'
            }}
          >
            <MessageSquare size={18} className="mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* 4. Click to Call */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="d-flex flex-column align-items-center justify-content-center text-decoration-none px-2 py-1 rounded-2 text-dark opacity-90 fw-medium"
            style={{ fontSize: '0.72rem', minWidth: '60px' }}
          >
            <PhoneCall size={19} className="mb-0.5 text-primary" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
