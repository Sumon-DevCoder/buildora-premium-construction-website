import axios from 'axios'

/**
 * Axios instance for the Laravel API (Phase 2). It is loaded lazily from
 * api.js, so it is not part of the bundle while VITE_USE_MOCK is true.
 */
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  withCredentials: true, // Sanctum SPA cookie auth
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default http
