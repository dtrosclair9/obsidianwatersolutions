import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaSection from '@/components/CtaSection'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/services/whole-house-water-filtration-baton-rouge-la'

export const metadata: Metadata = {
  title: { absolute: 'Whole House Water Filtration in Baton Rouge, LA' },
  description:
    'One system at the main line filters every tap in the house. Chlorine taste and odor, sediment, and appliance protection for Baton Rouge homes. Free water test.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Whole House Water Filtration in Baton Rouge, LA | Obsidian Water Solutions',
    description:
      'One system at the main line filters every tap in the house. Chlorine, sediment, and appliance protection for Baton Rouge homes. Free water test included.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How much does whole house water filtration cost in Baton Rouge?',
    a: 'Our Complete Home Package is $4,599 installed, and package pricing can save up to 40% compared to buying each piece separately. Installation is free with your system, and every quote starts with a free in-home water test so the equipment matches what is actually in your water. You will see the full number before anything is scheduled.',
  },
  {
    q: 'What does a whole house filter actually remove?',
    a: 'Chlorine taste and odor, sediment, and the grit that wears on plumbing and appliances. City water arrives disinfected with chlorine, which does its job in the pipes but has no business in your morning coffee or your shower steam. A carbon filtration stage at the main line pulls it out, while sediment filtration catches the fine particles that aging distribution lines can shed.',
  },
  {
    q: 'Is Baton Rouge tap water safe to drink?',
    a: 'Yes, and we will tell you that plainly. Baton Rouge draws from the Southern Hills Aquifer, deep groundwater that is genuinely good by any honest standard. Whole house filtration here is not about safety, it is about polish: removing the chlorine added for disinfection, catching sediment from the distribution system, and protecting your appliances for the long haul.',
  },
  {
    q: 'What maintenance does a whole house system need?',
    a: 'Very little, and we walk you through all of it at installation. Filtration media works for years before it needs attention, and sediment pre-filters are a simple periodic swap. Your system carries a lifetime warranty, and we remain a phone call away for questions or checkups after the install.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most whole house systems are installed in a single visit, and we confirm the schedule with you when we quote the system. Installation is free and happens at your main water line, so every tap in the house is filtered once the equipment goes in.',
  },
  {
    q: 'Should I get a whole house filter or an under-sink filter?',
    a: 'It depends on what you want filtered: one faucet or the whole home. An under-sink system such as reverse osmosis gives you exceptional drinking water at the kitchen sink, but it does nothing for showers, laundry, or the water heater. A whole house system treats every drop entering the home. Many Baton Rouge households run both: whole house filtration for the home, reverse osmosis for the glass.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${pageUrl(PATH)}#service`,
  name: 'Whole House Water Filtration',
  serviceType: 'Whole house water filtration system installation',
  description:
    'Whole house water filtration systems installed at the main line, removing chlorine taste and odor and sediment for homes across the greater Baton Rouge area.',
  url: pageUrl(PATH),
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Baton Rouge, LA' },
    { '@type': 'City', name: 'Denham Springs, LA' },
    { '@type': 'City', name: 'Gonzales, LA' },
    { '@type': 'City', name: 'Zachary, LA' },
    { '@type': 'City', name: 'Central, LA' },
  ],
}

