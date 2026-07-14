import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-filtration-zachary-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Filtration in Zachary, LA | Drinking Water' },
  description:
    'Zachary tap water is solid. Filtration makes it yours: reverse osmosis at the sink for the kids, chlorine-free taste, appliance protection. Free water test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Filtration in Zachary, LA | Obsidian Water Solutions',
    description:
      'Water filtration for Zachary families: reverse osmosis drinking water at the sink, chlorine taste removal, and appliance protection. Free in-home test.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Is Zachary tap water safe to drink?',
    a: 'Yes. Zachary draws from the same deep Southern Hills Aquifer system that supplies the rest of the Baton Rouge area, and the water is treated and monitored before it reaches your tap. Filtration here is not a safety rescue. It is about taste, chlorine, and how far you want to take drinking-water quality for your household, which is a goal, not an alarm.',
  },
  {
    q: 'What is the best system for kids’ drinking water?',
    a: 'A reverse osmosis system at the kitchen sink. It polishes the water your family actually drinks and cooks with down to bottled-water quality, without the bottles, so filling cups and water bottles for school comes from the best tap in the house. It installs under the sink, and the free water test confirms what it is starting from.',
  },
  {
    q: 'What does water filtration cost in Zachary?',
    a: 'The Complete Home Package lists at $4,599 installed, and package pricing can save up to 40% versus buying each system separately. A standalone reverse osmosis system costs much less than the package. The free in-home water test comes first, so we quote only the equipment your water and your goals actually call for, and installation is free either way.',
  },
  {
    q: 'Do you serve Central and Baker too?',
    a: 'Yes. Zachary, Central, and Baker are all regular service area, along with the rural roads in between. Central in particular mixes city-water homes with private wells, and well homes need different equipment than anything on this page. The free test sorts that out at your tap before anyone talks systems.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Filtration in Zachary, LA',
  serviceType: 'Drinking water filtration and reverse osmosis installation',
  description:
    'Water filtration for Zachary, Louisiana families: reverse osmosis drinking water at the kitchen sink, whole-house chlorine and sediment filtration, and appliance protection for newer builds.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Central, LA' },
    { '@type': 'City', name: 'Baker, LA' },
  ],
}

export default function ZacharyFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Filtration in Zachary, Louisiana"
        intro="Families move to Zachary for the schools, and the water questions follow: what the kids drink at the sink, why the tap tastes like chlorine, and how to protect the appliances in a newer build. Good news first, your water is solid. Here is what filtration adds."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Filtration in Zachary', href: PATH },
        ]}
        image="/images/lifestyle-glass.jpg"
        imageAlt="Clear glass of filtered drinking water in a Zachary Louisiana family kitchen"
      />

      {/* Local context — what makes Zachary water Zachary's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Zachary water, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The water is good. The question is what you want at the sink.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Zachary&apos;s tap water comes from the same deep Southern Hills Aquifer
            system as the rest of the Baton Rouge area, hundreds of feet of geology
            away from anything on the surface, treated and monitored on its way to
            your house. We lead with that because it is true, and because a company
            that would scare you about good water would say anything. Nobody in
            Zachary needs a filter to be safe.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            What families here actually ask us about is the sink. When the kids fill
            water bottles for school every morning, parents want that tap to be the
            best water in the house, and a reverse osmosis system under the kitchen
            sink does exactly that: bottled-water taste, no case of plastic bottles
            in the pantry. The chlorine that keeps the distribution system clean is
            also the taste most people want gone, and carbon filtration removes it at
            the tap or across the whole house.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            The other Zachary pattern is newer construction. Subdivisions like
            Americana filled with recent builds and recent appliances, and filtration
            plus softening is how a tankless heater and a new dishwasher stay new.
            Even naturally low-hardness water leaves scale over years of hot-water
            cycles, so protecting a house full of new equipment is a when question
            more than a whether question.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Drinking water first, whole house when it earns it
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test: hardness, chlorine, TDS, iron, and pH at your tap',
                'Tankless reverse osmosis at the kitchen sink for drinking and cooking water',
                'Whole-house carbon filtration for chlorine taste and odor in every shower',
                'Scale protection for tankless heaters and appliances in newer builds',
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
              The drinking-water setup most Zachary families start with is covered in
              depth on the{' '}
              <Link
                href="/services/reverse-osmosis-system-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                reverse osmosis drinking water
              </Link>{' '}
              page.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Zachary water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-ro.jpg"
            alt="Tankless reverse osmosis drinking water system at a kitchen sink in Zachary Louisiana"
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
            Also serving Central, Baker &amp; northern East Baton Rouge
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Central and Baker get the same test-first treatment as Zachary. The
            rural stretches of northern East Baton Rouge Parish also hold private
            wells, and well water is its own world: iron staining and sulfur smell
            instead of chlorine taste. We treat wells across the region, and the
            deepest local write-up lives on our Walker page.
          </p>
          <p className="mt-4">
            <Link
              href="/services/well-water-treatment-walker-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Well water treatment in Walker →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Zachary water filtration questions" />
      <CtaSection
        title="Get your Zachary water tested for free"
        body="We test at your kitchen tap, show you the numbers on the spot, and tell you honestly what filtration would change and what it would not. The test is free either way."
      />
    </>
  )
}
