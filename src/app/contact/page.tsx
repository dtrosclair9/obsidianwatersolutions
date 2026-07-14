import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import ContactForm from '@/components/ContactForm'
import { BASE_URL, ogImage, pageUrl, site } from '@/lib/site'

const PATH = '/contact'

export const metadata: Metadata = {
  title: { absolute: 'Book a Free Water Test | Baton Rouge, LA' },
  description:
    'Book a free in-home water test in the Baton Rouge area. Call (985) 227-2591 or send the form and we will schedule your 30-minute visit. No obligation.',
  alternates: { canonical: pageUrl(PATH) },
  openGraph: {
    title: 'Book Your Free Water Test in Baton Rouge, LA | Obsidian Water Solutions',
    description:
      'Book a free in-home water test in the greater Baton Rouge area. Call or send the form and we will schedule your 30-minute visit. No obligation.',
    url: pageUrl(PATH),
    siteName: site.name,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
}

const contactFaqs = [
  {
    q: 'How fast do you respond to a form submission?',
    a: 'We aim to respond within one business day. Most people hear back from us by phone, so keep an eye out for a call from a local number after you submit. If your situation is urgent, calling us directly is the fastest path.',
  },
  {
    q: 'Is the water test really free?',
    a: 'Yes, completely free with no obligation attached. We test hardness, iron, chlorine, TDS, and pH at your tap and explain the results on the spot. If the numbers say your water is fine, that is the answer you get, and the visit costs you nothing either way.',
  },
  {
    q: 'What should I have ready before the visit?',
    a: 'Nothing. All we need is access to a tap, usually the kitchen sink, and a few minutes of your time to talk through the results. You do not need prior test results, plumbing knowledge, or any preparation.',
  },
]

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${pageUrl(PATH)}#contactpage`,
  name: 'Contact Obsidian Water Solutions',
  url: pageUrl(PATH),
  description:
    'Contact Obsidian Water Solutions to book a free in-home water test in the greater Baton Rouge area. Call, email, or send the contact form.',
  mainEntity: { '@id': `${BASE_URL}/#business` },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <PageHero
        title="Book Your Free Water Test in Baton Rouge"
        intro="Tell us a little about your water and we will take it from there. The test is free, happens at your own tap, and comes with a straight answer about whether your home needs treatment at all."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: PATH },
        ]}
        cta={false}
      />

      <section className="section-padding bg-white">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info + what happens next */}
          <div className="lg:col-span-2">
            <p className="section-label">What happens next</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3">
              After you hit send
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <ol className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-splash text-white font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-semibold">We call you back</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    A real person from Obsidian follows up on your message, asks a
                    couple of questions about your water, and answers yours.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-splash text-white font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-semibold">We schedule the free test</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    We set a time that works for you and come to your home. The visit
                    covers hardness, iron, chlorine, TDS, and pH
                    measured at your tap, with the results explained face to face.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-splash text-white font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-semibold">You get a straight answer</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    If treatment makes sense, you get a quote matched to your results.
                    If your water is fine, you get told exactly that, and we part as
                    neighbors.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-10 rounded-3xl bg-mist p-7 space-y-5">
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-semibold text-sm">Service area</p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  The greater Baton Rouge area, covering East Baton Rouge, Livingston,
                  Ascension, and West Baton Rouge Parish.
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm">Hours</p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Call or send the form any time; we respond quickly during business
                  hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <p className="section-label">The form</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3">
              Request your free water test
            </h2>
            <span className="waterline mt-5" aria-hidden="true" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Faq items={contactFaqs} title="Booking questions, answered" />
    </>
  )
}
