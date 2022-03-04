import axios, { AxiosResponse } from 'axios'
import { API_BASE_URL } from './constants'

export const getEvent = async (slug: string) => {
  try {
    const fetchEvent = await axios.get(`${API_BASE_URL}/event/${slug}`)
    return fetchEvent.data
  } catch (err) {
    throw err
  }
}
export const register = async (data: any) => {
  try {
    const postData: AxiosResponse = await axios({
      method: 'POST',
      url: `${API_BASE_URL}/register`,
      data: data,
    })
    return postData
  } catch (err) {
    return { status: 502 }
  }
}
