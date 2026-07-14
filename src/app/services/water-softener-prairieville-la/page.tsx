import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-softener-prairieville-la'

export const metadata: Metadata = {
  title: 'Water Softener Installation in Prairieville, LA | New Builds',
  description:
    'Building or buying new in Prairieville? We finish pre-plumbed softener loops and protect tankless water heaters from scale. Free water test, free install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Softener Installation in Prairieville, LA | Obsidian Water Solutions',
    description:
      'Water softener installation for Prairieville new construction and existing homes. Softener loops finished, tankless heaters protected. Free water test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'My new build has a softener loop. What is that?',
    a: 'A softener loop is a short section of pre-plumbed pipe, usually in the garage, that the builder roughed in so a water softener can be connected without cutting into your plumbing later. It is the cheapest, cleanest install point you will ever have. Connecting a softener to an existing loop is typically a quick single visit, and installation is free with the system.',
  },
  {
    q: 'Do tankless water heaters really need a softener?',
    a: 'Scale is the main enemy of a tankless water heater, because minerals bake onto the heat exchanger every time water passes through it. Many Prairieville new builds ship with tankless units standard, and a softener is the equipment that stops scale from forming in the first place rather than descaling after the fact. It protects the dishwasher, fixtures, and glass shower doors for the same reason.',
  },
  {
    q: 'What does a water softener cost in Prairieville?',
    a: 'The Complete Home Package, which pairs a softener with drinking-water filtration, lists at $4,599 installed, and package pricing can save up to 40% versus buying each system separately. A standalone softener costs less. We quote from your free in-home water test, so the system is sized to your actual hardness numbers, and installation is free either way.',
  },
  {
    q: 'Is installation different for new construction versus an older home?',
    a: 'Only in the plumbing work involved. A new build with a softener loop is the fastest install we do, since the connection point already exists. A retrofit in an older Prairieville home means tying into the main line, which is routine work we handle in the same visit. Installation is free with the system in both cases, and we walk you through settings and salt before we leave.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Softener Installation in Prairieville, LA',
  serviceType: 'Water softener installation and scale protection',
  description:
    'Water softener installation for Prairieville, Louisiana homes, including new-construction softener loop hookups and tankless water heater scale protection, with free water testing and free installation.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Geismar, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'St. Amant, LA' },
  ],
}

export default function PrairievilleSoftenerPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Softener Installation in Prairieville, Louisiana"
        intro="Prairieville is where the Baton Rouge metro is building, and most of those new homes come with a tankless water heater and a pre-plumbed softener loop waiting in the garage. We finish the loop, size the softener to your water, and protect the new house from day one."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Softeners in Prairieville', href: PATH },
        ]}
        image="/images/service-softener.jpg"
        imageAlt="Water softener system with brine tank installed for a new construction Prairieville Louisiana home"
      />

      {/* Local context — what makes Prairieville water Prairieville's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Prairieville &amp; the growth corridor</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            New subdivisions, new appliances, and the loop in your garage
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Prairieville has grown faster than just about anywhere else in the metro,
            and the subdivisions going in off Highway 42 and Highway 73 reflect it:
            street after street of new construction, most of it plumbed with tankless
            water heaters and rough-in softener loops. Builders include the loop
            because they know the equipment belongs there. They just leave the
            softener itself to you.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            That makes the math simple for a new homeowner. The most expensive
            appliances in the house, the tankless heater, the dishwasher, the washer,
            are all brand new today, and scale is what ages them. A softener connected
            at the loop means those appliances only ever see conditioned water. You
            are not fixing a problem later. You are preventing it from the first
            month in the house, which is when protection is worth the most.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Water sources in Ascension Parish are mixed. Most Prairieville
            subdivisions sit on community systems such as Parish Utilities, while
            homes toward the parish edges and older acreage lots can be on private
            wells, where iron becomes part of the picture too. The free in-home test
            measures your actual hardness and iron before we recommend anything, so
            the system matches your address rather than an average.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Softeners sized for Prairieville homes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test: hardness, iron, chlorine, TDS, and pH',
                'Softener loop hookup for new construction, main-line tie-in for retrofits',
                'High-efficiency softeners sized to your household and test numbers',
                'Scale protection for tankless water heaters, dishwashers, and fixtures',
                'Free installation, typically one visit',
                'Lifetime warranty on your system, in writing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full bg-splash shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-zinc-600">
              The full equipment rundown lives on our{' '}
              <Link
                href="/services/water-softener-installation-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                water softener installation
              </Link>{' '}
              page. This page is about getting it into a Prairieville garage the
              week you close.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Prairieville water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/lifestyle-home.jpg"
            alt="New brick home in a Prairieville Louisiana subdivision protected by a water softener system"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* Nearby */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Nearby</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Also serving Geismar, Dutchtown &amp; Gonzales
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The same growth pattern runs down the corridor through Geismar and
            Dutchtown, and we install softeners across all of it. In Gonzales the
            water story shifts: homes split between two municipal providers and
            private wells at the edges, which makes filtration the bigger
            conversation there. That page covers it.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-gonzales-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Gonzales →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Prairieville water softener questions" />
      <CtaSection
        title="Get your Prairieville water tested for free"
        body="We test hardness at your tap, show you the numbers on the spot, and size the softener to what your water actually measures. New build or twenty years in, the test comes first."
      />
    </>
  )
}
