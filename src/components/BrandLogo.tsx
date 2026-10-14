import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtext = true,
}) => {
  const isLight = variant === 'light';
  
  const iconSize = size === 'sm' ? 42 : size === 'lg' ? 58 : 50;
  const brandTitleSize = size === 'sm' ? '1.25rem' : size === 'lg' ? '1.65rem' : '1.45rem';
  const subtextSize = size === 'sm' ? '0.65rem' : size === 'lg' ? '0.75rem' : '0.7rem';

  return (
    <Link to="/" className="d-inline-flex align-items-center gap-2.5 text-decoration-none group">
      {/* Pristine Official Thulir Emblem (Transparent High-Res) */}
      <div 
        className="position-relative flex-shrink-0 rounded-circle overflow-hidden d-flex align-items-center justify-content-center transition-fast"
        style={{
          width: iconSize,
          height: iconSize,
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(197, 155, 39, 0.45)',
          boxShadow: '0 4px 12px rgba(11, 34, 56, 0.12), 0 0 0 2px rgba(255, 255, 255, 0.9)'
        }}
      >
        <img 
          src="/images/official/thulir-emblem.png" 
          alt="Thulir Institute Emblem" 
          className="w-100 h-100" 
          style={{ objectFit: 'contain', padding: '2px' }}
        />
      </div>

      {/* Brand Identity Typography Lockup */}
      <div className="d-flex flex-column leading-tight">
        <div className="d-flex align-items-baseline gap-2 flex-wrap">
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: '0.02em',
              fontSize: brandTitleSize,
              color: isLight ? '#FFFFFF' : '#0B2238',
              lineHeight: 1.15,
              textTransform: 'uppercase'
            }}
          >
            THULIR
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: size === 'sm' ? '0.85rem' : '0.975rem',
              color: '#B45309',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1.15
            }}
          >
            INSTITUTE
          </span>
        </div>

        {showSubtext && (
          <div className="d-flex flex-column mt-0.5">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: subtextSize,
                color: isLight ? '#CBD5E1' : '#475569',
                letterSpacing: '0.035em',
                fontWeight: 600,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                lineHeight: 1.25
              }}
            >
              Computer Education & Skill Development
            </span>
            <div className="d-flex align-items-center gap-1 mt-0.5">
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.62rem',
                  color: isLight ? '#38BDF8' : '#047857',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  lineHeight: 1
                }}
              >
                A Project of Pneuma Trust • Madurai
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
