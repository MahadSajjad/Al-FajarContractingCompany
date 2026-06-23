import {
  TbBuilding,
  TbBuildingSkyscraper,
  TbBuildingFactory2,
  TbBuildingEstate,
  TbHome2,
  TbWall,
  TbRuler,
  TbHammer,
  TbTrowel,
  TbPlugConnected,
  TbPlug,
  TbBolt,
  TbEngine,
  TbAirConditioning,
  TbTopologyBus,
  TbDeviceCctv,
  TbSnowflake,
  TbBulldozer,
  TbRoad,
  TbTrash,
  TbBorderAll,
  TbLayoutGrid,
  TbFence,
  TbTruck,
  TbTruckLoading,
  TbGasStation,
  TbUsersGroup,
  TbSettings,
  TbHeadset,
  TbTools,
  TbShieldCheck,
  TbAward,
  TbClockHour4,
  TbCurrencyRiyal,
  TbLeaf,
  TbThumbUp,
  TbCertificate,
  TbReportMoney,
  TbLicense,
  TbMapPin,
  TbFlame,
  TbTargetArrow,
  TbRocket,
  TbEye,
  TbUserCircle,
} from 'react-icons/tb';
import { GiConcreteBag, GiBrickWall, GiPipes, GiPaintRoller, GiCrane } from 'react-icons/gi';
import { FaFaucetDrip, FaPersonDigging, FaTruckMoving, FaFireExtinguisher, FaHelmetSafety } from 'react-icons/fa6';

// Single place that couples string icon keys (used in /data) to components.
// Keeps data files free of presentational imports and i18n-clean.
export const iconMap = {
  // categories
  'cat-civil': TbBuilding,
  'cat-mep': TbPlugConnected,
  'cat-systems': TbShieldCheck,
  'cat-earthworks': TbBulldozer,
  'cat-finishing': TbTrowel,
  'cat-equipment': TbTruck,
  'cat-manpower': TbUsersGroup,

  // civil & construction
  'civil-work': TbBuildingSkyscraper,
  'concrete-plaster': GiConcreteBag,
  'block-work': GiBrickWall,
  renovations: TbHammer,
  architectural: TbRuler,

  // mep
  mechanical: TbEngine,
  electrical: TbBolt,
  plumbing: FaFaucetDrip,
  pipeline: GiPipes,
  ducting: TbAirConditioning,
  'cable-tray': TbTopologyBus,

  // specialized systems
  firefighting: FaFireExtinguisher,
  security: TbDeviceCctv,
  refrigeration: TbSnowflake,
  power: TbPlug,

  // earthworks & site logistics
  excavation: FaPersonDigging,
  grading: TbBulldozer,
  leveling: TbRuler,
  asphalt: TbRoad,
  loading: FaTruckMoving,
  waste: TbTrash,
  'site-prep': TbBuildingFactory2,

  // finishing
  gypsum: TbBorderAll,
  painting: GiPaintRoller,
  marble: TbLayoutGrid,
  railing: TbFence,

  // equipment & fleet
  'rental-equipment': GiCrane,
  'dump-truck': TbTruckLoading,
  'diesel-truck': TbGasStation,

  // manpower & operations
  manpower: TbUsersGroup,
  maintenance: TbSettings,
  support: TbHeadset,

  // sectors
  residential: TbHome2,
  commercial: TbBuildingEstate,
  industrial: TbBuildingFactory2,
  'oil-gas': TbFlame,

  // features (why choose us)
  craftsmanship: TbAward,
  timely: TbClockHour4,
  'cost-effective': TbCurrencyRiyal,
  safety: FaHelmetSafety,
  sustainability: TbLeaf,
  satisfaction: TbThumbUp,

  // credentials
  'cr-cert': TbCertificate,
  vat: TbReportMoney,
  'transport-license': TbLicense,
  'national-address': TbMapPin,

  // about / narrative
  objective: TbTargetArrow,
  mission: TbRocket,
  vision: TbEye,
  leadership: TbUserCircle,

  // generic / structural
  wall: TbWall,
  tools: TbTools,
};

// Returns the icon component for a key (falls back to a neutral tools icon).
export function getIcon(name) {
  return iconMap[name] ?? TbTools;
}

export default iconMap;
