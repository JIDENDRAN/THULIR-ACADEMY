import React from 'react';
import { 
  FileSpreadsheet, 
  Calculator, 
  Layers, 
  FileCheck, 
  FileText, 
  Percent, 
  Presentation, 
  Monitor 
} from 'lucide-react';

interface TechItem {
  name: string;
  badge: string;
  icon: React.ReactNode;
  color: string;
}

const softwareList: TechItem[] = [
  {
    name: "Microsoft Excel",
    badge: "Advanced Analytics & Formulas",
    icon: <FileSpreadsheet size={16} />,
    color: "#047857",
  },
  {
    name: "Tally Prime with GST",
    badge: "Computerized Bookkeeping",
    icon: <Calculator size={16} />,
    color: "#1D4ED8",
  },
  {
    name: "SAP FICO Systems",
    badge: "Enterprise Financial Accounting",
    icon: <Layers size={16} />,
    color: "#6D28D9",
  },
  {
    name: "GST Compliance",
    badge: "Invoicing, ITC & E-Way Bills",
    icon: <FileCheck size={16} />,
    color: "#D97706",
  },
  {
    name: "Income Tax & TDS",
    badge: "ITR & Statutory Deductions",
    icon: <Percent size={16} />,
    color: "#B91C1C",
  },
  {
    name: "Microsoft Word",
    badge: "Executive Documentation",
    icon: <FileText size={16} />,
    color: "#1D4ED8",
  },
  {
    name: "PowerPoint Presentations",
    badge: "Professional Slide Decks",
    icon: <Presentation size={16} />,
    color: "#C2410C",
  },
  {
    name: "Computer Fundamentals",
    badge: "Typing & OS Essentials",
    icon: <Monitor size={16} />,
    color: "#0F766E",
  },
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div 
      className="py-2.5 position-relative overflow-hidden"
      style={{ backgroundColor: '#EAE3D5', borderBottom: '1px solid #DDD4C4' }}
    >
      <div className="marquee-wrapper">
        {/* Track 1 */}
        <div className="marquee-content">
          {softwareList.map((item, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill"
              style={{
                backgroundColor: '#FAF6EE',
                border: '1px solid #DDD4C4'
              }}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              <span className="fw-semibold text-dark small" style={{ fontSize: '0.825rem' }}>
                {item.name}
              </span>
              <span
                className="badge rounded-pill text-secondary"
                style={{ 
                  fontSize: '0.7rem',
                  backgroundColor: '#F0EAE0',
                  border: '1px solid #DDD4C4'
                }}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for continuous loop) */}
        <div className="marquee-content" aria-hidden="true">
          {softwareList.map((item, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill"
              style={{
                backgroundColor: '#FAF6EE',
                border: '1px solid #DDD4C4'
              }}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              <span className="fw-semibold text-dark small" style={{ fontSize: '0.825rem' }}>
                {item.name}
              </span>
              <span
                className="badge rounded-pill text-secondary"
                style={{ 
                  fontSize: '0.7rem',
                  backgroundColor: '#F0EAE0',
                  border: '1px solid #DDD4C4'
                }}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
