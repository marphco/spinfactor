// src/App.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * SPIN FACTOR — First Draft (clean)
 * - Nessun import non usato
 * - Niente variabili non definite
 * - Tutto in un singolo file
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: delay, staggerChildren: 0.08 },
  },
});

function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-zinc-900">
          Spin <span className="text-teal-400">Factor</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#work" className="hover:opacity-70">Work</a>
          <a href="#services" className="hover:opacity-70">Servizi</a>
          <a href="#team" className="hover:opacity-70">Team</a>
          <a href="#contact" className="hover:opacity-70">Contatti</a>
        </nav>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-xl bg-zinc-900 text-white hover:opacity-90"
        >
          Parliamone
        </a>
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="min-h-[100svh] bg-zinc-950 text-white grid place-items-center px-6"
    >
      <motion.div style={{ scale, y }} className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,7vw,5rem)] leading-[0.95] font-semibold tracking-tight"
        >
          Strategia, <span className="text-teal-400">creatività</span> e dati
          <br />
          per far crescere brand e reputazione.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 opacity-90 text-lg"
        >
          Dalla social listening al posizionamento istituzionale. Dal brand
          design agli eventi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-3"
        >
          <a href="#work" className="px-5 py-3 rounded-xl bg-teal-400 text-zinc-900 font-medium">
            Vedi i lavori
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl ring-1 ring-white/25">
            Richiedi proposta
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Strategy", "Branding", "Listening", "Content", "Media", "Events", "Design"];
  return (
    <div className="bg-white py-10 overflow-hidden border-y border-zinc-200">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap text-zinc-900 font-medium text-2xl"
      >
        {Array.from({ length: 2 }).flatMap((_, k) =>
          items.map((t, i) => (
            <span key={`${k}-${i}`} className="inline-flex items-center mx-6">
              <span className="opacity-90">{t}</span>
              <span className="mx-6 h-1 w-1 rounded-full bg-zinc-300 inline-block" />
            </span>
          ))
        )}
      </motion.div>
    </div>
  );
}

function WorkGrid() {
  const cards = [
    { tag: "Istituzioni", title: "Osservatorio clima – Sentiment & narrativa", year: "2024" },
    { tag: "Corporate", title: "Lancio Brand – Platform & campagne", year: "2025" },
    { tag: "Public Affairs", title: "Stakeholder mapping – Relazioni media", year: "2023" },
    { tag: "Turismo", title: "Destination – Posizionamento & PR", year: "2024" },
  ];

  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight"
        >
          Selezione lavori
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative rounded-2xl border border-zinc-200 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-teal-300/0 to-teal-300/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs uppercase tracking-wide opacity-70">{c.tag}</p>
              <h3 className="mt-2 text-xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-8 text-sm opacity-60">{c.year}</p>
              <div className="mt-6">
                <button className="text-sm underline decoration-zinc-400 underline-offset-4">
                  Apri case
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const groups = [
    {
      name: "Analisi & Listening",
      items: ["Web & Social Listening", "Monitoraggio Digitale", "Monitoraggio Stampa"],
    },
    {
      name: "Strategia & Relazioni",
      items: ["Connessioni", "Posizionamento Strategico", "Relazioni Media"],
    },
    {
      name: "Identità & Attivazioni",
      items: ["Identità Digitale", "Creatività", "Eventi"],
    },
  ];

  return (
    <section id="services" className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Cosa facciamo
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >
          {groups.map((g, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-lg font-medium">{g.name}</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-90">
                {g.items.map((label, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300 inline-block" />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Team() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yB = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const people = [
    { name: "Valentina Fontana", role: "Strategic Communication", y: yA },
    { name: "Tiberio Brunetti", role: "Founder, Strategy", y: yB },
  ];

  return (
    <section id="team" ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Leadership</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {people.map((p, i) => (
            <motion.div key={i} style={{ y: p.y }} className="rounded-2xl border border-zinc-200 p-6">
              <div className="aspect-[4/3] rounded-xl bg-zinc-100 mb-4" />
              <p className="text-sm opacity-70">Founder</p>
              <h3 className="text-xl font-medium">{p.name}</h3>
              <p className="opacity-70">{p.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-teal-300 text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold">Parliamo del tuo posizionamento</h2>
          <p className="mt-2 opacity-80">
            Costruiamo insieme la prossima mossa: mappatura conversazioni, strategia, creatività.
          </p>
        </div>
        <a
          href="mailto:info@spinfactor.it"
          className="self-start px-6 py-3 rounded-xl bg-zinc-900 text-white"
        >
          Scrivici
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-white text-zinc-900">
      <Nav />
      <Hero />
      <Marquee />
      <WorkGrid />
      <Services />
      <Team />
      <CTA />
      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} Spin Factor — Roma • Milano
        </div>
      </footer>
    </div>
  );
}
