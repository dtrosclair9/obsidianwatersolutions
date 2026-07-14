import Link from 'next/link'
import Image from 'next/image'
import { services, cityPages, site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-zinc-300">
      {/* The waterline — the brand splash as the footer's top edge */}
      <div className="h-1.5 bg-splash" aria-hidden="true" />
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/logo-dark.png"
              alt="Obsidian Water Solutions logo"
              width={190}
              height={64}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Water filtration, softeners, reverse osmosis, and well water
              treatment for the greater Baton Rouge area. Every project starts
              with a free in-home water test.
            </p>
          </div>

          <div>
            <h2 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-4">
              Services
            </h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-accent-light transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-4">
              Areas We Serve
            </h2>
            <ul className="space-y-2.5">
              {cityPages.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services/${c.slug}`}
                    className="text-sm hover:text-accent-light transition-colors"
                  >
                    {c.service} in {c.city}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-zinc-400">
                Plus Baker, Port Allen, Watson, St. Amant, Geismar &amp; Central
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-4">
              Contact
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="hover:text-accent-light transition-colors">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent-light transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                {site.city}, {site.stateFull}
              </li>
              <li>
                <Link href="/contact" className="text-accent-light font-semibold hover:text-white transition-colors">
                  Book a free water test →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
