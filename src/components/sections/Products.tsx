import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
  CallHandsetArt,
  IvrTreeArt,
  OutboundCampaignArt,
  SoftphoneSdkArt,
  ScreenRecorderArt,
  WebrtcSdkArt,
} from "../illustrations/Illustrations";
import { products } from "../../data/profile";

const artFor = [CallHandsetArt, IvrTreeArt, OutboundCampaignArt, SoftphoneSdkArt, ScreenRecorderArt, WebrtcSdkArt];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        index="05"
        label="Built Products"
        title="Systems that carry real calls and real pixels"
        description="Telephony platforms for enterprise clients, plus two SDKs — RADIX and VISION — engineered to be dropped into someone else's product."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const Art = artFor[i % artFor.length];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-line bg-inset p-6"
            >
              <Art className="mb-5 h-14 w-14 text-signal-500" />
              <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-signal-600">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{p.description}</p>
              {p.client && <p className="mt-4 text-xs text-ink-faint">Client: {p.client}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft border border-line">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
