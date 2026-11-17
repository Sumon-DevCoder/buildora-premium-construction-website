import { ArrowLeft, ArrowRight, CheckCircle2, CircleAlert, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/seo/JsonLd'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import FaqList from '@/components/ui/FaqList'
import SectionHeading from '@/components/ui/SectionHeading'
import { site } from '@/config/site'
import { useApi } from '@/hooks/useApi'
import { useLanguage } from '@/hooks/useLanguage'
import { ui } from '@/i18n/ui'
import { getFaqs, sendQuote } from '@/services/api'
import { cn } from '@/utils/cn'
import { isValidBdPhone, localizeDigits } from '@/utils/format'

const INITIAL_FORM = {
  project_type: '',
  location: '',
  area_size: '',
  budget_range: '',
  start_time: 'within_3_months',
  name: '',
  phone: '',
  email: '',
  message: '',
  company_website: '', // honeypot
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-2 flex items-center gap-1.5 text-sm text-danger">
      <CircleAlert className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
      <span>{message}</span>
    </p>
  )
}

export default function Contact() {
  const { lang, t } = useLanguage()
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('service') ?? ''

  const [step, setStep] = useState(1)
  const [form, setForm] = useState(() => ({
    ...INITIAL_FORM,
    project_type: preselected.includes('joint-venture')
      ? 'joint_venture'
      : preselected.includes('interior')
        ? 'interior'
        : preselected.includes('steel')
          ? 'industrial'
          : preselected.includes('road')
            ? 'road'
            : '',
  }))
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const { data: faqs } = useApi(getFaqs, [])
  const origin = site.url || (typeof window !== 'undefined' ? window.location.origin : '')

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: '' }))
    setSubmitError('')
  }

  const validateStep = (targetStep) => {
    const nextErrors = {}
    if (targetStep === 1 && !form.project_type) {
      nextErrors.project_type = t(ui.quote.errors.type)
    }
    if (targetStep === 2) {
      if (!form.location.trim()) nextErrors.location = t(ui.quote.errors.location)
      if (!form.budget_range) nextErrors.budget_range = t(ui.quote.errors.budget)
    }
    if (targetStep === 3) {
      if (!form.name.trim()) nextErrors.name = t(ui.quote.errors.name)
      if (!isValidBdPhone(form.phone)) nextErrors.phone = t(ui.quote.errors.phone)
      if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = t(ui.quote.errors.email)
      }
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) setStep((prev) => Math.min(3, prev + 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep(3)) return
    setSubmitting(true)
    setSubmitError('')
    try {
      await sendQuote(form)
      setSubmitted(true)
    } catch {
      setSubmitError(t(ui.quote.errors.submit))
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setForm(INITIAL_FORM)
    setErrors({})
    setStep(1)
    setSubmitted(false)
  }

  const stepLabel = t(ui.quote.stepOf)
    .replace('{current}', localizeDigits(step, lang))
    .replace('{total}', localizeDigits(3, lang))

  return (
    <>
      <Seo title={t(ui.pages.contact.seoTitle)} description={t(ui.pages.contact.seoDescription)} />
      <JsonLd
        id="breadcrumb-contact"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t(ui.nav.home), item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: t(ui.nav.contact), item: `${origin}/contact` },
          ],
        }}
      />

      <PageHero
        eyebrow={t(ui.pages.contact.eyebrow)}
        title={t(ui.pages.contact.title)}
        lead={t(ui.pages.contact.lead)}
        crumbs={[{ label: t(ui.nav.contact) }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-line bg-white p-6 md:p-10">
                {submitted ? (
                  <div className="py-8 text-left">
                    <div className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <CheckCircle2 className="size-7" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h2 className="text-h2 mt-6">{t(ui.quote.successTitle)}</h2>
                    <p className="text-lead mt-3 text-body">{t(ui.quote.successText)}</p>
                    <Button onClick={resetForm} variant="secondary" className="mt-8">
                      {t(ui.quote.sendAnother)}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <h2 className="text-h3">{t(ui.quote.formTitle)}</h2>
                      <span className="text-sm font-medium text-muted tabular-nums">{stepLabel}</span>
                    </div>

                    <div className="mt-4 flex gap-2" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className={cn('h-1.5 flex-1 rounded-full', n <= step ? 'bg-accent' : 'bg-line')}
                        />
                      ))}
                    </div>

                    {step === 1 && (
                      <div className="mt-8">
                        <p className="font-display text-lg font-semibold text-ink">{t(ui.quote.step1)}</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {ui.quote.types.map((item) => {
                            const active = form.project_type === item.key
                            return (
                              <button
                                key={item.key}
                                type="button"
                                onClick={() => updateField('project_type', item.key)}
                                className={cn(
                                  'flex min-h-14 items-center rounded-lg border px-4 py-3 text-left font-medium transition-colors',
                                  active
                                    ? 'border-accent bg-accent-soft text-ink'
                                    : 'border-line bg-white text-body hover:border-ink',
                                )}
                              >
                                {t(item.label)}
                              </button>
                            )
                          })}
                        </div>
                        <FieldError message={errors.project_type} />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="mt-8 space-y-6">
                        <p className="font-display text-lg font-semibold text-ink">{t(ui.quote.step2)}</p>

                        <div>
                          <label htmlFor="quote-location" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.location)} *
                          </label>
                          <input
                            id="quote-location"
                            type="text"
                            value={form.location}
                            onChange={(e) => updateField('location', e.target.value)}
                            placeholder={t(ui.quote.locationHint)}
                            className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
                          />
                          <FieldError message={errors.location} />
                        </div>

                        <div>
                          <label htmlFor="quote-size" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.size)}
                          </label>
                          <input
                            id="quote-size"
                            type="text"
                            value={form.area_size}
                            onChange={(e) => updateField('area_size', e.target.value)}
                            placeholder={t(ui.quote.sizeHint)}
                            className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="quote-budget" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.budget)} *
                          </label>
                          <select
                            id="quote-budget"
                            value={form.budget_range}
                            onChange={(e) => updateField('budget_range', e.target.value)}
                            className="mt-2 h-12 w-full rounded-lg border border-line bg-white px-4 text-ink focus:border-ink focus:outline-none"
                          >
                            <option value="">{t(ui.quote.select)}</option>
                            {ui.quote.budgets.map((b) => (
                              <option key={b.key} value={b.key}>
                                {t(b.label)}
                              </option>
                            ))}
                          </select>
                          <FieldError message={errors.budget_range} />
                        </div>

                        <div>
                          <label htmlFor="quote-start" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.start)}
                          </label>
                          <select
                            id="quote-start"
                            value={form.start_time}
                            onChange={(e) => updateField('start_time', e.target.value)}
                            className="mt-2 h-12 w-full rounded-lg border border-line bg-white px-4 text-ink focus:border-ink focus:outline-none"
                          >
                            {ui.quote.starts.map((s) => (
                              <option key={s.key} value={s.key}>
                                {t(s.label)}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="mt-8 space-y-6">
                        <p className="font-display text-lg font-semibold text-ink">{t(ui.quote.step3)}</p>

                        {/* Honeypot for spam bots */}
                        <input
                          type="text"
                          name="company_website"
                          value={form.company_website}
                          onChange={(e) => updateField('company_website', e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                          className="hidden"
                          aria-hidden="true"
                        />

                        <div>
                          <label htmlFor="quote-name" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.name)} *
                          </label>
                          <input
                            id="quote-name"
                            type="text"
                            value={form.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
                          />
                          <FieldError message={errors.name} />
                        </div>

                        <div>
                          <label htmlFor="quote-phone" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.phone)} *
                          </label>
                          <input
                            id="quote-phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            placeholder={t(ui.quote.phoneHint)}
                            className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
                          />
                          <FieldError message={errors.phone} />
                        </div>

                        <div>
                          <label htmlFor="quote-email" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.email)}
                          </label>
                          <input
                            id="quote-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
                          />
                          <FieldError message={errors.email} />
                        </div>

                        <div>
                          <label htmlFor="quote-message" className="block text-sm font-semibold text-ink">
                            {t(ui.quote.message)}
                          </label>
                          <textarea
                            id="quote-message"
                            rows={3}
                            value={form.message}
                            onChange={(e) => updateField('message', e.target.value)}
                            className="mt-2 w-full rounded-lg border border-line p-4 text-ink focus:border-ink focus:outline-none"
                          />
                        </div>

                        <p className="text-sm text-muted">{t(ui.quote.privacy)}</p>
                        <FieldError message={submitError} />
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
                      {step > 1 ? (
                        <Button type="button" variant="secondary" onClick={() => setStep((s) => s - 1)}>
                          <ArrowLeft className="size-4" strokeWidth={2} aria-hidden="true" />
                          {t(ui.quote.back)}
                        </Button>
                      ) : (
                        <span />
                      )}

                      {step < 3 ? (
                        <Button type="button" onClick={handleNext}>
                          {t(ui.quote.next)}
                          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                        </Button>
                      ) : (
                        <Button type="submit" disabled={submitting}>
                          {submitting ? t(ui.quote.sending) : t(ui.quote.submit)}
                          <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <h2 className="text-h3">{t(ui.pages.contact.detailsHeading)}</h2>

              <div className="divide-y divide-line rounded-xl border border-line bg-sand">
                <div className="flex items-start gap-4 p-6">
                  <Phone className="mt-1 size-5 shrink-0 text-ink" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted">{t(ui.pages.contact.callTitle)}</p>
                    {site.phone.tel ? (
                      <a href={site.phone.tel} className="mt-1 block font-display text-lg font-semibold text-ink tabular-nums underline decoration-line underline-offset-4 hover:decoration-ink">
                        {site.phone.display}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-lg font-semibold text-ink tabular-nums">
                        {site.phone.display}
                      </p>
                    )}
                    {site.phone.whatsapp && (
                      <a
                        href={site.phone.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline underline-offset-4"
                      >
                        <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
                        {t(ui.pages.contact.whatsappTitle)}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6">
                  <Mail className="mt-1 size-5 shrink-0 text-ink" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted">{t(ui.pages.contact.emailTitle)}</p>
                    {site.email.mailto ? (
                      <a href={site.email.mailto} className="mt-1 block font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                        {site.email.display}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-ink">{site.email.display}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6">
                  <MapPin className="mt-1 size-5 shrink-0 text-ink" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted">{t(ui.pages.contact.visitTitle)}</p>
                    <p className="mt-1 font-medium text-ink">{t(site.address)}</p>
                    <p className="mt-0.5 text-sm text-muted">{t(site.branch)}</p>
                    <a
                      href={site.map_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                      {t(ui.footer.openMap)}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6">
                  <Clock className="mt-1 size-5 shrink-0 text-ink" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-sm text-muted">{t(ui.pages.contact.hoursTitle)}</p>
                    <p className="mt-1 font-medium text-ink">{t(site.hours)}</p>
                    <p className="mt-0.5 text-sm text-muted">{t(site.hours_closed)}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-line bg-sand">
                <iframe
                  title={t(ui.pages.contact.mapTitle)}
                  src={site.map_embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="border-t border-line bg-sand py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow={t(ui.faqSection.eyebrow)} title={t(ui.faqSection.title)} />
            <div className="mt-10 max-w-3xl">
              <FaqList items={faqs} />
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
