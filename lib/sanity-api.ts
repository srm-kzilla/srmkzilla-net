import sanityClient from '@shared/client'

export const getTimeline = async () => {
  const results = await sanityClient
    .fetch(
      `*[_type == "timeline"]{
      title,
      chattext,
      date,
      picture{
        asset->{
          _id,
          url
        },
        alt
      },
      description
    }`
    )
    .catch((err) => console.log(err))

  return results
}

export const getTeamMembers = async () => {
  const results = await sanityClient
    .fetch(
      `*[_type == "teamMembers" ] | order(index) {
        name,
        picture{
          asset->{
            _id,
            url
          },
          alt
        },
        description{
          asset->{
            _id,
            url
          }
        },
        designation,
        index
    }`
    )
    .catch((err) => console.log(err))

  return results
}

export const getNewUpdates = async () => {
  const results = await sanityClient
    .fetch(
      `*[_type == "whatsNew"]{
        title,
        picture{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
        link
    }`
    )
    .catch((err) => console.log(err))

  return results
}

export const getProjects = async () => {
  const results = await sanityClient
    .fetch(
      `*[_type == "project"]{
        title,
        slug,
        logo{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    )
    .catch((err) => console.log(err))

  return results
}

export const getServiceProjects = async () => {
  const results = await sanityClient
    .fetch(
      `*[_type == "services"]{
        title,
        logo{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
        link
    }`
    )
    .catch((err) => console.log(err))

  return results
}
