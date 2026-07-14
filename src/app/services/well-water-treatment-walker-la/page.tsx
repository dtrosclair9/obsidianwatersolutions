import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/well-water-treatment-walker-la'

export const metadata: Metadata = {
  title: { absolute: 'Well Water Treatment in Walker, LA | Iron & Sulfur' },
  description:
    'Iron & sulfur removal for private wells in Walker, Watson & Holden. Free well water testing, dual-tank systems, free installation in Livingston Parish.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Well Water Treatment in Walker, LA | Obsidian Water Solutions',
    description:
      'Iron & sulfur removal for private wells in Walker, Watson & Holden. Free well water testing and free installation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why is well water around Walker so high in iron?',
    a: 'The shallow aquifers under Livingston Parish naturally run high in dissolved iron and manganese, a pattern documented in USGS groundwater studies of the parish. Wells around Walker, Watson, and Holden draw from exactly that water, which is why orange staining is close to universal in unfiltered well homes here. It is a geology problem, and it has an equipment solution.',
  },
  {
    q: 'Do you actually come out to Walker, or just Baton Rouge?',
    a: 'Walker and the well belt around it are core service area for us, not an edge case. Most of the wells we treat are in Livingston Parish, and the drive from Baton Rouge is part of every well quote at no charge, including the free in-home water test.',
  },
  {
    q: 'My neighbor has a filter and still gets stains. Why?',
    a: 'Usually because the system was a generic softener or an undersized single-tank filter rather than equipment matched to the actual iron level. Iron heavy enough to stain will overwhelm a system that was never sized for it. We test first, then build the system around the numbers, which is the difference between managing iron and eliminating it.',
  },
  {
    q: 'How fast can a well system be installed in Walker?',
    a: 'Once your test is done and the system is specified, installation is typically a single visit at your well line. Installation is free with the system, and we verify iron and sulfur at the tap before we leave.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Well Water Treatment in Walker, LA',
  serviceType: 'Well water iron and sulfur removal',
  description:
    'Dual-tank well water treatment for iron, manganese, and hydrogen sulfide for private wells in Walker, Watson, and Holden, Louisiana.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Walker, LA' },
    { '@type': 'City', name: 'Watson, LA' },
    { '@type': 'City', name: 'Holden, LA' },
  ],
}

export default function WalkerWellPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Well Water Treatment in Walker, Louisiana"
        intro="Walker sits in the middle of Livingston Parish's well belt, where private wells run orange with iron and the shower smells like sulfur. We test Walker wells for free and build dual-tank systems around what your well actually pulls up."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Well Water Treatment in Walker', href: PATH },
        ]}
        image="/images/service-well.jpg"
        imageAlt="Dual tank iron and sulfur well water system installed for Walker Louisiana homes"
      />

      {/* Local context — what makes Walker water Walker's */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Walker &amp; the well belt</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Why Walker wells stain orange and smell like sulfur
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Between Walker, Watson, and Holden, a huge share of homes sit outside any
            municipal water system and draw from private wells. USGS groundwater
            surveys of Livingston Parish have flagged iron and manganese above
            secondary drinking-water limits as a recurring pattern in the local
            aquifers. That is the orange ring in your tub and the dark streaks in the
            washer, and it is not going away on its own, because it is in the ground
            itself.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Hydrogen sulfide rides along in many of the same wells, harmless at typical
            levels but impossible to live with once it takes over a hot shower. The
            good news: both problems are fully treatable with oxidation media sized to
            your well&apos;s numbers, and both disappear from every tap at once when the
            system sits at the well line instead of under one sink.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            Walker also grew fast enough that plenty of newer subdivisions mix well and
            community-system homes street by street. If you are not sure which one you
            have, the free test answers that too, along with exactly what is in the
            water either way.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Dual-tank well systems for Livingston Parish water
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home well test: iron, sulfur indicators, hardness, pH, TDS',
                'Oxidation stage that turns dissolved iron and sulfide into filterable particles',
                'Dedicated filtration tank with media matched to your test results',
                'Sediment protection for your pump, pressure tank, and plumbing',
                'Free installation at the well line, one visit for most homes',
                'Lifetime warranty and post-install support from the same local team',
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
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Walker well test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-testing.jpg"
            alt="Well water test kit comparing iron-tinted and treated clear water samples in Walker Louisiana"
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
            Also serving Watson, Holden &amp; Denham Springs
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            The same Livingston Parish groundwater runs under Watson and Holden, and we
            treat wells across all of it. Closer to Denham Springs, homes on the
            municipal system deal with a different problem: the parish&apos;s
            documented brown-water events. That calls for filtration rather than well
            equipment, and it has its own page.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-denham-springs-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Denham Springs →
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Walker well water questions" />
      <CtaSection
        title="Get your Walker well tested for free"
        body="We drive out, test at your tap, and give you the numbers and a straight answer. If the well is fine, you will hear that too."
      />
    </>
  )
}
