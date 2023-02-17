import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_ID}`,
  dataset: 'production',
})
