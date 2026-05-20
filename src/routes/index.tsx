import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Box, Lightbulb, Layers, Sparkles, Cpu, Palette, Mail, Music2, ArrowUpRight, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import render1 from "@/assets/render-1.jpg";
import render2 from "@/assets/render-2.jpg";
import render3 from "@/assets/render-3.jpg";
import render4 from "@/assets/render-4.jpg";
import render5 from "@/assets/render-5.jpg";
import render6 from "@/assets/render-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const renders = [
  { src: render1, title: "Face Syrum", tag: "Cosmetic", titleClass: "text-rose-100" },
  { src: render2, title: "Beard Serum", tag: "Cosmetic", titleClass: "text-amber-50" },
  { src: render3, title: "Sunova Sunblock", tag: "Skincare", titleClass: "text-sky-100" },
  { src: render4, title: "Neon Muscle", tag: "Automotive", titleClass: "text-orange-100" },
  { src: render5, title: "TR Logo Cube", tag: "Branding", titleClass: "text-amber-200" },
  { src: render6, title: "BMW M3 E30", tag: "Automotive", titleClass: "text-zinc-100" },
];

const skills = [
  {
    icon: Box,
    label: "Blender",
    desc: "Advanced 3D suite",
    details: ["Product Visualization", "Animation", "Lighting", "Scene Composition"],
  },
  {
    icon: Layers,
    label: "Product Modelling",
    desc: "Hard surface precision",
    details: ["Hard Surface Modelling", "Clean Topology", "Precision Workflow", "Commercial Assets"],
  },
  {
    icon: Sparkles,
    label: "Product Rendering",
    desc: "Photoreal output",
    details: ["Photoreal Output", "Studio Rendering", "Luxury Presentation", "Cinematic Frames"],
  },
  {
    icon: Lightbulb,
    label: "Lighting",
    desc: "Cinematic studio setups",
    details: ["HDRI Lighting", "Studio Setups", "Cinematic Mood", "Shadow Control"],
  },
  {
    icon: Palette,
    label: "Materials & Texturing",
    desc: "PBR shader craft",
    details: ["PBR Materials", "Surface Detailing", "Realistic Textures", "Shader Development"],
  },
  {
    icon: Cpu,
    label: "Cycles Rendering",
    desc: "Path-traced realism",
    details: ["Path Tracing", "Realistic Reflections", "Global Illumination", "High Quality Output"],
  },
];


