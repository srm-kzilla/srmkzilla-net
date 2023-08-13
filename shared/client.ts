import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  dataset: 'production',
  useCdn: true,
  apiVersion:'2023-08-13',
})
