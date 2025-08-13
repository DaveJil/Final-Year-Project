import api from './axiosInstance.js'

// Mockable endpoints
export async function login(email, password) {
  // Replace with: const { data } = await api.post('/auth/login', { email, password })
  await new Promise(r => setTimeout(r, 400))
  return { user: { id: 1, name: 'QAQC Engineer', email } }
}
