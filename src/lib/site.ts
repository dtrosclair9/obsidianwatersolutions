// Central site config — every canonical, schema, and contact detail reads from here.
// ⚠️ PRE-LAUNCH: phone is Dax's known cell as a placeholder — confirm the business
// line before launch. Email is Dayne's test address — swap to the client's.

export const BASE_URL = 'https://obsidianwatersolutions.com'

export const site = {
  name: 'Obsidian Water Solutions',
  legalName: 'Obsidian Water Solutions',
  domain: 'obsidianwatersolutions.com',
  phoneDisplay: '(985) 227-2591', // PLACEHOLDER — confirm business line before launch
  phoneRaw: '+19852272591',
  email: 'daynetrosclair@icloud.com', // TEST — swap to client email before launch
  city: 'Baton Rouge',
  state: 'LA',
  stateFull: 'Louisiana',
  geo: { lat: 30.4515, lng: -91.1871 },
  areaServed: [
    'Baton Rouge',
    'Denham Springs',
    'Prairieville',
    'Walker',
    'Gonzales',
    'Zachary',
    'Central',
    'Baker',
    'Port Allen',
    'Watson',
    'St. Amant',
    'Geismar',
  ],
  parishes: [
    'East Baton Rouge Parish',
    'Livingston Parish',
    'Ascension Parish',
    'West Baton Rouge Parish',
  ],
}

// Plain object (NOT `as const`) so it can be spread into every page's
// openGraph.images — pages that set their own openGraph do not inherit
// the layout's images (Next App Router replaces, it doesn't merge).
export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Obsidian Water Solutions: Water Filtration and Softener Systems in Baton Rouge, Louisiana',
}

export type Service = {
  slug: string
  name: string
  navLabel: string
  short: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'whole-house-water-filtration-baton-rouge-la',
    name: 'Whole-House Water Filtration',
    navLabel: 'Whole-House Water Filtration',
    short:
      'One system at the main line filters every tap, shower, and appliance in the house: chlorine, sediment, taste, and odor.',
    image: '/images/service-whole-house.jpg',
    imageAlt:
      'Obsidian Water Solutions whole house water filtration tank system for Baton Rouge homes',
  },
  {
    slug: 'water-softener-installation-baton-rouge-la',
    name: 'Water Softener Installation',
    navLabel: 'Water Softeners',
    short:
      'High-efficiency softeners that stop scale buildup in tankless heaters, plumbing, and fixtures, sized to your home and your water.',
    image: '/images/service-softener.jpg',
    imageAlt:
      'Obsidian Water Solutions water softener and brine tank installed for a Baton Rouge area home',
  },
  {
    slug: 'reverse-osmosis-system-baton-rouge-la',
    name: 'Reverse Osmosis Drinking Water',
    navLabel: 'Reverse Osmosis Drinking Water',
    short:
      'Tankless reverse osmosis at the kitchen sink: bottled-water quality drinking water without the bottles.',
    image: '/images/service-ro.jpg',
    imageAlt:
      'Tankless reverse osmosis drinking water system on a kitchen counter in Baton Rouge Louisiana',
  },
  {
    slug: 'well-water-treatment-baton-rouge-la',
    name: 'Well Water Treatment',
    navLabel: 'Well Water Treatment',
    short:
      'Iron, sulfur, and sediment removal for private wells. The rotten-egg smell and orange staining end here.',
    image: '/images/service-well.jpg',
    imageAlt:
      'Dual tank well water treatment system for iron and sulfur removal in Livingston and Ascension Parish',
  },
  {
    slug: 'water-testing-baton-rouge-la',
    name: 'Free Water Testing',
    navLabel: 'Free Water Testing',
    short:
      'A free in-home water test that shows you exactly what is in your water: hardness, iron, chlorine, TDS, and pH, before you spend a dollar.',
    image: '/images/service-testing.jpg',
    imageAlt:
      'Obsidian Water Solutions free in-home water testing kit with sample vials and TDS meter',
  },
]

export type CityPage = {
  slug: string
  city: string
  parish: string
  service: string
  navLabel: string
  h1: string
  image: string
  imageAlt: string
}

export const cityPages: CityPage[] = [
  {
    slug: 'water-filtration-denham-springs-la',
    city: 'Denham Springs',
    parish: 'Livingston Parish',
    service: 'Water Filtration',
    navLabel: 'Denham Springs',
    h1: 'Water Filtration in Denham Springs, Louisiana',
    image: '/images/service-whole-house.jpg',
    imageAlt: 'Whole house water filtration system for Denham Springs Louisiana homes',
  },
  {
    slug: 'water-softener-prairieville-la',
    city: 'Prairieville',
    parish: 'Ascension Parish',
    service: 'Water Softener Installation',
    navLabel: 'Prairieville',
    h1: 'Water Softener Installation in Prairieville, Louisiana',
    image: '/images/service-softener.jpg',
    imageAlt: 'Water softener installation for new construction homes in Prairieville Louisiana',
  },
  {
    slug: 'well-water-treatment-walker-la',
    city: 'Walker',
    parish: 'Livingston Parish',
    service: 'Well Water Treatment',
    navLabel: 'Walker',
    h1: 'Well Water Treatment in Walker, Louisiana',
    image: '/images/service-well.jpg',
    imageAlt: 'Well water iron and sulfur treatment system for Walker Louisiana homes',
  },
  {
    slug: 'water-filtration-gonzales-la',
    city: 'Gonzales',
    parish: 'Ascension Parish',
    service: 'Water Filtration',
    navLabel: 'Gonzales',
    h1: 'Water Filtration in Gonzales, Louisiana',
    image: '/images/lifestyle-home.jpg',
    imageAlt: 'South Louisiana home served by Obsidian Water Solutions in Gonzales',
  },
  {
    slug: 'water-filtration-zachary-la',
    city: 'Zachary',
    parish: 'East Baton Rouge Parish',
    service: 'Water Filtration',
    navLabel: 'Zachary',
    h1: 'Water Filtration in Zachary, Louisiana',
    image: '/images/lifestyle-glass.jpg',
    imageAlt: 'Clean filtered drinking water in a Zachary Louisiana family kitchen',
  },
]

export function pageUrl(path: string) {
  return `${BASE_URL}${path === '/' ? '' : path}`
}
