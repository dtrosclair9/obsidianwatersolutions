import JsonLd from '@/components/JsonLd'

export type FaqItem = { q: string; a: string }

type FaqProps = {
  items: FaqItem[]
  title?: string
  label?: string
  dark?: boolean
}

// Question-led FAQs with FAQPage schema. The first sentence of each answer
// is the direct answer (AI Overviews pull it); the rest expands.
export default function Faq({ items, title = 'Frequently Asked Questions', label = 'FAQs', dark = false }: FaqProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className={`section-padding ${dark ? 'bg-ink' : 'bg-mist'}`}>
      <JsonLd data={schema} />
      <div className="container-wide max-w-4xl">
        <p className={`section-label ${dark ? 'text-accent-light' : ''}`}>{label}</p>
        <h2 className={`text-3xl md:text-4xl font-semibold mt-3 ${dark ? 'text-white' : ''}`}>{title}</h2>
        <span className="waterline mt-5" aria-hidden="true" />
        <div className="mt-10 space-y-4">
          {items.map((f) => (
            <details
              key={f.q}
              className={`group rounded-2xl px-6 py-5 ${
                dark ? 'bg-ink-soft text-zinc-300' : 'bg-white shadow-sm'
              }`}
            >
              <summary
                className={`cursor-pointer list-none flex items-start justify-between gap-4 font-serif text-lg font-medium ${
                  dark ? 'text-white' : 'text-ink'
                }`}
              >
                <h3 className="text-lg font-medium">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className={`mt-4 leading-relaxed ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
