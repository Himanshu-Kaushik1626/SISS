// ============================================================
// SISS Website Configuration
// ============================================================
// Change your company details here. Everything on the site
// reads from this single CONFIG object.
// ============================================================

export const CONFIG = {
  // Company
  companyName: 'Shivay India Securitas Services',
  shortName: 'SISS',
  tagline: 'Professional Security for a Safer Tomorrow',
  taglineAlt: 'A Safer Today, A Better Tomorrow',

  // Contact
  phone: '9528474547',

  phoneRaw: '9528474547',
  whatsapp: '9528474547',
  email: 'info@shivaysecuritas.com',

  // Address
  address:
    'SF 214A, 2nd Floor, Gaur City Center, Sector 4, Greater Noida West, Uttar Pradesh',
  serviceArea: 'PAN India',
  workingHours: 'Mon – Sat: 9:00 AM – 7:00 PM | Sun: By Appointment',

  // Google Map embed URL for Gaur City Center, Sector 4, Greater Noida West
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456!2d77.4252!3d28.5887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8e6e1f2e3d7%3A0x7e8a2f2b5c6d4a1e!2sGaur%20City%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',

  // Stats (animated counters)
  stats: [
    { value: 100, suffix: '+', label: 'Happy Clients' },
    { value: 2000, suffix: '+', label: 'Trained Staff' },
    { value: 35, suffix: '+', label: 'Cities Served' },
    { value: 5, suffix: '+', label: 'Years of Experience' },
  ],

  // Social Links (placeholders – update with real URLs)
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
    youtube: '#',
  },

  // Logo path
  logoPath: '/assets/logo.png',

  // WhatsApp prefilled greeting
  whatsappGreeting:
    "Hello SISS! I visited your website and I'm interested in your services. Please share more details.",
} as const;

// ============================================================
// Service categories
// ============================================================
export type ServiceCategory = 'security' | 'manpower' | 'facility';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: ServiceCategory;
}

export const SERVICES: ServiceItem[] = [
  // Security
  {
    id: 'security-guards',
    name: 'Security Guards',
    description:
      'Trained and uniformed security personnel for premises protection, access control and surveillance.',
    icon: 'shield',
    category: 'security',
  },
  {
    id: 'ex-servicemen-security',
    name: 'Ex-Servicemen Security',
    description:
      'Disciplined ex-defence personnel bringing military-grade vigilance and professionalism.',
    icon: 'medal',
    category: 'security',
  },
  {
    id: 'armed-guard',
    name: 'Armed Guard / Gunman',
    description:
      'Licensed armed security for high-risk environments, subject to applicable laws and licensing requirements.',
    icon: 'target',
    category: 'security',
  },
  {
    id: 'lady-security',
    name: 'Lady Security',
    description:
      'Trained female security officers for women-focused environments, events and access checkpoints.',
    icon: 'user-check',
    category: 'security',
  },
  {
    id: 'bouncers',
    name: 'Bouncers',
    description:
      'Physically trained personnel for crowd management, event security and access control.',
    icon: 'users',
    category: 'security',
  },
  {
    id: 'security-supervisor',
    name: 'Security Supervisor',
    description:
      'Experienced supervisors for team management, shift coordination and on-site reporting.',
    icon: 'clipboard-check',
    category: 'security',
  },
  {
    id: 'personal-security',
    name: 'Personal Security',
    description:
      'Close protection officers (PSOs) for individuals, executives and VIPs.',
    icon: 'user-shield',
    category: 'security',
  },
  {
    id: 'event-security',
    name: 'Event Security',
    description:
      'Comprehensive security planning and deployment for events, exhibitions and gatherings.',
    icon: 'calendar-check',
    category: 'security',
  },
  {
    id: 'residential-security',
    name: 'Residential Security',
    description:
      'Round-the-clock security for housing societies, gated communities and residential complexes.',
    icon: 'home',
    category: 'security',
  },
  {
    id: 'industrial-security',
    name: 'Industrial Security',
    description:
      'Specialized security for factories, warehouses, plants and manufacturing units.',
    icon: 'factory',
    category: 'security',
  },
  // Manpower
  {
    id: 'housekeeping-staff',
    name: 'Housekeeping Staff',
    description:
      'Trained housekeeping personnel for offices, hospitals, hotels and residential complexes.',
    icon: 'sparkles',
    category: 'manpower',
  },
  {
    id: 'helper-peon',
    name: 'Helper / Peon',
    description:
      'General office helpers, peons and support staff for day-to-day operations.',
    icon: 'hand-helping',
    category: 'manpower',
  },
  {
    id: 'skilled-workers',
    name: 'Skilled Workers',
    description:
      'Electricians, plumbers, technicians and other skilled tradespeople for facility needs.',
    icon: 'wrench',
    category: 'manpower',
  },
  {
    id: 'unskilled-workers',
    name: 'Unskilled Workers',
    description:
      'General labour for loading, cleaning, construction support and miscellaneous tasks.',
    icon: 'hard-hat',
    category: 'manpower',
  },
  {
    id: 'facility-management',
    name: 'Facility Management Staff',
    description:
      'Complete facility management teams for building operations and maintenance.',
    icon: 'building',
    category: 'facility',
  },
  {
    id: 'nurse-staff',
    name: 'Nurse Staff',
    description:
      'Qualified nursing staff for hospitals, clinics, corporate offices and elderly care.',
    icon: 'heart-pulse',
    category: 'manpower',
  },
  {
    id: 'office-support',
    name: 'Office Support Staff',
    description:
      'Receptionists, front-desk personnel, data-entry operators and administrative support.',
    icon: 'briefcase',
    category: 'manpower',
  },
  {
    id: 'petrol-pump-manpower',
    name: 'Petrol Pump Manpower',
    description:
      'Trained fuel station attendants with safety awareness and customer service skills.',
    icon: 'fuel',
    category: 'manpower',
  },
  {
    id: 'custom-manpower',
    name: 'Custom Manpower',
    description:
      'Tailored manpower solutions designed around your specific staffing requirements.',
    icon: 'settings',
    category: 'manpower',
  },
];

