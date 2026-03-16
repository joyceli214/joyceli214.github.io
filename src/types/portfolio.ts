export interface ContactLink {
  label: string
  href: string
  value: string
}

export interface Profile {
  name: string
  role: string
  summary: string
  location: string
  tagline: string
  availability: string
  contacts: ContactLink[]
}

export interface ExperienceItem {
  company: string
  companyUrl: string
  title: string
  period: string
  bullets: string[]
  technologies: string[]
}

export interface ProjectItem {
  name: string
  description: string
  impact: string
  technologies: string[]
  status: 'Private' | 'Academic'
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface EducationItem {
  institution: string
  program: string
  details: string
}

export interface ImpactStat {
  label: string
  value: string
  context: string
}

export interface PortfolioData {
  profile: Profile
  impactStats: ImpactStat[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  education: EducationItem[]
  languages: string[]
}
