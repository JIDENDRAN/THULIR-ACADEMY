import React from 'react';
import type { CourseCategory } from '../data/courses';

interface CourseFiltersProps {
  selectedCategory: CourseCategory | 'all';
  onSelectCategory: (category: CourseCategory | 'all') => void;
  counts: Record<string, number>;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  const filterOptions: { id: CourseCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Courses' },
    { id: 'computer', label: 'Computer Courses' },
    { id: 'accounting', label: 'Accounting' },
    { id: 'taxation', label: 'Taxation' },
    { id: 'erp', label: 'ERP' },
  ];

  return (
    <div 
      className="d-flex align-items-center justify-content-start justify-content-md-center gap-2 mb-4 pb-2 overflow-x-auto"
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {filterOptions.map((option) => {
        const isActive = selectedCategory === option.id;
        const count = counts[option.id] ?? 0;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectCategory(option.id)}
            className="btn px-3.5 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 transition-fast text-nowrap flex-shrink-0"
            style={{
              fontSize: '0.85rem',
              backgroundColor: isActive ? '#0B2238' : '#FAF6EE',
              color: isActive ? '#FFFFFF' : '#0B2238',
              border: isActive ? '1px solid #0B2238' : '1px solid #DDD4C4',
              boxShadow: isActive ? '0 4px 14px rgba(11, 34, 56, 0.25)' : 'none'
            }}
          >
            <span>{option.label}</span>
            <span
              className="badge rounded-pill small"
              style={{
                backgroundColor: isActive ? '#C59B27' : '#EAE3D5',
                color: isActive ? '#FFFFFF' : '#607282',
                fontSize: '0.72rem',
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