// ============================================================
// Industries
// ============================================================
export interface IndustryItem {
  name: string;
  description: string;
  icon: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    name: 'Residential Societies',
    description:
      'Gated communities, housing complexes and apartment security.',
    icon: 'home',
  },
  {
    name: 'Corporate Offices',
    description: 'Front-desk security, access control and surveillance.',
    icon: 'building-2',
  },
  {
    name: 'Factories & Industries',
    description: 'Perimeter security, gate management and shift-based guarding.',
    icon: 'factory',
  },
  {
    name: 'Hospitals & Healthcare',
    description: 'Patient-safe security, nursing and housekeeping staff.',
    icon: 'hospital',
  },
  {
    name: 'Schools & Colleges',
    description: 'Campus safety, visitor management and event security.',
    icon: 'graduation-cap',
  },
  {
    name: 'Malls & Showrooms',
    description: 'Floor security, crowd management and theft prevention.',
    icon: 'shopping-bag',
  },
  {
    name: 'Hotels & Hospitality',
    description: 'Guest safety, concierge security and housekeeping.',
    icon: 'hotel',
  },
  {
    name: 'Petrol Pumps',
    description: 'Trained attendants with safety protocols and customer care.',
    icon: 'fuel',
  },
  {
    name: 'Warehouses',
    description: 'Inventory protection, access control and night patrolling.',
    icon: 'warehouse',
  },
  {
    name: 'Construction Sites',
    description: 'Material security, entry management and worker safety.',
    icon: 'hard-hat',
  },
];

// ============================================================
// Process Steps
// ============================================================
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Requirement',
    description:
      'We understand your security and manpower needs through a detailed consultation.',
    icon: 'clipboard-list',
  },
  {
    step: 2,
    title: 'Site Survey',
    description:
      'Our team visits your location to assess the environment and requirements.',
    icon: 'map-pin',
  },
  {
    step: 3,
    title: 'Staff Selection',
    description:
      'We handpick trained and verified personnel matching your specific needs.',
    icon: 'user-check',
  },
  {
    step: 4,
    title: 'Training & Briefing',
    description:
      'Selected staff undergo site-specific training and detailed briefing.',
    icon: 'book-open',
  },
  {
    step: 5,
    title: 'Deployment',
    description:
      'Personnel are deployed with uniforms, equipment and clear SOPs.',
    icon: 'rocket',
  },
  {
    step: 6,
    title: 'Supervision',
    description:
      'Regular inspections, feedback loops and quality audits ensure service excellence.',
    icon: 'eye',
  },
];

// ============================================================
// Training Modules
// ============================================================
export const TRAINING_MODULES = [
  {
    title: 'Personnel Verification',
    description: 'Thorough background checks, police verification and document authentication.',
    icon: 'fingerprint',
  },
  {
    title: 'Grooming & Discipline',
    description: 'Uniform standards, punctuality training and professional conduct.',
    icon: 'user-cog',
  },
  {
    title: 'Security Awareness',
    description: 'Threat assessment, access control protocols and surveillance techniques.',
    icon: 'shield-alert',
  },
  {
    title: 'Emergency Response',
    description: 'Crisis management, evacuation procedures and incident reporting.',
    icon: 'siren',
  },
  {
    title: 'Fire Safety Awareness',
    description: 'Fire extinguisher operation, evacuation drills and prevention protocols.',
    icon: 'flame',
  },
  {
    title: 'First Aid Awareness',
    description: 'Basic medical response, CPR fundamentals and trauma care.',
    icon: 'heart-pulse',
  },
  {
    title: 'Communication',
    description: 'Client interaction, reporting chains and professional language skills.',
    icon: 'message-circle',
  },
  {
    title: 'Site-Specific Briefing',
    description: 'Custom training for each deployment site covering unique requirements.',
    icon: 'map',
  },
];

