/**
 * Demo content: fictional projects. Field names match the future Laravel
 * `ProjectResource`. Money is in BDT as a plain number; area is in sft.
 */

export const projectCategories = [
  { key: 'residential', label: { en: 'Residential', bn: 'আবাসিক' } },
  { key: 'commercial', label: { en: 'Commercial', bn: 'বাণিজ্যিক' } },
  { key: 'infrastructure', label: { en: 'Infrastructure', bn: 'অবকাঠামো' } },
  { key: 'industrial', label: { en: 'Industrial', bn: 'শিল্প' } },
  { key: 'interior', label: { en: 'Interior', bn: 'ইন্টেরিয়র' } },
]

export const projects = [
  {
    id: 1,
    slug: 'shanti-niloy-bashundhara',
    title: { en: 'Buildora Shanti Niloy', bn: 'বিল্ডোরা শান্তি নিলয়' },
    subtitle: { en: '10-storey residential building', bn: '১০ তলা আবাসিক ভবন' },
    category: 'residential',
    location: { en: 'Bashundhara R/A, Dhaka', bn: 'বসুন্ধরা আ/এ, ঢাকা' },
    client_name: { en: 'Private land owner (joint venture)', bn: 'জমির মালিক (জয়েন্ট ভেঞ্চার)' },
    area_sft: 42000,
    storeys: 10,
    units: { en: '36 flats on 5 katha', bn: '৫ কাঠায় ৩৬টি ফ্ল্যাট' },
    budget_bdt: 145000000,
    status: 'completed',
    progress: 100,
    start_date: '2022-01-10',
    end_date: '2024-05-20',
    is_featured: true,
    cover_image: '/images/projects/shanti-niloy-residential-building-bashundhara-dhaka.webp',
    cover_alt: {
      en: '10-storey residential building under construction in Bashundhara, Dhaka',
      bn: 'ঢাকার বসুন্ধরায় নির্মাণাধীন ১০ তলা আবাসিক ভবন',
    },
    gallery: [
      {
        src: '/images/projects/shanti-niloy-residential-building-bashundhara-dhaka.webp',
        alt: { en: 'Upper floors with scaffolding during finishing work', bn: 'ফিনিশিং কাজের সময় উপরের তলাগুলো' },
      },
      {
        src: '/images/projects/rebar-foundation-work.webp',
        alt: { en: 'Engineer checking the foundation reinforcement', bn: 'ফাউন্ডেশনের রড পরীক্ষা করছেন ইঞ্জিনিয়ার' },
      },
      {
        src: '/images/about/site-engineers-in-safety-vests.webp',
        alt: { en: 'Workers tying rebar on the roof slab', bn: 'ছাদের স্ল্যাবে রড বাঁধছেন কর্মীরা' },
      },
    ],
    overview: {
      en: 'A joint venture project on a 5-katha plot. The land owner received 18 flats and the building was handed over in 28 months, as written in the agreement.',
      bn: '৫ কাঠা জমিতে জয়েন্ট ভেঞ্চার প্রকল্প। জমির মালিক পেয়েছেন ১৮টি ফ্ল্যাট এবং চুক্তি অনুযায়ী ২৮ মাসেই ভবন হস্তান্তর করা হয়েছে।',
    },
    challenge: {
      en: 'The plot sits on a 20-ft road with neighbours on three sides, so there was no space to store materials, and piling had to be done without disturbing the adjacent buildings.',
      bn: 'প্লটটি ২০ ফুট রাস্তার পাশে, তিন দিকেই পাশের বাড়ি। মালামাল রাখার জায়গা ছিল না, আর পাশের ভবনের ক্ষতি না করে পাইলিং করতে হয়েছে।',
    },
    solution: {
      en: 'We used cast-in-situ bored piles with shore protection and scheduled material deliveries at night in small loads. Ready-mix concrete removed the need for on-site mixing.',
      bn: 'শোর প্রোটেকশনসহ কাস্ট-ইন-সিটু বোরড পাইল ব্যবহার করা হয়েছে এবং রাতে অল্প অল্প করে মালামাল আনা হয়েছে। রেডিমিক্স কংক্রিট ব্যবহারে সাইটে মিক্সিংয়ের প্রয়োজন পড়েনি।',
    },
    milestones: [
      { title: { en: 'Piling and foundation complete', bn: 'পাইলিং ও ফাউন্ডেশন সম্পন্ন' }, date: '2022-06-15' },
      { title: { en: 'Roof slab cast', bn: 'ছাদ ঢালাই সম্পন্ন' }, date: '2023-07-02' },
      { title: { en: 'Finishing and utility connections', bn: 'ফিনিশিং ও ইউটিলিটি সংযোগ' }, date: '2024-03-10' },
      { title: { en: 'Flats handed over', bn: 'ফ্ল্যাট হস্তান্তর' }, date: '2024-05-20' },
    ],
    meta_description: {
      en: '10-storey, 36-flat joint venture residential building in Bashundhara R/A, Dhaka, handed over in 28 months.',
      bn: 'ঢাকার বসুন্ধরায় ১০ তলা, ৩৬ ফ্ল্যাটের জয়েন্ট ভেঞ্চার আবাসিক ভবন, ২৮ মাসে হস্তান্তর।',
    },
  },
  {
    id: 2,
    slug: 'lake-view-tower-gulshan',
    title: { en: 'Lake View Tower', bn: 'লেক ভিউ টাওয়ার' },
    subtitle: { en: '12-storey commercial office building', bn: '১২ তলা বাণিজ্যিক অফিস ভবন' },
    category: 'commercial',
    location: { en: 'Gulshan-2, Dhaka', bn: 'গুলশান-২, ঢাকা' },
    client_name: { en: 'Private developer', bn: 'বেসরকারি ডেভেলপার' },
    area_sft: 68000,
    storeys: 12,
    units: { en: '2 basements, 22 office units', bn: '২টি বেজমেন্ট, ২২টি অফিস ইউনিট' },
    budget_bdt: 320000000,
    status: 'completed',
    progress: 100,
    start_date: '2020-11-01',
    end_date: '2023-08-30',
    is_featured: true,
    cover_image: '/images/projects/lake-view-tower-commercial-office-gulshan-dhaka.webp',
    cover_alt: {
      en: 'Workers cleaning the glass facade of a commercial tower in Gulshan, Dhaka',
      bn: 'ঢাকার গুলশানে বাণিজ্যিক ভবনের কাচের দেয়াল পরিষ্কার করছেন কর্মীরা',
    },
    gallery: [
      {
        src: '/images/projects/lake-view-tower-commercial-office-gulshan-dhaka.webp',
        alt: { en: 'Glass curtain wall on the front elevation', bn: 'সামনের দিকের গ্লাস কার্টেন ওয়াল' },
      },
      {
        src: '/images/projects/green-life-hospital-construction-sylhet.webp',
        alt: { en: 'Tower cranes during structural work', bn: 'স্ট্রাকচারের কাজের সময় টাওয়ার ক্রেন' },
      },
    ],
    overview: {
      en: 'A 12-storey office building with two basements for parking, a glass curtain wall and a central chilled-water air-conditioning system.',
      bn: 'পার্কিংয়ের জন্য দুটি বেজমেন্ট, গ্লাস কার্টেন ওয়াল ও সেন্ট্রাল এয়ার কন্ডিশনিংসহ ১২ তলা অফিস ভবন।',
    },
    challenge: {
      en: 'Two basement levels had to be excavated beside a busy main road and existing towers, with the water table only a few feet below ground.',
      bn: 'ব্যস্ত প্রধান সড়ক ও পাশের বহুতল ভবনের পাশে দুটি বেজমেন্ট খনন করতে হয়েছে, যেখানে মাটির কয়েক ফুট নিচেই পানি।',
    },
    solution: {
      en: 'We built a secant pile wall around the plot and ran dewatering pumps around the clock during excavation. Settlement markers on the neighbouring buildings were checked weekly.',
      bn: 'প্লটের চারপাশে সিক্যান্ট পাইল ওয়াল করা হয় এবং খননের সময় দিনরাত ডিওয়াটারিং পাম্প চালানো হয়। পাশের ভবনগুলোতে সেটেলমেন্ট মার্কার বসিয়ে প্রতি সপ্তাহে পরীক্ষা করা হয়েছে।',
    },
    milestones: [
      { title: { en: 'Basement and shore piling complete', bn: 'বেজমেন্ট ও শোর পাইলিং সম্পন্ন' }, date: '2021-07-20' },
      { title: { en: 'Structure topped out', bn: 'স্ট্রাকচারের কাজ সম্পন্ন' }, date: '2022-09-12' },
      { title: { en: 'Facade and MEP installed', bn: 'ফ্যাসাড ও এমইপি স্থাপন' }, date: '2023-05-05' },
      { title: { en: 'Handover to client', bn: 'ক্লায়েন্টের কাছে হস্তান্তর' }, date: '2023-08-30' },
    ],
    meta_description: {
      en: '12-storey commercial office building with two basements and a glass facade in Gulshan-2, Dhaka.',
      bn: 'ঢাকার গুলশান-২ এ দুটি বেজমেন্ট ও গ্লাস ফ্যাসাডসহ ১২ তলা বাণিজ্যিক অফিস ভবন।',
    },
  },
  {
    id: 3,
    slug: 'upazila-road-rehabilitation-keraniganj',
    title: { en: 'Upazila Road Rehabilitation', bn: 'উপজেলা সড়ক পুনর্বাসন' },
    subtitle: { en: '8.5 km road with 3 box culverts', bn: '৩টি বক্স কালভার্টসহ ৮.৫ কিমি সড়ক' },
    category: 'infrastructure',
    location: { en: 'Keraniganj, Dhaka', bn: 'কেরানীগঞ্জ, ঢাকা' },
    client_name: { en: 'Government tender (e-GP)', bn: 'সরকারি টেন্ডার (ই-জিপি)' },
    area_sft: null,
    storeys: null,
    units: { en: '8.5 km, 5.5 m carriageway', bn: '৮.৫ কিমি, ৫.৫ মিটার প্রশস্ত' },
    budget_bdt: 98000000,
    status: 'completed',
    progress: 100,
    start_date: '2024-11-05',
    end_date: '2025-05-28',
    is_featured: true,
    cover_image: '/images/projects/upazila-road-rehabilitation-keraniganj.webp',
    cover_alt: {
      en: 'Road rollers and paving machines on a newly surfaced road',
      bn: 'নতুন কার্পেটিং করা সড়কে রোলার ও পেভিং মেশিন',
    },
    gallery: [
      {
        src: '/images/projects/upazila-road-rehabilitation-keraniganj.webp',
        alt: { en: 'Paving equipment lined up after surfacing', bn: 'কার্পেটিং শেষে সারিবদ্ধ পেভিং যন্ত্র' },
      },
    ],
    overview: {
      en: 'Rehabilitation of an 8.5 km upazila road: widening to 5.5 metres, a new bituminous surface, three box culverts and roadside drains through two market areas.',
      bn: '৮.৫ কিলোমিটার উপজেলা সড়কের পুনর্বাসন: ৫.৫ মিটারে প্রশস্তকরণ, নতুন বিটুমিনাস কার্পেটিং, তিনটি বক্স কালভার্ট এবং দুটি বাজার এলাকায় ড্রেন নির্মাণ।',
    },
    challenge: {
      en: 'The road is the only route to two bazaars, so it could not be closed. Work also had to finish before the monsoon, which left a dry-season window of about six months.',
      bn: 'দুটি বাজারে যাওয়ার এটিই একমাত্র রাস্তা, তাই বন্ধ রাখা সম্ভব ছিল না। বর্ষার আগেই কাজ শেষ করতে হয়েছে, হাতে ছিল মাত্র ছয় মাসের শুষ্ক মৌসুম।',
    },
    solution: {
      en: 'We worked one lane at a time with flagmen at both ends and paved the market sections at night. Two crews started from opposite ends and met in the middle.',
      bn: 'দুই প্রান্তে ফ্ল্যাগম্যান রেখে এক লেন করে কাজ করা হয়েছে, বাজার অংশের কার্পেটিং হয়েছে রাতে। দুটি দল দুই প্রান্ত থেকে শুরু করে মাঝখানে এসে মিলেছে।',
    },
    milestones: [
      { title: { en: 'Earthwork and widening complete', bn: 'মাটির কাজ ও প্রশস্তকরণ সম্পন্ন' }, date: '2025-01-18' },
      { title: { en: 'Three box culverts cast', bn: 'তিনটি বক্স কালভার্ট ঢালাই' }, date: '2025-03-02' },
      { title: { en: 'Bituminous surfacing complete', bn: 'বিটুমিনাস কার্পেটিং সম্পন্ন' }, date: '2025-05-10' },
      { title: { en: 'Final inspection passed', bn: 'চূড়ান্ত পরিদর্শনে উত্তীর্ণ' }, date: '2025-05-28' },
    ],
    meta_description: {
      en: '8.5 km upazila road rehabilitation with three box culverts in Keraniganj, completed before the monsoon.',
      bn: 'কেরানীগঞ্জে তিনটি বক্স কালভার্টসহ ৮.৫ কিমি উপজেলা সড়ক পুনর্বাসন, বর্ষার আগেই সম্পন্ন।',
    },
  },
  {
    id: 4,
    slug: 'green-life-general-hospital-sylhet',
    title: { en: 'Green Life General Hospital', bn: 'গ্রিন লাইফ জেনারেল হাসপাতাল' },
    subtitle: { en: '150-bed, 9-storey hospital building', bn: '১৫০ শয্যার ৯ তলা হাসপাতাল ভবন' },
    category: 'commercial',
    location: { en: 'Zindabazar, Sylhet', bn: 'জিন্দাবাজার, সিলেট' },
    client_name: { en: 'Private healthcare group', bn: 'বেসরকারি স্বাস্থ্যসেবা প্রতিষ্ঠান' },
    area_sft: 85000,
    storeys: 9,
    units: { en: '150 beds, 4 operation theatres', bn: '১৫০ শয্যা, ৪টি অপারেশন থিয়েটার' },
    budget_bdt: 480000000,
    status: 'ongoing',
    progress: 72,
    start_date: '2024-02-12',
    end_date: '2027-03-31',
    is_featured: true,
    cover_image: '/images/projects/green-life-hospital-construction-sylhet.webp',
    cover_alt: {
      en: 'Tower cranes beside a multi-storey building under construction',
      bn: 'নির্মাণাধীন বহুতল ভবনের পাশে টাওয়ার ক্রেন',
    },
    gallery: [
      {
        src: '/images/projects/green-life-hospital-construction-sylhet.webp',
        alt: { en: 'Tower cranes during structural work', bn: 'স্ট্রাকচারের কাজের সময় টাওয়ার ক্রেন' },
      },
      {
        src: '/images/projects/site-engineers-rebar-work.webp',
        alt: { en: 'Workers preparing a floor slab', bn: 'ফ্লোর স্ল্যাব প্রস্তুত করছেন কর্মীরা' },
      },
    ],
    overview: {
      en: 'A 150-bed general hospital with four operation theatres, an ICU floor and a medical gas system. The structure is complete and services installation is under way.',
      bn: 'চারটি অপারেশন থিয়েটার, আইসিইউ ফ্লোর ও মেডিক্যাল গ্যাস সিস্টেমসহ ১৫০ শয্যার জেনারেল হাসপাতাল। স্ট্রাকচারের কাজ শেষ, এখন সার্ভিস স্থাপনের কাজ চলছে।',
    },
    challenge: {
      en: 'Sylhet is in the highest seismic zone in Bangladesh and has a long, heavy rainy season. A hospital also has to stay usable after an earthquake.',
      bn: 'সিলেট বাংলাদেশের সর্বোচ্চ ভূমিকম্প ঝুঁকিপূর্ণ অঞ্চলে, এখানে বর্ষাও দীর্ঘ। তার ওপর ভূমিকম্পের পরও হাসপাতাল চালু রাখার উপযোগী থাকতে হবে।',
    },
    solution: {
      en: 'The frame is designed with shear walls to the importance factor required for hospitals. Concrete work was planned around the rain with covered curing and a standby batching plant.',
      bn: 'হাসপাতালের জন্য নির্ধারিত ইম্পর্ট্যান্স ফ্যাক্টর অনুযায়ী শিয়ার ওয়ালসহ স্ট্রাকচার ডিজাইন করা হয়েছে। বৃষ্টি মাথায় রেখে ঢালাইয়ের পরিকল্পনা, ঢাকা অবস্থায় কিউরিং ও স্ট্যান্ডবাই ব্যাচিং প্ল্যান্ট রাখা হয়েছে।',
    },
    milestones: [
      { title: { en: 'Mat foundation cast', bn: 'ম্যাট ফাউন্ডেশন ঢালাই' }, date: '2024-08-25' },
      { title: { en: 'Structure topped out', bn: 'স্ট্রাকচারের কাজ সম্পন্ন' }, date: '2026-01-14' },
      { title: { en: 'MEP and medical gas installation', bn: 'এমইপি ও মেডিক্যাল গ্যাস স্থাপন' }, date: '2026-10-30' },
      { title: { en: 'Planned handover', bn: 'পরিকল্পিত হস্তান্তর' }, date: '2027-03-31' },
    ],
    meta_description: {
      en: '150-bed, 9-storey hospital building under construction in Zindabazar, Sylhet, designed for the highest seismic zone.',
      bn: 'সিলেটের জিন্দাবাজারে নির্মাণাধীন ১৫০ শয্যার ৯ তলা হাসপাতাল ভবন।',
    },
  },
  {
    id: 5,
    slug: 'city-square-shopping-mall-narayanganj',
    title: { en: 'City Square Shopping Mall', bn: 'সিটি স্কয়ার শপিং মল' },
    subtitle: { en: '7-storey shopping mall', bn: '৭ তলা শপিং মল' },
    category: 'commercial',
    location: { en: 'Chashara, Narayanganj', bn: 'চাষাঢ়া, নারায়ণগঞ্জ' },
    client_name: { en: 'Private developer', bn: 'বেসরকারি ডেভেলপার' },
    area_sft: 110000,
    storeys: 7,
    units: { en: '210 shops, food court, 2 basements', bn: '২১০টি দোকান, ফুড কোর্ট, ২টি বেজমেন্ট' },
    budget_bdt: 550000000,
    status: 'ongoing',
    progress: 45,
    start_date: '2025-03-01',
    end_date: '2027-12-31',
    is_featured: false,
    cover_image: '/images/projects/city-square-shopping-mall-construction-narayanganj.webp',
    cover_alt: {
      en: 'Large commercial construction site with tower cranes in a city centre',
      bn: 'শহরের কেন্দ্রে টাওয়ার ক্রেনসহ বড় বাণিজ্যিক নির্মাণ সাইট',
    },
    gallery: [
      {
        src: '/images/projects/city-square-shopping-mall-construction-narayanganj.webp',
        alt: { en: 'Site view from the main road', bn: 'প্রধান সড়ক থেকে সাইটের দৃশ্য' },
      },
    ],
    overview: {
      en: 'A 7-storey shopping mall with 210 shops, a food court and two basement parking levels in the commercial centre of Narayanganj. Structural work has reached the fourth floor.',
      bn: 'নারায়ণগঞ্জের বাণিজ্যিক কেন্দ্রে ২১০টি দোকান, ফুড কোর্ট ও দুটি বেজমেন্ট পার্কিংসহ ৭ তলা শপিং মল। স্ট্রাকচারের কাজ চারতলা পর্যন্ত হয়েছে।',
    },
    challenge: {
      en: 'The site is surrounded by busy roads with no room for a material yard, and the long shop spans leave little space for columns.',
      bn: 'সাইটের চারপাশে ব্যস্ত সড়ক, মালামাল রাখার জায়গা নেই। আবার দোকানের বড় স্প্যানের কারণে কলাম বসানোর জায়গাও কম।',
    },
    solution: {
      en: 'Post-tensioned flat slabs give wide, column-free shop fronts. Materials arrive at night on a just-in-time schedule and are lifted straight to the working floor by tower crane.',
      bn: 'পোস্ট-টেনশনড ফ্ল্যাট স্ল্যাব ব্যবহারে দোকানের সামনে কলাম ছাড়াই প্রশস্ত জায়গা পাওয়া গেছে। মালামাল রাতে প্রয়োজন অনুযায়ী আসে এবং টাওয়ার ক্রেনে সরাসরি কাজের ফ্লোরে ওঠে।',
    },
    milestones: [
      { title: { en: 'Basement excavation complete', bn: 'বেজমেন্ট খনন সম্পন্ন' }, date: '2025-09-20' },
      { title: { en: 'Fourth-floor slab cast', bn: 'চতুর্থ তলার স্ল্যাব ঢালাই' }, date: '2026-10-05' },
      { title: { en: 'Planned structure completion', bn: 'স্ট্রাকচার সম্পন্নের পরিকল্পিত সময়' }, date: '2027-04-30' },
      { title: { en: 'Planned handover', bn: 'পরিকল্পিত হস্তান্তর' }, date: '2027-12-31' },
    ],
    meta_description: {
      en: '7-storey shopping mall with 210 shops under construction in Chashara, Narayanganj.',
      bn: 'নারায়ণগঞ্জের চাষাঢ়ায় নির্মাণাধীন ২১০ দোকানের ৭ তলা শপিং মল।',
    },
  },
  {
    id: 6,
    slug: 'duplex-interior-renovation-gulshan',
    title: { en: 'Duplex Interior Renovation', bn: 'ডুপ্লেক্স ইন্টেরিয়র রেনোভেশন' },
    subtitle: { en: '4,200 sft duplex apartment', bn: '৪,২০০ বর্গফুটের ডুপ্লেক্স অ্যাপার্টমেন্ট' },
    category: 'interior',
    location: { en: 'Gulshan-1, Dhaka', bn: 'গুলশান-১, ঢাকা' },
    client_name: { en: 'Private residence', bn: 'ব্যক্তিগত বাসভবন' },
    area_sft: 4200,
    storeys: 2,
    units: { en: '5 bedrooms, family lounge', bn: '৫টি বেডরুম, ফ্যামিলি লাউঞ্জ' },
    budget_bdt: 8500000,
    status: 'completed',
    progress: 100,
    start_date: '2025-01-15',
    end_date: '2025-05-30',
    is_featured: true,
    cover_image: '/images/projects/duplex-interior-renovation-gulshan-dhaka.webp',
    cover_alt: {
      en: 'Renovated living and dining area with herringbone wood flooring',
      bn: 'হেরিংবোন কাঠের ফ্লোরসহ নতুন করে সাজানো বসার ও খাবার ঘর',
    },
    gallery: [
      {
        src: '/images/projects/duplex-interior-renovation-gulshan-dhaka.webp',
        alt: { en: 'Living and dining area after renovation', bn: 'রেনোভেশনের পর বসার ও খাবার ঘর' },
      },
      {
        src: '/images/projects/duplex-interior-living-room.webp',
        alt: { en: 'Family lounge with full-height windows', bn: 'বড় জানালাসহ ফ্যামিলি লাউঞ্জ' },
      },
      {
        src: '/images/projects/duplex-interior-lounge.webp',
        alt: { en: 'Formal sitting room with built-in cabinets', bn: 'বিল্ট-ইন ক্যাবিনেটসহ ড্রয়িং রুম' },
      },
    ],
    overview: {
      en: 'Full renovation of a 15-year-old duplex: new layout for the ground floor, rewiring, replacement of all plumbing lines, and custom woodwork throughout.',
      bn: '১৫ বছরের পুরোনো ডুপ্লেক্সের সম্পূর্ণ রেনোভেশন: নিচতলার নতুন লেআউট, নতুন ওয়্যারিং, সব প্লাম্বিং লাইন পরিবর্তন এবং পুরো বাসায় কাস্টম কাঠের কাজ।',
    },
    challenge: {
      en: 'The family stayed on the upper floor during the work, and the building committee allowed noisy work only between 10 AM and 5 PM.',
      bn: 'কাজ চলার সময় পরিবারটি উপরের তলায় থাকত, আর ভবন কমিটি শুধু সকাল ১০টা থেকে বিকেল ৫টা পর্যন্ত শব্দের কাজের অনুমতি দিয়েছিল।',
    },
    solution: {
      en: 'We finished one floor at a time behind dust barriers and made most of the furniture in our workshop, so only fitting was done on site.',
      bn: 'ডাস্ট ব্যারিয়ার দিয়ে এক তলা করে কাজ শেষ করা হয়েছে এবং বেশিরভাগ ফার্নিচার আমাদের ওয়ার্কশপে তৈরি হয়েছে, সাইটে শুধু ফিটিং করা হয়েছে।',
    },
    milestones: [
      { title: { en: '3D design approved', bn: 'থ্রিডি ডিজাইন অনুমোদন' }, date: '2025-01-28' },
      { title: { en: 'Ground floor complete', bn: 'নিচতলার কাজ সম্পন্ন' }, date: '2025-03-25' },
      { title: { en: 'Handover', bn: 'হস্তান্তর' }, date: '2025-05-30' },
    ],
    meta_description: {
      en: 'Complete interior renovation of a 4,200 sft duplex apartment in Gulshan-1, Dhaka.',
      bn: 'ঢাকার গুলশান-১ এ ৪,২০০ বর্গফুটের ডুপ্লেক্স অ্যাপার্টমেন্টের সম্পূর্ণ ইন্টেরিয়র রেনোভেশন।',
    },
  },
  {
    id: 7,
    slug: 'garment-factory-steel-shed-gazipur',
    title: { en: 'Garment Factory Steel Shed', bn: 'গার্মেন্টস ফ্যাক্টরি স্টিল শেড' },
    subtitle: { en: '60,000 sft pre-engineered building', bn: '৬০,০০০ বর্গফুটের প্রি-ইঞ্জিনিয়ার্ড ভবন' },
    category: 'industrial',
    location: { en: 'Kashimpur, Gazipur', bn: 'কাশিমপুর, গাজীপুর' },
    client_name: { en: 'Export-oriented garment factory', bn: 'রপ্তানিমুখী পোশাক কারখানা' },
    area_sft: 60000,
    storeys: 1,
    units: { en: 'Clear span 30 m, mezzanine office', bn: '৩০ মিটার ক্লিয়ার স্প্যান, মেজানাইন অফিস' },
    budget_bdt: 120000000,
    status: 'completed',
    progress: 100,
    start_date: '2023-10-08',
    end_date: '2024-04-18',
    is_featured: true,
    cover_image: '/images/projects/garment-factory-steel-shed-gazipur.webp',
    cover_alt: {
      en: 'Completed steel-structure factory shed with roller shutter doors',
      bn: 'রোলার শাটার দরজাসহ সম্পন্ন স্টিল স্ট্রাকচার ফ্যাক্টরি শেড',
    },
    gallery: [
      {
        src: '/images/projects/garment-factory-steel-shed-gazipur.webp',
        alt: { en: 'Side elevation of the finished shed', bn: 'সম্পন্ন শেডের পাশের দৃশ্য' },
      },
      {
        src: '/images/about/construction-team-steel-rods-site.webp',
        alt: { en: 'Steel delivery and site team', bn: 'স্টিল সরবরাহ ও সাইট টিম' },
      },
    ],
    overview: {
      en: 'A 60,000 sft pre-engineered steel building for a sewing floor, with a 30-metre clear span, a mezzanine office, a fire hydrant system and a paved loading yard.',
      bn: 'সুইং ফ্লোরের জন্য ৬০,০০০ বর্গফুটের প্রি-ইঞ্জিনিয়ার্ড স্টিল ভবন। আছে ৩০ মিটার ক্লিয়ার স্প্যান, মেজানাইন অফিস, ফায়ার হাইড্রেন্ট সিস্টেম ও পাকা লোডিং ইয়ার্ড।',
    },
    challenge: {
      en: 'The factory had a buyer compliance audit on a fixed date and needed the new floor running before then, with all structural and fire-safety documents in order.',
      bn: 'কারখানার বায়ার কমপ্লায়েন্স অডিটের তারিখ নির্ধারিত ছিল। তার আগেই নতুন ফ্লোর চালু করতে হবে, সব স্ট্রাকচারাল ও ফায়ার সেফটি কাগজপত্রসহ।',
    },
    solution: {
      en: 'Steel was fabricated while the foundations were being cast, which saved about seven weeks. The building was handed over two weeks before the audit with a complete document file.',
      bn: 'ফাউন্ডেশন ঢালাইয়ের সময়ই স্টিল ফ্যাব্রিকেশন করা হয়, তাতে প্রায় সাত সপ্তাহ সময় বেঁচেছে। অডিটের দুই সপ্তাহ আগেই সম্পূর্ণ কাগজপত্রসহ ভবন হস্তান্তর করা হয়েছে।',
    },
    milestones: [
      { title: { en: 'Foundations and anchor bolts set', bn: 'ফাউন্ডেশন ও অ্যাঙ্কর বোল্ট স্থাপন' }, date: '2023-12-10' },
      { title: { en: 'Steel erection complete', bn: 'স্টিল ইরেকশন সম্পন্ন' }, date: '2024-02-22' },
      { title: { en: 'Roofing, cladding and floor', bn: 'রুফিং, ক্ল্যাডিং ও ফ্লোর' }, date: '2024-03-30' },
      { title: { en: 'Handover with compliance file', bn: 'কমপ্লায়েন্স ফাইলসহ হস্তান্তর' }, date: '2024-04-18' },
    ],
    meta_description: {
      en: '60,000 sft pre-engineered steel factory shed in Kashimpur, Gazipur, handed over before the buyer audit.',
      bn: 'গাজীপুরের কাশিমপুরে ৬০,০০০ বর্গফুটের প্রি-ইঞ্জিনিয়ার্ড স্টিল ফ্যাক্টরি শেড।',
    },
  },
  {
    id: 8,
    slug: 'sunrise-school-building-uttara',
    title: { en: 'Sunrise School & College Building', bn: 'সানরাইজ স্কুল অ্যান্ড কলেজ ভবন' },
    subtitle: { en: '6-storey academic building', bn: '৬ তলা একাডেমিক ভবন' },
    category: 'commercial',
    location: { en: 'Sector 13, Uttara, Dhaka', bn: 'সেক্টর ১৩, উত্তরা, ঢাকা' },
    client_name: { en: 'School governing body', bn: 'স্কুল পরিচালনা পর্ষদ' },
    area_sft: 38000,
    storeys: 6,
    units: { en: '42 classrooms, 3 labs, auditorium', bn: '৪২টি শ্রেণিকক্ষ, ৩টি ল্যাব, অডিটোরিয়াম' },
    budget_bdt: 72000000,
    status: 'completed',
    progress: 100,
    start_date: '2022-04-03',
    end_date: '2023-12-15',
    is_featured: false,
    cover_image: '/images/projects/sunrise-school-building-uttara-dhaka.webp',
    cover_alt: {
      en: 'Multi-storey buildings in a Dhaka neighbourhood under a blue sky',
      bn: 'নীল আকাশের নিচে ঢাকার একটি এলাকার বহুতল ভবন',
    },
    gallery: [
      {
        src: '/images/projects/sunrise-school-building-uttara-dhaka.webp',
        alt: { en: 'View of the neighbourhood from the east', bn: 'পূর্ব দিক থেকে এলাকার দৃশ্য' },
      },
    ],
    overview: {
      en: 'A 6-storey academic building with 42 classrooms, three science labs and a 300-seat auditorium, built beside the existing school building.',
      bn: 'বিদ্যমান স্কুল ভবনের পাশে ৪২টি শ্রেণিকক্ষ, তিনটি বিজ্ঞান ল্যাব ও ৩০০ আসনের অডিটোরিয়ামসহ ৬ তলা একাডেমিক ভবন।',
    },
    challenge: {
      en: 'Classes continued in the old building a few metres away, so student safety and noise during school hours were the main concerns.',
      bn: 'কয়েক মিটার দূরের পুরোনো ভবনে ক্লাস চলছিল, তাই শিক্ষার্থীদের নিরাপত্তা ও স্কুল চলাকালীন শব্দই ছিল প্রধান চিন্তা।',
    },
    solution: {
      en: 'The site was fully fenced with a separate gate for vehicles. Concrete pours and other heavy work were done after 2 PM, on Fridays and during school holidays.',
      bn: 'পুরো সাইট ঘিরে দেওয়া হয় এবং গাড়ির জন্য আলাদা গেট রাখা হয়। ঢালাই ও ভারী কাজগুলো দুপুর ২টার পর, শুক্রবার এবং ছুটির সময় করা হয়েছে।',
    },
    milestones: [
      { title: { en: 'Foundation complete', bn: 'ফাউন্ডেশন সম্পন্ন' }, date: '2022-08-14' },
      { title: { en: 'Roof slab cast', bn: 'ছাদ ঢালাই সম্পন্ন' }, date: '2023-05-21' },
      { title: { en: 'Handover before the new session', bn: 'নতুন শিক্ষাবর্ষের আগে হস্তান্তর' }, date: '2023-12-15' },
    ],
    meta_description: {
      en: '6-storey school and college building with 42 classrooms in Sector 13, Uttara, Dhaka.',
      bn: 'ঢাকার উত্তরা সেক্টর ১৩ তে ৪২ শ্রেণিকক্ষের ৬ তলা স্কুল ও কলেজ ভবন।',
    },
  },
]
