import axios, { AxiosResponse } from 'axios'
const baseUrl = 'http://events-api.srmkzilla.net/api'

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
    console.log(data)

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

export const allEvents = async () => {
  try {
    const events = await axios.get(`${baseUrl}/events`)
    return events.data
  } catch (err) {
    throw err
  }
}
