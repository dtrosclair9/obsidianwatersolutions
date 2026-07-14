import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-filtration-denham-springs-la'

export const metadata: Metadata = {
  title: { absolute: 'Water Filtration in Denham Springs, LA' },
  description:
    'Tired of brown water in Denham Springs? Whole-house filtration that catches iron, manganese & sediment between advisories. Free water test, free install.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Filtration in Denham Springs, LA | Obsidian Water Solutions',
    description:
      'Whole-house filtration for Denham Springs homes. Iron, manganese & sediment protection at the main line. Free water test and free installation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Why does Denham Springs water turn brown sometimes?',
    a: 'The discoloration comes from iron and manganese in parts of the parish water systems, plus sediment that gets stirred up when lines break, hydrants get flushed, or pressure changes. Local TV news has covered brown-water complaints in Denham Springs for years, and parts of Livingston Parish have seen boil advisories, including one in the Juban Road area in December 2024. None of that is your plumbing failing. It is what arrives at your meter on a bad day.',
  },
  {
    q: 'Will a filter actually fix brown water?',
    a: 'Yes. A whole-house system with sediment and iron filtration at the main line catches discoloration before it reaches your fixtures, laundry, and water heater. It cannot repair the distribution lines themselves, so an honest framing is insurance: on the days the supply runs dirty, your house does not. Every tap in the home stays clear because the filtration sits where the water comes in, not under one sink.',
  },
  {
    q: 'What does a filtration system cost in Denham Springs?',
    a: 'The Complete Home Package lists at $4,599 installed, and package pricing can save up to 40% versus buying each system separately. Many Denham Springs homes need less than the full package, which is why the free in-home water test comes first: we quote the individual system your water actually calls for, and installation is free either way.',
  },
  {
    q: 'Do you serve all of Livingston Parish?',
    a: 'Yes. Denham Springs, Watson, Walker, Holden, and the roads between them are all core service area. Homes on municipal water usually need filtration like the systems on this page, while well homes toward Watson and Walker usually need iron and sulfur treatment instead. The free water test settles which category your house is in before anyone quotes equipment.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Filtration in Denham Springs, LA',
  serviceType: 'Whole-house water filtration and sediment removal',
  description:
    'Whole-house water filtration for Denham Springs, Louisiana homes: iron, manganese, sediment, and chlorine taste treated at the main line, with free water testing and free installation.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Watson, LA' },
    { '@type': 'City', name: 'Walker, LA' },
  ],
}

export default function DenhamSpringsFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Filtration in Denham Springs, Louisiana"
        intro="If your water has ever run brown, you already know why this page exists. Whole-house filtration at the main line catches the iron, manganese, and sediment Denham Springs homes see on bad days, so what reaches your taps stays clear."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Filtration in Denham Springs', href: PATH },
        ]}
        image="/images/service-whole-house.jpg"
        imageAlt="Whole house water filtration tank system installed for Denham Springs Louisiana homes"
      />

      {/* Local context — what makes Denham Springs water Denham Springs' */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Denham Springs water, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            The brown-water problem is real, and it is documented
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Denham Springs residents have been photographing discolored tap water for
            local news crews for years, and the coverage is easy to find. Parts of the
            parish&apos;s water systems have documented iron and manganese issues, and
            Livingston Parish has seen boil advisories, including one in the Juban Road
            area in December 2024. When a line breaks or a hydrant gets flushed, the
            sediment sitting in those mains ends up in somebody&apos;s laundry.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            We are not here to tell you your water is dangerous. It is treated and
            monitored, and most days it runs clear. But if you have ever filled a tub
            the color of tea, rewashed a load of whites, or wondered whether today is
            a good day to make ice, you know that &quot;most days&quot; is not the
            same as every day. That gap is exactly what whole-house filtration closes.
          </p>
          <p className="mt-5 leading-relaxed text-zinc-600">
            A system at your main line filters everything entering the house: sediment
            before it settles in your water heater, iron and manganese before they
            stain fixtures, and chlorine taste and odor at every tap. The growth
            corridor out toward Juban Crossing and Watson also holds plenty of homes
            on private wells rather than the municipal system. Those homes usually
            need well treatment instead, and the free water test tells you which side
            of that line your house is on.
          </p>
        </div>
      </section>

      {/* What we install locally */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">The fix</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Whole-house filtration built for Livingston Parish water
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test: iron, hardness, chlorine, TDS, and pH at your tap',
                'Sediment filtration at the main line that catches line-break surges before they reach fixtures',
                'Iron and manganese reduction to stop orange and dark staining',
                'Carbon filtration for chlorine taste and odor at every faucet and shower',
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
              The same equipment is covered in depth on our{' '}
              <Link
                href="/services/whole-house-water-filtration-baton-rouge-la"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                whole-house water filtration
              </Link>{' '}
              page, sized here for what Denham Springs water actually does.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-splash">Book a free Denham Springs water test</Link>
              <a href={`tel:${site.phoneRaw}`} className="btn-outline-ink">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Image
            src="/images/service-testing.jpg"
            alt="Water test kit with sample vials comparing discolored and filtered water in Denham Springs Louisiana"
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
            Also serving Watson, Walker &amp; the rest of the parish
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            Filtration handles municipal water. Head toward Watson, Walker, or Holden
            and the picture changes: a large share of those homes draw from private
            wells, where the problem is iron and sulfur coming out of the ground
            rather than sediment coming down a main. That calls for different
            equipment, and it has its own page.
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

      <Faq items={faqs} title="Denham Springs water filtration questions" />
      <CtaSection
        title="Get your Denham Springs water tested for free"
        body="We test at your tap, show you the numbers on the spot, and give you a straight answer about what filtration would and would not change. If your water is fine, you will hear that too."
      />
    </>
  )
}
