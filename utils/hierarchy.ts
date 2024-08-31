export const HIERARCHY = [
  'president',
  'vice president',
  'technical head',
  'editorial head',
  'corporate head',
  'events head',
  'lead',
  'associate lead',
  'member',
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
  return teamMembers
    .map((member) => ({
      ...member,
      designation: member.designation.toLowerCase(),
    }))
    .sort((a, b) => {
      return (
        HIERARCHY.indexOf(a.designation) - HIERARCHY.indexOf(b.designation) ||
        a.name.localeCompare(b.name)
      )
    })
    .map((member) => ({
      ...member,
      designation:
        member.designation.charAt(0).toUpperCase() +
        member.designation.slice(1),
    }))
}
