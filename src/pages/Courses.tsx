import React, { useState, useMemo, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { coursesData, type CourseCategory } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { CourseFilters } from '../components/CourseFilters';

export const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "All Courses & Programs | Thulir Institute Madurai";
  }, []);

  // Filter courses by category and search term
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.shortDescription.toLowerCase().includes(q) ||
        course.categoryLabel.toLowerCase().includes(q) ||
        course.topics.some((t) =>
          t.title.toLowerCase().includes(q) ||
          t.items.some((item) => item.toLowerCase().includes(q))
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Counts for filter pills
  const counts = useMemo(() => {
    const res: Record<string, number> = { all: coursesData.length };
    coursesData.forEach((c) => {
      res[c.category] = (res[c.category] || 0) + 1;
    });
    return res;
  }, []);

  return (
    <div style={{ backgroundColor: '#F3EFE6', minHeight: '100vh' }}>
      {/* Page Header */}
      <section className="py-5 position-relative" style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-eyebrow">COURSE CATALOGUE</span>
            <h1 className="display-5 fw-bold text-dark mb-2">
              Explore Our Training Programs
            </h1>
            <p className="lead text-secondary mb-4">
              Discover courses designed to develop your computer, accounting and professional software skills in Madurai.
            </p>

            {/* Live Search Bar */}
            <div className="position-relative max-w-md mx-auto" style={{ maxWidth: '480px' }}>
              <Search
                size={18}
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
              />
              <input
                type="text"
                className="form-control form-control-lg ps-5 rounded-pill shadow-sm fs-6"
                style={{ 
                  backgroundColor: '#FAF6EE', 
                  border: '1px solid #C8BCAB',
                  color: '#0B2238' 
                }}
                placeholder="Search courses, e.g. Excel, Tally, GST, SAP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="btn btn-sm btn-link text-secondary position-absolute top-50 end-0 translate-middle-y me-3 text-decoration-none"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Main Area */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filters */}
          <CourseFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={counts}
          />

          {/* Result Count Status */}
          <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom" style={{ borderColor: '#DDD4C4' }}>
            <div className="small text-secondary">
              Showing <span className="fw-bold text-dark">{filteredCourses.length}</span> course
              {filteredCourses.length === 1 ? '' : 's'}
              {selectedCategory !== 'all' && (
                <span> in <strong className="text-primary">{selectedCategory.toUpperCase()}</strong></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;{searchQuery}&rdquo;</span>
              )}
            </div>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill"
                style={{ backgroundColor: '#FAF6EE', borderColor: '#DDD4C4' }}
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredCourses.length > 0 ? (
            <div className="row g-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-12 col-md-6 col-lg-4">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div 
              className="text-center py-5 rounded-4 p-4 shadow-sm border"
              style={{ backgroundColor: '#FAF6EE', borderColor: '#DDD4C4' }}
            >
              <BookOpen size={48} className="text-secondary mb-3" />
              <h3 className="h5 fw-bold text-dark mb-2">No matching courses found</h3>
              <p className="small text-secondary mb-3">
                Try searching for a different keyword or selecting another category.
              </p>
              <button
                type="button"
                className="btn btn-sm btn-thulir-primary rounded-pill px-4"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
