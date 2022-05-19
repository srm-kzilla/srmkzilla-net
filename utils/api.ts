import axios, { AxiosInstance } from 'axios'

export const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    'X-Access-Token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTI4ODE2OTMsImlzcyI6ImVzaEBtYWlsLmNvbSJ9.RwXePTxdnejsi9W4RTF1EvmLhYsYMbKHpA4bIdY9hhQ',
  },
})

export const getEvent = async (slug: string) => {
  try {
    const fetchEvent = await instance.get(`/event/${slug}`)
    return fetchEvent.data
  } catch (err) {
    throw err
  }
}
export const register = async (data: any) => {
  try {
    const postData = await instance.post(`/register`, data)
    return postData
  } catch (err) {
    return { status: 502 }
  }
}

export const allEvents = async () => {
  try {
    const events = await instance.get(`/events`)
    return events.data
  } catch (err) {
    throw err
  }
}
