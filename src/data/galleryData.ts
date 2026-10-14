export type GalleryCategory = 'all' | 'computer' | 'accounting' | 'classroom' | 'activities' | 'announcements';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  altText: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-official-master",
    title: "Official Master Course Chart & Schedule",
    category: "announcements",
    categoryLabel: "Official Circulars",
    imageUrl: "/images/official/courses-master-chart.jpg",
    caption: "Official master syllabus chart of Thulir Institute showing all 8 programs from MS Office to SAP FICO, batch timings (6:00 AM - 8:00 PM), and online/offline modes.",
    altText: "Official Master Courses Offered poster by Thulir Institute"
  },
  {
    id: "gal-official-pkg",
    title: "Special Admission Offer — 3 Month Accounting Package",
    category: "announcements",
    categoryLabel: "Special Offers",
    imageUrl: "/images/official/offer-accounting-package.jpg",
    caption: "Festive admission offer for 3-Month Accounting Package (MS Office, Adv Excel, Tally with GST, TDS, GST Filing) for Rs 34,888/- (regular Rs 45,000/-).",
    altText: "Special Admission Offer poster for Complete Accounting course package"
  },
  {
    id: "gal-official-sap",
    title: "SAP FICO End-User 45 Days Practical Program",
    category: "announcements",
    categoryLabel: "ERP Training",
    imageUrl: "/images/official/sap-fico-45days.jpg",
    caption: "Special festival offer for 45-day hands-on SAP FICO ERP training program covering Financial Accounting (FI) and Controlling (CO) modules.",
    altText: "SAP FICO 45 Days Practical Training Program Poster"
  },
  {
    id: "gal-official-gst10",
    title: "Become GST Practitioner Executive Within 10 Days",
    category: "accounting",
    categoryLabel: "Taxation & GST",
    imageUrl: "/images/official/gst-10-days.jpg",
    caption: "Executive 10-day crash course covering GSTR-1, GSTR-2B reconciliation, GSTR-3B and E-Way bills, mentored by 24 Years Experience Tax Consultant & CA Faculty.",
    altText: "10-day GST Practitioner Executive program poster"
  },
  {
    id: "gal-official-gstpro",
    title: "GST Practitioner & Pro-Accountant Career Training",
    category: "accounting",
    categoryLabel: "Accounting & Tax",
    imageUrl: "/images/official/gst-pro-accountant.jpg",
    caption: "Practical accounting, TDS, Income Tax (ITR) return filing, and Tally Prime with GST live projects and certification.",
    altText: "GST Practitioner and Pro Accountant Training Poster"
  },
  {
    id: "gal-official-msoffice",
    title: "Benefits of Learning MS Office at Thulir Institute",
    category: "computer",
    categoryLabel: "Computer Education",
    imageUrl: "/images/official/ms-office-benefits.jpg",
    caption: "10 essential workplace digital skills gained from the MS Office Basic and Advanced programs at Thulir Institute.",
    altText: "Benefits of Learning MS Office poster by Thulir Institute"
  },
  {
    id: "gal-1",
    title: "Computer Applications Practical Session",
    category: "computer",
    categoryLabel: "Computer Education",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    caption: "Learners practicing real-world document formatting and spreadsheet calculations in the computer laboratory.",
    altText: "Learners focused on computer lab screens working with office tools"
  },
  {
    id: "gal-2",
    title: "Tally & GST Lab Training",
    category: "accounting",
    categoryLabel: "Accounting Training",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    caption: "Hands-on voucher entry and tax invoice calculation practice on computerized accounting software.",
    altText: "Accounting ledger sheets and computer workstation"
  },
  {
    id: "gal-3",
    title: "Modern Computer Lab Environment",
    category: "classroom",
    categoryLabel: "Classroom Environment",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    caption: "Dedicated individual workstations allowing each learner dedicated hands-on machine practice.",
    altText: "Organized learning lab with rows of workstations"
  },
  {
    id: "gal-4",
    title: "Advanced Excel Formula Workshop",
    category: "computer",
    categoryLabel: "Computer Education",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    caption: "Step-by-step guidance on complex lookups, PivotTables, and dynamic business charts.",
    altText: "Business data graphs and spreadsheet analysis on display"
  },
  {
    id: "gal-5",
    title: "Taxation & Compliance Discussions",
    category: "accounting",
    categoryLabel: "Accounting Training",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    caption: "Exploring GST frameworks, tax brackets, and compliance principles with practical examples.",
    altText: "Financial review notes and calculator on desk"
  },
  {
    id: "gal-6",
    title: "Interactive Classroom Problem Solving",
    category: "activities",
    categoryLabel: "Learning Activities",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    caption: "Collaborative learning sessions where doubts are clarified and practical cases solved together.",
    altText: "Group of enthusiastic learners reviewing project notes"
  }
];
