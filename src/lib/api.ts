import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})
