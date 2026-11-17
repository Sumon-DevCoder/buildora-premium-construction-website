import { createContext, useCallback, useMemo, useState } from 'react'

const STORAGE_KEY = 'buildora:admin-auth'

export const AuthContext = createContext(null)

function readStoredUser() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Phase 1 fake admin auth (stored in localStorage).
 * Phase 2 replaces login/logout with Laravel Sanctum SPA cookies.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)

  const login = useCallback((email) => {
    const nextUser = {
      name: 'Engr. Rafiqul Islam',
      email: email?.trim() || 'admin@buildora.com',
      role: 'Super Admin (Demo)',
    }
    setUser(nextUser)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    } catch {
      // Ignore storage errors in private browsing.
    }
    return nextUser
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage errors.
    }
  }, [])

  const value = useMemo(() => ({ user, isAuthenticated: Boolean(user), login, logout }), [user, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
