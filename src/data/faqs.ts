export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Thulir Institute located in Madurai?",
    answer: "Thulir Institute is conveniently located at Ground Floor, St. John Paul Valagam, Vaikkal Karai Street, Gnanaolivupuram, Madurai, Tamil Nadu – 625016, India. You can easily reach us via public transport or private vehicle.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How do I find out about course fees and upcoming batch schedules?",
    answer: "Because batch schedules and course fees vary depending on individual requirements and batch timings (weekdays / weekends), we encourage you to contact us directly via WhatsApp (+91 97883 05654) or submit the enquiry form on this website.",
    category: "admissions"
  },
  {
    id: "faq-3",
    question: "Are these courses suitable for absolute beginners with no computer background?",
    answer: "Yes, our MS Office Basic and Basic Accounting courses are specially crafted from the ground up for beginners. You will receive patient, step-by-step guidance on hardware, keyboard navigation, and software basics before advancing.",
    category: "courses"
  },
  {
    id: "faq-4",
    question: "Do students get individual computer lab practice?",
    answer: "Yes, practical hands-on application is central to our training approach. Students are allocated dedicated computer workstations during lab sessions to practice lessons in real time.",
    category: "courses"
  },
  {
    id: "faq-5",
    question: "What is covered in the SAP FICO End-User Training?",
    answer: "The SAP FICO program is focused on end-user concepts including Financial Accounting (FI), General Ledger postings, Accounts Payable, Accounts Receivable, and SAP GUI navigation. It introduces corporate ERP workflows used by enterprise businesses.",
    category: "courses"
  },
  {
    id: "faq-6",
    question: "Can working professionals join weekend or flexible batches?",
    answer: "We offer flexible learning slots where possible. Please message our team on WhatsApp with your preferred timings so we can share the current batch availability.",
    category: "general"
  }
];
