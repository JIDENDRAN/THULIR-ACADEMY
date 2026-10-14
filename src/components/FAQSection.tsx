import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { siteConfig } from '../data/siteConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding position-relative" style={{ backgroundColor: '#EAE3D5', borderTop: '1px solid #DDD4C4' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Header */}
            <div className="section-header text-center">
              <span className="badge-eyebrow">COMMON QUERIES</span>
              <h2 className="section-title text-dark">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Clear answers regarding course levels, classroom lab practice, and admissions in Madurai.
              </p>
            </div>

            {/* Accordion list */}
            <div className="d-flex flex-column gap-3">
              {faqsData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="card rounded-3 overflow-hidden transition-fast shadow-sm"
                    style={{
                      backgroundColor: '#FAF6EE',
                      border: isOpen ? '1.5px solid var(--thulir-navy)' : '1px solid #DDD4C4'
                    }}
                  >
                    <button
                      type="button"
                      className="btn w-100 text-start p-3.5 d-flex justify-content-between align-items-center gap-3 border-0"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="d-flex align-items-center gap-2.5">
                        <HelpCircle size={18} className="text-primary flex-shrink-0" />
                        <span className="fw-semibold text-dark fs-6">{faq.question}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className="flex-shrink-0 text-secondary"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 small border-top" style={{ borderColor: '#DDD4C4', color: '#2C3E50' }}>
                        <p className="mb-0" style={{ lineHeight: 1.65 }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* More Help Strip */}
            <div className="text-center mt-5 pt-2">
              <p className="small mb-2 text-secondary">
                Have a question that is not covered here?
              </p>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-dark fw-medium d-inline-flex align-items-center gap-2 px-3.5 py-2 rounded-pill"
                style={{ backgroundColor: '#FAF6EE', borderColor: '#DDD4C4' }}
              >
                <MessageSquare size={14} className="text-success" />
                <span>Ask on Admissions WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
