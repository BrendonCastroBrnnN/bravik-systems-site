import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, Menu, X, AlertTriangle,
  CheckCircle2, Shield, Globe, BarChart3,
  Brain, Code2, TrendingUp, Clock, Instagram,
  Linkedin, Github, Mail, Database, Server, Lock,
  Layers, Sparkles, FileCode, Workflow, MonitorSmartphone,
  Phone, ArrowUpRight, Activity, Target, Rocket, Package,
  ChevronDown, GitMerge, RefreshCw,
  ChevronRight, Boxes, Eye
} from "lucide-react";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Cases } from "./components/sections/Cases";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Principles } from "./components/sections/Principles";
import { ValueProp } from "./components/sections/ValueProp";
import { Problems } from "./components/sections/Problems";
import { Process } from "./components/sections/Process";
import { Products } from "./components/sections/Products";
import { Segments } from "./components/sections/Segments";
import { Solutions } from "./components/sections/Solutions";
import { Tech } from "./components/sections/Tech";


// ─── Global Styles ────────────────────────────────────────────────────────────

const G = `
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #070707;
    color: #f5f5f5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Bricolage Grotesque', sans-serif;
    letter-spacing: -0.025em;
  }
  .mono { font-family: 'Geist Mono', monospace; }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }

  @keyframes float    { 0%,100%{transform:translateY(0)}     50%{transform:translateY(-10px)} }
  @keyframes floatB   { 0%,100%{transform:translateY(-6px)}  50%{transform:translateY(6px)} }
  @keyframes floatC   { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(.8deg)} }
  @keyframes glow     { 0%,100%{opacity:.35} 50%{opacity:.7} }
  @keyframes pulse    { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.15);opacity:1} }
  @keyframes cursor   { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes flow     { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
  @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }

  .af  { animation: float   5s ease-in-out infinite }
  .afb { animation: floatB  6s ease-in-out infinite }
  .afc { animation: floatC  7s ease-in-out infinite }
  .ag  { animation: glow    4s ease-in-out infinite }
  .cur { animation: cursor  1s step-end   infinite }
  .ap  { animation: pulse   2s ease-in-out infinite }

  .card {
    background: #111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    transition: transform .35s cubic-bezier(.16,1,.3,1),
                border-color .35s ease,
                box-shadow .35s ease;
  }
  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(229,23,63,.25);
    box-shadow: 0 24px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(229,23,63,.12);
  }
  .btn-primary {
    display:inline-flex; align-items:center; gap:8px;
    padding:13px 26px; border-radius:12px;
    background:#e5173f; color:#fff;
    font-weight:600; font-size:14px;
    transition:opacity .2s ease, transform .15s ease;
    cursor:pointer; border:none; text-decoration:none;
  }
  .btn-primary:hover { opacity:.88; }
  .btn-primary:active { transform:scale(.97); }
  .btn-outline {
    display:inline-flex; align-items:center; gap:8px;
    padding:13px 26px; border-radius:12px;
    border:1px solid rgba(255,255,255,.12); color:#f5f5f5;
    font-weight:600; font-size:14px;
    transition:border-color .2s ease;
    cursor:pointer; background:transparent; text-decoration:none;
  }
  .btn-outline:hover { border-color:rgba(255,255,255,.3); }
  .nav-link {
    position:relative; color:rgba(255,255,255,.45);
    font-size:14px; font-weight:500;
    transition:color .2s ease; text-decoration:none;
  }
  .nav-link::after {
    content:''; position:absolute; left:0; bottom:-3px;
    width:0; height:1px; background:#e5173f;
    transition:width .3s cubic-bezier(.16,1,.3,1);
  }
  .nav-link:hover { color:#f5f5f5; }
  .nav-link:hover::after { width:100%; }
  .label {
    display:inline-flex; align-items:center; gap:6px;
    font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
    color:#e5173f; font-family:'Geist Mono',monospace;
    padding:5px 12px; border-radius:999px;
    background:rgba(229,23,63,.09);
    border:1px solid rgba(229,23,63,.2);
  }
  .section { padding: 112px 0; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .h2 {
    font-size:clamp(32px,4vw,52px); font-weight:800; line-height:1.06;
    font-family:'Bricolage Grotesque',sans-serif; letter-spacing:-.03em;
  }
  .red { color:#e5173f; }
  .muted { color:rgba(255,255,255,.42); }
  .divider { border:none; border-top:1px solid rgba(255,255,255,.055); margin:0; }
  .tag {
    font-size:11px; font-family:'Geist Mono',monospace; font-weight:600;
    padding:3px 10px; border-radius:6px;
    background:rgba(255,255,255,.05);
    border:1px solid rgba(255,255,255,.08);
    color:rgba(255,255,255,.38);
  }
  .gradient-border {
    position:relative;
  }
  .gradient-border::before {
    content:''; position:absolute; inset:0; border-radius:inherit;
    padding:1px;
    background:linear-gradient(135deg,rgba(229,23,63,.4),rgba(229,23,63,.05),rgba(255,255,255,.04));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events:none;
  }
  @media(max-width:768px){
    .section { padding:72px 0; }
    .h2 { font-size:32px; }
  }
`;

// ─── Data ────────────────────────────────────────────────────────────────────

// ─── Hero Composition ─────────────────────────────────────────────────────────

// ─── Navbar ───────────────────────────────────────────────────────────────────

// ─── Hero ─────────────────────────────────────────────────────────────────────

// ─── Manifesto Strip ──────────────────────────────────────────────────────────

// ─── Value Prop ───────────────────────────────────────────────────────────────

// ─── Problems ─────────────────────────────────────────────────────────────────

// ─── Products ─────────────────────────────────────────────────────────────────