export default function WholeHouseFiltrationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHero
        title="Whole House Water Filtration in Baton Rouge, Louisiana"
        intro="One system at your main water line filters every tap, shower, and appliance in the house. Baton Rouge water is genuinely good, and whole house filtration is what takes it from good to the water you actually want: no chlorine taste, no sediment, no wear on the equipment you paid for."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Whole-House Water Filtration', href: PATH },
        ]}
        image="/images/service-whole-house.jpg"
        imageAlt="Black tank whole house water filtration system installed by Obsidian Water Solutions for a Baton Rouge home"
      />

      {/* Honest framing: what filtration does for good city water */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label">The honest version</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Baton Rouge water is good. Here is what filtration adds.
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            You will not hear a scare pitch from us. East Baton Rouge city water comes
            up from the Southern Hills Aquifer, deep natural groundwater that most of
            the country would envy. What arrives at your tap is safe. It is also
            chlorinated, because every municipal system disinfects its lines, and it
            travels through miles of distribution pipe before it reaches your kitchen.
            Whole house filtration exists for exactly those two realities.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Chlorine taste and odor, gone at every tap</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Chlorine keeps water safe on its way to your house, but its work is
                finished the moment it arrives. Activated carbon at the main line
                removes the taste and smell before the water reaches your glass, your
                coffee maker, or the steam in your shower.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sediment stopped before your plumbing</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Older distribution lines and the occasional main break can push fine
                grit into household plumbing, where it clogs aerators and settles in
                water heaters. A sediment stage catches it at the point of entry
                instead of inside your fixtures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Appliance protection that pays for itself</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Water heaters, dishwashers, washing machines, and ice makers all live
                longer on filtered water. Every one of those appliances costs real
                money to replace, and every one of them runs on whatever comes through
                the main line. Treat the line once and everything downstream benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whole-house vs point-of-use comparison */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Which one do you need</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Whole house filtration vs point-of-use filters
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Whole house: treat everything once</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Installed at the main line, a whole house system filters every drop
                entering the home. Showers, laundry, the water heater, the garden hose
                spigot the kids drink from in July: all of it. This is the right tool
                for chlorine removal, sediment, and appliance protection, because those
                problems affect the entire house, not one faucet.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Point-of-use: polish one tap</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">
                Under-sink units such as a reverse osmosis system treat only the faucet
                they are plumbed to, and they treat it to a higher standard than any
                whole house filter can. The kitchen sink is where that standard matters:
                drinking water, cooking, coffee. The two approaches are partners, not
                rivals, and plenty of homes run both.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-relaxed text-zinc-600">
            Not sure which side of that line your home falls on? That is what the free
            water test is for. We look at your actual water and your actual goals, then
            recommend the smaller system if the smaller system is the right answer. You
            can also read about our{' '}
            <Link
              href="/services/reverse-osmosis-system-baton-rouge-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              reverse osmosis drinking water systems
            </Link>{' '}
            to see how the point-of-use half works.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">What&apos;s included</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Every whole house system includes
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ul className="mt-8 space-y-4">
              {[
                'Free in-home water test before any quote',
                'Carbon filtration sized to your home and flow rate',
                'Sediment pre-filtration at the point of entry',
                'Free professional installation at your main water line',
                'Lifetime warranty on your system, in writing',
                'A walkthrough of the finished install and how to live with it',
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
            src="/images/lifestyle-home.jpg"
            alt="Brick home in the Baton Rouge area protected by whole house water filtration"
            width={2000}
            height={1116}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </section>

      {/* Service area callout */}
      <section className="section-padding bg-mist">
        <div className="container-wide max-w-4xl">
          <p className="section-label">Where we install</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">
            Serving the greater Baton Rouge area
          </h2>
          <span className="waterline mt-5" aria-hidden="true" />
          <p className="mt-7 leading-relaxed text-zinc-600">
            We install whole house filtration across East Baton Rouge, Livingston,
            Ascension, and West Baton Rouge parishes: Baton Rouge proper, Zachary,
            Central, Baker, Port Allen, and the suburbs along both interstates. Some
            of those communities have their own water stories worth reading, like
            Denham Springs, where discolored water has made local news more than once.
          </p>
          <p className="mt-4">
            <Link
              href="/services/water-filtration-denham-springs-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Denham Springs →
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/services/water-filtration-gonzales-la"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Water filtration in Gonzales →
            </Link>
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600">
            Ready for a straight answer about your own tap?{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Book a free water test
            </Link>{' '}
            and we will bring the answer to your kitchen.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Whole house filtration questions, answered" />
      <CtaSection
        title="Find out what filtration would change at your tap"
        body="The free in-home water test measures hardness, chlorine, iron, TDS, and pH at your own faucet. If whole house filtration would earn its keep in your home, we will show you why. If it would not, we will say so."
      />
    </>
  )
}
