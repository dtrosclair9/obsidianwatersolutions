import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/water-softener-installation-baton-rouge-la'

export const metadata: Metadata = {
  title: 'Water Softener Installation in Baton Rouge, LA',
  description:
    'Water softener installation for Baton Rouge area homes: scale protection for tankless water heaters, better soap performance, honest sizing. Free water test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Water Softener Installation in Baton Rouge, LA | Obsidian Water Solutions',
    description:
      'Water softener installation across the Baton Rouge metro. Scale protection for tankless water heaters and new construction. Free water test comes first.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Do I even need a water softener in Baton Rouge?',
    a: 'Maybe not, and we will tell you if you do not. Baton Rouge aquifer water is naturally softer than what most of the country lives with, so a softener is not the automatic purchase here that it is in Texas or the Midwest. Where softening earns its keep locally is tankless water heater protection, harder groundwater in parts of the surrounding parishes, and households that simply want spot-free dishes and better soap performance. The free hardness test settles it with a number instead of a sales pitch.',
  },
  {
    q: 'How much does a water softener cost installed?',
    a: 'Softener pricing depends on your hardness number and household size, which is why the free water test comes before any quote. Our best value is the Complete Home Package at $4,599 installed, which pairs softening with chlorine filtration and can save up to 40% versus buying components separately. Installation is free with every system either way.',
  },
  {
    q: 'Why do tankless water heaters need soft water?',
    a: 'Because scale collects on their heat exchanger, and the heat exchanger is the whole appliance. Builders put tankless units in nearly every new home in the region, and most manufacturers call for scale prevention to keep the unit running at spec. A softener stops mineral scale before it reaches the heater, which is the single strongest local reason to install one.',
  },
  {
    q: 'How much salt will a softener use?',
    a: 'Less than you probably expect, especially on Baton Rouge area water. Salt use scales with how hard the incoming water is, and softer source water means less frequent regeneration and slower salt consumption than the horror stories from harder regions. We set the system to regenerate based on actual water use rather than a fixed timer, which keeps both salt and water use efficient.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most softener installations are finished in one visit, and homes with a pre-plumbed softener loop go even smoother. We confirm scheduling when we quote the system. Installation is free, handled by our own team, and includes setting the valve programming to your tested hardness before we leave.',
  },
  {
    q: 'What is the difference between a softener and a salt-free conditioner?',
    a: 'A softener removes hardness minerals from the water; a conditioner leaves them in but changes how they behave, reducing how much scale they form. Only a true softener delivers actually soft water: the slick rinse, the soap performance, the spot-free glassware. Conditioners suit homes that want scale reduction without salt. We install both and will recommend whichever your water test and your priorities actually call for.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Water Softener Installation',
  serviceType: 'Water softener installation and scale protection',
  description:
    'Professional water softener installation with chlorine filtration options, protecting tankless water heaters and plumbing across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Prairieville, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
  ],
}

export default function WaterSoftenerPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Water Softener Installation in Baton Rouge, Louisiana"
        intro="Here is the truth most water companies will not lead with: Baton Rouge aquifer water is naturally softer than most of the country. So we sell softeners for the reasons that actually hold up here, protecting tankless water heaters from scale, serving homes on harder groundwater, and giving your household the soap performance soft water is famous for."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Water Softeners', href: PATH },
        ]}
        image="/images/service-softener.jpg"
        imageAlt="Black tank water softener system with brine tank installed by Obsidian Water Solutions in Baton Rouge"
      />

      {/* Honest local case for softening */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The honest case</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            When a softener makes sense in the Baton Rouge metro
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            If a company tells you Baton Rouge has brutally hard water, keep your
            wallet closed. The deep aquifer serving the city produces naturally
            low-hardness water. But low hardness is not zero hardness, and the metro
            is bigger than the city limits. These are the three situations where a
            softener genuinely earns its place on your wall.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">You have a tankless water heater</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Builders install tankless units in nearly every new home from
                Prairieville to Zachary, and scale is their one enemy. Even modest
                mineral content accumulates on the heat exchanger year after year.
                Softened water keeps the unit at full efficiency and protects the
                investment your builder made for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Your home is on harder groundwater</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Outside the city, wells and smaller systems in the surrounding
                parishes can run noticeably harder than Baton Rouge city water. If
                your dishes spot, your fixtures crust white, and soap will not
                lather, your water is telling you something the city&apos;s
                reputation cannot override. Test it and know.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">You want what soft water does for a household</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Softer skin and hair, laundry that keeps its color, glassware without
                spots, and soap that works the way the label promises. Those benefits
                are real at any hardness level above zero, and for plenty of
                households they are reason enough on their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship combo */}
      <section className="section-padding bg-mist">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/service-whole-house.jpg"
            alt="Black tank softener and chlorine filtration combination system for a Baton Rouge area home"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
          <div>
            <p className="section-label">The flagship</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Softener plus chlorine filtration in one system
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <p className="mt-7 leading-relaxed text-zinc-600">
              Our most popular installation combines softening resin and carbon
              filtration in a single engineered system: soft water and
              chlorine-free water from one footprint. It anchors the Complete Home
              Package at $4,599 installed, with package savings up to 40% compared
              to piecing the same equipment together separately, and free
              installation included.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600">
              One system, one drain line, one thing to think about. For most city
              water homes it is the whole answer in a single tank.
            </p>
          </div>
        </div>
      </section>

      {/* New construction angle */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">New construction</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Building in Prairieville or Gonzales? Your loop is waiting.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            New subdivisions across Ascension Parish are pre-plumbed with softener
            loops: a stubbed-out connection in the garage that most homeowners never
            learn the purpose of. That loop means your home was designed for a
            softener from day one, the tankless heater on the wall next to it is the
            reason why, and the install is about as clean as installs get. If you
            just closed on a new build, this is the easiest upgrade decision in the
            house.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-softener-prairieville-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water softener installation in Prairieville →
            </Link>
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">What&apos;s included</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Every softener installation includes
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <ul className="mt-8 space-y-4">
            {[
              'Free in-home hardness test before any recommendation',
              'System sized to your tested hardness and household water use',
              'Metered regeneration set up for salt and water efficiency',
              'Free professional installation, loop or no loop',
              'Lifetime warranty on your system, in writing',
              'A straight no if your water does not justify the purchase',
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
          <p className="mt-8 leading-relaxed text-zinc-600">
            Want the hardness number for your own tap?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book your free water test
            </Link>{' '}
            and we will measure it in your kitchen, not guess at it over the phone.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Water softener questions, answered" />
      <CtaSection
        title="Get your hardness tested before you buy anything"
        body="The free in-home test puts a real number on your water: hardness, chlorine, iron, TDS, and pH. If a softener makes sense for your home, the quote is built on that number. If it does not, we will be the first to say so."
      />
    </>
  )
}
