import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../data/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-2 py-lg-3">
          {/* Logo with Dark Oxford Navy & Gold Variant */}
          <BrandLogo size="md" variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="d-none d-lg-flex align-items-center gap-1" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              Courses
            </NavLink>
            <NavLink
              to="/why-us"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              Why Choose Us
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Link to="/contact" className="btn-thulir-primary text-decoration-none">
              <span>Enquire Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="d-lg-none btn btn-light border p-2 rounded-3 d-flex align-items-center justify-content-center text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            style={{ width: '42px', height: '42px', backgroundColor: '#EAE3D5', borderColor: '#DDD4C4' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Warm Linen Ivory) */}
      {mobileMenuOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040, backdropFilter: 'blur(6px)' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="h-100 p-4 d-flex flex-column"
            style={{ 
              maxWidth: '320px', 
              width: '85%', 
              backgroundColor: '#FAF6EE', 
              borderRight: '1px solid #DDD4C4',
              boxShadow: '10px 0 30px rgba(11, 34, 56, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top */}
            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3" style={{ borderColor: '#DDD4C4' }}>
              <BrandLogo size="sm" variant="dark" showSubtext={false} />
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-circle p-1 d-flex"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation items */}
            <div className="d-flex flex-column gap-2 mb-4 overflow-y-auto">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>About Us</span>
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>All Courses</span>
              </NavLink>
              <NavLink
                to="/why-us"
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>Why Choose Us</span>
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>Gallery & Lab</span>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `p-2.5 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between ${
                    isActive ? 'bg-primary-subtle text-primary fw-bold' : 'text-dark'
                  }`
                }
              >
                <span>Contact & Location</span>
              </NavLink>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-3 border-top d-flex flex-column gap-2" style={{ borderColor: '#DDD4C4' }}>
              <Link
                to="/contact"
                className="btn-thulir-primary w-100 text-decoration-none text-center"
              >
                <span>Enquire Now</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-hero w-100 text-decoration-none"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                style={{ backgroundColor: '#EAE3D5', borderColor: '#DDD4C4' }}
              >
                <Phone size={15} />
                <span>Call {siteConfig.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
