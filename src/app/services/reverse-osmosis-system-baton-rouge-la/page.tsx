import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/reverse-osmosis-system-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Reverse Osmosis Water Systems in Baton Rouge, LA' },
  description:
    'Tankless reverse osmosis systems installed at your kitchen sink in Baton Rouge. Bottled-water quality without the bottles, with an alkaline stage option.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Reverse Osmosis Drinking Water Systems in Baton Rouge, LA | Obsidian Water Solutions',
    description:
      'Tankless reverse osmosis at the kitchen sink for Baton Rouge homes. Bottled-water quality without the bottles, plus an alkaline remineralization option.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What does a reverse osmosis system remove?',
    a: 'Reverse osmosis strips water down to nearly pure H2O by forcing it through a membrane fine enough to reject dissolved solids, not just particles. That covers the chlorine and residual tastes that survive a basic filter, along with the broad range of dissolved minerals and contaminants measured as TDS. The result at the faucet is the cleanest water available in a home, which is why RO is the standard bottled water plants themselves use.',
  },
  {
    q: 'What is the difference between tankless and tank-style RO?',
    a: 'Tankless RO makes water on demand; tank-style RO fills a pressurized storage tank under the sink and pours from it. We install tankless systems because they free up the cabinet space a tank eats, deliver a stronger faucet flow, and avoid letting finished water sit in storage. Tank systems still work fine, but once people see the compact white tankless unit next to the old bulky setup, the choice tends to make itself.',
  },
  {
    q: 'How much does a reverse osmosis system cost?',
    a: 'RO is the most affordable system we install, and it is included in the Complete Home Package at $4,599 installed, where package pricing saves up to 40% versus buying each system on its own. As a standalone install, we quote it after the free water test so the recommendation fits your water and your sink. Installation is free with your system either way.',
  },
  {
    q: 'Does reverse osmosis waste water?',
    a: 'Every RO system sends some water to the drain, because rinsing the rejected minerals off the membrane is how the technology works. Traditional tank systems were genuinely inefficient at this. The modern tankless units we install are engineered to send far less to the drain per gallon produced, and for a faucet that supplies drinking and cooking water, the total volume involved is small in household terms.',
  },
  {
    q: 'How often do RO filters need to be changed?',
    a: 'Typically about once a year for the main filter set, and we confirm the exact schedule for your system at installation. Filter changes on the tankless units we install are a quick twist-out, twist-in job, no wrenches and no crawling through the cabinet. Your usage and incoming water quality set the real-world pace, which is another thing the free water test tells us up front.',
  },
  {
    q: 'What does the alkaline remineralization stage do?',
    a: 'It adds a measured blend of healthy minerals back into the water after the membrane has stripped everything out. Pure RO water is extremely clean but tastes flat to some palates, and the alkaline stage restores the crisp, mineral-water character many people prefer while nudging pH upward. It is an optional add-on, and tasting the difference at the faucet is the only test that matters.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Reverse Osmosis Drinking Water Systems',
  serviceType: 'Tankless reverse osmosis drinking water system installation',
  description:
    'Tankless reverse osmosis drinking water systems with optional alkaline remineralization, installed at the kitchen sink for homes across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
  ],
}

export default function ReverseOsmosisPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Reverse Osmosis Drinking Water Systems in Baton Rouge, Louisiana"
        intro="A compact tankless reverse osmosis system at your kitchen sink turns the tap into the best water in the house: bottled-water quality on demand, without the cases, the plastic, or the grocery run. Fill the glass, the coffee maker, and the pot straight from the faucet."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Reverse Osmosis Drinking Water', href: PATH },
        ]}
        image="/images/service-ro.jpg"
        imageAlt="White tankless reverse osmosis drinking water system installed at a Baton Rouge kitchen sink"
      />

      {/* The bottled water case */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Retire the bottled water</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The water you buy in cases, made at your own sink
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            If your household buys bottled water, you are already paying for reverse
            osmosis. Most bottled water is simply RO-treated municipal water with a
            label on it. A system under your own sink produces the same quality on
            demand, and the cases you stop hauling in from the car pay toward the
            system month after month. No more running out mid-week, no more plastic
            piling up in the recycling bin, no more lukewarm bottles in the garage.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Drinking water your kids will actually choose</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                When the tap tastes better than the sports drink, the fight is over.
                Families tell us the RO faucet changes what everyone in the house
                reaches for, from the toddler&apos;s sippy cup to the water bottles
                that leave for school and practice every morning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Coffee and cooking on a clean slate</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Coffee is mostly water, and so are rice, beans, stock, and pasta.
                Chlorine and dissolved solids flatten flavors that RO water lets
                through. If you have ever wondered why cafe coffee tastes different
                from the same beans at home, the water is a bigger part of the answer
                than the machine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">An optional alkaline finish</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                The alkaline remineralization stage adds healthy minerals back after
                the membrane, for the crisp taste of premium mineral water rather
                than the flat profile of pure RO. It is a simple add-on stage, chosen
                at install or added later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why tankless */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Why tankless</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Tankless RO: the whole cabinet back, better flow at the faucet
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              Older RO setups fill the under-sink cabinet with a pressure tank and a
              tangle of small filters. The tankless systems we install replace all of
              that with one slim white unit that makes water on demand: stronger flow
              at the dedicated faucet, no stored water sitting in a tank, and room
              left over for everything the cabinet was actually for.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Filter changes are tool-free twist-and-replace, and the free water test
              before installation confirms the system suits what is coming into your
              home, whether that is city water in Baton Rouge or treated well water
              out in the parishes.
            </p>
          </div>
          <Image
            src="/images/lifestyle-glass.jpg"
            alt="Clear glass of reverse osmosis filtered drinking water in a Baton Rouge home"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s included</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Every reverse osmosis installation includes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <ul className="mt-8 space-y-4">
            {[
              'Free in-home water test before any quote',
              'Compact tankless RO unit with a dedicated sink faucet',
              'Optional alkaline remineralization stage',
              'Free professional installation at your kitchen sink',
              'Lifetime warranty on your system, in writing',
              'Filter change schedule confirmed and explained at install',
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
      </section>

      {/* Pairing + service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The full picture</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            RO handles the glass. What about the rest of the house?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Reverse osmosis is a point-of-use system: it perfects the kitchen faucet
            and leaves the showers, laundry, and water heater to whatever arrives at
            the main line. Many homes pair an RO unit with{' '}
            <Link
              href="/services/whole-house-water-filtration-baton-rouge-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              whole house water filtration
            </Link>{' '}
            so both jobs are covered. We install RO systems across the metro,
            including family suburbs like Zachary, where drinking water for kids is
            usually the reason we get the call.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-zachary-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Zachary →
            </Link>
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Curious what your tap water measures before anything is installed?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book a free water test
            </Link>{' '}
            and taste the difference before you decide.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Reverse osmosis questions, answered" />
      <CtaSection
        title="Put bottled-water quality on tap"
        body="The free in-home water test shows you the TDS number your tap starts with and what a reverse osmosis system would take it to. Free installation, a lifetime warranty, and a faucet the whole household will fight over."
      />
    </>
  )
}
