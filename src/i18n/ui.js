/**
 * Interface text in English and Bangla. Content (services, projects, people)
 * lives in src/data; this file holds labels, headings and messages only.
 * Use with `t()` from useLanguage().
 */
export const ui = {
  nav: {
    home: { en: 'Home', bn: 'হোম' },
    about: { en: 'About', bn: 'আমাদের সম্পর্কে' },
    services: { en: 'Services', bn: 'সেবাসমূহ' },
    projects: { en: 'Projects', bn: 'প্রকল্প' },
    team: { en: 'Team', bn: 'টিম' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    getQuote: { en: 'Get a Quote', bn: 'কোটেশন নিন' },
    openMenu: { en: 'Open menu', bn: 'মেনু খুলুন' },
    closeMenu: { en: 'Close menu', bn: 'মেনু বন্ধ করুন' },
    call: { en: 'Call', bn: 'কল করুন' },
    whatsapp: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
    quote: { en: 'Get Quote', bn: 'কোটেশন' },
    switchLanguage: { en: 'বাংলায় দেখুন', bn: 'View in English' },
    mainNav: { en: 'Main navigation', bn: 'প্রধান মেনু' },
    quickActions: { en: 'Quick contact', bn: 'দ্রুত যোগাযোগ' },
    skipToContent: { en: 'Skip to content', bn: 'মূল অংশে যান' },
  },

  common: {
    learnMore: { en: 'Learn more', bn: 'বিস্তারিত' },
    viewProject: { en: 'View project', bn: 'প্রকল্প দেখুন' },
    all: { en: 'All', bn: 'সব' },
    completed: { en: 'Completed', bn: 'সম্পন্ন' },
    ongoing: { en: 'Ongoing', bn: 'চলমান' },
    sft: { en: 'sft', bn: 'বর্গফুট' },
    storeys: { en: 'storeys', bn: 'তলা' },
    loadError: {
      en: 'We could not load this section. Please refresh the page.',
      bn: 'এই অংশটি লোড করা যায়নি। পেজটি রিফ্রেশ করুন।',
    },
    empty: { en: 'Nothing to show here yet.', bn: 'এখানে এখনো কিছু নেই।' },
    loading: { en: 'Loading', bn: 'লোড হচ্ছে' },
    imageUnavailable: { en: 'Photo coming soon', bn: 'ছবি শীঘ্রই আসছে' },
  },

  hero: {
    eyebrow: { en: 'Construction & Engineering · Since 2012', bn: 'কনস্ট্রাকশন ও ইঞ্জিনিয়ারিং · ২০১২ সাল থেকে' },
    lead: {
      en: 'Reliable building, civil engineering and infrastructure work across Bangladesh, delivered on time with transparent costing.',
      bn: 'সারা বাংলাদেশে ভবন, সিভিল ও অবকাঠামো নির্মাণ। নির্ধারিত সময়ে, স্বচ্ছ হিসাবে।',
    },
    primaryCta: { en: 'Get a Free Site Visit', bn: 'ফ্রি সাইট ভিজিট নিন' },
    secondaryCta: { en: 'View Our Projects', bn: 'আমাদের প্রকল্প দেখুন' },
    trustLine: {
      en: '147 projects completed · 18 districts · Class-1 contractor',
      bn: '১৪৭টি প্রকল্প সম্পন্ন · ১৮ জেলা · প্রথম শ্রেণির ঠিকাদার',
    },
    imageAlt: {
      en: 'Workers on scaffolding at a high-rise construction site with a crane lifting materials',
      bn: 'বহুতল ভবনের নির্মাণ সাইটে কর্মরত শ্রমিক ও মালামাল তুলছে ক্রেন',
    },
  },

  trust: {
    heading: { en: 'Buildora in numbers', bn: 'সংখ্যায় বিল্ডোরা' },
    credentials: { en: 'Credentials', bn: 'স্বীকৃতি' },
  },

  servicesSection: {
    eyebrow: { en: 'Our services', bn: 'আমাদের সেবা' },
    title: { en: 'What we build', bn: 'আমরা যা নির্মাণ করি' },
    intro: {
      en: 'One team for design, approval and construction, so you deal with a single responsible company.',
      bn: 'নকশা, অনুমোদন ও নির্মাণ, সব কাজ এক টিমের হাতে। দায়িত্ব একটি প্রতিষ্ঠানের।',
    },
    viewAll: { en: 'View all services', bn: 'সব সেবা দেখুন' },
  },

  projectsSection: {
    eyebrow: { en: 'Selected projects', bn: 'নির্বাচিত প্রকল্প' },
    title: { en: 'Work we have handed over', bn: 'যেসব কাজ আমরা বুঝিয়ে দিয়েছি' },
    intro: {
      en: 'Homes, offices, factories and roads, each with its size, cost and timeline.',
      bn: 'বাড়ি, অফিস, কারখানা ও রাস্তা। প্রতিটির আকার, খরচ ও সময়সহ।',
    },
    viewAll: { en: 'View all projects', bn: 'সব প্রকল্প দেখুন' },
    filterLabel: { en: 'Filter projects by category', bn: 'ধরন অনুযায়ী প্রকল্প বাছাই' },
  },

  aboutSection: {
    eyebrow: { en: 'About Buildora', bn: 'বিল্ডোরা সম্পর্কে' },
    cta: { en: 'About our company', bn: 'আমাদের সম্পর্কে জানুন' },
  },

  processSection: {
    eyebrow: { en: 'How we work', bn: 'আমরা যেভাবে কাজ করি' },
    title: { en: 'Six clear steps from first call to handover', bn: 'প্রথম ফোন থেকে হস্তান্তর পর্যন্ত ছয়টি ধাপ' },
    intro: {
      en: 'You always know what happens next and what it will cost.',
      bn: 'এরপর কী হবে আর খরচ কত, তা আপনি সব সময় জানবেন।',
    },
  },

  testimonialsSection: {
    eyebrow: { en: 'Client stories', bn: 'ক্লায়েন্টদের কথা' },
    title: { en: 'What our clients say', bn: 'আমাদের ক্লায়েন্টরা যা বলেন' },
    mdEyebrow: { en: 'A word from our Managing Director', bn: 'ব্যবস্থাপনা পরিচালকের কথা' },
    previous: { en: 'Previous testimonial', bn: 'আগের মতামত' },
    next: { en: 'Next testimonial', bn: 'পরের মতামত' },
  },

  faqSection: {
    eyebrow: { en: 'Common questions', bn: 'সাধারণ প্রশ্ন' },
    title: { en: 'Before you decide', bn: 'সিদ্ধান্ত নেওয়ার আগে' },
    intro: {
      en: 'Straight answers on cost, approval and payment.',
      bn: 'খরচ, অনুমোদন ও পেমেন্ট নিয়ে সরাসরি উত্তর।',
    },
    seeAll: { en: 'See all questions', bn: 'সব প্রশ্ন দেখুন' },
    contactPrompt: { en: 'Have a different question?', bn: 'অন্য কোনো প্রশ্ন আছে?' },
    contactCta: { en: 'Ask an engineer', bn: 'ইঞ্জিনিয়ারকে জিজ্ঞাসা করুন' },
  },

  cta: {
    title: {
      en: 'Planning to build? Get a free site visit and estimate.',
      bn: 'বাড়ি বা ভবন করার কথা ভাবছেন? ফ্রি সাইট ভিজিট ও খরচের হিসাব নিন।',
    },
    text: {
      en: 'Talk to an engineer, not a salesperson. We reply on WhatsApp within 2 hours during office time.',
      bn: 'সেলসম্যান নয়, সরাসরি ইঞ্জিনিয়ারের সঙ্গে কথা বলুন। অফিস সময়ে ২ ঘণ্টার মধ্যে হোয়াটসঅ্যাপে উত্তর পাবেন।',
    },
    primary: { en: 'Get a Free Quote', bn: 'ফ্রি কোটেশন নিন' },
    call: { en: 'Call', bn: 'কল করুন' },
    imageAlt: {
      en: 'Steel reinforcement laid out for a foundation slab',
      bn: 'ফাউন্ডেশন স্ল্যাবের জন্য বিছানো রড',
    },
  },

  footer: {
    company: { en: 'Company', bn: 'প্রতিষ্ঠান' },
    services: { en: 'Services', bn: 'সেবাসমূহ' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    openMap: { en: 'Open in Google Maps', bn: 'গুগল ম্যাপে দেখুন' },
    profile: { en: 'Company profile (PDF)', bn: 'কোম্পানি প্রোফাইল (পিডিএফ)' },
    rights: { en: 'All rights reserved.', bn: 'সর্বস্বত্ব সংরক্ষিত।' },
    credit: { en: 'Designed & developed by GrowX', bn: 'ডিজাইন ও ডেভেলপমেন্ট: GrowX' },
    demo: {
      en: 'Demo website. Company, projects and people shown here are sample content.',
      bn: 'ডেমো ওয়েবসাইট। এখানে দেখানো প্রতিষ্ঠান, প্রকল্প ও ব্যক্তিরা নমুনা কনটেন্ট।',
    },
  },

  pages: {
    home: {
      seoTitle: { en: 'Buildora – Construction Company in Dhaka, Bangladesh', bn: 'বিল্ডোরা – ঢাকার কনস্ট্রাকশন কোম্পানি' },
      seoDescription: {
        en: 'Trusted building, civil and road contractor in Dhaka since 2012. Joint venture, RAJUK design support and interior work. Get a free site visit.',
        bn: '২০১২ সাল থেকে ঢাকার নির্ভরযোগ্য বিল্ডিং, সিভিল ও রাস্তা নির্মাণ প্রতিষ্ঠান। জয়েন্ট ভেঞ্চার, রাজউক নকশা সহায়তা ও ইন্টেরিয়র। ফ্রি সাইট ভিজিট নিন।',
      },
    },
    about: {
      eyebrow: { en: 'About us', bn: 'আমাদের সম্পর্কে' },
      title: { en: 'Fourteen years of building in Bangladesh', bn: 'বাংলাদেশে নির্মাণে চৌদ্দ বছর' },
      lead: {
        en: 'A contractor run by engineers, known for written agreements and on-time handovers.',
        bn: 'ইঞ্জিনিয়ারদের পরিচালিত প্রতিষ্ঠান। লিখিত চুক্তি ও সময়মতো হস্তান্তরের জন্য পরিচিত।',
      },
      seoTitle: { en: 'About Buildora – 14 Years of Building in Bangladesh', bn: 'বিল্ডোরা সম্পর্কে – নির্মাণে ১৪ বছর' },
      seoDescription: {
        en: 'Buildora is an engineer-led construction company in Dhaka with 147 completed projects in 18 districts since 2012.',
        bn: 'বিল্ডোরা ঢাকার ইঞ্জিনিয়ার-পরিচালিত নির্মাণ প্রতিষ্ঠান। ২০১২ সাল থেকে ১৮ জেলায় ১৪৭টি প্রকল্প সম্পন্ন।',
      },
      valuesTitle: { en: 'What guides us', bn: 'আমাদের পথনির্দেশ' },
      timelineEyebrow: { en: 'Our journey', bn: 'আমাদের পথচলা' },
      timelineTitle: { en: 'From one building to 18 districts', bn: 'একটি ভবন থেকে ১৮ জেলায়' },
      credentialsEyebrow: { en: 'Credentials', bn: 'স্বীকৃতি ও নিবন্ধন' },
      credentialsTitle: { en: 'Licensed, enlisted and compliant', bn: 'লাইসেন্সধারী, তালিকাভুক্ত ও নিয়ম মেনে চলা' },
      credentialsText: {
        en: 'Copies of our trade licence, enlistment and tax documents are available on request for tender and procurement checks.',
        bn: 'টেন্ডার ও প্রকিউরমেন্ট যাচাইয়ের জন্য আমাদের ট্রেড লাইসেন্স, তালিকাভুক্তি ও কর সংক্রান্ত কাগজপত্রের কপি চাইলে দেওয়া হয়।',
      },
      teamCta: { en: 'Meet the team', bn: 'টিমের সঙ্গে পরিচিত হোন' },
    },
    services: {
      eyebrow: { en: 'Services', bn: 'সেবাসমূহ' },
      title: { en: 'Construction and engineering services', bn: 'নির্মাণ ও ইঞ্জিনিয়ারিং সেবা' },
      lead: {
        en: 'From a soil test to the final coat of paint, handled by one responsible team.',
        bn: 'সয়েল টেস্ট থেকে শেষ রঙের প্রলেপ পর্যন্ত, একটি দায়িত্বশীল টিমের হাতে।',
      },
      seoTitle: { en: 'Construction & Civil Engineering Services in Dhaka | Buildora', bn: 'ঢাকায় নির্মাণ ও সিভিল ইঞ্জিনিয়ারিং সেবা | বিল্ডোরা' },
      seoDescription: {
        en: 'Building construction, land owner joint venture, structural design, RAJUK approval support, road work, interior and steel factory sheds in Bangladesh.',
        bn: 'বিল্ডিং নির্মাণ, জয়েন্ট ভেঞ্চার, স্ট্রাকচারাল ডিজাইন, রাজউক অনুমোদন সহায়তা, রাস্তা, ইন্টেরিয়র ও স্টিল ফ্যাক্টরি শেড।',
      },
      includes: { en: 'What is included', bn: 'যা যা অন্তর্ভুক্ত' },
      quoteCta: { en: 'Get a quote for this', bn: 'এই সেবার কোটেশন নিন' },
    },
    projects: {
      eyebrow: { en: 'Projects', bn: 'প্রকল্প' },
      title: { en: 'Our projects', bn: 'আমাদের প্রকল্প' },
      lead: {
        en: 'Completed and ongoing work across residential, commercial, industrial and infrastructure sectors.',
        bn: 'আবাসিক, বাণিজ্যিক, শিল্প ও অবকাঠামো খাতে সম্পন্ন ও চলমান কাজ।',
      },
      seoTitle: { en: 'Our Projects – Residential, Commercial & Road Works | Buildora', bn: 'আমাদের প্রকল্প – আবাসিক, বাণিজ্যিক ও রাস্তা | বিল্ডোরা' },
      seoDescription: {
        en: 'See Buildora projects in Dhaka, Gazipur, Sylhet and Narayanganj with size, budget and timeline for each.',
        bn: 'ঢাকা, গাজীপুর, সিলেট ও নারায়ণগঞ্জে বিল্ডোরার প্রকল্প। প্রতিটির আকার, বাজেট ও সময়সহ।',
      },
      count: { en: 'projects', bn: 'টি প্রকল্প' },
    },
    team: {
      eyebrow: { en: 'Our team', bn: 'আমাদের টিম' },
      title: { en: 'The people who build your project', bn: 'যাঁরা আপনার প্রকল্প গড়েন' },
      lead: {
        en: 'Engineers, architects and site staff who stay with a project from the first drawing to handover.',
        bn: 'ইঞ্জিনিয়ার, স্থপতি ও সাইট কর্মী, যাঁরা প্রথম নকশা থেকে হস্তান্তর পর্যন্ত প্রকল্পের সঙ্গে থাকেন।',
      },
      seoTitle: { en: 'Our Team – Engineers & Architects | Buildora', bn: 'আমাদের টিম – ইঞ্জিনিয়ার ও স্থপতি | বিল্ডোরা' },
      seoDescription: {
        en: 'Meet the engineers, architects and site managers behind Buildora projects.',
        bn: 'বিল্ডোরার প্রকল্পের পেছনের ইঞ্জিনিয়ার, স্থপতি ও সাইট ম্যানেজারদের সঙ্গে পরিচিত হোন।',
      },
      leadership: { en: 'Leadership', bn: 'নেতৃত্ব' },
      members: { en: 'Engineers and staff', bn: 'ইঞ্জিনিয়ার ও কর্মকর্তা' },
    },
    contact: {
      eyebrow: { en: 'Contact', bn: 'যোগাযোগ' },
      title: { en: 'Get a free quote', bn: 'ফ্রি কোটেশন নিন' },
      lead: {
        en: 'Tell us about your project in three short steps. An engineer will call you back within one working day.',
        bn: 'তিনটি ছোট ধাপে আপনার প্রকল্পের কথা জানান। এক কর্মদিবসের মধ্যে একজন ইঞ্জিনিয়ার আপনাকে ফোন করবেন।',
      },
      seoTitle: { en: 'Get a Free Construction Quote – Buildora Dhaka', bn: 'ফ্রি নির্মাণ কোটেশন – বিল্ডোরা ঢাকা' },
      seoDescription: {
        en: 'Request a free site visit and construction estimate from Buildora. Office in Banani, Dhaka. Open Saturday to Thursday.',
        bn: 'বিল্ডোরা থেকে ফ্রি সাইট ভিজিট ও নির্মাণ খরচের হিসাব নিন। অফিস বনানী, ঢাকা। শনি থেকে বৃহস্পতি খোলা।',
      },
      callTitle: { en: 'Call us', bn: 'ফোন করুন' },
      whatsappTitle: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
      emailTitle: { en: 'Email', bn: 'ইমেইল' },
      visitTitle: { en: 'Visit our office', bn: 'অফিসে আসুন' },
      hoursTitle: { en: 'Office hours', bn: 'অফিস সময়' },
      mapTitle: { en: 'Buildora office location on Google Maps', bn: 'গুগল ম্যাপে বিল্ডোরা অফিসের অবস্থান' },
      detailsHeading: { en: 'Other ways to reach us', bn: 'যোগাযোগের অন্যান্য উপায়' },
    },
    notFound: {
      eyebrow: { en: 'Error 404', bn: 'ত্রুটি ৪০৪' },
      title: { en: 'This page is not built yet', bn: 'এই পেজটি এখনো তৈরি হয়নি' },
      lead: {
        en: 'The page may have moved, or the address may be mistyped.',
        bn: 'পেজটি হয়তো সরানো হয়েছে, অথবা ঠিকানাটি ভুল লেখা হয়েছে।',
      },
      home: { en: 'Back to home', bn: 'হোমে ফিরে যান' },
      seoTitle: { en: 'Page not found | Buildora', bn: 'পেজ পাওয়া যায়নি | বিল্ডোরা' },
    },
  },

  project: {
    client: { en: 'Client', bn: 'ক্লায়েন্ট' },
    category: { en: 'Category', bn: 'ধরন' },
    location: { en: 'Location', bn: 'অবস্থান' },
    area: { en: 'Floor area', bn: 'ফ্লোর এরিয়া' },
    scope: { en: 'Scope', bn: 'পরিসর' },
    storeys: { en: 'Storeys', bn: 'তলা' },
    budget: { en: 'Project value', bn: 'প্রকল্প মূল্য' },
    duration: { en: 'Timeline', bn: 'সময়কাল' },
    status: { en: 'Status', bn: 'অবস্থা' },
    facts: { en: 'Project facts', bn: 'প্রকল্পের তথ্য' },
    overview: { en: 'Overview', bn: 'সংক্ষিপ্ত বিবরণ' },
    challenge: { en: 'The challenge', bn: 'চ্যালেঞ্জ' },
    solution: { en: 'Our solution', bn: 'আমাদের সমাধান' },
    gallery: { en: 'Photos', bn: 'ছবি' },
    openPhoto: { en: 'Open photo', bn: 'ছবি বড় করে দেখুন' },
    milestones: { en: 'Milestones', bn: 'মাইলফলক' },
    progress: { en: 'Progress', bn: 'অগ্রগতি' },
    related: { en: 'More projects', bn: 'আরও প্রকল্প' },
    back: { en: 'All projects', bn: 'সব প্রকল্প' },
    similarTitle: { en: 'Planning something similar?', bn: 'এমন কিছু করার পরিকল্পনা করছেন?' },
    similarText: {
      en: 'Send us your location and size. We will reply with a first estimate.',
      bn: 'আপনার জমির অবস্থান ও আকার পাঠান। আমরা প্রাথমিক হিসাব জানাব।',
    },
    notFoundTitle: { en: 'Project not found', bn: 'প্রকল্পটি পাওয়া যায়নি' },
  },

  quote: {
    formTitle: { en: 'Request a quote', bn: 'কোটেশনের অনুরোধ' },
    stepOf: { en: 'Step {current} of {total}', bn: 'ধাপ {current} / {total}' },
    step1: { en: 'What do you want to build?', bn: 'আপনি কী নির্মাণ করতে চান?' },
    step2: { en: 'Project details', bn: 'প্রকল্পের বিবরণ' },
    step3: { en: 'Your contact details', bn: 'আপনার যোগাযোগের তথ্য' },
    types: [
      { key: 'residential', label: { en: 'Residential building', bn: 'আবাসিক ভবন' } },
      { key: 'joint_venture', label: { en: 'Joint venture on my land', bn: 'আমার জমিতে জয়েন্ট ভেঞ্চার' } },
      { key: 'commercial', label: { en: 'Commercial building', bn: 'বাণিজ্যিক ভবন' } },
      { key: 'industrial', label: { en: 'Factory shed / steel structure', bn: 'ফ্যাক্টরি শেড / স্টিল স্ট্রাকচার' } },
      { key: 'road', label: { en: 'Road / infrastructure', bn: 'রাস্তা / অবকাঠামো' } },
      { key: 'interior', label: { en: 'Interior / renovation', bn: 'ইন্টেরিয়র / রেনোভেশন' } },
    ],
    location: { en: 'Project location', bn: 'প্রকল্পের অবস্থান' },
    locationHint: { en: 'Area and district, e.g. Uttara, Dhaka', bn: 'এলাকা ও জেলা, যেমন উত্তরা, ঢাকা' },
    size: { en: 'Land or floor size', bn: 'জমি বা ফ্লোরের আকার' },
    sizeHint: { en: 'e.g. 5 katha or 2,400 sft', bn: 'যেমন ৫ কাঠা বা ২,৪০০ বর্গফুট' },
    budget: { en: 'Approximate budget', bn: 'আনুমানিক বাজেট' },
    budgets: [
      { key: 'under_50_lakh', label: { en: 'Under ৳50 lakh', bn: '৫০ লাখ টাকার নিচে' } },
      { key: '50_lakh_2_crore', label: { en: '৳50 lakh – ৳2 crore', bn: '৫০ লাখ – ২ কোটি টাকা' } },
      { key: '2_10_crore', label: { en: '৳2 crore – ৳10 crore', bn: '২ কোটি – ১০ কোটি টাকা' } },
      { key: 'above_10_crore', label: { en: 'Above ৳10 crore', bn: '১০ কোটি টাকার বেশি' } },
      { key: 'not_sure', label: { en: 'Not sure yet', bn: 'এখনো নিশ্চিত নই' } },
    ],
    start: { en: 'When do you want to start?', bn: 'কবে শুরু করতে চান?' },
    starts: [
      { key: 'within_3_months', label: { en: 'Within 3 months', bn: '৩ মাসের মধ্যে' } },
      { key: '3_6_months', label: { en: 'In 3 to 6 months', bn: '৩ থেকে ৬ মাসের মধ্যে' } },
      { key: 'later', label: { en: 'Later / just planning', bn: 'পরে / শুধু পরিকল্পনা করছি' } },
    ],
    name: { en: 'Your name', bn: 'আপনার নাম' },
    phone: { en: 'Mobile number', bn: 'মোবাইল নম্বর' },
    phoneHint: { en: '11 digits, e.g. 017XXXXXXXX', bn: '১১ সংখ্যা, যেমন 017XXXXXXXX' },
    email: { en: 'Email (optional)', bn: 'ইমেইল (ঐচ্ছিক)' },
    message: { en: 'Anything else we should know? (optional)', bn: 'আর কিছু জানাতে চান? (ঐচ্ছিক)' },
    select: { en: 'Select an option', bn: 'একটি বেছে নিন' },
    next: { en: 'Continue', bn: 'পরের ধাপ' },
    back: { en: 'Back', bn: 'আগের ধাপ' },
    submit: { en: 'Send request', bn: 'অনুরোধ পাঠান' },
    sending: { en: 'Sending…', bn: 'পাঠানো হচ্ছে…' },
    privacy: {
      en: 'We use your number only to reply about this request.',
      bn: 'আপনার নম্বর শুধু এই অনুরোধের উত্তর দিতে ব্যবহার করা হবে।',
    },
    errors: {
      type: { en: 'Please choose a project type.', bn: 'একটি প্রকল্পের ধরন বেছে নিন।' },
      location: { en: 'Please enter the project location.', bn: 'প্রকল্পের অবস্থান লিখুন।' },
      budget: { en: 'Please choose a budget range.', bn: 'একটি বাজেট বেছে নিন।' },
      name: { en: 'Please enter your name.', bn: 'আপনার নাম লিখুন।' },
      phone: {
        en: 'Enter a valid Bangladeshi mobile number, e.g. 017XXXXXXXX.',
        bn: 'সঠিক বাংলাদেশি মোবাইল নম্বর লিখুন, যেমন 017XXXXXXXX।',
      },
      email: { en: 'Enter a valid email address or leave it empty.', bn: 'সঠিক ইমেইল লিখুন অথবা খালি রাখুন।' },
      submit: {
        en: 'We could not send your request. Please try again or call us.',
        bn: 'আপনার অনুরোধ পাঠানো যায়নি। আবার চেষ্টা করুন অথবা ফোন করুন।',
      },
    },
    successTitle: { en: 'Thank you. We have your request.', bn: 'ধন্যবাদ। আপনার অনুরোধ আমরা পেয়েছি।' },
    successText: {
      en: 'An engineer will call you within one working day (Saturday to Thursday).',
      bn: 'এক কর্মদিবসের মধ্যে (শনি থেকে বৃহস্পতি) একজন ইঞ্জিনিয়ার আপনাকে ফোন করবেন।',
    },
    sendAnother: { en: 'Send another request', bn: 'আরেকটি অনুরোধ পাঠান' },
  },
}
