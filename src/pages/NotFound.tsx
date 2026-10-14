import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Thulir Institute Madurai";
  }, []);

  return (
    <div className="min-vh-100 d-flex align-items-center py-5" style={{ backgroundColor: '#F3EFE6' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <div 
              className="card p-5 rounded-4 shadow-lg"
              style={{ backgroundColor: '#FAF6EE', border: '1px solid #DDD4C4' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: '#C59B27',
                  lineHeight: 1
                }}
              >
                404
              </span>
              <h1 className="h3 fw-bold text-dark mt-3 mb-2">Page Not Found</h1>
              <p className="small mb-4 text-secondary">
                The page you are looking for may have been moved, renamed, or is temporarily unavailable.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mb-4">
                <Link to="/" className="btn-thulir-primary text-decoration-none">
                  <Home size={16} />
                  <span>Return to Home</span>
                </Link>
                <Link to="/courses" className="btn-thulir-secondary text-decoration-none">
                  <Compass size={16} />
                  <span>Browse Courses</span>
                </Link>
              </div>

              <div className="pt-3 border-top" style={{ borderColor: '#DDD4C4' }}>
                <span className="small text-secondary">
                  Need help? Call us at <a href="tel:+919788305654" className="fw-semibold text-primary">+91 97883 05654</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
