/**
 * Demo content. Field names match the future Laravel `ServiceResource`.
 * `icon` is a key resolved in components/ui/ServiceIcon.jsx.
 */
export const services = [
  {
    id: 1,
    slug: 'building-construction',
    icon: 'building',
    is_featured: true,
    sort_order: 1,
    title: { en: 'Building Construction', bn: 'বিল্ডিং নির্মাণ' },
    summary: {
      en: 'Residential and commercial buildings from 6 to 14 storeys, built to BNBC 2020.',
      bn: '৬ থেকে ১৪ তলা আবাসিক ও বাণিজ্যিক ভবন, বিএনবিসি ২০২০ অনুযায়ী নির্মাণ।',
    },
    description: {
      en: 'We take a building from soil test to handover with our own engineers on site every day. You get a written schedule, a bill of quantities you can check line by line, and a progress report with photos each month.',
      bn: 'সয়েল টেস্ট থেকে হ্যান্ডওভার পর্যন্ত পুরো কাজ আমাদের নিজস্ব ইঞ্জিনিয়ারদের তত্ত্বাবধানে হয়। আপনি পাবেন লিখিত সময়সূচি, লাইন ধরে মিলিয়ে দেখার মতো বিওকিউ এবং প্রতি মাসে ছবিসহ অগ্রগতির রিপোর্ট।',
    },
    features: [
      { en: 'Soil test and pile foundation', bn: 'সয়েল টেস্ট ও পাইল ফাউন্ডেশন' },
      { en: 'Structure, brickwork and finishing', bn: 'স্ট্রাকচার, গাঁথুনি ও ফিনিশিং' },
      { en: 'Lab-tested rod, cement and concrete', bn: 'ল্যাবে পরীক্ষিত রড, সিমেন্ট ও কংক্রিট' },
      { en: 'Monthly photo progress reports', bn: 'প্রতি মাসে ছবিসহ অগ্রগতির রিপোর্ট' },
    ],
    image: '/images/hero/construction-site-high-rise-bangladesh.webp',
    image_alt: {
      en: 'High-rise residential building under construction with workers on scaffolding',
      bn: 'নির্মাণাধীন বহুতল আবাসিক ভবনে কর্মরত শ্রমিক',
    },
  },
  {
    id: 2,
    slug: 'land-owner-joint-venture',
    icon: 'handshake',
    is_featured: true,
    sort_order: 2,
    title: { en: 'Land Owner Joint Venture', bn: 'জয়েন্ট ভেঞ্চারে বাড়ি নির্মাণ' },
    summary: {
      en: 'You provide the land, we design, finance and build. Flats are shared by a written agreement.',
      bn: 'জমি আপনার, নকশা-অর্থায়ন-নির্মাণ আমাদের। লিখিত চুক্তি অনুযায়ী ফ্ল্যাট ভাগ হয়।',
    },
    description: {
      en: 'Many families in Dhaka own land but not the capital to build on it. In a joint venture we carry the full construction cost and you receive your share of flats, a signing amount and a fixed handover date written into a registered deed.',
      bn: 'ঢাকার অনেক পরিবারের জমি আছে, কিন্তু ভবন তোলার মূলধন নেই। জয়েন্ট ভেঞ্চারে নির্মাণের পুরো খরচ আমরা বহন করি। আপনি পান নির্ধারিত অংশের ফ্ল্যাট, সাইনিং মানি এবং রেজিস্ট্রিকৃত চুক্তিতে লেখা হ্যান্ডওভারের তারিখ।',
    },
    features: [
      { en: 'Registered deed and power of attorney', bn: 'রেজিস্ট্রিকৃত চুক্তি ও আমমোক্তারনামা' },
      { en: 'Fair flat ratio based on location', bn: 'অবস্থান অনুযায়ী ন্যায্য ফ্ল্যাট অনুপাত' },
      { en: 'Rent support during construction', bn: 'নির্মাণকালীন বাড়িভাড়া সহায়তা' },
      { en: 'Delay compensation written in the deed', bn: 'দেরি হলে ক্ষতিপূরণ চুক্তিতে উল্লেখ' },
    ],
    image: '/images/projects/shanti-niloy-residential-building-bashundhara-dhaka.webp',
    image_alt: {
      en: 'Ten-storey residential building under construction in Dhaka',
      bn: 'ঢাকায় নির্মাণাধীন দশতলা আবাসিক ভবন',
    },
  },
  {
    id: 3,
    slug: 'civil-structural-engineering',
    icon: 'ruler',
    is_featured: true,
    sort_order: 3,
    title: { en: 'Civil & Structural Engineering', bn: 'সিভিল ও স্ট্রাকচারাল ইঞ্জিনিয়ারিং' },
    summary: {
      en: 'Structural design, RAJUK plan approval support and site supervision by qualified engineers.',
      bn: 'স্ট্রাকচারাল ডিজাইন, রাজউক নকশা অনুমোদনে সহায়তা এবং অভিজ্ঞ ইঞ্জিনিয়ারের তত্ত্বাবধান।',
    },
    description: {
      en: 'A safe building starts on paper. Our engineers prepare architectural and structural drawings with earthquake and wind load checks, and guide you through the plan approval steps so construction can begin without delay.',
      bn: 'নিরাপদ ভবনের শুরু হয় নকশা থেকে। আমাদের ইঞ্জিনিয়াররা ভূমিকম্প ও বাতাসের চাপ হিসাব করে আর্কিটেকচারাল ও স্ট্রাকচারাল ড্রয়িং তৈরি করেন এবং নকশা অনুমোদনের প্রতিটি ধাপে পাশে থাকেন।',
    },
    features: [
      { en: 'Architectural and structural drawings', bn: 'আর্কিটেকচারাল ও স্ট্রাকচারাল ড্রয়িং' },
      { en: 'Seismic and wind load design', bn: 'ভূমিকম্প ও বাতাসের চাপ সহনশীল ডিজাইন' },
      { en: 'RAJUK plan approval support', bn: 'রাজউক নকশা অনুমোদনে সহায়তা' },
      { en: 'Detailed BOQ and cost estimate', bn: 'বিস্তারিত বিওকিউ ও খরচের হিসাব' },
    ],
    image: '/images/projects/rebar-foundation-work.webp',
    image_alt: {
      en: 'Engineer inspecting steel reinforcement for a foundation slab',
      bn: 'ফাউন্ডেশন স্ল্যাবের রড পরিদর্শন করছেন ইঞ্জিনিয়ার',
    },
  },
  {
    id: 4,
    slug: 'road-infrastructure',
    icon: 'road',
    is_featured: true,
    sort_order: 4,
    title: { en: 'Road & Infrastructure', bn: 'রাস্তা ও অবকাঠামো' },
    summary: {
      en: 'Roads, culverts and drainage for government tenders and private estates.',
      bn: 'সরকারি টেন্ডার ও বেসরকারি প্রকল্পে রাস্তা, কালভার্ট ও ড্রেনেজের কাজ।',
    },
    description: {
      en: 'We carry out road rehabilitation, RCC and bituminous paving, box culverts and drains through e-GP tenders. Our own paver, rollers and survey team keep work moving through the short dry season.',
      bn: 'ই-জিপি টেন্ডারের মাধ্যমে আমরা রাস্তা সংস্কার, আরসিসি ও বিটুমিনাস কার্পেটিং, বক্স কালভার্ট ও ড্রেনের কাজ করি। নিজস্ব পেভার, রোলার ও সার্ভে টিম থাকায় শুষ্ক মৌসুমের অল্প সময়েই কাজ শেষ করা যায়।',
    },
    features: [
      { en: 'Bituminous and RCC road work', bn: 'বিটুমিনাস ও আরসিসি রাস্তার কাজ' },
      { en: 'Box culverts and drainage', bn: 'বক্স কালভার্ট ও ড্রেনেজ' },
      { en: 'Own paver, rollers and survey team', bn: 'নিজস্ব পেভার, রোলার ও সার্ভে টিম' },
      { en: 'e-GP tender experience', bn: 'ই-জিপি টেন্ডারে কাজের অভিজ্ঞতা' },
    ],
    image: '/images/projects/upazila-road-rehabilitation-keraniganj.webp',
    image_alt: {
      en: 'Road rollers and paving equipment on a freshly laid road',
      bn: 'নতুন কার্পেটিং করা রাস্তায় রোলার ও পেভিং যন্ত্র',
    },
  },
  {
    id: 5,
    slug: 'interior-renovation',
    icon: 'sofa',
    is_featured: true,
    sort_order: 5,
    title: { en: 'Interior & Renovation', bn: 'ইন্টেরিয়র ও রেনোভেশন' },
    summary: {
      en: 'Interior fit-out and renovation for flats, offices and showrooms.',
      bn: 'ফ্ল্যাট, অফিস ও শোরুমের ইন্টেরিয়র ও রেনোভেশন।',
    },
    description: {
      en: 'From a single flat to a full office floor, we design and build interiors with a fixed budget and finish date. For offices that must stay open, we schedule noisy work for Fridays and evenings.',
      bn: 'একটি ফ্ল্যাট থেকে পুরো অফিস ফ্লোর, নির্দিষ্ট বাজেট ও সময়ের মধ্যে আমরা ইন্টেরিয়রের নকশা ও কাজ করি। চালু অফিসের ক্ষেত্রে শব্দের কাজগুলো শুক্রবার ও সন্ধ্যায় করা হয়।',
    },
    features: [
      { en: '3D design before work starts', bn: 'কাজ শুরুর আগে থ্রিডি ডিজাইন' },
      { en: 'Custom furniture and woodwork', bn: 'কাস্টম ফার্নিচার ও কাঠের কাজ' },
      { en: 'False ceiling, lighting and flooring', bn: 'ফলস সিলিং, লাইটিং ও ফ্লোরিং' },
      { en: 'Fixed budget and finish date', bn: 'নির্দিষ্ট বাজেট ও সময়সীমা' },
    ],
    image: '/images/projects/duplex-interior-living-room.webp',
    image_alt: {
      en: 'Bright modern living room interior with a large window',
      bn: 'বড় জানালাসহ আধুনিক বসার ঘরের ইন্টেরিয়র',
    },
  },
  {
    id: 6,
    slug: 'steel-structure-factory-shed',
    icon: 'factory',
    is_featured: true,
    sort_order: 6,
    title: { en: 'Steel Structure & Factory Shed', bn: 'স্টিল স্ট্রাকচার ও ফ্যাক্টরি শেড' },
    summary: {
      en: 'Pre-engineered steel buildings for garment factories, warehouses and workshops.',
      bn: 'গার্মেন্টস ফ্যাক্টরি, ওয়্যারহাউস ও ওয়ার্কশপের জন্য প্রি-ইঞ্জিনিয়ার্ড স্টিল ভবন।',
    },
    description: {
      en: 'Factory owners in Gazipur, Savar and Narayanganj need space fast and need it to pass compliance audits. We design, fabricate and erect steel buildings with fire-safety and structural documents ready for buyers.',
      bn: 'গাজীপুর, সাভার ও নারায়ণগঞ্জের শিল্প মালিকদের দ্রুত জায়গা দরকার, আবার কমপ্লায়েন্স অডিটেও পাস করতে হয়। আমরা স্টিল ভবনের ডিজাইন, ফ্যাব্রিকেশন ও ইরেকশন করি এবং ফায়ার সেফটি ও স্ট্রাকচারাল কাগজপত্র তৈরি রাখি।',
    },
    features: [
      { en: 'Pre-engineered building design', bn: 'প্রি-ইঞ্জিনিয়ার্ড ভবনের ডিজাইন' },
      { en: 'Fabrication and erection', bn: 'ফ্যাব্রিকেশন ও ইরেকশন' },
      { en: 'Compliance and fire-safety documents', bn: 'কমপ্লায়েন্স ও ফায়ার সেফটি কাগজপত্র' },
      { en: 'Faster than RCC construction', bn: 'আরসিসি ভবনের চেয়ে দ্রুত নির্মাণ' },
    ],
    image: '/images/projects/garment-factory-steel-shed-gazipur.webp',
    image_alt: {
      en: 'Large steel-structure factory shed with roller doors',
      bn: 'রোলার দরজাসহ বড় স্টিল স্ট্রাকচার ফ্যাক্টরি শেড',
    },
  },
  {
    id: 7,
    slug: 'electrical-plumbing',
    icon: 'zap',
    is_featured: false,
    sort_order: 7,
    title: { en: 'Electrical & Plumbing', bn: 'ইলেকট্রিক্যাল ও প্লাম্বিং' },
    summary: {
      en: 'Complete electrical, plumbing and fire-safety work for new and existing buildings.',
      bn: 'নতুন ও পুরোনো ভবনের ইলেকট্রিক্যাল, প্লাম্বিং ও ফায়ার সেফটির সম্পূর্ণ কাজ।',
    },
    description: {
      en: 'Wiring and pipework are hidden once the walls are finished, so they have to be right the first time. Our electrical and plumbing teams work from approved drawings and test every line before plastering.',
      bn: 'দেয়ালের কাজ শেষ হলে ওয়্যারিং ও পাইপ আর দেখা যায় না, তাই প্রথমবারেই নির্ভুল হতে হয়। আমাদের টিম অনুমোদিত ড্রয়িং অনুযায়ী কাজ করে এবং প্লাস্টারের আগে প্রতিটি লাইন পরীক্ষা করে।',
    },
    features: [
      { en: 'Substation, generator and wiring', bn: 'সাবস্টেশন, জেনারেটর ও ওয়্যারিং' },
      { en: 'Water supply and sanitary lines', bn: 'পানি সরবরাহ ও স্যানিটারি লাইন' },
      { en: 'Fire detection and hydrant system', bn: 'ফায়ার ডিটেকশন ও হাইড্রেন্ট সিস্টেম' },
      { en: 'Pressure test before plastering', bn: 'প্লাস্টারের আগে প্রেশার টেস্ট' },
    ],
    image: '/images/projects/site-engineers-rebar-work.webp',
    image_alt: {
      en: 'Two site workers in safety vests working on a floor slab',
      bn: 'সেফটি ভেস্ট পরা দুই কর্মী ফ্লোর স্ল্যাবে কাজ করছেন',
    },
  },
  {
    id: 8,
    slug: 'project-management',
    icon: 'clipboard',
    is_featured: false,
    sort_order: 8,
    title: { en: 'Project Management & Supervision', bn: 'প্রজেক্ট ম্যানেজমেন্ট ও তদারকি' },
    summary: {
      en: 'Planning, costing and daily supervision if you are building with your own labour.',
      bn: 'নিজস্ব লেবারে কাজ করালে পরিকল্পনা, খরচ নিয়ন্ত্রণ ও প্রতিদিনের তদারকি।',
    },
    description: {
      en: 'If you prefer to buy materials and hire labour yourself, our engineer can still manage the site for you: checking quality, measuring work for payment and keeping the schedule on track.',
      bn: 'আপনি নিজে মালামাল কিনে লেবার দিয়ে কাজ করাতে চাইলেও আমাদের ইঞ্জিনিয়ার সাইটের দায়িত্ব নিতে পারেন: মান যাচাই, বিলের জন্য কাজের মাপ এবং সময়সূচি ঠিক রাখা।',
    },
    features: [
      { en: 'Site engineer on a monthly basis', bn: 'মাসিক ভিত্তিতে সাইট ইঞ্জিনিয়ার' },
      { en: 'Material quality checks', bn: 'মালামালের মান যাচাই' },
      { en: 'Work measurement for labour bills', bn: 'লেবার বিলের জন্য কাজের মাপ' },
      { en: 'Weekly schedule and cost tracking', bn: 'সাপ্তাহিক সময়সূচি ও খরচের হিসাব' },
    ],
    image: '/images/about/construction-team-steel-rods-site.webp',
    image_alt: {
      en: 'Site supervisor and workers handling steel rods at a building site',
      bn: 'নির্মাণ সাইটে রড নিয়ে কাজ করছেন সুপারভাইজার ও শ্রমিকরা',
    },
  },
]
