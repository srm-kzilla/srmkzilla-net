// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://i.instagram.com/api/v1/users/web_profile_info/?username=srmkzilla`,
      {
        headers: {
          'User-Agent':
            'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)',
        },
      }
    )

    // Extract the relevant data from the Axios response
    const data = response.data
    res.status(200).json({ data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while fetching data' })
  }
}
