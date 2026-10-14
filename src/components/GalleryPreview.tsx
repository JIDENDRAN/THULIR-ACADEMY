import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { galleryItems, type GalleryItem } from '../data/galleryData';
import { Lightbox } from './Lightbox';

export const GalleryPreview: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const previewItems = galleryItems.slice(0, 6);

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % previewItems.length;
    setCurrentIndex(nextIdx);
    setSelectedItem(previewItems[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + previewItems.length) % previewItems.length;
    setCurrentIndex(prevIdx);
    setSelectedItem(previewItems[prevIdx]);
  };

  return (
    <section className="section-padding position-relative" style={{ backgroundColor: '#EAE3D5', borderTop: '1px solid #DDD4C4' }}>
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <div>
            <span className="badge-eyebrow">LEARNING ENVIRONMENT</span>
            <h2 className="section-title text-dark mb-1">Practical Learning & Lab Glimpses</h2>
            <p className="mb-0 text-secondary">
              Explore our dedicated computer facilities and student training activities in Madurai.
            </p>
          </div>
          <div>
            <Link to="/gallery" className="btn-thulir-outline text-decoration-none">
              <span>View Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Responsive Gallery Grid: 2 columns on mobile, 3 on desktop */}
        <div className="row g-2.5 g-md-3 g-lg-4">
          {previewItems.map((item, index) => (
            <div key={item.id} className="col-6 col-md-6 col-lg-4">
              <div 
                className="gallery-card-responsive img-zoom-container"
                onClick={() => handleOpenLightbox(item, index)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                {/* Responsive Gradient Overlay */}
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-2.5 p-md-3.5 d-flex align-items-end justify-content-between text-white"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(11, 34, 56, 0.9) 100%)'
                  }}
                >
                  <div className="overflow-hidden pe-1">
                    <span 
                      className="badge mb-1 px-2 py-0.5 rounded-pill"
                      style={{ 
                        backgroundColor: 'rgba(245, 158, 11, 0.35)', 
                        color: '#FCD34D', 
                        border: '1px solid rgba(245, 158, 11, 0.5)',
                        fontSize: '0.65rem'
                      }}
                    >
                      {item.categoryLabel}
                    </span>
                    <h3 
                      className="mb-0 text-white fw-bold text-truncate"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div 
                    className="rounded-circle d-none d-sm-flex align-items-center justify-content-center text-white flex-shrink-0"
                    style={{ width: '32px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(4px)' }}
                  >
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          items={previewItems}
          currentIndex={currentIndex}
        />
      )}
    </section>
  );
};
