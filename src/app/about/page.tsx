import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site, cityPages } from '@/lib/site'

const PATH = '/about'

export const metadata: Metadata = {
  title: { absolute: 'About Obsidian Water Solutions | Baton Rouge, LA' },
  description:
    'Obsidian Water Solutions is a Baton Rouge water treatment specialist. Free water testing, systems matched to your water & support after every install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'About Obsidian Water Solutions | Baton Rouge Water Treatment',
    description:
      'A Baton Rouge water treatment specialist. Free in-home testing, professional-grade systems matched to your water, and support after the install.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const standards = [
  {
    title: 'The test before the pitch',
    text: 'No recommendation leaves our mouths before your water has been tested at your own tap. Hardness, iron, chlorine, TDS, and pH get measured first, and the results decide what we suggest, if anything.',
  },
  {
    title: 'Straight answers, both directions',
    text: 'If the numbers say your water is in good shape, that is the report you get. A recommendation you can trust when your water has a problem requires honesty when it does not.',
  },
  {
    title: 'Systems matched to the water',
    text: 'City water in Baton Rouge, harder groundwater in the outlying parishes, and iron-heavy private wells are different problems. Equipment gets sized and configured to your test results, never pulled off a one-size shelf.',
  },
  {
    title: 'Support after the install',
    text: 'The relationship does not end when the system is running. Filter schedules, salt questions, and setting adjustments get answered by people who know your system, for as long as you own it.',
  },
]

const aboutFaqs = [
  {
    q: 'Is Obsidian Water Solutions a local company?',
    a: 'Yes. Obsidian Water Solutions is based in Baton Rouge, Louisiana and serves the surrounding region: East Baton Rouge, Livingston, Ascension, and West Baton Rouge Parish. The water problems we treat every week, from chlorine taste on city water to iron and sulfur in Livingston Parish wells, are the water problems of this specific area.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'Installations are scheduled and supported by our team from the first phone call through post-install support, and the same company that tests your water stands behind the finished system. If you have questions about exactly who will be working in your home, call us before your appointment and we will walk you through how your installation will be handled.',
  },
  {
    q: 'What brands of equipment do you carry?',
    a: 'We install professional-grade water treatment equipment matched to what your water test shows, rather than pushing a single brand across every home. The specific systems we would recommend for your home, and why, are exactly what we cover at your free in-home water test.',
  },
  {
    q: 'How do I get started with Obsidian Water Solutions?',
    a: 'Book the free in-home water test. We test hardness, iron, chlorine, TDS, and pH at your tap, explain the results on the spot, and give you a clear answer about whether treatment makes sense for your home. There is no charge and no obligation either way.',
  },
]

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${pageUrl(PATH)}#aboutpage`,
  name: 'About Obsidian Water Solutions',
  url: pageUrl(PATH),
  description:
    'About Obsidian Water Solutions, a water treatment specialist in Baton Rouge, Louisiana offering whole-house filtration, water softeners, reverse osmosis, well water treatment, and free in-home water testing across East Baton Rouge, Livingston, Ascension, and West Baton Rouge Parish.',
  mainEntity: { '@id': `${BASE_URL}/#business` },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <PageHero
        title="About Obsidian Water Solutions"
        intro="A water treatment specialist for the greater Baton Rouge area. We test water, treat water, and support the systems we install. That focus is the whole company, and it is why the work holds up."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: PATH },
        ]}
        image="/images/lifestyle-glass.jpg"
        imageAlt="Clean filtered drinking water poured into a glass in a Baton Rouge area kitchen"
      />

      {/* What the company is */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Who we are</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Water treatment is the entire business
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            Obsidian Water Solutions is a Baton Rouge water treatment company. Not a
            plumbing outfit with a softener on the menu, not an air-conditioning
            company that added filtration to the truck. Testing water, matching
            equipment to what the test shows, installing it cleanly, and answering the
            phone afterwards is everything we do.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            That focus matters in this market. Water around Baton Rouge ranges from
            genuinely good aquifer city water to private wells in Livingston and
            Ascension Parish running heavy with iron and sulfur, and the right answer
            for one home is the wrong answer for the next. A company that only sells
            one solution finds one problem everywhere it looks. A company built around
            testing can tell you the truth about your specific tap.
          </p>
        </div>
      </section>

      {/* The standard */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">The standard</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            How every Obsidian project runs
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((s) => (
              <div key={s.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment philosophy */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The equipment</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Professional-grade systems, one job per tank
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              We install professional-grade water treatment equipment, the kind sized
              and configured for a specific home rather than boxed for a shelf. The
              design principle behind every system we build is simple: each water
              problem gets its own dedicated media. Chlorine, hardness, iron, and
              sulfur are removed by different materials working under different
              conditions, and asking one tank to do every job at once is how systems
              underperform and wear out early.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              So a well with iron and sulfur gets dedicated oxidation media ahead of
              anything else. A home fighting chlorine taste gets carbon matched to its
              flow rate. A tankless water heater gets a softener sized to protect it.
              Your water test determines the combination, and the lifetime warranty
              covers what we install.
            </p>
          </div>
          <Image
            src="/images/service-whole-house.jpg"
            alt="Professional-grade whole house water filtration tanks installed by Obsidian Water Solutions"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving four parishes around Baton Rouge
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Obsidian Water Solutions installs and services water treatment systems
            across {site.parishes.join(', ')}. That covers Baton Rouge, Baker,
            Central, and Zachary; Denham Springs, Walker, and Watson; Prairieville,
            Gonzales, St. Amant, and Geismar; and Port Allen across the river.
          </p>
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cityPages.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  {c.service} in {c.city} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={aboutFaqs} title="About Obsidian, answered" />

      <CtaSection
        title="See what we mean by a straight answer"
        body="Book the free in-home water test. Thirty minutes, real numbers from your own tap, and an honest read on whether your home needs treatment at all."
      />
    </>
  )
}
