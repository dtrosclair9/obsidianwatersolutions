'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

/**
 * Symptom picker: choose what you notice at the tap, get the likely cause and
 * the category of treatment that addresses it.
 *
 * Deliberately does NOT quote numbers, promise a specific system, or say
 * anything about health. It maps an observation to a water characteristic and
 * routes to the free test, which is the only thing that actually determines
 * treatment. Every result repeats that.
 */

type Cause = {
  id: string
  cause: string
  detail: string
  /** service page slug this points at, if any */
  href?: string
  hrefLabel?: string
}

const CAUSES: Record<string, Cause> = {
  iron: {
    id: 'iron',
    cause: 'Iron',
    detail:
      'Iron in the water oxidizes when it hits air, which is what leaves the orange color behind. It is common on private wells in Livingston and Ascension parishes.',
    href: '/services/well-water-treatment-baton-rouge-la',
    hrefLabel: 'Well water treatment',
  },
  sulfur: {
    id: 'sulfur',
    cause: 'Hydrogen sulfide',
    detail:
      'The rotten egg smell is hydrogen sulfide gas dissolved in the water. It is a well water problem far more often than a city water one.',
    href: '/services/well-water-treatment-baton-rouge-la',
    hrefLabel: 'Well water treatment',
  },
  hardness: {
    id: 'hardness',
    cause: 'Hardness',
    detail:
      'Hardness minerals leave scale on anything water dries on, and they are why soap will not lather. Scale also builds up inside a water heater over time.',
    href: '/services/water-softener-installation-baton-rouge-la',
    hrefLabel: 'Water softeners',
  },
  chlorine: {
    id: 'chlorine',
    cause: 'Chlorine',
    detail:
      'Chlorine is added to public water to keep it safe on the way to your house. Meeting that standard does not mean everyone likes how it tastes or smells.',
    href: '/services/whole-house-water-filtration-baton-rouge-la',
    hrefLabel: 'Whole-house filtration',
  },
  sediment: {
    id: 'sediment',
    cause: 'Sediment',
    detail:
      'Visible grit or cloudiness that settles out is suspended material. It is filtered mechanically, ahead of anything else in the system.',
    href: '/services/whole-house-water-filtration-baton-rouge-la',
    hrefLabel: 'Whole-house filtration',
  },
  taste: {
    id: 'taste',
    cause: 'Taste at the drinking tap',
    detail:
      'Taste can come from several things at once. Treating water at one drinking tap is a different job from treating the whole house.',
    href: '/services/reverse-osmosis-system-baton-rouge-la',
    hrefLabel: 'Reverse osmosis',
  },
  acidic: {
    id: 'acidic',
    cause: 'Possibly acidic water',
    detail:
      'Blue-green staining usually points to water that is on the acidic side reacting with copper plumbing. This one needs testing before anyone recommends equipment.',
  },
}

const SYMPTOMS: { id: string; label: string; causes: string[] }[] = [
  { id: 'orange', label: 'Orange or brown staining in tubs, sinks or laundry', causes: ['iron'] },
  { id: 'egg', label: 'Rotten egg smell', causes: ['sulfur'] },
  { id: 'scale', label: 'White crust on faucets and shower heads', causes: ['hardness'] },
  { id: 'spots', label: 'Spots on dishes and glassware', causes: ['hardness'] },
  { id: 'soap', label: 'Soap will not lather, skin feels dry after a shower', causes: ['hardness'] },
  { id: 'pool', label: 'Water smells or tastes like a swimming pool', causes: ['chlorine'] },
  { id: 'grit', label: 'Visible grit, or water looks cloudy', causes: ['sediment'] },
  { id: 'drink', label: 'I just do not like drinking it', causes: ['taste'] },
  { id: 'bluegreen', label: 'Blue-green staining around drains', causes: ['acidic'] },
]

export default function WaterSymptomChecker() {
  const [picked, setPicked] = useState<string[]>([])

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const results = useMemo(() => {
    const ids = new Set<string>()
    picked.forEach((s) => SYMPTOMS.find((x) => x.id === s)?.causes.forEach((c) => ids.add(c)))
    return [...ids].map((i) => CAUSES[i])
  }, [picked])

  return (
    <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
      <div className="px-5 py-6 sm:px-7">
        <fieldset>
          <legend className="text-lg font-bold text-ink">
            What are you noticing at home?
          </legend>
          <p className="mt-1.5 text-[15px] text-zinc-600">
            Pick everything that applies. Nothing is submitted and nothing is
            saved.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {SYMPTOMS.map((s) => {
              const on = picked.includes(s.id)
              return (
                <label
                  key={s.id}
                  className={`cursor-pointer rounded-md border px-3.5 py-2.5 text-[14px] leading-snug transition-colors ${
                    on
                      ? 'border-primary bg-primary text-white font-semibold'
                      : 'border-zinc-300 text-zinc-700 hover:border-ink'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={on}
                    onChange={() => toggle(s.id)}
                  />
                  <span aria-hidden="true" className="mr-1.5 font-bold">
                    {on ? '✓' : '+'}
                  </span>
                  {s.label}
                </label>
              )
            })}
          </div>
        </fieldset>
      </div>

      {/* results */}
      <div aria-live="polite" className="border-t border-zinc-200 bg-mist px-5 py-6 sm:px-7">
        {results.length === 0 ? (
          <p className="text-[15px] text-zinc-600">
            Choose one or more above and this will show the usual cause and which
            kind of treatment applies.
          </p>
        ) : (
          <>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
              Usually points to
            </h4>
            <ul className="mt-4 space-y-4">
              {results.map((r) => (
                <li key={r.id} className="border-l-2 border-primary pl-4">
                  <p className="font-bold text-ink text-[16px]">{r.cause}</p>
                  <p className="mt-1 text-[14px] text-zinc-600 leading-relaxed">{r.detail}</p>
                  {r.href && (
                    <Link
                      href={r.href}
                      className="mt-2 inline-block text-[14px] font-bold text-primary underline underline-offset-2"
                    >
                      {r.hrefLabel}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-zinc-300 pt-5">
              <p className="text-[14px] text-zinc-600 leading-relaxed">
                These are the usual causes, not a diagnosis of your water. Several
                of them look alike at the tap, and more than one can be happening
                at once. The free in-home test is what identifies which applies to
                your home.
              </p>
              <Link href="/contact" className="btn-splash mt-4 text-[15px]">
                Request my free water test
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
