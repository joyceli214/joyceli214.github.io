import { clsx } from 'clsx'
import {
  AudioLines,
  Bot,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Network,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TestTube2,
  UserRound,
} from 'lucide-react'
import {
  siBluetooth,
  siCplusplus,
  siCss,
  siDocker,
  siElasticsearch,
  siEspressif,
  siFirebase,
  siFlutter,
  siGit,
  siHtml5,
  siJson,
  siJunit5,
  siKeycloak,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siReact,
  siRedux,
  siSpringboot,
  siStripe,
  siSwagger,
  siTerraform,
  siTypescript,
} from 'simple-icons'

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

type RawBrandIcon = { path: string; hex: string; title: string }
type BrandIcon = { path: string; color: string; title: string }

const toBrandIcon = (icon: RawBrandIcon): BrandIcon => ({
  path: icon.path,
  color: `#${icon.hex}`,
  title: icon.title,
})

const simpleIconMap = new Map<string, BrandIcon>([
  ['react', toBrandIcon(siReact as RawBrandIcon)],
  ['reactjs', toBrandIcon(siReact as RawBrandIcon)],
  ['redux', toBrandIcon(siRedux as RawBrandIcon)],
  ['typescript', toBrandIcon(siTypescript as RawBrandIcon)],
  ['html5', toBrandIcon(siHtml5 as RawBrandIcon)],
  ['css', toBrandIcon(siCss as RawBrandIcon)],
  ['nodejs', toBrandIcon(siNodedotjs as RawBrandIcon)],
  ['nestjs', toBrandIcon(siNestjs as RawBrandIcon)],
  ['java', toBrandIcon(siOpenjdk as RawBrandIcon)],
  ['springboot', toBrandIcon(siSpringboot as RawBrandIcon)],
  ['json', toBrandIcon(siJson as RawBrandIcon)],
  ['keycloak', toBrandIcon(siKeycloak as RawBrandIcon)],
  ['mongodb', toBrandIcon(siMongodb as RawBrandIcon)],
  ['elasticsearch', toBrandIcon(siElasticsearch as RawBrandIcon)],
  ['firebase', toBrandIcon(siFirebase as RawBrandIcon)],
  ['docker', toBrandIcon(siDocker as RawBrandIcon)],
  ['terraform', toBrandIcon(siTerraform as RawBrandIcon)],
  ['junit', toBrandIcon(siJunit5 as RawBrandIcon)],
  ['junit5', toBrandIcon(siJunit5 as RawBrandIcon)],
  ['swaggerhub', toBrandIcon(siSwagger as RawBrandIcon)],
  ['git', toBrandIcon(siGit as RawBrandIcon)],
  ['c', toBrandIcon(siCplusplus as RawBrandIcon)],
  ['cplusplus', toBrandIcon(siCplusplus as RawBrandIcon)],
  ['esp32', toBrandIcon(siEspressif as RawBrandIcon)],
  ['php', toBrandIcon(siPhp as RawBrandIcon)],
  ['stripe', toBrandIcon(siStripe as RawBrandIcon)],
  ['flutter', toBrandIcon(siFlutter as RawBrandIcon)],
  ['ble', toBrandIcon(siBluetooth as RawBrandIcon)],
])

const lucideMap = {
  aws: Cloud,
  awsec2s3: Cloud,
  azure: Cloud,
  cicd: GitBranch,
  rest: Network,
  oauth20: ShieldCheck,
  rdbms: Database,
  twilio: AudioLines,
  http: Globe,
  accessibility: ShieldCheck,
  legacymodernization: RefreshCw,
  llms: Bot,
  voiceinteraction: AudioLines,
  avatarrendering: UserRound,
  mobileui: Smartphone,
  microservices: ServerCog,
  mockito: TestTube2,
}

interface TechBadgeProps {
  label: string
  className?: string
}

export function TechBadge({ label, className }: TechBadgeProps) {
  const key = normalize(label)
  const simpleIcon = simpleIconMap.get(key)
  const LucideIcon = lucideMap[key as keyof typeof lucideMap] ?? Code2

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white/75 px-3 py-1 text-xs font-medium text-slate-700',
        className,
      )}
    >
      <span className="grid h-4 w-4 place-items-center rounded-full bg-slate-50">
        {simpleIcon ? (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-3 w-3"
            style={{ color: simpleIcon.color }}
            role="img"
          >
            <title>{simpleIcon.title}</title>
            <path fill="currentColor" d={simpleIcon.path} />
          </svg>
        ) : (
          <LucideIcon aria-hidden className="h-3 w-3 text-blue-700" />
        )}
      </span>
      <span>{label}</span>
    </span>
  )
}
