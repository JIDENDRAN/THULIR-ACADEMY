import React, { useState, useMemo, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';
import { galleryItems, type GalleryCategory, type GalleryItem } from '../data/galleryData';
import { Lightbox } from '../components/Lightbox';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    document.title = "Gallery & Lab Environment | Thulir Institute Madurai";
  }, []);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'computer', label: 'Computer Education' },
    { id: 'accounting', label: 'Accounting Training' },
    { id: 'classroom', label: 'Classroom & Lab' },
    { id: 'activities', label: 'Learning Activities' },
    { id: 'announcements', label: 'Announcements' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpen = (item: GalleryItem, index: number) => {
    setActiveItem(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(next);
    setActiveItem(filteredItems[next]);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prev);
    setActiveItem(filteredItems[prev]);
  };

  return (
    <div style={{ backgroundColor: '#F3EFE6', minHeight: '100vh' }}>
      {/* Banner */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow">PHOTO GALLERY</span>
            <h1 className="display-5 fw-bold text-dark mb-2">
              Life & Learning at Thulir Institute
            </h1>
            <p className="lead text-secondary mb-0">
              Glimpses into our computer labs, accounting practice sessions, and skill development activities in Madurai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="section-padding">
        <div className="container">
          {/* Category Tabs */}
          <div 
            className="d-flex align-items-center justify-content-start justify-content-md-center gap-2 mb-5 overflow-x-auto pb-2"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none'
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="btn px-3.5 py-2 rounded-pill fw-semibold transition-fast text-nowrap flex-shrink-0"
                  style={{ 
                    fontSize: '0.85rem',
                    backgroundColor: isActive ? '#0B2238' : '#FAF6EE',
                    color: isActive ? '#FFFFFF' : '#0B2238',
                    border: isActive ? '1px solid #0B2238' : '1px solid #DDD4C4',
                    boxShadow: isActive ? '0 4px 14px rgba(11, 34, 56, 0.25)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Responsive Gallery Grid: 2 columns on mobile, 3 on desktop */}
          <div className="row g-2.5 g-md-3 g-lg-4">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="col-6 col-md-6 col-lg-4">
                <div
                  className="gallery-card-responsive img-zoom-container"
                  onClick={() => handleOpen(item, index)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  {/* Subtle Responsive Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11, 34, 56, 0.1) 40%, rgba(11, 34, 56, 0.9) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '0.75rem',
                      color: '#ffffff'
                    }}
                    className="p-2 p-md-3"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span 
                        className="badge rounded-pill fw-semibold"
                        style={{ 
                          backgroundColor: 'rgba(245, 158, 11, 0.35)', 
                          color: '#FCD34D', 
                          border: '1px solid rgba(245, 158, 11, 0.5)',
                          fontSize: '0.65rem',
                          padding: '0.2rem 0.55rem'
                        }}
                      >
                        {item.categoryLabel}
                      </span>
                      <span 
                        className="btn btn-sm rounded-circle d-none d-sm-flex align-items-center justify-content-center p-1" 
                        title="Expand Photo"
                        style={{ 
                          width: '28px', 
                          height: '28px', 
                          backgroundColor: 'rgba(255, 255, 255, 0.25)', 
                          backdropFilter: 'blur(4px)', 
                          color: '#FFFFFF' 
                        }}
                      >
                        <Maximize2 size={13} />
                      </span>
                    </div>
                    <h3 
                      className="fw-semibold text-white mb-0 text-truncate"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {item.title}
                    </h3>
                    <p className="small text-light opacity-80 mb-0 d-none d-md-block line-clamp-1 mt-1" style={{ fontSize: '0.75rem' }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demonstration Notice */}
          <div className="text-center mt-5 pt-4 border-top" style={{ borderColor: '#DDD4C4' }}>
            <p className="small mb-0 text-secondary">
              <em>Note: Images shown represent the learning lab environment and curriculum activities at Thulir Institute.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Accessible Lightbox */}
      <Lightbox
        isOpen={!!activeItem}
        item={activeItem}
        items={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
