import { Reveal } from './Reveal'
import { products } from '../data/profile'

export function Products() {
  return (
    <section id="products" className="relative mx-auto max-w-4xl px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Products</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-2xl font-medium text-white sm:text-3xl">
          Telephony and real-time communication products built at product/native-integration
          level.
        </p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {products.map((product, i) => (
          <Reveal key={product.title} delay={0.05 * i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">{product.title}</h3>
              <p className="mt-1 text-sm font-medium text-sky-300">{product.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{product.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
