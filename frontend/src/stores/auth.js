import { defineStore } from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    loading: true,
  }),

  actions: {
    async login(form) {
      const res = await api.post('/login', form)

      this.user = res.data.user
      this.token = res.data.token

      localStorage.setItem('token', res.data.token)
    },

    async fetchUser() {
      try {
        const res = await api.get('/user')
        this.user = res.data
      } catch (error) {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
      } finally {
        this.loading = false
      }
    },

    async logout() {
      await api.post('/logout')

      this.user = null
      this.token = null

      localStorage.removeItem('token')
    },
  },
})
