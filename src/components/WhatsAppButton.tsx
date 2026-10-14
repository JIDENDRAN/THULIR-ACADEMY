import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = encodeURIComponent(siteConfig.whatsappMessages.general);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="position-fixed" style={{ bottom: '2rem', right: '2rem', zIndex: 1040 }}>
      {/* Mini popup tooltip */}
      {showTooltip && (
        <div
          className="bg-white p-3 rounded-4 shadow-xl border mb-2 d-flex flex-column gap-2"
          style={{ width: '260px' }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark small">Thulir Institute</span>
            <button
              type="button"
              className="btn btn-sm p-0 text-muted"
              onClick={() => setShowTooltip(false)}
              aria-label="Close message"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-muted small mb-0" style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
            Have questions about courses or batch schedules in Madurai? Chat with us on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-success d-flex align-items-center justify-content-center gap-1.5 rounded-pill"
          >
            <MessageSquare size={13} />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn text-decoration-none animate-pulse-glow"
        aria-label="Chat with Thulir Institute on WhatsApp (+91 97883 05654)"
        title="Chat on WhatsApp (+91 97883 05654)"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
};