// ============================================================
// Why Choose Us
// ============================================================
export const WHY_CHOOSE_US = [
  {
    title: 'Professional Staff',
    description: 'Trained, verified and well-groomed personnel for every assignment.',
    icon: 'award',
  },
  {
    title: 'Client-Focused Support',
    description: 'Dedicated account management and responsive issue resolution.',
    icon: 'headphones',
  },
  {
    title: 'Regular Supervision',
    description: 'On-site inspections, performance audits and continuous quality checks.',
    icon: 'eye',
  },
  {
    title: 'Customized Deployment',
    description: 'Tailored solutions designed around your specific site and needs.',
    icon: 'settings',
  },
  {
    title: 'Clear Communication',
    description: 'Transparent reporting, regular updates and open feedback channels.',
    icon: 'message-square',
  },
  {
    title: 'Service Continuity',
    description: 'Backup staff, replacement policies and uninterrupted service delivery.',
    icon: 'refresh-cw',
  },
];

// ============================================================
// FAQ
// ============================================================
export const FAQ_DATA = [
  {
    question: 'What areas does SISS serve?',
    answer:
      'SISS provides security and manpower services PAN India. We have a strong presence in Delhi-NCR, Uttar Pradesh, and are rapidly expanding to 35+ cities across the country.',
  },
  {
    question: 'How quickly can staff be deployed?',
    answer:
      'For standard requirements, we can deploy trained staff within 48–72 hours. For urgent or emergency needs, we can arrange deployment within 24 hours depending on location and availability.',
  },
  {
    question: 'Are your staff members verified?',
    answer:
      'Yes, all personnel undergo thorough background checks including police verification, Aadhaar validation, address verification, and reference checks from previous employers.',
  },
  {
    question: 'What is the minimum contract duration?',
    answer:
      'We offer flexible contract terms — from short-term event-based deployments (as few as a single day) to monthly and long-term annual contracts. Terms are customized to your needs.',
  },
  {
    question: 'Do you provide armed/gunman security? What about licensing?',
    answer:
      'Yes, we provide licensed armed guards and gunmen. All armed security personnel hold valid arms licenses as per the Arms Act and local police regulations. Licensing and compliance are fully managed by SISS.',
  },
  {
    question: 'How do I get a quote for services?',
    answer:
      'You can get a free quote by filling out our booking form on this website, calling us directly, or sending us a message on WhatsApp. We typically respond within a few hours with a customized proposal.',
  },
];

// ============================================================
// Testimonials (placeholder – owner can edit)
// ============================================================
export const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'Facility Manager, Green Valley Society',
    content:
      'SISS has been managing our residential complex security for over two years. Their guards are disciplined, well-groomed, and always punctual. The supervisor visits weekly to ensure everything runs smoothly.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Director, TechNova Solutions',
    content:
      'We hired SISS for our corporate office security and housekeeping staff. Their team is professional, responsive, and the quality of service has been consistently excellent. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Owner, Verma Industrial Works',
    content:
      'Finding reliable security for our factory was a challenge until we partnered with SISS. Their ex-servicemen guards bring unmatched discipline. Staff replacement is quick and hassle-free.',
    rating: 5,
  },
];

// ============================================================
// Hero Slides
// ============================================================
export const HERO_SLIDES = [
  {
    image: '/assets/slide1.jpg',
    heading: 'Professional Security for a Safer Tomorrow',
    subheading:
      'Trained guards, disciplined deployment and round-the-clock protection for your premises.',
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #1565d8 50%, #07162b 100%)',
  },
  {
    image: '/assets/slide2.jpg',
    heading: 'Trained Manpower. Reliable Service.',
    subheading:
      'From housekeeping to skilled workers — dependable staffing solutions tailored to your needs.',
    gradient: 'linear-gradient(135deg, #07162b 0%, #0d3b7a 50%, #0a1f3d 100%)',
  },
  {
    image: '/assets/slide3.jpg',
    heading: 'Discipline You Can Trust – Ex-Servicemen Security',
    subheading:
      'Military-grade professionalism with verified ex-defence personnel safeguarding your assets.',
    gradient: 'linear-gradient(135deg, #0a1f3d 0%, #14458a 50%, #07162b 100%)',
  },
];

// ============================================================
// Navigation
// ============================================================
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Why SISS', href: '#why-us' },
  { label: 'Book a Service', href: '#booking' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

// ============================================================
// Form Options
// ============================================================
export const SHIFT_OPTIONS = ['Day', 'Night', '24 Hours', 'Rotational'];
export const DURATION_OPTIONS = ['Short term', 'Monthly', 'Long-term contract'];
export const SITE_TYPES = [
  'Society',
  'Office',
  'Factory',
  'Hospital',
  'School',
  'Mall',
  'Hotel',
  'Petrol Pump',
  'Warehouse',
  'Construction',
  'Event',
  'Other',
];

export const JOB_POSITIONS = [
  'Security Guard',
  'Ex-Serviceman',
  'Gunman / Armed Guard',
  'Lady Security',
  'Bouncer',
  'Supervisor',
  'Housekeeping',
  'Helper / Peon',
  'Skilled Worker',
  'Unskilled Worker',
  'Nurse Staff',
  'Office Support',
  'Facility Staff',
  'Other',
];
