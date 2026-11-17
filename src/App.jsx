import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { LoadingLabel } from '@/components/ui/Feedback'
import PublicLayout from '@/layouts/PublicLayout'
import Home from '@/pages/Home'

// Public inner pages (lazy-loaded per route)
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Projects = lazy(() => import('@/pages/Projects'))
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'))
const Team = lazy(() => import('@/pages/Team'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Admin preview (kept in a separate chunk so public visitors never download it)
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'))
const AdminLogin = lazy(() => import('@/pages/admin/Login'))
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'))
const AdminProjects = lazy(() => import('@/pages/admin/Projects'))
const AdminServices = lazy(() => import('@/pages/admin/Services'))
const AdminTeam = lazy(() => import('@/pages/admin/Team'))
const AdminTestimonials = lazy(() => import('@/pages/admin/Testimonials'))
const AdminQuotes = lazy(() => import('@/pages/admin/Quotes'))
const AdminMessages = lazy(() => import('@/pages/admin/Messages'))
const AdminSettings = lazy(() => import('@/pages/admin/Settings'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sand">
      <LoadingLabel />
      <div className="size-8 animate-spin rounded-full border-2 border-line border-t-accent" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/admin/login"
          element={
            <Suspense fallback={<AdminFallback />}>
              <AdminLogin />
            </Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<AdminFallback />}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="team" element={<AdminTeam />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="quotes" element={<AdminQuotes />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      </Routes>
    </>
  )
}
