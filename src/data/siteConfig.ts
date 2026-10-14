export interface SiteConfig {
  brandName: string;
  fullName: string;
  trustName: string;
  tagline: string;
  slogans: string[];
  facultyHighlight: string;
  batchTimings: string;
  location: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    secondaryArea: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    secondaryPhone: string;
    alternatePhone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    alternateWhatsApp: string;
    instagramUrl: string;
    instagramHandle: string;
    email: string;
  };
  whatsappMessages: {
    general: string;
    courseEnquiry: (courseName: string) => string;
  };
  meta: {
    title: string;
    description: string;
    credit: string;
    creditCompany: string;
    creditCompanyUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Thulir Institute",
  fullName: "Thulir Institute of Computer Education & Skill Development Centre",
  trustName: "A Project of Pneuma Trust",
  tagline: "Learn Today, Lead Tomorrow, Succeed Always — Empower Your Skills, Enhance Your Future.",
  slogans: [
    "Learn Today, Lead Tomorrow, Succeed Always",
    "Empower Your Skills. Enhance Your Future.",
    "Skills Today • Success Tomorrow",
    "Be Skilled, Be Certified, Be Job Ready!"
  ],
  facultyHighlight: "24 Years Experience Tax Consultant & Expert CA Faculty Mentorship",
  batchTimings: "6:00 AM to 8:00 PM (Monday - Sunday) | Weekend Special Batches",
  location: {
    street: "Ground Floor, St. John Paul Valagam, Vaikkal Karai Street",
    area: "Gnanaolivupuram",
    city: "Madurai",
    state: "Tamil Nadu",
    pincode: "625016",
    country: "India",
    fullAddress: "Ground Floor, St. John Paul Valagam, Vaikkal Karai Street, Gnanaolivupuram, Madurai, Tamil Nadu – 625016, India",
    secondaryArea: "Arapalayam, Madurai",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gnanaolivupuram+Madurai+Tamil+Nadu+625016",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.038166447814!2d78.1001474!3d9.9333917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c59837941cb1%3A0xf6a8c4fa4848d7be!2sGnanaolivupuram%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
  },
  contact: {
    phone: "+919994246918",
    phoneFormatted: "+91 99942 46918",
    secondaryPhone: "+91 98941 30881",
    alternatePhone: "+91 97883 05654",
    whatsappNumber: "919994246918",
    whatsappUrl: "https://wa.me/919994246918",
    alternateWhatsApp: "+91 86678 34253",
    instagramUrl: "https://instagram.com/thulir_education/",
    instagramHandle: "@thulir_education",
    email: "pneuma.education@gmail.com"
  },
  whatsappMessages: {
    general: "Hello Thulir Institute, I would like to enquire about course admissions, fees, and batch timings.",
    courseEnquiry: (courseName: string) => 
      `Hello Thulir Institute, I am interested in the ${courseName} course. Please share syllabus, fees, and upcoming batch details.`
  },
  meta: {
    title: "Thulir Institute of Computer Education & Skill Development Centre | Madurai",
    description: "Official website of Thulir Institute (A Project of Pneuma Trust) in Madurai. Computer education, MS Office, Tally Prime with GST, Tax Consultant training & SAP FICO.",
    credit: "Designed & Developed by CodeThrive Infotech",
    creditCompany: "CodeThrive Infotech",
    creditCompanyUrl: "https://codethrive.in"
  }
};

