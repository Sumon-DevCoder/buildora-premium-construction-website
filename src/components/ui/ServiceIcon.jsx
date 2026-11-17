import {
  Building2,
  CalendarCheck,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  FileText,
  FlaskConical,
  Handshake,
  HardHat,
  Route,
  Sofa,
  Wrench,
  Zap,
} from 'lucide-react'

/*
 * Content stores an icon *key* (a plain string the API can return); the
 * mapping to an icon component stays here.
 */
const ICONS = {
  building: Building2,
  handshake: Handshake,
  ruler: DraftingCompass,
  road: Route,
  sofa: Sofa,
  factory: Factory,
  zap: Zap,
  clipboard: ClipboardCheck,
  hardhat: HardHat,
  flask: FlaskConical,
  file: FileText,
  calendar: CalendarCheck,
}

export default function ServiceIcon({ name, className }) {
  const Icon = ICONS[name] ?? Wrench
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />
}
