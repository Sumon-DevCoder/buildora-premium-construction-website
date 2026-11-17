/**
 * Demo content: fictional people. `photo` stays null until real, licensed or
 * AI-generated portraits are added, because a real stranger's photo must
 * never appear under an invented name. The UI shows initials instead.
 */

export const team = [
  {
    id: 1,
    name: { en: 'Engr. Md. Rafiqul Islam', bn: 'প্রকৌ. মোঃ রফিকুল ইসলাম' },
    role: { en: 'Managing Director', bn: 'ব্যবস্থাপনা পরিচালক' },
    department: 'management',
    detail: { en: 'B.Sc. in Civil Engineering · 20+ years', bn: 'বিএসসি ইন সিভিল ইঞ্জিনিয়ারিং · ২০+ বছর' },
    photo: null,
    is_leadership: true,
    message: {
      en: 'I give every land owner my own number. If something on your site worries you, call me directly, and I will be there.',
      bn: 'প্রত্যেক জমির মালিককে আমি নিজের নম্বর দিই। আপনার সাইটের কোনো বিষয়ে চিন্তা হলে সরাসরি আমাকে ফোন করবেন, আমি নিজে আসব।',
    },
  },
  {
    id: 2,
    name: { en: 'Engr. Tanvir Ahmed', bn: 'প্রকৌ. তানভীর আহমেদ' },
    role: { en: 'Project Director', bn: 'প্রজেক্ট ডিরেক্টর' },
    department: 'management',
    detail: { en: 'M.Sc. in Structural Engineering', bn: 'এমএসসি ইন স্ট্রাকচারাল ইঞ্জিনিয়ারিং' },
    photo: null,
  },
  {
    id: 3,
    name: { en: 'Nusrat Jahan', bn: 'নুসরাত জাহান' },
    role: { en: 'Lead Architect', bn: 'প্রধান স্থপতি' },
    department: 'design',
    detail: { en: 'B.Arch · 10 years in residential design', bn: 'বি.আর্ক · আবাসিক নকশায় ১০ বছর' },
    photo: null,
  },
  {
    id: 4,
    name: { en: 'Engr. Shahidul Haque', bn: 'প্রকৌ. শহিদুল হক' },
    role: { en: 'Structural Engineer', bn: 'স্ট্রাকচারাল ইঞ্জিনিয়ার' },
    department: 'design',
    detail: { en: 'BNBC and seismic design', bn: 'বিএনবিসি ও ভূমিকম্প সহনশীল ডিজাইন' },
    photo: null,
  },
  {
    id: 5,
    name: { en: 'Engr. Mahmudul Hasan', bn: 'প্রকৌ. মাহমুদুল হাসান' },
    role: { en: 'Senior Site Engineer', bn: 'সিনিয়র সাইট ইঞ্জিনিয়ার' },
    department: 'site',
    detail: { en: 'High-rise and pile foundation', bn: 'বহুতল ভবন ও পাইল ফাউন্ডেশন' },
    photo: null,
  },
  {
    id: 6,
    name: { en: 'Arif Hossain', bn: 'আরিফ হোসেন' },
    role: { en: 'Electrical Engineer', bn: 'ইলেকট্রিক্যাল ইঞ্জিনিয়ার' },
    department: 'site',
    detail: { en: 'MEP coordination', bn: 'এমইপি সমন্বয়' },
    photo: null,
  },
  {
    id: 7,
    name: { en: 'Sabbir Rahman', bn: 'সাব্বির রহমান' },
    role: { en: 'Quantity Surveyor', bn: 'কোয়ান্টিটি সার্ভেয়ার' },
    department: 'management',
    detail: { en: 'BOQ and cost estimation', bn: 'বিওকিউ ও খরচের হিসাব' },
    photo: null,
  },
  {
    id: 8,
    name: { en: 'Farhana Akter', bn: 'ফারহানা আক্তার' },
    role: { en: 'Head of Client Relations', bn: 'হেড অব ক্লায়েন্ট রিলেশনস' },
    department: 'management',
    detail: { en: 'Your first point of contact', bn: 'আপনার যোগাযোগের প্রথম ব্যক্তি' },
    photo: null,
  },
]

/*
 * Demo testimonials. These must be replaced with the client's real reviews
 * before a real company's site goes live.
 */
export const testimonials = [
  {
    id: 1,
    quote: {
      en: 'Our biggest fear with a joint venture on our 5-katha plot was getting the flats on time. Buildora handed them over in 28 months as promised, and sent photos and a report every month.',
      bn: 'আমাদের ৫ কাঠা জমিতে জয়েন্ট ভেঞ্চারে বাড়ি করার সময় সবচেয়ে বড় ভয় ছিল সময়মতো হ্যান্ডওভার নিয়ে। বিল্ডোরা কথামতো ২৮ মাসেই ফ্ল্যাট বুঝিয়ে দিয়েছে, প্রতি মাসে ছবি আর রিপোর্টও পাঠাত।',
    },
    name: { en: 'Alhaj Md. Jahangir Alam', bn: 'আলহাজ্ব মোঃ জাহাঙ্গীর আলম' },
    role: { en: 'Land owner', bn: 'জমির মালিক' },
    location: { en: 'Mirpur DOHS, Dhaka', bn: 'মিরপুর ডিওএইচএস, ঢাকা' },
  },
  {
    id: 2,
    quote: {
      en: 'The factory shed was finished two weeks before our buyer audit. Their site engineer Mahmud bhai was always reachable, even at night.',
      bn: 'বায়ার অডিটের দুই সপ্তাহ আগেই ফ্যাক্টরি শেডের কাজ শেষ হয়েছে। ওদের সাইট ইঞ্জিনিয়ার মাহমুদ ভাইকে রাতেও ফোনে পাওয়া যেত।',
    },
    name: { en: 'Kamrul Hasan', bn: 'কামরুল হাসান' },
    role: { en: 'Director, garment factory', bn: 'পরিচালক, পোশাক কারখানা' },
    location: { en: 'Kashimpur, Gazipur', bn: 'কাশিমপুর, গাজীপুর' },
  },
  {
    id: 3,
    quote: {
      en: 'Our office interior was done while we kept working. They planned the noisy work for Fridays and cleaned up before every Saturday morning.',
      bn: 'অফিস চালু রেখেই আমাদের ইন্টেরিয়রের কাজ হয়েছে। শব্দের কাজগুলো ওরা শুক্রবারে করত, আর শনিবার সকালের আগেই সব পরিষ্কার করে দিত।',
    },
    name: { en: 'Sharmin Sultana', bn: 'শারমিন সুলতানা' },
    role: { en: 'Managing Partner, law firm', bn: 'ম্যানেজিং পার্টনার, ল ফার্ম' },
    location: { en: 'Gulshan-1, Dhaka', bn: 'গুলশান-১, ঢাকা' },
  },
]
