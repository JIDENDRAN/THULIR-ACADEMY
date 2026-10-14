import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/galleryData';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1060,
        backgroundColor: 'rgba(11, 34, 56, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem'
      }}
    >
      {/* Close button */}
      <button
        type="button"
        className="btn btn-outline-light rounded-circle position-absolute top-0 end-0 m-2 m-md-3 d-flex align-items-center justify-content-center p-0 shadow"
        onClick={onClose}
        style={{ width: '38px', height: '38px', zIndex: 1070 }}
        aria-label="Close image lightbox"
      >
        <X size={20} />
      </button>

      {/* Prev button */}
      <button
        type="button"
        className="btn btn-outline-light rounded-circle position-absolute start-0 ms-1 ms-md-4 d-flex align-items-center justify-content-center p-0 shadow"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{ width: '38px', height: '38px', zIndex: 1070 }}
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        type="button"
        className="btn btn-outline-light rounded-circle position-absolute end-0 me-1 me-md-4 d-flex align-items-center justify-content-center p-0 shadow"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{ width: '38px', height: '38px', zIndex: 1070 }}
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Main Image Container */}
      <div
        className="position-relative text-center px-2"
        style={{ maxWidth: '850px', width: '100%', maxHeight: '88vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.imageUrl}
          alt={item.altText}
          className="rounded-3 shadow-2xl img-fluid"
          style={{
            maxHeight: '56vh',
            objectFit: 'contain',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
          }}
        />

        {/* Caption & Counter */}
        <div className="mt-2.5 text-white">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
            <span 
              className="badge rounded-pill px-2.5 py-0.5"
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.35)', color: '#FCD34D', border: '1px solid rgba(245, 158, 11, 0.5)', fontSize: '0.7rem' }}
            >
              {item.categoryLabel}
            </span>
            <span className="small text-light opacity-75" style={{ fontSize: '0.75rem' }}>
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h4 className="fw-semibold mb-1 text-white" style={{ fontSize: '1rem' }}>{item.title}</h4>
          <p className="text-light opacity-80 small mb-0 max-w-lg mx-auto" style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
