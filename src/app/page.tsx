import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, site, services, cityPages } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Water Filtration in Baton Rouge, LA | Obsidian Water',
  description:
    'Whole-house filtration, water softeners, reverse osmosis & well water treatment for the Baton Rouge area. Start with a free in-home water test.',
  alternates: { canonical: BASE_URL },
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Baton Rouge',
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
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
    name: 'Free water test at your home',
    text: 'We test your water right at your tap for the stuff that causes bad taste, stains, and buildup. You see the results on the spot. No lab wait, no guessing.',
  },
  {
    name: 'A system that fits your water',
    text: 'City water in Baton Rouge is not the same as a well in Walker. We pick and size the system to fit what your test shows, not a one-size box.',
  },
  {
    name: 'Professional install',
    text: 'We put the system in, free with your equipment. Then we test the water again before we leave and show you how everything works.',
  },
  {
    name: 'We stick around after',
    text: 'Filter changes, salt, a quick question: when you call after the install, we pick up. That is the part of this business we set out to fix.',
  },
]

const homeFaqs = [
  {
    q: 'Is Baton Rouge tap water safe to drink?',
    a: 'Baton Rouge usually starts with better water than cities that pull from a river, because it comes from a deep aquifer. But passing a safety test is the floor, not the goal. The city still adds chlorine, and the water still runs through old pipes to reach your glass, including the pipes in your own home. On a well, no one checks it at all. The only way to know what is in your water is to test it, and that is free.',
  },
  {
    q: 'How much does a whole-house water filtration system cost in Baton Rouge?',
    a: 'A full home package with a softener, tankless reverse osmosis, and an alkaline filter is $4,599 installed. Buying the pieces separately costs more, so the package can save you up to 40%. A single system costs less. Your free test shows which parts your home actually needs, so you pay for the right setup and nothing extra.',
  },
  {
    q: 'Do you install water treatment systems for well water?',
    a: 'Yes, and it is one of the main things we do. Wells in Livingston and Ascension Parish often carry iron, manganese, and sulfur. That means orange stains, a metal taste, and a rotten-egg smell. We fix all three with systems built for well water, not a city-water filter with a new label.',
  },
  {
    q: 'What is included in the free water test?',
    a: 'We test your tap for hardness, iron, chlorine, and more, right in your home, and walk you through what each number means. It is free, with no pressure to buy. You leave with straight answers and a clear plan for your water, not a sales script.',
  },
  {
    q: 'Why does my water smell like rotten eggs?',
    a: 'That smell is sulfur gas in your water, and it is common in wells across Livingston and Ascension Parish. It is not usually dangerous, but it makes your water hard to live with and ruins coffee and cooking. The right system removes it, so the smell is gone at every faucet.',
  },
  {
    q: 'Do I need a water softener in Baton Rouge?',
    a: 'If your dishes come out spotty, your fixtures crust over with white scale, your soap will not lather, or your skin feels dry after a shower, hard water is the usual cause. Scale also builds up inside water heaters and appliances and cuts their life short. Every home is different, so the free test measures how hard your water is and shows you what it is doing.',
  },
  {
    q: 'What is the difference between a water filter and a water softener?',
    a: 'A filter takes out things like chlorine, dirt, iron, and bad smells. A softener takes out the minerals that leave scale and spots. Some homes need both, and some need just one. The right answer comes from testing your water, not from a guess.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most systems go in on a single visit. We set the schedule with you when we quote the job, the install is free, and we test the water at your tap before we call it done.',
  },
  {
    q: 'Do your systems come with a warranty?',
    a: 'Yes. Our systems carry a lifetime warranty. We put that in writing with your quote, so you know exactly what is covered before you buy.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater Baton Rouge area. That includes Denham Springs, Prairieville, Walker, Gonzales, Zachary, Central, Baker, Port Allen, Watson, St. Amant, and Geismar, across four parishes.',
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
                Bad taste. Hard-water spots. Orange stains. That rotten-egg smell.
                It all comes back to your water. We find out what is wrong with
                yours and fix it, starting with a free test at your home.
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

      {/* Problem-forward — what's in your water */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s in your water?</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            You cannot see what is coming out of your tap. That is the problem.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-zinc-600">
            The city cleans your water just enough to pass a test. Then it runs
            through miles of old public pipes to reach your street. The last stretch
            is the pipes inside your own home. Along the way, water can pick up a
            chlorine smell, grit, and even bits of metal from old pipes. It can look
            perfectly clear and still carry all of that. You just cannot see it.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            If you are on a well, no one treats your water at all. Around Livingston
            and Ascension Parish, well water often comes up full of iron and sulfur.
            The iron stains sinks and laundry orange. The sulfur makes the whole
            house smell like rotten eggs. City or well, there is one way to know what
            is really in your water: test it. We do that for free.
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
                  Softener, tankless reverse osmosis, and an alkaline filter, all
                  installed free. Buying them separately costs more, so the package
                  can save you up to 40%.
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
              Well water around Livingston and Ascension Parish is often full of iron
              and sulfur. It stains your tub orange, ruins your laundry, and makes the
              whole house smell like rotten eggs. A basic city-water filter will not
              fix it. We build well systems made to pull the iron and sulfur out, so
              your water runs clear and the smell is gone.
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
                Around here, most companies treat water as a side job on a plumbing or
                AC menu. For us, it is the whole business. Testing, sizing, installing,
                and taking care of water systems is all we do.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Test first, quote second</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 text-sm">
                Nobody should buy a $4,599 system because a brochure said so. We show
                you the numbers from your own tap, explain what they mean in plain
                terms, and match the system to your water.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Here after the install</h3>
              <p className="mt-3 leading-relaxed text-zinc-600 text-sm">
                The biggest complaint in this business is going quiet after the sale.
                Need a filter change, have a salt question, or want a setting tweaked?
                Call us, and someone who knows your system answers.
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
              We install and service water systems across four parishes: East Baton
              Rouge, Livingston, Ascension, and West Baton Rouge. That covers Baton
              Rouge, Baker, Central, and Zachary. It covers Denham Springs, Walker,
              and Watson. And it covers Prairieville, Gonzales, St. Amant, Geismar,
              and Port Allen.
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
