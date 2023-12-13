export const HIERARCHY = [
  'President',
  'Vice President',
  'Technical Head',
  'Editorial Head',
  'Corporate Head',
  'Events Head',
  'Lead',
  'Associate Lead',
  'Member',
]

export type TeamMembers = {
  name: string
  description: string
  designation: string
  domain: string
  picture: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  index: number
}

export const sortedTeamMembers = (teamMembers: TeamMembers[]) => {
  return teamMembers.sort((a, b) => {
    console.log(
      HIERARCHY.indexOf(a.designation) - HIERARCHY.indexOf(b.designation) ||
        a.name.localeCompare(b.name)
    )
    return (
      HIERARCHY.indexOf(a.designation) - HIERARCHY.indexOf(b.designation) ||
      a.name.localeCompare(b.name)
    )
  })
}
