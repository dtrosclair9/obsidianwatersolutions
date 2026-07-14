import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/well-water-treatment-baton-rouge-la'

export const metadata: Metadata = {
  title: 'Well Water Treatment in Baton Rouge, LA',
  description:
    'Iron, sulfur & sediment removal for private wells in Livingston, Ascension & the Baton Rouge area. Dual-tank well systems, free water testing, free installation.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Well Water Treatment in Baton Rouge, LA | Obsidian Water Solutions',
    description:
      'Iron, sulfur & sediment removal for private wells in Livingston, Ascension & the Baton Rouge area. Free water testing and installation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why does my well water smell like rotten eggs?',
    a: 'The rotten-egg smell is hydrogen sulfide gas, and it is one of the most common well water complaints in Livingston and Ascension Parish. It forms naturally underground and comes out of solution the moment you open a tap, which is why the smell hits hardest in a hot shower. A dedicated sulfur removal system with catalytic media oxidizes and traps the gas before it reaches your plumbing, eliminating the odor at every faucet.',
  },
  {
    q: 'What causes orange or brown stains on my tubs and laundry?',
    a: 'Orange and brown staining is dissolved iron in your well water oxidizing when it meets air. Even at levels well below one part per million, iron stains fixtures, dulls laundry, and leaves rings in toilets. Iron is the most common well water problem in our area, and a properly sized iron filter removes it before it ever reaches a fixture.',
  },
  {
    q: 'How much does a well water treatment system cost in the Baton Rouge area?',
    a: 'Well water systems are quoted from your actual water test rather than a flat menu, because iron at 0.5 ppm and iron at 3 ppm need different equipment. Installation is free with your system, and package pricing can save up to 40% when treatment is combined with softening or drinking-water filtration. The free test comes first, so the quote reflects what your well actually needs.',
  },
  {
    q: 'Will a regular water softener fix iron and sulfur?',
    a: 'Not reliably, and this is the most expensive mistake well owners make. A softener can catch trace iron, but meaningful iron or any hydrogen sulfide will foul softener resin and leave the underlying problem untreated. Wells with iron or sulfur need dedicated oxidation media ahead of any softener, which is exactly what our dual-tank well systems provide.',
  },
  {
    q: 'How do I know what is actually in my well water?',
    a: 'Test it, because private wells are not regulated or monitored by anyone but the owner. Our free in-home test covers iron, hardness, pH, TDS, and sulfur indicators, with the results explained on the spot. Unlike city water, a well can also change over time, so testing is worth repeating every couple of years even after treatment.',
  },
  {
    q: 'Do you service wells outside Baton Rouge?',
    a: 'Yes. Most of the wells we treat are outside the city, across Livingston Parish around Walker, Watson, and Holden, and through Ascension Parish around Prairieville, St. Amant, and Geismar. If you are anywhere in the greater Baton Rouge area, you are in our service area.',
  },
  {
    q: 'Is well water with iron or sulfur dangerous to drink?',
    a: 'Iron and hydrogen sulfide at the levels typical in local wells are secondary contaminants, meaning they affect taste, smell, and staining rather than acute health risk. That said, a well that has changed color or smell deserves a full test, because the same conditions can accompany other issues such as bacteria that do matter for health. Treat the annoyance, but verify the safety.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Well Water Treatment',
  serviceType: 'Well water treatment and iron and sulfur removal',
  description:
    'Dual-tank well water treatment systems removing iron, manganese, hydrogen sulfide, and sediment for private wells in the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Livingston Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'Ascension Parish, LA' },
    { '@type': 'AdministrativeArea', name: 'East Baton Rouge Parish, LA' },
  ],
}

export default function WellWaterPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Well Water Treatment in Baton Rouge, Louisiana"
        intro="Private wells across Livingston and Ascension Parish carry iron, sulfur, and sediment that city-water filters were never designed to touch. We test your well for free, then build a treatment system around what is actually coming out of the ground."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Well Water Treatment', href: PATH },
        ]}
        image="/images/service-well.jpg"
        imageAlt="Dual tank well water iron and sulfur removal system by Obsidian Water Solutions"
      />

      {/* Symptom-led section — the content nobody local has */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Know the signs</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            What your well water is telling you
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Rotten-egg smell in the shower</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Hydrogen sulfide gas, dissolved in the water underground, released the
                moment it hits air. Hot water makes it worse, which is why the bathroom
                is where most people finally decide to fix it. Catalytic carbon or
                air-injection oxidation removes it completely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Orange stains in tubs, toilets, and laundry</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Dissolved iron oxidizing on contact with air. It shows up as rust rings,
                orange streaks below faucets, and dingy whites out of the washer. Iron
                filtration media traps it in the tank instead of on your fixtures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Black slime or dark streaks</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Usually manganese, iron&apos;s less famous partner, common in the same
                Livingston and Ascension Parish groundwater. It stains darker than iron
                and is treated with the same oxidation approach when the system is sized
                for it from the start.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cloudy water or gritty sediment</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Sand and silt pulled up from the aquifer, which wears out fixtures,
                clogs aerators, and shortens pump life. A sediment stage ahead of the
                main treatment tanks catches it first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us for wells */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">Why Obsidian for well water</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Built for wells, not adapted from city-water systems
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Dual-tank well systems</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Dedicated oxidation and filtration stages in separate tanks, so iron and
                sulfur are removed before water ever reaches a softener or your
                plumbing. One tank doing two jobs is how well systems fail.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Media matched to your test</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Iron at trace levels, iron at 3 ppm, and sulfur odor each call for
                different filtration media. We size and load the system from your free
                water test, not from a catalog default.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Whole-property thinking</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Well treatment has to respect your pump, pressure tank, and flow rate.
                We design around the equipment you already have so treated water does
                not come at the cost of water pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What&apos;s included</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Every well water system includes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home well water test before any quote',
                'Dual-tank iron and sulfur removal sized to your results',
                'Sediment pre-filtration to protect the system and your plumbing',
                'Free professional installation at your well line',
                'Lifetime warranty on your system, in writing',
                'Post-install support: media checks, questions, and adjustments',
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
          </div>
          <Image
            src="/images/service-testing.jpg"
            alt="Obsidian Water Solutions well water testing kit with sample vials showing iron-tinted and clear water"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* Service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where the wells are</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving well owners across the parishes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Most of the private wells we treat sit outside the city limits: across
            Livingston Parish in Walker, Watson, Holden, and the rural stretches around
            Denham Springs, and through Ascension Parish in Prairieville, St. Amant, and
            Geismar. If your neighborhood is on a well, chances are your neighbors are
            fighting the same iron and sulfur you are.
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

      <Faq items={faqs} title="Well water questions, answered" />
      <CtaSection
        title="Get your well tested for free"
        body="Iron, sulfur, hardness, pH, and TDS, tested at your tap and explained on the spot. No charge, no obligation, and a straight answer about whether treatment is worth it for your well."
      />
    </>
  )
}
