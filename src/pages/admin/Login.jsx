import { ArrowRight, Lock } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import { useAuth } from '@/hooks/useAuth'

export default function AdminLogin() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@buildora.com')
  const [password, setPassword] = useState('demo1234')

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
    navigate('/admin')
  }

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      <Seo title="Admin Login (Demo) | Buildora" noindex />

      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <img
          src="/images/hero/construction-site-high-rise-bangladesh.webp"
          alt="Buildora construction site"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-x-12 bottom-12 text-white">
          <p className="eyebrow text-white/70">Admin Dashboard Preview</p>
          <h1 className="text-h2 mt-3 text-white">Manage projects, quotes and site settings in one place.</h1>
          <p className="mt-3 max-w-md text-sm text-white/75">
            This is a Phase 1 UI preview using sample data. In Phase 2, it connects to your Laravel API.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <Link to="/" className="inline-block">
            <Logo tone="dark" />
          </Link>

          <h2 className="text-h2 mt-8">Sign in to Admin</h2>
          <p className="mt-2 text-sm text-muted">
            Demo preview — any email and password will sign you in.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-semibold text-ink">
                Email address
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-sm font-semibold text-ink">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-line px-4 text-ink focus:border-ink focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-line bg-sand px-4 py-3 text-xs text-body">
              <Lock className="size-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <span>
                Pre-filled demo credentials: <strong>admin@buildora.com</strong> / <strong>demo1234</strong>
              </span>
            </div>

            <Button type="submit" className="w-full">
              Enter Dashboard
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
            </Button>
          </form>

          <p className="mt-8 text-sm text-muted">
            <Link to="/" className="underline decoration-line underline-offset-4 hover:text-ink">
              ← Back to public website
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
