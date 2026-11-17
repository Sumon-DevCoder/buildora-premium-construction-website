import { Component } from 'react'

/**
 * Catches render errors below it so one broken section cannot blank the
 * whole site. Text is bilingual because the language context itself may be
 * what failed.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Phase 2: report to an error tracking service here.
    if (import.meta.env.DEV) {
      console.error(error, info.componentStack)
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div role="alert" className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-4 py-32">
        <h1 className="text-h2">Something went wrong</h1>
        <p className="mt-4">
          Please refresh the page. If the problem continues, call us and we will help you directly.
        </p>
        <p lang="bn" className="mt-2">
          পেজটি রিফ্রেশ করুন। সমস্যা থেকে গেলে আমাদের ফোন করুন।
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex h-12 w-fit items-center rounded-lg bg-accent px-6 font-display text-[0.9375rem] font-semibold text-white hover:bg-accent-hover"
        >
          Refresh · রিফ্রেশ
        </button>
      </div>
    )
  }
}
