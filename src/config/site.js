/**
 * Company-level settings. In Phase 2 this comes from GET /api/v1/settings.
 * Buildora is a fictional company; replace everything here when rebranding.
 */

const env = import.meta.env

// Digits only, with country code: 8801XXXXXXXXX
const phoneDigits = String(env.VITE_CONTACT_PHONE ?? '').replace(/\D/g, '')
const hasPhone = /^8801[3-9]\d{8}$/.test(phoneDigits)

const email = String(env.VITE_CONTACT_EMAIL ?? '').trim()
const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function formatPhone(digits) {
  // 8801712345678 → +880 1712-345678
  return `+880 ${digits.slice(3, 7)}-${digits.slice(7)}`
}

export const site = {
  name: 'Buildora',
  legal_name: {
    en: 'Buildora Construction & Engineering Ltd.',
    bn: 'বিল্ডোরা কনস্ট্রাকশন অ্যান্ড ইঞ্জিনিয়ারিং লিমিটেড',
  },
  tagline: {
    en: 'Building Your Vision. Delivering Excellence.',
    bn: 'আপনার স্বপ্নের ভবন, আমাদের দায়িত্ব।',
  },
  description: {
    en: 'Building, civil and infrastructure contractor working across Bangladesh since 2012.',
    bn: '২০১২ সাল থেকে সারা বাংলাদেশে ভবন, সিভিল ও অবকাঠামো নির্মাণে নির্ভরযোগ্য প্রতিষ্ঠান।',
  },
  founded_year: 2012,
  url: String(env.VITE_SITE_URL ?? '').replace(/\/$/, ''),

  /*
   * Contact links stay disabled until a real number is set in .env, so the
   * demo never points visitors at a stranger's phone.
   */
  phone: {
    display: hasPhone ? formatPhone(phoneDigits) : '+880 1XXX-XXXXXX',
    tel: hasPhone ? `tel:+${phoneDigits}` : null,
    whatsapp: hasPhone ? `https://wa.me/${phoneDigits}` : null,
  },
  email: {
    display: hasEmail ? email : 'info@buildora.com.bd',
    mailto: hasEmail ? `mailto:${email}` : null,
  },

  address: {
    en: 'Road 11, Banani, Dhaka 1213',
    bn: 'রোড ১১, বনানী, ঢাকা ১২১৩',
  },
  branch: {
    en: 'Branch: Agrabad C/A, Chattogram',
    bn: 'শাখা: আগ্রাবাদ বা/এ, চট্টগ্রাম',
  },
  map_url: 'https://www.google.com/maps/search/?api=1&query=Road+11+Banani+Dhaka+1213',
  map_embed: 'https://www.google.com/maps?q=Road+11,+Banani,+Dhaka+1213&output=embed',
  hours: {
    en: 'Saturday – Thursday, 9:00 AM – 7:00 PM',
    bn: 'শনি – বৃহস্পতি, সকাল ৯টা – সন্ধ্যা ৭টা',
  },
  hours_closed: {
    en: 'Friday closed',
    bn: 'শুক্রবার বন্ধ',
  },

  /*
   * Shown as plain text badges. Never use official government emblems:
   * that would imply an affiliation the company may not have.
   */
  credentials: [
    { en: 'Class-1 Contractor', bn: 'প্রথম শ্রেণির ঠিকাদার' },
    { en: 'BNBC 2020 Compliant', bn: 'বিএনবিসি ২০২০ অনুসরণ' },
    { en: 'ISO 9001:2015 (demo)', bn: 'আইএসও ৯০০১:২০১৫ (ডেমো)' },
    { en: 'e-GP Registered', bn: 'ই-জিপি নিবন্ধিত' },
  ],

  company_profile_url: null, // PDF link; added per client
}
