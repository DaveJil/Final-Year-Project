import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

// Example auth header injection (adapt if you add tokens)
api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('qaqc_user')
  if (raw) {
    const user = JSON.parse(raw)
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default api