// ─── Solutions ────────────────────────────────────────────────────────────────

// ─── Cases ────────────────────────────────────────────────────────────────────

// ─── About ────────────────────────────────────────────────────────────────────

// ─── Process ──────────────────────────────────────────────────────────────────

// ─── Tech ─────────────────────────────────────────────────────────────────────

// ─── Principles ──────────────────────────────────────────────────────────────

// ─── Segments ─────────────────────────────────────────────────────────────────

// ─── FAQ ──────────────────────────────────────────────────────────────────────

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(229,23,63,.09) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 500, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(229,23,63,.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px" }} />
      </div>

      <div className="container text-center" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}>
          <div className="label mb-8" style={{ fontSize: 10 }}>
            <Rocket size={11} /> Pronto para transformar sua operação?
          </div>

          <h2 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 800, lineHeight: 1.04,
            letterSpacing: "-.035em", marginBottom: 24, fontFamily: "'Bricolage Grotesque',sans-serif" }}>
            Vamos desenvolver a próxima<br />
            <span style={{ color: "#e5173f" }}>solução da sua empresa?</span>
          </h2>

          <p style={{ fontSize: 18, color: "rgba(255,255,255,.42)", lineHeight: 1.65,
            maxWidth: 560, margin: "0 auto 52px" }}>
            Transforme processos manuais em tecnologia. Automatize tarefas. Acelere o crescimento do seu negócio com soluções desenvolvidas sob medida pela Bravik Systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5511999999999" className="btn-primary"
              style={{ fontSize: 15, padding: "16px 34px", boxShadow: "0 0 48px rgba(229,23,63,.3)" }}>
              Solicitar Orçamento <ArrowRight size={17} />
            </a>
            <a href="mailto:contato@braviksystems.com.br" className="btn-outline" style={{ fontSize: 15, padding: "16px 34px" }}>
              Enviar E-mail <Mail size={16} />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,.055)" }}>
            {[
              { icon: Shield,      text: "Contrato transparente" },
              { icon: Clock,       text: "Prazo cumprido" },
              { icon: CheckCircle2, text: "Suporte pós-entrega" },
              { icon: Lock,        text: "Código seguro e escalável" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} color="#e5173f" />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,.4)" }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const navLinks = [
    { l: "Soluções",  h: "#solucoes"  },
    { l: "Produtos",  h: "#produtos"  },
    { l: "Cases",     h: "#cases"     },
    { l: "Sobre",     h: "#sobre"     },
    { l: "Processo",  h: "#processo"  },
    { l: "FAQ",       h: "#faq"       },
  ];
  const social = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin,  label: "LinkedIn",  href: "#" },
    { icon: Github,    label: "GitHub",    href: "#" },
    { icon: Mail,      label: "E-mail",    href: "mailto:contato@braviksystems.com.br" },
    { icon: Phone,     label: "WhatsApp",  href: "https://wa.me/5511999999999" },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.055)", background: "#070707" }}>
      <div className="container" style={{ padding: "72px 24px 40px" }}>
        <div className="grid lg:grid-cols-4 gap-12" style={{ marginBottom: 60 }}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5" style={{ marginBottom: 20 }}>
              <div className="rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ width: 36, height: 36, background: "#e5173f" }}>
                <span className="mono font-bold text-white" style={{ fontSize: 14 }}>B</span>
              </div>
              <div className="flex flex-col leading-none">
                <span style={{ fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 15 }}>BRAVIK SYSTEMS</span>
                <span className="mono" style={{ fontSize: 9, color: "rgba(255,255,255,.3)", letterSpacing: ".18em", textTransform: "uppercase" }}>Soluções Digitais</span>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.35)", lineHeight: 1.7, maxWidth: 340, marginBottom: 24 }}>
              Desenvolvemos soluções digitais sob medida que aumentam produtividade, reduzem custos e aceleram o crescimento das empresas.
            </p>
            <div className="flex gap-2.5">
              {social.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="card flex items-center justify-center"
                  style={{ width: 36, height: 36, borderRadius: 10, color: "rgba(255,255,255,.38)", textDecoration: "none", flexShrink: 0 }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mono font-semibold" style={{ fontSize: 10, color: "rgba(255,255,255,.25)", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 20 }}>Navegação</p>
            <div className="flex flex-col gap-3">
              {navLinks.map(({ l, h }) => (
                <a key={h} href={h} style={{ fontSize: 13, color: "rgba(255,255,255,.38)", textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.38)")}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mono font-semibold" style={{ fontSize: 10, color: "rgba(255,255,255,.25)", textTransform: "uppercase", letterSpacing: ".15em", marginBottom: 20 }}>Contato</p>
            <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
              <a href="mailto:contato@braviksystems.com.br" style={{ fontSize: 13, color: "rgba(255,255,255,.38)", textDecoration: "none" }}>
                contato@braviksystems.com.br
              </a>
              <a href="https://wa.me/5511999999999" style={{ fontSize: 13, color: "rgba(255,255,255,.38)", textDecoration: "none" }}>
                WhatsApp
              </a>
            </div>
            <a href="https://wa.me/5511999999999" className="btn-primary" style={{ fontSize: 12, padding: "10px 18px" }}>
              Falar Agora <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.045)" }}>
          <p className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>
            © {new Date().getFullYear()} Bravik Systems · Todos os direitos reservados
          </p>
          <p className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>
            Desenvolvido pela Bravik Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: G }} />
      <div style={{ background: "#070707", minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <Manifesto />
        <ValueProp />
        <Problems />
        <Products />
        <Solutions />
        <Cases />
        <About />
        <Process />
        <Tech />
        <Principles />
        <Segments />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
