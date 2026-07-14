import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, site, services, cityPages } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Obsidian Water Solutions | Water Filtration in Baton Rouge, LA',
  description:
    'Whole-house filtration, water softeners, reverse osmosis & well water treatment for the Baton Rouge area. Start with a free in-home water test.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Obsidian Water Solutions | Water Filtration in Baton Rouge, LA',
    description:
      'Whole-house filtration, water softeners, reverse osmosis & well water treatment for the Baton Rouge area. Start with a free in-home water test.',
    url: BASE_URL,
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const steps = [
  {
    name: 'Free in-home water test',
    text: 'We test your water at the tap for hardness, iron, chlorine, TDS, and pH, and walk you through the results on the spot. It takes about 30 minutes.',
  },
  {
    name: 'A system matched to your water',
    text: 'City water in Baton Rouge needs different treatment than a well in Walker. We size and configure the system to what your test actually shows, not a one-size package.',
  },
  {
    name: 'Professional installation',
    text: 'Clean install at the main line or under the sink, free with your system. We test everything before we leave and show you how it works.',
  },
  {
    name: 'Support after the install',
    text: 'Filter changes, salt checks, and questions answered. When you call after the install, we answer. That is the part of this industry we set out to fix.',
  },
]

const homeFaqs = [
  {
    q: 'Is Baton Rouge tap water safe to drink?',
    a: 'Baton Rouge city water is genuinely good by national standards. It comes from the Southern Hills Aquifer rather than a river, so it starts cleaner than most municipal supplies. The most common reasons Baton Rouge homeowners add filtration are chlorine taste and odor from disinfection, protecting appliances, and wanting higher-quality drinking water at the sink. If you are on a private well or in parts of Livingston Parish, the picture changes, and testing matters much more.',
  },
  {
    q: 'How much does a whole-house water filtration system cost in Baton Rouge?',
    a: 'A complete home package with a water softener, tankless reverse osmosis, and alkaline filtration lists at $4,599 installed, and package savings can reach up to 40% versus buying each system separately. Individual systems cost less. Your free water test tells us exactly which equipment your home actually needs, so you never pay for treatment your water does not require.',
  },
  {
    q: 'Do you install water treatment systems for well water?',
    a: 'Yes. Well water treatment is one of our core specialties. Private wells in Livingston and Ascension Parish commonly carry iron, manganese, and hydrogen sulfide, which cause orange staining, metallic taste, and a rotten-egg smell. We treat all three with dedicated iron and sulfur removal systems built for well water, not repurposed city-water filters.',
  },
  {
    q: 'What is included in the free water test?',
    a: 'The free test measures hardness, iron, chlorine, total dissolved solids, and pH at your tap, in your home, with the results explained face to face. There is no charge and no obligation. If your water is fine, we tell you that, because a company that only ever finds problems is not testing, it is selling.',
  },
  {
    q: 'Why does my water smell like rotten eggs?',
    a: 'A rotten-egg smell almost always means hydrogen sulfide gas in your water, which is common in private wells across Livingston and Ascension Parish. It is unpleasant rather than dangerous at typical levels, but it tarnishes fixtures and makes water unusable for coffee or cooking. A dedicated sulfur removal system with the right media eliminates the odor at every tap.',
  },
  {
    q: 'Do I need a water softener in Baton Rouge?',
    a: 'Many Baton Rouge homes do not need aggressive softening, because aquifer water here is naturally softer than in most of the country. Where softeners earn their keep locally is protecting tankless water heaters from scale, improving soap performance, and treating homes in areas with harder groundwater. Your free test measures actual hardness in grains per gallon before anyone recommends equipment.',
  },
  {
    q: 'What is the difference between a water filter and a water softener?',
    a: 'A filter removes contaminants such as chlorine, sediment, iron, and odors, while a softener specifically removes the calcium and magnesium minerals that cause scale. Many homes benefit from both working together, and some need only one. The right answer comes from testing your water, not from a sales script.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most whole-house systems install in a single visit of a few hours, and under-sink reverse osmosis systems typically take one to two hours. Installation is free with your system, and we test everything at the tap before we call the job complete.',
  },
  {
    q: 'Do your systems come with a warranty?',
    a: 'Yes. Our systems carry a lifetime warranty. We put that in writing with your quote, so you know exactly what is covered before you buy.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater Baton Rouge area, including Denham Springs, Prairieville, Walker, Gonzales, Zachary, Central, Baker, Port Allen, Watson, St. Amant, and Geismar, covering East Baton Rouge, Livingston, Ascension, and West Baton Rouge Parish.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: site.name,
  url: BASE_URL,
  telephone: site.phoneRaw,
  email: site.email,
  image: `${BASE_URL}/images/og-image.jpg`,
  logo: `${BASE_URL}/images/logo-full.jpg`,
  description:
    'Water treatment company in Baton Rouge, Louisiana. Whole-house water filtration, water softeners, reverse osmosis drinking water, well water treatment, and free in-home water testing.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: site.areaServed.map((c) => ({ '@type': 'City', name: `${c}, LA` })),
  priceRange: '$$',
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: site.name,
  publisher: { '@id': `${BASE_URL}/#business` },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Obsidian Water Solutions treats your water',
  description:
    'From a free in-home water test to a professionally installed, supported water treatment system in the greater Baton Rouge area.',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, webSiteSchema, howToSchema]} />

      {/* Hero — split: headline left, product trio right */}
      <section className="bg-white">
        <div className="container-wide pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Baton Rouge · Denham Springs · Prairieville &amp; beyond</p>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4">
                Water Filtration &amp; Softener Systems in Baton Rouge, Louisiana
              </h1>
              <span className="waterline mt-6" aria-hidden="true" />
              <p className="mt-7 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl">
                Whole-house filtration, softeners, reverse osmosis, and well water
                treatment, matched to what is actually in your water. Every project
                starts with a free in-home water test and a straight answer.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-splash text-base">
                  Book your free water test
                </Link>
                <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink text-base">
                  Call {site.phoneDisplay}
                </a>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                Free installation · Lifetime warranty · Insured
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-home.jpg"
                alt="Obsidian Water Solutions water softener, tankless reverse osmosis system, and water testing kit"
                width={2000}
                height={1116}
                className="w-full h-auto rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Honest framing — the credibility wedge */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The honest answer first</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Is Baton Rouge water actually bad?
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            No, and we will not pretend otherwise. Baton Rouge city water comes from the
            Southern Hills Aquifer, not a river, and it is genuinely good by national
            standards. If a water company opens the conversation by trying to scare you
            about it, you have learned something about that company.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Here is what is also true: chlorine disinfection affects taste and smell at
            the tap. Scale shortens the life of tankless water heaters and appliances.
            Parts of Livingston Parish deal with documented brown-water and iron
            problems. And thousands of homes around Walker, Watson, Prairieville, and
            St. Amant run on private wells where iron and sulfur are a daily fact of
            life. Whether treatment makes sense for your home depends on your water,
            which is why we test it for free before recommending anything.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-label">What we do</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Water treatment services for the Baton Rouge area
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl bg-white ring-1 ring-zinc-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden bg-mist">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.short}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">Learn more →</p>
                </div>
              </Link>
            ))}
            {/* Complete package card */}
            <div className="rounded-3xl bg-ink text-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Complete Home Package</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Softener, tankless reverse osmosis, and alkaline filtration together,
                  installed free. Package pricing saves up to 40% versus buying each
                  system separately.
                </p>
                <p className="mt-4 text-2xl font-serif font-semibold text-white">$4,599 installed</p>
              </div>
              <Link href="/contact" className="btn-splash text-sm mt-6 text-center">
                Get package pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Well water niche band */}
      <section className="section-padding bg-ink">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-accent-light">The well water people</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">
              Iron stains? Rotten-egg smell? That is well water, and it is what we do.
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 text-lg leading-relaxed text-zinc-300">
              Across Livingston and Ascension Parish, private wells pull water that is
              heavy in iron, manganese, and hydrogen sulfide. It stains tubs orange,
              ruins laundry, and makes the whole house smell like sulfur. City-water
              filters do not fix it. Our dual-tank well systems with dedicated iron and
              sulfur media are built for exactly this water.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services/well-water-treatment-baton-rouge-la" className="btn-splash">
                Well water treatment
              </Link>
              <Link
                href="/services/well-water-treatment-walker-la"
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-ink transition-colors inline-block"
              >
                Well water in Walker
              </Link>
            </div>
          </div>
          <Image
            src="/images/service-well.jpg"
            alt="Dual tank well water iron and sulfur treatment system by Obsidian Water Solutions"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-label">How it works</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            From free test to treated water in four steps
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.name} className="rounded-3xl bg-mist p-7">
                <div className="w-10 h-10 rounded-full bg-splash text-white font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mt-5">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Obsidian */}
      <section className="section-padding bg-mist">
        <div className="container-wide">
          <p className="section-label">Why Obsidian</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            A water treatment specialist, not a side business
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Water is all we do</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 text-sm">
                Around Baton Rouge, water treatment is usually a line item on a plumbing
                or air-conditioning menu. For us it is the whole company. Testing,
                sizing, installing, and supporting water systems is our entire job.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Test first, quote second</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 text-sm">
                Nobody should buy a $4,599 system because a brochure said to. We put
                numbers from your own tap in front of you, explain what they mean, and
                match equipment to the water you actually have.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Here after the install</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 text-sm">
                The most common complaint about this industry is silence after the sale.
                Filter changes, salt questions, a setting that needs adjusting: call us
                and someone who knows your system answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Where we work</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Serving the greater Baton Rouge area
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              We install and service water treatment systems across East Baton Rouge,
              Livingston, Ascension, and West Baton Rouge Parish. That includes Baton
              Rouge, Baker, Central, and Zachary; Denham Springs, Walker, and Watson;
              Prairieville, Gonzales, St. Amant, and Geismar; and Port Allen across the
              river.
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
          <Image
            src="/images/lifestyle-home.jpg"
            alt="South Louisiana brick home with live oak in the greater Baton Rouge area"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      <Faq items={homeFaqs} title="Baton Rouge water questions, answered" />

      <CtaSection />
    </>
  )
}
