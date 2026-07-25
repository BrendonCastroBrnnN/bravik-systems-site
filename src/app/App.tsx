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
import * as Accordion from "@radix-ui/react-accordion";
import { Navbar } from "./components/layout/Navbar";
import { Cases } from "./components/sections/Cases";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { ValueProp } from "./components/sections/ValueProp";
import { Problems } from "./components/sections/Problems";
import { Products } from "./components/sections/Products";
import { Solutions } from "./components/sections/Solutions";
import { faqs } from "./data/faqs";
import { processSteps } from "./data/process";
import { techs } from "./data/techs";


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

function About() {
  const timeline = [
    { y: "2022", t: "Fundação",           d: "A Bravik Systems nasce da união entre experiência prática em gestão empresarial, processos produtivos e desenvolvimento de software." },
    { y: "2023", t: "Primeiros Projetos", d: "Entrega dos primeiros sistemas e websites para clientes nos setores industrial, automotivo e comercial." },
    { y: "2024", t: "Expansão e Produtos",d: "Desenvolvimento do Bravik ERP, ML Automation System e crescimento expressivo da base de clientes." },
    { y: "2025", t: "Inovação com IA",    d: "Início do Bravik AI Quotes e consolidação como parceira estratégica de tecnologia para médias empresas." },
  ];

  return (
    <section id="sobre" className="section" style={{ background: "rgba(255,255,255,.015)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>
            <div className="label mb-6">Sobre a Bravik</div>
            <h2 className="h2 mb-8">
              Entendemos negócios.<br />
              <span className="red">Depois,<br />desenvolvemos<br />a tecnologia.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.48)", lineHeight: 1.7, marginBottom: 20 }}>
              A Bravik Systems foi fundada por alguém que atuou na gestão de processos produtivos e no controle operacional de empresas antes de dedicar-se ao desenvolvimento de software. Essa trajetória moldou uma forma diferente de enxergar tecnologia.
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.48)", lineHeight: 1.7, marginBottom: 32 }}>
              Antes de desenvolver qualquer solução, entendemos como o processo funciona hoje — onde estão os gargalos, onde o tempo é desperdiçado, onde a informação se perde. Tecnologia sem esse entendimento é apenas custo.
            </p>

            {/* Founder */}
            <div className="card p-6 flex items-center gap-5">
              <div className="rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ width: 64, height: 64, background: "rgba(229,23,63,.1)", border: "1px solid rgba(229,23,63,.15)" }}>
                <span style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", color: "#e5173f" }}>B</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15 }}>Brendon Guilherme Castro</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.38)", marginTop: 3 }}>Fundador · Desenvolvedor Full Stack</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.28)", marginTop: 6, lineHeight: 1.6 }}>
                  Formação prática em gestão de produção e processos empresariais.<br />
                  Desenvolvimento full-stack com foco em soluções operacionais.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8, ease: [.16, 1, .3, 1], delay: .1 }}>
            <div style={{ paddingLeft: 24, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
                background: "linear-gradient(to bottom, transparent, rgba(229,23,63,.4) 20%, rgba(229,23,63,.4) 80%, transparent)" }} />
              <div className="flex flex-col gap-10">
                {timeline.map(({ y, t, d }, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0" style={{ marginLeft: -33, marginTop: 4 }}>
                        <div className="rounded-full border-2 flex items-center justify-center"
                          style={{ width: 16, height: 16, borderColor: "#e5173f", background: "#070707" }}>
                          <div className="rounded-full" style={{ width: 6, height: 6, background: "#e5173f" }} />
                        </div>
                      </div>
                      <div>
                        <span className="mono font-bold px-2.5 py-0.5 rounded-lg inline-block mb-3"
                          style={{ fontSize: 11, background: "rgba(229,23,63,.1)", color: "#e5173f", border: "1px solid rgba(229,23,63,.2)" }}>
                          {y}
                        </span>
                        <h3 style={{ fontWeight: 700, marginBottom: 6, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{t}</h3>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{d}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 64 }}>
          <div className="label mb-5">Processo</div>
          <h2 className="h2 mb-4">Processo estruturado.<br /><span className="red">Entrega previsível.</span></h2>
          <p className="muted" style={{ fontSize: 17, maxWidth: 480, margin: "0 auto" }}>
            Da primeira conversa ao suporte contínuo — cada fase tem propósito, entregáveis claros e transparência total.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map(({ n, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .06, duration: .6 }}
              className="card p-6">
              <p className="mono font-black" style={{ fontSize: 40, lineHeight: 1, marginBottom: 16,
                color: "rgba(229,23,63,.18)", fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                {n}
              </p>
              <h3 style={{ fontWeight: 700, marginBottom: 8, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.65 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech ─────────────────────────────────────────────────────────────────────

function Tech() {
  return (
    <section style={{ borderTop: "1px solid rgba(255,255,255,.055)", borderBottom: "1px solid rgba(255,255,255,.055)", padding: "72px 0" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 48 }}>
          <div className="label mb-4">Stack</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif" }}>
            Tecnologias modernas e <span className="red">comprovadas</span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map(({ name, color }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * .04, duration: .4 }}
              className="card flex items-center gap-2.5 px-4 py-2.5"
              style={{ cursor: "default", borderRadius: 12 }}>
              <div className="rounded-full flex-shrink-0" style={{ width: 7, height: 7, background: color }} />
              <span className="mono font-medium" style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Principles ──────────────────────────────────────────────────────────────

function Principles() {
  const principles = [
    {
      icon: Brain,
      title: "Diagnóstico antes de proposta",
      desc: "Nenhuma solução é proposta sem antes entender como o processo funciona hoje, onde estão os gargalos e qual é o impacto real do problema para o negócio.",
    },
    {
      icon: Code2,
      title: "Código como ferramenta, não produto final",
      desc: "Desenvolvimento de software é o meio que utilizamos. O objetivo é sempre o resultado operacional — maior controle, menos retrabalho, mais clareza para quem decide.",
    },
    {
      icon: Shield,
      title: "Arquitetura pensada para durar",
      desc: "Construímos com estrutura limpa e escalável desde o início — para que a solução possa crescer junto com a empresa sem exigir refatorações custosas no futuro.",
    },
    {
      icon: Clock,
      title: "Transparência em cada fase",
      desc: "Escopo definido, cronograma comunicado, entregas parciais e nenhuma surpresa. O cliente acompanha o progresso em cada etapa do desenvolvimento.",
    },
    {
      icon: Activity,
      title: "Presença depois da entrega",
      desc: "O projeto não termina no go-live. Acompanhamos a operação, corrigimos o que precisa ser ajustado e evoluímos a solução conforme o negócio cresce.",
    },
    {
      icon: Target,
      title: "Soluções adequadas ao momento",
      desc: "Recomendamos o que faz sentido para a realidade atual do cliente — sem vender complexidade desnecessária nem subestimar o que o processo realmente exige.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(229,23,63,.04) 0%, transparent 70%)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 56 }}>
          <div className="label mb-4">Princípios de Trabalho</div>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-.025em" }}>
            Como a Bravik <span className="red">pensa e trabalha</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07, duration: .6 }}
              className="card p-6">
              <div className="rounded-xl flex items-center justify-center mb-4"
                style={{ width: 38, height: 38, background: "rgba(229,23,63,.1)", border: "1px solid rgba(229,23,63,.12)" }}>
                <Icon size={16} color="#e5173f" />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.65 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Segments ─────────────────────────────────────────────────────────────────

function Segments() {
  const segments = [
    { icon: Server,          label: "Indústria",              desc: "Controle de produção, pedidos e processos operacionais" },
    { icon: Globe,           label: "Comércio e Varejo",      desc: "Gestão de estoque, vendas e presença digital" },
    { icon: Workflow,        label: "Prestadores de Serviço", desc: "Automação de fluxos, CRM e controle de contratos" },
    { icon: Layers,          label: "Empresas em Crescimento", desc: "Sistemas escaláveis que acompanham a operação" },
    { icon: MonitorSmartphone, label: "Negócios sem Presença Digital", desc: "Plataformas web que estabelecem credibilidade" },
    { icon: Brain,           label: "Operações com Alto Volume Manual", desc: "Automações que eliminam tarefas repetitivas" },
  ];

  return (
    <section className="section" style={{ background: "rgba(255,255,255,.015)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 56 }}>
          <div className="label mb-5">Segmentos</div>
          <h2 className="h2">Para quem a Bravik<br /><span className="red">desenvolve soluções</span></h2>
          <p className="muted" style={{ fontSize: 16, maxWidth: 500, margin: "16px auto 0" }}>
            Atendemos empresas que têm desafios operacionais reais e buscam tecnologia como ferramenta de solução, não de status.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map(({ icon: Icon, label, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07, duration: .6 }}
              className="card p-5 flex items-start gap-4">
              <div className="rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ width: 38, height: 38, background: "rgba(229,23,63,.1)", border: "1px solid rgba(229,23,63,.12)", marginTop: 2 }}>
                <Icon size={16} color="#e5173f" />
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{label}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.55 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: 860 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 56 }}>
          <div className="label mb-5">FAQ</div>
          <h2 className="h2">Perguntas <span className="red">frequentes</span></h2>
        </motion.div>

        <Accordion.Root type="single" collapsible style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map(({ q, a }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .07, duration: .5 }}>
              <Accordion.Item value={`faq-${i}`} className="card overflow-hidden"
                style={{ borderRadius: 14 }}>
                <Accordion.Trigger style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 16, padding: "20px 24px", textAlign: "left", fontSize: 14, fontWeight: 600,
                  color: "#f5f5f5", background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans',sans-serif", transition: "color .2s ease",
                }}>
                  <span>{q}</span>
                  <ChevronDown size={15} color="rgba(255,255,255,.3)"
                    style={{ flexShrink: 0, transition: "transform .2s ease" }} />
                </Accordion.Trigger>
                <Accordion.Content>
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid rgba(255,255,255,.055)", paddingTop: 16 }}>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}>{a}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

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
