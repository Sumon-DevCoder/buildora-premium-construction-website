const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

/** Replace Latin digits with Bangla digits. */
export function toBnDigits(value) {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)])
}

/** Localize the digits of an already formatted string. */
export function localizeDigits(value, lang = 'en') {
  return lang === 'bn' ? toBnDigits(value) : String(value)
}

/** Group numbers the way they are written in Bangladesh (1,10,000). */
export function formatNumber(value, lang = 'en') {
  const formatted = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(value)
  return localizeDigits(formatted, lang)
}

/**
 * Format a BDT amount in lakh/crore, e.g. 145000000 → "৳ 14.5 crore".
 * Amounts are stored as plain numbers, the same as the future API.
 */
export function formatBDT(amount, lang = 'en') {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return ''

  const units = [
    { min: 1e7, en: 'crore', bn: 'কোটি' },
    { min: 1e5, en: 'lakh', bn: 'লাখ' },
  ]
  const unit = units.find((u) => amount >= u.min)

  if (!unit) return `৳ ${formatNumber(amount, lang)}`

  const scaled = Math.round((amount / unit.min) * 100) / 100
  return `৳ ${formatNumber(scaled, lang)} ${unit[lang] ?? unit.en}`
}

/** "2024-05-20" → "May 2024" / "মে ২০২৪". */
export function formatMonthYear(isoDate, lang = 'en') {
  if (!isoDate) return ''
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}

/** "2024-05-20" → "20 May 2024". */
export function formatDate(isoDate, lang = 'en') {
  if (!isoDate) return ''
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

export function getYear(isoDate, lang = 'en') {
  if (!isoDate) return ''
  return localizeDigits(new Date(isoDate).getFullYear(), lang)
}

/** Accepts 01XXXXXXXXX, 8801XXXXXXXXX or +8801XXXXXXXXX (spaces and dashes allowed). */
export function isValidBdPhone(value) {
  const digits = String(value ?? '').replace(/[\s-]/g, '')
  return /^(?:\+?88)?01[3-9]\d{8}$/.test(digits)
}

/** First letters of the first and last word, e.g. "Nusrat Jahan" → "NJ". */
export function getInitials(name) {
  const words = String(name ?? '')
    .replace(/^(Engr\.|Md\.|Dr\.|Alhaj)\s+/gi, '')
    .replace(/\b(Md\.)\s+/gi, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (words.length === 0) return ''
  if (words.length === 1) return words[0][0].toUpperCase()
  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}
