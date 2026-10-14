export type CourseCategory = 'computer' | 'accounting' | 'taxation' | 'erp';

export interface CourseTopicSection {
  title: string;
  items: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  categoryLabel: string;
  shortDescription: string;
  overview: string;
  duration: string; // "Contact for Course Details" as per requirements
  mode: string;
  badge: string;
  featured: boolean;
  image: string;
  topics: CourseTopicSection[];
  learningOutcomes: string[];
  targetAudience: string[];
  prerequisites: string;
}

export const coursesData: Course[] = [
  {
    id: "ms-office-basic",
    slug: "ms-office-basic",
    title: "MS Office Basic",
    category: "computer",
    categoryLabel: "Computer Courses",
    shortDescription: "Master essential computer fundamentals, file management, Microsoft Word documentation, basic Excel tables, and PowerPoint presentations.",
    overview: "Designed for beginners and students starting their computer journey, this course introduces foundational IT concepts and primary desktop productivity tools. Learn essential file management, create standard Word documents, format simple Excel sheets, and design clean slide presentations with hands-on practice in the Thulir computer lab.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "Beginner Friendly",
    featured: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Introduction to Computers",
        items: [
          "Hardware, Operating Systems & Peripherals",
          "Desktop navigation and interface essentials",
          "Typing fundamentals and shortcut keys"
        ]
      },
      {
        title: "File & Folder Management",
        items: [
          "Creating, organising, and renaming directories",
          "File extensions, copying, moving, and searching files",
          "External storage and backup fundamentals"
        ]
      },
      {
        title: "Microsoft Word Fundamentals",
        items: [
          "Text formatting, fonts, and paragraph styles",
          "Working with bullet points, numbered lists, and borders",
          "Inserting tables, images, and page numbers",
          "Document printing and PDF export"
        ]
      },
      {
        title: "Basic Excel Operations",
        items: [
          "Rows, columns, cells, and basic data entry",
          "Cell formatting and grid styling",
          "Basic arithmetic formulas (SUM, AVERAGE, MIN, MAX)",
          "Simple table creation and printing sheets"
        ]
      },
      {
        title: "PowerPoint Presentations",
        items: [
          "Slide creation and layout selection",
          "Adding titles, content, images, and shapes",
          "Slide transitions and running simple slide shows"
        ]
      }
    ],
    learningOutcomes: [
      "Operate computers independently for day-to-day office and personal tasks",
      "Draft, format, and print standard letters, documents, and reports in Word",
      "Create and organize basic spreadsheets and calculations in Excel",
      "Prepare clean slide presentations for meetings and academic submissions"
    ],
    targetAudience: [
      "School and college students building initial computer confidence",
      "Job seekers requiring foundational digital literacy",
      "Office administrative trainees and shop/store assistants"
    ],
    prerequisites: "No prior technical or computer background required."
  },
  {
    id: "ms-office-intermediate",
    slug: "ms-office-intermediate",
    title: "MS Office Intermediate",
    category: "computer",
    categoryLabel: "Computer Courses",
    shortDescription: "Elevate your workplace efficiency with professional Word formatting, Excel formulas, charts, tables, and presentation designs.",
    overview: "Bridge the gap between basic typing and productive workplace documentation. This intermediate training program emphasizes structured document styles in Microsoft Word, intermediate Excel formulas for data handling, interactive charts, and polished visual presentations.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "Workplace Skills",
    featured: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Professional Document Formatting",
        items: [
          "Header, footer, and section break mastery",
          "Table of contents and automated page numbering",
          "Mail merge setup for certificates and letters",
          "Document protection and template design"
        ]
      },
      {
        title: "Excel Formulas & Functions",
        items: [
          "Logical functions: IF, AND, OR statements",
          "Text functions: CONCATENATE, LEFT, RIGHT, MID, TRIM",
          "Date & Time calculations and workdays",
          "Relative vs. absolute cell referencing ($A$1)"
        ]
      },
      {
        title: "Charts & Tables",
        items: [
          "Column, bar, line, and pie chart styling",
          "Excel formatted tables and total rows",
          "Conditional formatting rules for highlighting key metrics",
          "Sorting and filtering multiple column datasets"
        ]
      },
      {
        title: "Presentation Design & Workflows",
        items: [
          "Slide master customization and branding consistency",
          "SmartArt graphics and process diagrams",
          "Speaker notes, animations, and kiosk presentations",
          "Exporting presentations to handouts and video"
        ]
      }
    ],
    learningOutcomes: [
      "Produce corporate-grade letters, memos, and multi-page reports",
      "Perform multi-criteria calculations with logical and statistical formulas",
      "Visualize spreadsheet data using clear business charts and graphs",
      "Accelerate daily administrative tasks through automated office workflows"
    ],
    targetAudience: [
      "Office assistants, administrative executives, and clerical staff",
      "College graduates preparing for corporate and private sector interviews",
      "Small business owners managing internal bookkeeping and letters"
    ],
    prerequisites: "Basic familiarity with computer operations and keyboard typing."
  },
  {
    id: "ms-office-advanced",
    slug: "ms-office-advanced",
    title: "MS Office Advanced",
    category: "computer",
    categoryLabel: "Computer Courses",
    shortDescription: "Master high-level office productivity, advanced data organization, professional reporting, and streamlined business workflows.",
    overview: "An intensive course structured for executive assistants, coordinators, and corporate professionals who need comprehensive command over the entire Microsoft Office suite. Learn advanced data manipulation, multi-document management, and presentation aesthetics.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "Executive Level",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Advanced Document Architecture",
        items: [
          "Multi-level outline numbering, cross-references, and index creation",
          "Collaborative review tools, track changes, and document comparisons",
          "Building fillable digital forms with developer controls",
          "Creating reusable company templates and macros basics"
        ]
      },
      {
        title: "Advanced Excel Functions & Organization",
        items: [
          "Nested IF, IFS, SWITCH, and complex error handling (IFERROR)",
          "Data validation with dependent drop-down lists",
          "Consolidating data across multiple worksheets and workbooks",
          "Auditing formulas, tracing precedents, and dependents"
        ]
      },
      {
        title: "Professional Reporting & Presentation Workflows",
        items: [
          "Summary dashboards combining tables and dynamic charts",
          "Interactive slide navigation with hyperlinks and action buttons",
          "Embedding live Excel ranges and charts into Word and PowerPoint",
          "Securing and protecting intellectual property in deliverables"
        ]
      }
    ],
    learningOutcomes: [
      "Create complex organizational manuals, proposals, and agreements",
      "Organize and validate large volumes of corporate spreadsheet data",
      "Develop executive-ready summaries and integrated multi-app deliverables",
      "Troubleshoot and audit formula discrepancies in shared workbooks"
    ],
    targetAudience: [
      "Working professionals seeking promotion or administrative mastery",
      "Executive assistants, coordinators, and data support teams",
      "Supervisors managing team reporting and documentation standards"
    ],
    prerequisites: "Comfortable with intermediate MS Word and Excel."
  },
  {
    id: "advanced-excel",
    slug: "advanced-excel",
    title: "Advanced Excel",
    category: "computer",
    categoryLabel: "Computer Courses",
    shortDescription: "Specialized training covering VLOOKUP, XLOOKUP, INDEX-MATCH, PivotTables, data cleaning, and dynamic dashboard creation.",
    overview: "A flagship program at Thulir Institute designed to make you proficient in data analysis, reporting, and business calculations using Microsoft Excel. Move beyond basic rows and columns to learn advanced lookup functions, multi-dimensional PivotTables, data sanitization techniques, and visual executive dashboards.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "High Demand",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Formulas & Functions",
        items: [
          "Advanced logical math: SUMIFS, COUNTIFS, AVERAGEIFS",
          "Text transformation: TEXTJOIN, SPLIT, SEARCH, SUBSTITUTE",
          "Financial functions: PMT, PV, FV, IRR fundamentals",
          "Array formula principles and dynamic spill functions"
        ]
      },
      {
        title: "Lookup Functions Mastery",
        items: [
          "VLOOKUP & HLOOKUP with exact and approximate matching",
          "INDEX & MATCH combination for 2-way lookups",
          "Modern XLOOKUP with reverse and multi-column searches",
          "Handling lookup errors and missing data gracefully"
        ]
      },
      {
        title: "PivotTables & PivotCharts",
        items: [
          "Creating and configuring summary PivotTables",
          "Grouping dates by months, quarters, and fiscal years",
          "Calculated fields, calculated items, and custom % displays",
          "Interactive slicers, timelines, and connected PivotCharts"
        ]
      },
      {
        title: "Data Cleaning & Preparation",
        items: [
          "Removing duplicates and stripping hidden whitespaces",
          "Text to Columns with delimiters and fixed widths",
          "Data validation rules and custom error alerts",
          "Conditional formatting using custom formula rules"
        ]
      },
      {
        title: "Report Preparation & Dashboards",
        items: [
          "Building single-page KPI summary reports",
          "Designing interactive dashboard layouts with slicer cards",
          "Form controls: buttons, check boxes, combo boxes",
          "Preparing print-ready executive summaries"
        ]
      }
    ],
    learningOutcomes: [
      "Perform high-speed lookups across large business datasets",
      "Aggregate and analyze thousands of transactional rows within minutes using PivotTables",
      "Sanitize messy raw data into structured analysis-ready tables",
      "Design clean, interactive executive dashboards for managerial decision making"
    ],
    targetAudience: [
      "Accountants, finance professionals, and billing executives",
      "Sales coordinators, operations analysts, and inventory managers",
      "Graduates seeking high-paying data analysis and office careers in Madurai"
    ],
    prerequisites: "Basic understanding of spreadsheets and computer operations."
  },
  {
    id: "tally-with-gst",
    slug: "tally-with-gst",
    title: "Tally with GST",
    category: "accounting",
    categoryLabel: "Accounting",
    shortDescription: "Complete computerized accounting training covering company creation, ledgers, vouchers, GST invoicing, e-way bills, and financial reports.",
    overview: "Tally is the gold standard accounting software for Indian trade and enterprise. This comprehensive practical course covers company setup, chart of accounts, recording all standard voucher entries, configuring GST rates (CGST, SGST, IGST), generating tax invoices, and extracting financial statements.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "Core Career Course",
    featured: true,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Accounting Fundamentals in Tally",
        items: [
          "Double-entry bookkeeping review and Golden Rules",
          "Understanding trading, manufacturing, and service accounts",
          "Tally user interface, gateway, and functional shortcut keys"
        ]
      },
      {
        title: "Company & Ledger Setup",
        items: [
          "Company creation, financial year, and security settings",
          "Creating primary and sub-groups",
          "Ledger creation under appropriate heads (Sundry Debtors, Creditors, Capital)",
          "Inventory masters: Stock groups, categories, units of measure, and items"
        ]
      },
      {
        title: "Voucher Entry Workflows",
        items: [
          "Receipt, Payment, and Contra vouchers (Cash & Bank)",
          "Sales and Purchase vouchers (Item invoice & Accounting invoice)",
          "Debit Notes, Credit Notes, and Journal vouchers",
          "Order processing: Purchase order, sales order, delivery challan"
        ]
      },
      {
        title: "GST Transactions in Tally",
        items: [
          "Enabling GST features and entering GSTIN / State details",
          "HSN / SAC code configuration and GST tax slab setup (5%, 12%, 18%, 28%)",
          "Intra-state (CGST + SGST) vs. Inter-state (IGST) sales & purchase entries",
          "Generating GST compliant tax invoices with QR / E-way bill basics"
        ]
      },
      {
        title: "Accounting Reports & Reconciliation",
        items: [
          "Day Book, Cash/Bank Book, and Ledger extract analysis",
          "Generating Trial Balance, Profit & Loss A/c, and Balance Sheet",
          "Bank Reconciliation Statement (BRS) preparation",
          "Generating GST return summary reports (GSTR-1, GSTR-3B previews)"
        ]
      }
    ],
    learningOutcomes: [
      "Manage end-to-end computerized accounts for commercial establishments",
      "Process regular sales, purchases, payments, and receipt vouchers independently",
      "Accurately calculate and apply CGST, SGST, and IGST on business transactions",
      "Extract and interpret balance sheets, P&L reports, and bank reconciliations"
    ],
    targetAudience: [
      "Commerce students (B.Com, M.Com, BBA) and recent graduates",
      "Junior accountants and cashiers working in Madurai commercial centers",
      "Entrepreneurs and business owners wishing to oversee their accounts"
    ],
    prerequisites: "Knowledge of basic accounting concepts is helpful but not mandatory."
  },
  {
    id: "basic-accounting",
    slug: "basic-accounting",
    title: "Basic Accounting",
    category: "accounting",
    categoryLabel: "Accounting",
    shortDescription: "Build strong foundational knowledge of accounting principles, double-entry systems, journal entries, ledgers, and financial statements.",
    overview: "A grounding course designed for students and non-commerce learners who want a solid foundation in business finance. Understand how transactions are recorded, the golden rules of accounting, posting to ledgers, balancing accounts, and constructing basic financial statements.",
    duration: "Contact for Course Details",
    mode: "Classroom & Lab Hands-on",
    badge: "Foundation",
    featured: false,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Accounting Principles & Concepts",
        items: [
          "Meaning, objectives, and scope of accounting",
          "Accounting concepts: Going Concern, Accrual, Matching, Consistency",
          "Types of accounts: Personal, Real, and Nominal accounts"
        ]
      },
      {
        title: "Journal & Ledger Entries",
        items: [
          "Golden Rules of Debit and Credit with practical examples",
          "Recording journal entries for capital, purchases, sales, and expenses",
          "Posting from journal to general ledger accounts",
          "Balancing of ledger accounts at period ends"
        ]
      },
      {
        title: "Trial Balance Preparation",
        items: [
          "Purpose and methods of preparing a Trial Balance",
          "Identifying and rectifying common bookkeeping errors",
          "Suspense account concepts and adjustments"
        ]
      },
      {
        title: "Financial Statements Overview",
        items: [
          "Trading Account: Gross profit calculation and Cost of Goods Sold",
          "Profit and Loss Account: Operating expenses and Net Profit",
          "Balance Sheet fundamentals: Assets, Liabilities, and Capital equity",
          "Understanding closing adjustments: Outstanding, Prepaid, Depreciation"
        ]
      }
    ],
    learningOutcomes: [
      "Understand the mechanics of the double-entry bookkeeping system",
      "Pass accurate journal entries for routine and complex trade transactions",
      "Construct and verify ledger balances and trial balance integrity",
      "Read and interpret simple business balance sheets and P&L summaries"
    ],
    targetAudience: [
      "Non-commerce graduates wanting to shift to accounting and office jobs",
      "Aspiring accounts trainees before enrolling in computerized accounting",
      "Self-employed individuals needing better clarity on their trade books"
    ],
    prerequisites: "Open to all learners. No prior accounting background required."
  },
  {
    id: "gst-practitioner-training",
    slug: "gst-practitioner-training",
    title: "GST Practitioner Training",
    category: "taxation",
    categoryLabel: "Taxation",
    shortDescription: "Comprehensive training in Goods and Services Tax law, registration procedures, tax invoices, return filing concepts, and input tax credit (ITC).",
    overview: "Understand the Indian Goods & Services Tax system with clear legal and practical clarity. This course explores GST structure, registration eligibility, composition schemes, invoicing rules, Input Tax Credit (ITC) mechanics, GSTR return concepts, and audit reconciliation fundamentals.",
    duration: "Contact for Course Details",
    mode: "Classroom & Case Studies",
    badge: "Tax Professional",
    featured: true,
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "GST Concepts & Framework",
        items: [
          "Constitutional background and structure of GST in India",
          "CGST, SGST, UTGST, and IGST differentiation",
          "Concept of Supply: Taxable, exempt, zero-rated, and composite supplies",
          "Reverse Charge Mechanism (RCM) basics"
        ]
      },
      {
        title: "Registration Fundamentals",
        items: [
          "Turnover thresholds for goods and service providers",
          "Mandatory registration criteria and documentation",
          "Regular taxpayer vs. Composition scheme rules",
          "Amendment, cancellation, and revocation of registration"
        ]
      },
      {
        title: "Tax Invoices & Credit Notes",
        items: [
          "Mandatory invoice particulars and HSN/SAC codes",
          "Time of supply and value of supply determinations",
          "Issuing Credit Notes, Debit Notes, and Delivery Challans",
          "E-Invoicing and E-Way Bill documentation rules"
        ]
      },
      {
        title: "Input Tax Credit (ITC) & Returns",
        items: [
          "Eligibility and conditions for claiming ITC",
          "Blocked credits under Section 17(5)",
          "Overview of GST returns: GSTR-1, GSTR-3B, and Annual GSTR-9",
          "Reconciliation between books and GSTR-2B"
        ]
      },
      {
        title: "Practical Compliance Scenarios",
        items: [
          "Handling tax payment mechanisms (Cash & Credit ledgers)",
          "Interest, late fees, and penalty calculations",
          "Common compliance mistakes made by small business dealers"
        ]
      }
    ],
    learningOutcomes: [
      "Explain the statutory requirements of the Indian GST regime clearly",
      "Prepare compliant GST tax invoices, credit notes, and delivery documents",
      "Calculate eligible Input Tax Credit and reconcile with portal reports",
      "Understand the workflow of GSTR-1 outward and GSTR-3B summary filings"
    ],
    targetAudience: [
      "Practicing accountants, tax consultants, and financial advisors",
      "B.Com / M.Com graduates aiming for tax consultancy roles",
      "Business managers handling vendor billing and invoice compliances"
    ],
    prerequisites: "Knowledge of basic accounting and business transactions."
  },
  {
    id: "itr-and-tds-fundamentals",
    slug: "itr-and-tds-fundamentals",
    title: "ITR & TDS Fundamentals",
    category: "taxation",
    categoryLabel: "Taxation",
    shortDescription: "Learn direct taxation concepts, TDS rates, deductibility, challan payments, Form 16/26AS reconciliation, and Income Tax Return preparation.",
    overview: "A vital direct tax training program exploring the essentials of Indian Income Tax. Master TDS deduction rules under key sections (salary, contractor, rent, professional fees), challan ITNS 281 payments, Form 26AS / AIS reconciliation, and the conceptual preparation of individual Income Tax Returns.",
    duration: "Contact for Course Details",
    mode: "Classroom & Case Studies",
    badge: "Direct Tax",
    featured: false,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Income Tax Framework & Concepts",
        items: [
          "Heads of income: Salary, House Property, Business/Profession, Capital Gains, Other Sources",
          "Old Tax Regime vs. New Tax Regime slab comparisons",
          "Standard deductions, Chapter VI-A deductions (80C, 80D, etc.)",
          "Gross total income vs. Total taxable income calculations"
        ]
      },
      {
        title: "TDS Fundamentals & Deductions",
        items: [
          "Concept and importance of Tax Deducted at Source (TDS)",
          "Key sections: 192 (Salary), 194C (Contractors), 194J (Professional fees), 194I (Rent)",
          "Threshold limits and applicable deduction rates",
          "TDS challan payment procedures (Challan 281)"
        ]
      },
      {
        title: "Tax Certificates & Portal Statements",
        items: [
          "Understanding Form 16 (Part A & B) for salaried individuals",
          "Form 16A for non-salary payments and Form 26AS verification",
          "Annual Information Statement (AIS) and Taxpayer Information Summary (TIS)",
          "Reconciling TDS credit with accounting books"
        ]
      },
      {
        title: "Return Preparation Concepts",
        items: [
          "Overview of return forms: ITR-1 (Sahaj), ITR-2, and ITR-4 (Sugam)",
          "Filing due dates, advance tax provisions, and self-assessment tax",
          "Handling tax refund workflows and verification methods",
          "Practical case studies for salaried and small business individuals"
        ]
      }
    ],
    learningOutcomes: [
      "Compute taxable income under the new and old tax regimes accurately",
      "Determine correct TDS rates and deposit timelines for business payments",
      "Cross-verify Form 26AS, AIS, and Form 16 before tax return preparation",
      "Understand the step-by-step structure for filing basic individual ITRs"
    ],
    targetAudience: [
      "Accounts executives managing company payroll and vendor payments",
      "Commerce students seeking practical direct taxation knowledge",
      "Individuals wanting clarity on personal tax computation and filings"
    ],
    prerequisites: "Basic accounting and financial literacy."
  },
  {
    id: "sap-fico-training",
    slug: "sap-fico-training",
    title: "SAP FICO End-User Training",
    category: "erp",
    categoryLabel: "ERP",
    shortDescription: "Specialized training on SAP Financial Accounting (FI) and Controlling (CO) core concepts, GUI navigation, and standard enterprise end-user workflows.",
    overview: "Get introduced to one of the world's leading enterprise resource planning systems. This program teaches the conceptual architecture of SAP FICO, standard SAP GUI navigation, transaction codes (T-Codes), general ledger postings, accounts payable/receivable workflows, and corporate financial reporting.",
    duration: "Contact for Course Details",
    mode: "Classroom & ERP Lab",
    badge: "Enterprise ERP",
    featured: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    topics: [
      {
        title: "Introduction to SAP FICO",
        items: [
          "What is ERP and the role of SAP in global enterprises?",
          "Core modules overview: FI (Financial Accounting) vs. CO (Controlling)",
          "Organizational structures: Client, Company Code, Chart of Accounts",
          "Enterprise finance process flows from purchase-to-pay and order-to-cash"
        ]
      },
      {
        title: "SAP Navigation Fundamentals",
        items: [
          "SAP GUI interface, login procedures, and session management",
          "Understanding SAP transaction codes (T-Codes)",
          "Using favourites, command field, system status, and user profile settings",
          "Standard SAP help functions and search shortcuts"
        ]
      },
      {
        title: "General Ledger (GL) End-User Operations",
        items: [
          "Master data review: Chart of Accounts and G/L Account Master records",
          "Document posting: FB50 / F-02 (Journal entries)",
          "Displaying and editing parked and posted documents (FB03)",
          "G/L balance display and line item reports (FS10N / FBL3N)"
        ]
      },
      {
        title: "Accounts Payable (AP) & Receivable (AR)",
        items: [
          "Vendor master data overview and invoice posting (FB60)",
          "Outgoing vendor payments and manual clearing (F-53)",
          "Customer master data overview and billing entry (FB70)",
          "Incoming customer payments and line item display (FBL5N)"
        ]
      },
      {
        title: "Practical Enterprise Scenarios",
        items: [
          "Period-end closing activity concepts",
          "Asset accounting fundamentals in SAP",
          "Cost center accounting basics (Controlling overview)",
          "Best practices for finance end-users in corporate setups"
        ]
      }
    ],
    learningOutcomes: [
      "Navigate the SAP GUI environment with confidence using standard T-Codes",
      "Process daily general ledger, vendor, and customer transactions accurately",
      "Execute standard financial line item reports and account balance queries",
      "Understand enterprise finance workflows followed by MNCs and corporate houses"
    ],
    targetAudience: [
      "Finance and commerce graduates targeting corporate & MNC finance positions",
      "Accountants wanting to upgrade from local accounting software to ERP systems",
      "Data and back-office executives preparing for enterprise roles"
    ],
    prerequisites: "Solid grounding in double-entry accounting principles."
  }
];