function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-black text-lg tracking-widest text-gradient-neon">
          TR Visuals<span className="text-neon-cyan">.</span>Graphics
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {["about", "work", "skills", "contact"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="hover:text-neon-cyan transition-colors">
                {s}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-neon-cyan/50 text-neon-cyan rounded-md hover:bg-neon-cyan/10 hover:glow-cyan transition-all"
        >
          Hire <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 cyber-grid animate-grid-move opacity-30" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      {/* Gold lightning bolt accent */}
      <svg
        className="absolute right-[-4%] top-[10%] w-[70vw] md:w-[55vw] h-auto opacity-[0.18] pointer-events-none"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M120 0 L40 220 L100 220 L70 400 L170 160 L110 160 L160 0 Z" fill="var(--neon-cyan)" />
      </svg>
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-neon-purple/15 blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-xs uppercase tracking-[0.3em] text-neon-cyan animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          3D Product Visualization Artist
        </div>

        <h1
          className="font-display font-black text-[17vw] md:text-[10rem] leading-[0.95] md:leading-[0.92] text-foreground tracking-[0.02em] md:tracking-[0.04em] uppercase"
        >
          <span className="block">Talal</span>
          <span className="block mt-2 md:mt-4">Rafique</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Crafting cinematic Blender renders, cosmetic visualization and premium
          commercial 3D presentations engineered for luxury brands.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#work"
            className="group relative px-8 py-3.5 font-medium uppercase tracking-widest text-sm bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground rounded-md overflow-hidden glow-cyan hover:glow-purple transition-all duration-500"
          >
            View Renders
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 font-medium uppercase tracking-widest text-sm border border-border text-foreground rounded-md hover:border-neon-purple hover:text-neon-purple transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground/60">
        Scroll ↓
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">// 01 — About</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Pixels with <span className="text-gradient-neon">presence</span>.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-semibold">Talal Rafique</span> is a Blender
            artist focused on cinematic product renders, cosmetic visualization, realistic
            lighting and premium commercial presentation.
          </p>
          <p>
            Every frame is engineered for brands that refuse the ordinary — pairing
            obsessive material work with theatrical lighting to make products feel
            inevitable, desirable, and impossibly real.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            {[
              { n: "120+", l: "Renders" },
              { n: "40+", l: "Clients" },
              { n: "4yr", l: "Crafting" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-neon" style={{ fontFamily: '"Fredoka", "Montserrat", sans-serif', letterSpacing: '-0.01em' }}>
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Work() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? renders[active] : null;

  return (
    <Section id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">
              // 02 — Selected Work
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Featured <span className="text-gradient-neon">Renders</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A curated cut of recent Blender frames — cosmetic, luxury, and tech surfaces
            sculpted in studio lighting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renders.map((r, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card backdrop-blur-sm text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[var(--neon-cyan)]/60 hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.14_85_/_0.45),0_0_80px_-20px_oklch(0.82_0.14_85_/_0.3)] focus:outline-none focus-visible:border-[var(--neon-cyan)]/60"
            >
              {/* Soft gold edge glow */}
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-700"
                style={{ boxShadow: "inset 0 0 40px oklch(0.82 0.14 85 / 0.25)" }}
              />
              <img
                src={r.src}
                alt={r.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:brightness-110 group-hover:contrast-[1.05] group-hover:saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-neon-cyan/0 group-hover:ring-neon-cyan/60 transition-all duration-700" />

              {/* Bottom content: title + tag */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="transition-all duration-700 ease-out group-hover:-translate-y-12">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan mb-2 transition-opacity duration-500 group-hover:opacity-70">
                    {r.tag}
                  </div>
                  <div className={`font-display text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${r.titleClass}`}>
                    {r.title}
                  </div>
                </div>

                {/* View Project button reveals on hover */}
                <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-500 delay-100 ease-out">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.3em] border border-[var(--neon-cyan)]/60 text-[var(--neon-cyan)] rounded-md bg-background/40 backdrop-blur-md shadow-[0_0_24px_-6px_oklch(0.82_0.14_85_/_0.55)]">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-5xl p-0 overflow-hidden border-[var(--neon-cyan)]/30 bg-background/95 backdrop-blur-xl shadow-[0_0_80px_-20px_oklch(0.82_0.14_85_/_0.4)] [&>button]:text-[var(--neon-cyan)] [&>button]:opacity-100"
        >
          {current && (
            <div className="relative">
              <DialogTitle className="sr-only">{current.title}</DialogTitle>
              <DialogDescription className="sr-only">{current.tag} render preview</DialogDescription>

              <div className="relative aspect-[4/3] md:aspect-[16/10] bg-black">
                <img src={current.src} alt={current.title} className="absolute inset-0 w-full h-full object-contain" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="px-6 md:px-10 py-6 flex items-end justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-neon-cyan mb-2">{current.tag}</div>
                  <h3 className={`font-display text-2xl md:text-4xl font-extrabold tracking-tight ${current.titleClass}`}>
                    {current.title}
                  </h3>
                </div>
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] border border-[var(--neon-cyan)]/60 text-[var(--neon-cyan)] rounded-md hover:bg-[var(--neon-cyan)]/10 transition-all"
                >
                  Commission <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">// 03 — Toolkit</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Skills & <span className="text-gradient-neon">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.label}
              tabIndex={0}
              className="group relative p-8 rounded-xl border border-border bg-card backdrop-blur-md overflow-hidden transition-all duration-500 ease-out hover:border-[var(--neon-cyan)]/60 focus-visible:border-[var(--neon-cyan)]/60 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_oklch(0.82_0.14_85_/_0.35),0_0_60px_-15px_oklch(0.82_0.14_85_/_0.25)] focus:outline-none"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--neon-cyan)]/15 blur-3xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div
                  className="inline-flex p-3 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 mb-5 group-hover:border-[var(--neon-cyan)]/60 group-hover:glow-cyan transition-all duration-500"
                  style={{ animation: `icon-float 4.5s ease-in-out ${i * 0.4}s infinite` }}
                >
                  <s.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>

                {/* Expandable details */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <div className="mt-5 pt-5 border-t border-[var(--neon-cyan)]/15 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-500 delay-75">
                      <ul className="space-y-2">
                        {s.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-[13px] text-muted-foreground/90"
                          >
                            <span className="w-1 h-1 rounded-full bg-[var(--neon-cyan)]/70 shadow-[0_0_6px_var(--neon-cyan)]" />
                            <span className="tracking-wide">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-xl p-10 md:p-16">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neon-cyan/20 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-neon-purple/25 blur-[120px]" />

          <div className="relative text-center">
            <div className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">
              // 04 — Contact
            </div>
            <h2 className="font-display text-4xl md:text-7xl font-bold leading-tight">
              Let's render <br />
              <span className="text-gradient-neon">something iconic.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              Open for commissions, brand collaborations and full product visualization
              campaigns.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:talalrafique33@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 font-medium uppercase tracking-widest text-sm bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground rounded-md glow-cyan hover:glow-purple transition-all"
              >
                <Mail className="w-4 h-4" /><span>talalrafique33@gmail.com</span>
              </a>
              <a
                href="https://www.tiktok.com/@trvisuals.graphics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-medium uppercase tracking-widest text-sm border border-neon-purple/50 text-neon-purple rounded-md hover:bg-neon-purple/10 hover:glow-purple transition-all"
              >
                <Music2 className="w-4 h-4" /> TikTok
              </a>
              <a
                href="https://wa.me/923700371552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-medium uppercase tracking-widest text-sm border border-neon-cyan/50 text-neon-cyan rounded-md hover:bg-neon-cyan/10 hover:glow-cyan transition-all"
              >
                <Phone className="w-4 h-4" /> 0370-0371552
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-20 md:mt-28 relative">
          {/* Cinematic gradient divider */}
          <div className="relative h-px w-full mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/20 to-transparent blur-sm" />
            {/* Center diamond accent */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[var(--neon-cyan)]/80 shadow-[0_0_12px_var(--neon-cyan)]" />
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Atmospheric tagline */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--neon-cyan)]/40" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--neon-cyan)]/70 font-medium">
                  Portfolio
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--neon-cyan)]/40" />
              </div>
              <p
                className="text-sm md:text-base font-display font-light tracking-[0.35em] md:tracking-[0.45em] uppercase"
                style={{
                  background: "var(--gradient-neon)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 40px oklch(0.82 0.14 85 / 0.15)",
                }}
              >
                Crafted in Blender &middot; Lit by Neon
              </p>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
              <span>© {new Date().getFullYear()} Talal Rafique</span>
              <span className="hidden md:inline w-1 h-1 rounded-full bg-[var(--neon-cyan)]/40" />
              <span>All Rights Reserved</span>
            </div>
          </div>

          {/* Subtle ambient glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-16 rounded-full bg-[var(--neon-cyan)]/5 blur-[60px] pointer-events-none" />
        </footer>
      </div>
    </Section>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
