import axios, { AxiosResponse } from 'axios'
const baseUrl = process.env.BASE_URL || 'http://localhost:8000/api'
export const getEvent = async (slug: string) => {
  try {
    const fetchEvent = await axios.get(`${baseUrl}/event/${slug}`)
    return fetchEvent.data
  } catch (err) {
    throw err
  }
}
export const register = async (data: any) => {
  try {
    const postData: AxiosResponse = await axios({
      method: 'POST',
      url: `${baseUrl}/register`,
      data: data,
    })
    return postData
  } catch (err) {
    return { status: 502 }
  }
}