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

export type TeamMember = {
  name: string
  description: {
    asset: {
      _id: string
      url: string
    }
  }
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

export const sortedTeamMembers = (teamMembers: TeamMember[]) => {
  return teamMembers.sort((a, b) => {
    return (
      HIERARCHY.indexOf(a.designation) - HIERARCHY.indexOf(b.designation) ||
      a.name.localeCompare(b.name)
    )
  })
}
