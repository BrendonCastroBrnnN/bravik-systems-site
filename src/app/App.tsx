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

const problems = [
  { icon: FileCode,      prob: "Controle em planilhas",            sol: "ERP sob medida com dados em tempo real, acesso multi-usuário e automação de entradas",             tag: "ERP" },
  { icon: RefreshCw,     prob: "Processos 100% manuais",           sol: "Automações inteligentes com gatilhos, regras e fluxos que operam sem intervenção humana",          tag: "Automação" },
  { icon: AlertTriangle, prob: "Retrabalho e erros operacionais",  sol: "Validações, workflows e integrações que eliminam erros na origem, antes que se propaguem",          tag: "Workflow" },
  { icon: GitMerge,      prob: "Sistemas isolados e desconectados", sol: "APIs e integrações que unificam todos os sistemas em um único ecossistema de dados",               tag: "APIs" },
  { icon: TrendingUp,    prob: "Tomada de decisão no escuro",      sol: "Dashboards com KPIs em tempo real que transformam dados em decisões estratégicas",                  tag: "BI" },
  { icon: Globe,         prob: "Presença digital fraca",           sol: "Plataformas web de alto padrão que transmitem autoridade e convertem visitantes em clientes",        tag: "Web" },
  { icon: Layers,        prob: "Falta de organização operacional", sol: "ERP personalizado para o modelo de negócio da empresa — não adaptações de software pronto",          tag: "ERP" },
  { icon: Server,        prob: "Sistemas legados e instáveis",     sol: "Modernização com arquitetura escalável, segura e preparada para crescimento acelerado",              tag: "Dev" },
];

const products = [
  {
    status: "MVP em Desenvolvimento", statusColor: "#FBBF24",
    name: "Bravik ERP",
    tagline: "Gestão integrada de processos produtivos.",
    desc: "Sistema de gestão em desenvolvimento para empresas que precisam centralizar controle de pedidos, produção, clientes e faturamento em uma única plataforma — sem depender de planilhas ou softwares genéricos.",
    modules: ["Dashboard operacional", "Gestão de pedidos", "Controle de produção", "Relatórios gerenciais", "Módulo de orçamentos", "Gestão de clientes"],
    icon: Database,
    accent: "#e5173f",
  },
  {
    status: "Em Operação", statusColor: "#34D399",
    name: "ML Automation System",
    tagline: "Automação de pedidos integrada ao Mercado Livre.",
    desc: "Solução desenvolvida para um contexto específico de operação no Mercado Livre — automatiza o registro de pedidos, cálculos e controle operacional com integração direta ao Google Sheets.",
    modules: ["Integração com contas do Mercado Livre", "Sincronização automática de pedidos", "Registro no Google Sheets", "Cálculo de valores e taxas", "Separação por conta", "Controle de pedidos processados", "Prevenção de duplicidades"],
    icon: Workflow,
    accent: "#3ECF8E",
  },
  {
    status: "Em Planejamento", statusColor: "#818CF8",
    name: "Bravik AI Quotes",
    tagline: "Geração de propostas comerciais com IA.",
    desc: "Sistema em planejamento que utilizará inteligência artificial para apoiar a elaboração de propostas comerciais — reduzindo o tempo gasto na estruturação de orçamentos repetitivos.",
    modules: ["Geração estruturada de propostas", "Análise de escopo por IA", "Templates configuráveis", "Revisão e aprovação digital", "Histórico de versões"],
    icon: Brain,
    accent: "#818CF8",
  },
];

const services = [
  { icon: Code2,           title: "Sistemas Sob Medida",         benefit: "Processos otimizados para sua realidade",          desc: "Plataformas desenvolvidas especificamente para o seu negócio — sem adaptações ou limitações de softwares prontos." },
  { icon: Globe,           title: "Websites Institucionais",      benefit: "Credibilidade que converte visitantes",             desc: "Presença digital de alto padrão que transmite autoridade e gera oportunidades reais de negócio." },
  { icon: MonitorSmartphone, title: "Portais Corporativos",       benefit: "Central de informações para toda a operação",      desc: "Ambientes digitais completos para gestão de conteúdo, parceiros, colaboradores e clientes." },
  { icon: Package,         title: "ERP & CRM",                   benefit: "Visibilidade total sobre vendas e operações",       desc: "Sistemas de gestão e relacionamento desenvolvidos para as necessidades reais da sua empresa." },
  { icon: BarChart3,       title: "Dashboards & BI",             benefit: "Decisões baseadas em dados, não intuição",          desc: "Visualização de dados em tempo real que transforma números em ações estratégicas." },
  { icon: GitMerge,        title: "Integrações & APIs",          benefit: "Um ecossistema que trabalha em sincronia",          desc: "Conectamos sistemas distintos, eliminando silos de informação e duplicidade de processos." },
  { icon: Workflow,        title: "Automações Inteligentes",     benefit: "Horas de trabalho manual → produtividade",         desc: "Fluxos automatizados que executam tarefas repetitivas e liberam equipe para o que importa." },
  { icon: Brain,           title: "Inteligência Artificial",     benefit: "Tecnologia aplicada a problemas reais de processo",  desc: "IA integrada a fluxos operacionais: análise de dados, geração de conteúdo estruturado e automação cognitiva de tarefas." },
  { icon: Sparkles,        title: "Consultoria Tecnológica",     benefit: "Clareza sobre o que usar e quando",                 desc: "Diagnóstico, planejamento e roadmap tecnológico para empresas que querem estruturar ou evoluir sua operação digital." },
];

const cases = [
  {
    tag: "Indústria", status: "Entregue",
    title: "Grupo Clemal",
    headline: "Website institucional para empresa do setor industrial.",
    context: "Grupo atuante no setor industrial precisava de uma presença digital que comunicasse com clareza a escala das suas operações para parceiros e clientes corporativos.",
    challenge: "Ausência de presença digital estruturada dificultava o contato com parceiros e transmitia uma percepção aquém do real porte da empresa.",
    solution: "Desenvolvemos uma plataforma institucional com navegação objetiva, apresentação estruturada das operações e formulário de contato B2B integrado.",
    impact: "Entregável: website institucional em produção. Acompanhamento de resultados comerciais fica a cargo do cliente — sem dados reportados até o momento.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SEO"],
    highlights: ["Plataforma institucional entregue e em produção", "Identidade digital estruturada", "SEO técnico desde a fundação"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Automotivo", status: "Entregue",
    title: "Auto Onze",
    headline: "Website institucional com foco em presença local e contato direto.",
    context: "Negócio automotivo consolidado regionalmente, mas sem nenhuma presença online estruturada para quem buscasse os serviços em buscadores.",
    challenge: "Inexistência de canal digital impedia que clientes locais encontrassem a empresa fora do boca a boca e das indicações presenciais.",
    solution: "Construímos uma plataforma com apresentação dos serviços, integração direta com WhatsApp e estrutura de SEO local para buscas na região.",
    impact: "Entregável: website em produção com canal de contato ativo. Impacto sobre volume de contatos é acompanhado pelo cliente.",
    techs: ["React", "Tailwind CSS", "SEO Local", "WhatsApp API"],
    highlights: ["Website institucional entregue e no ar", "Integração direta com WhatsApp", "Estrutura de SEO local implementada"],
    img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Construção", status: "Entregue",
    title: "Big Lajes",
    headline: "Website empresarial para apresentação de produtos e captação de orçamentos.",
    context: "Empresa do setor de construção com produto consolidado, mas sem canal digital para alcançar compradores fora do seu raio de indicações.",
    challenge: "A ausência de presença digital limitava o alcance comercial e dificultava a solicitação de orçamentos por canais distintos das indicações.",
    solution: "Desenvolvemos um site institucional com apresentação técnica dos produtos, formulário de solicitação de orçamento e conteúdo orientado para SEO.",
    impact: "Entregável: website em produção com canal de captação de orçamentos ativo. Acompanhamento de resultados é responsabilidade do cliente.",
    techs: ["React", "TypeScript", "Node.js", "SEO", "Analytics"],
    highlights: ["Website com formulário de orçamento operacional", "Apresentação técnica dos produtos", "Estrutura de SEO implementada"],
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Sistema Interno", status: "Em Desenvolvimento",
    title: "Bravik ERP",
    headline: "Sistema de gestão de processos produtivos em desenvolvimento pela Bravik.",
    context: "Contexto operacional com controle de pedidos, produção e faturamento distribuído em planilhas — modelo que funciona no início, mas cria gargalos com o crescimento do volume.",
    challenge: "Sem centralização dos dados operacionais, a tomada de decisão depende de consolidações manuais, sujeitas a erros e sem visibilidade em tempo real.",
    solution: "Estamos desenvolvendo o Bravik ERP: sistema modular com Dashboard, Gestão de Clientes, Pedidos, Produção, Relatórios e Orçamentos — integrado em uma única plataforma.",
    impact: "Projeto em desenvolvimento como produto interno. Módulos principais em construção. Ainda sem dados de uso em produção para reportar.",
    techs: ["React", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Docker"],
    highlights: ["Desenvolvimento ativo dos módulos principais", "Arquitetura pensada para escalabilidade", "Produto interno com potencial de licenciamento futuro"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Automação", status: "Em Operação",
    title: "ML Automation System",
    headline: "Automação de pedidos do Mercado Livre com registro automático no Google Sheets.",
    context: "Operação específica no Mercado Livre com múltiplas contas ativas exigia controle manual de pedidos, cálculos e registros — processo suscetível a erros e lento.",
    challenge: "O registro manual de cada pedido, o cálculo de taxas e a separação por conta consumiam tempo operacional diário e geravam inconsistências nos controles.",
    solution: "Desenvolvemos uma solução que integra com as contas do Mercado Livre via API, captura pedidos automaticamente, calcula valores e taxas, separa por conta e registra no Google Sheets com controle de duplicidades.",
    impact: "Sistema em operação no contexto para o qual foi desenvolvido. Pedidos são registrados automaticamente. O controle operacional manual desta etapa foi eliminado.",
    techs: ["Node.js", "Mercado Livre API", "Google Sheets API", "Google APIs", "REST APIs"],
    highlights: ["Integração ativa com Mercado Livre via API", "Registro automático de pedidos no Google Sheets", "Controle de duplicidades e separação por conta implementados"],
  },
  {
    tag: "IA · Em Planejamento", status: "Em Planejamento",
    title: "Bravik AI Quotes",
    headline: "Sistema para geração estruturada de propostas comerciais com apoio de IA.",
    context: "A elaboração de propostas comerciais detalhadas consome tempo considerável quando feita do zero a cada solicitação — especialmente em projetos com escopo variável.",
    challenge: "Ausência de um fluxo estruturado de orçamentação torna o processo dependente de quem elabora, dificultando padronização, velocidade e escalonamento.",
    solution: "Sistema em planejamento que utilizará IA para apoiar a estruturação de propostas — com análise de escopo, sugestão de itens, templates configuráveis e fluxo de aprovação digital.",
    impact: "Projeto em fase de planejamento. Nenhum resultado a reportar. Disponível como solução futura da Bravik Systems.",
    techs: ["React", "TypeScript", "OpenAI API", "Supabase", "Node.js"],
    highlights: ["Conceito validado internamente", "Arquitetura sendo desenhada", "Sem prazo de lançamento definido"],
  },
];

const processSteps = [
  { n: "01", title: "Diagnóstico",        desc: "Mergulhamos no negócio para entender processos, gargalos e oportunidades antes de propor qualquer solução tecnológica." },
  { n: "02", title: "Planejamento",       desc: "Definimos escopo, entregas, tecnologias e cronograma com total transparência — sem surpresas durante o desenvolvimento." },
  { n: "03", title: "Arquitetura",        desc: "Projetamos a estrutura técnica com foco em escalabilidade, segurança e manutenibilidade de longo prazo." },
  { n: "04", title: "UX / UI",           desc: "Desenhamos interfaces que tornam a tecnologia simples, intuitiva e agradável de usar — independente do perfil do usuário." },
  { n: "05", title: "Desenvolvimento",   desc: "Codificamos com qualidade, testes contínuos e revisões frequentes para garantir confiabilidade em produção." },
  { n: "06", title: "Testes",            desc: "Validamos cada funcionalidade em diferentes cenários e dispositivos antes de qualquer implantação." },
  { n: "07", title: "Implantação",       desc: "Lançamos com acompanhamento próximo na fase de go-live para garantir estabilidade desde o primeiro minuto." },
  { n: "08", title: "Suporte",           desc: "Permanecemos presentes após a entrega para ajustes, melhorias e evolução contínua da solução." },
  { n: "09", title: "Melhoria Contínua", desc: "Monitoramos resultados e evoluímos a solução junto com o crescimento da empresa — sem fim de contrato real." },
];

const techs = [
  { name: "React",       color: "#61DAFB" }, { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js",     color: "#8CC84B" }, { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Supabase",    color: "#3ECF8E" }, { name: "PostgreSQL",  color: "#4169E1" },
  { name: "Docker",      color: "#2496ED" }, { name: "Git",         color: "#F05032" },
  { name: "GitHub",      color: "#f5f5f5" }, { name: "Google APIs", color: "#EA4335" },
  { name: "OpenAI",      color: "#74AA9C" }, { name: "REST APIs",   color: "#FF6C37" },
  { name: "Figma",       color: "#F24E1E" },
];

const faqs = [
  { q: "Quanto tempo leva para desenvolver um sistema?",         a: "Depende do escopo. Websites de alto nível são entregues em 2 a 4 semanas. Sistemas completos (ERPs, plataformas customizadas) variam de 2 a 6 meses. Após o diagnóstico, apresentamos um cronograma detalhado com marcos de entrega e revisões intermediárias." },
  { q: "Qual é o investimento necessário para contratar?",       a: "O valor é definido após o diagnóstico e planejamento — sempre com uma proposta transparente, detalhada e sem surpresas. Trabalhamos com escopo fechado para projetos definidos e modelo de manutenção contínua para evoluções após a entrega." },
  { q: "Vocês oferecem suporte técnico após a entrega?",         a: "Sim. O suporte pós-entrega faz parte do nosso processo padrão. Acompanhamos a fase de go-live e mantemos contrato de suporte para estabilidade, ajustes e evolução contínua da solução conforme o crescimento da empresa." },
  { q: "É possível integrar com sistemas que já temos?",         a: "Sim. Desenvolvemos integrações entre sistemas via APIs REST, webhooks e conexões diretas a bancos de dados. Avaliamos cada integração durante o diagnóstico para identificar a melhor abordagem técnica e o impacto no custo do projeto." },
  { q: "Que tipo de empresa a Bravik Systems atende?",           a: "Atendemos principalmente empresas de médio porte, indústrias, prestadores de serviço, startups em crescimento e negócios que querem modernizar seus processos. O pré-requisito é ter um desafio real a resolver — não apenas uma demanda por software." },
  { q: "Como é o processo de desenvolvimento na prática?",       a: "Seguimos 9 etapas: Diagnóstico → Planejamento → Arquitetura → UX/UI → Desenvolvimento → Testes → Implantação → Suporte → Melhoria Contínua. Cada fase tem entregáveis claros e o cliente acompanha o progresso de perto durante todo o processo." },
];

// ─── Hero Composition ─────────────────────────────────────────────────────────

function HeroViz() {
  const [aiText, setAiText] = useState("Analisando requisitos...");
  const [metricVal, setMetricVal] = useState(68);

  useEffect(() => {
    const lines = ["Analisando requisitos...", "Mapeando integrações...", "Gerando proposta...", "Aprovado ✓ R$ 48.200"];
    let i = 0;
    const t = setInterval(() => { i = (i + 1) % lines.length; setAiText(lines[i]); }, 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setMetricVal(v => v >= 97 ? 68 : v + 1);
    }, 80);
    return () => clearInterval(t);
  }, []);

  const bars = [38, 55, 44, 72, 51, 83, 65, 78, 57, 92, 74, 97];

  return (
    <div className="relative select-none" style={{ height: 560 }}>
      {/* Ambient */}
      <div className="absolute ag pointer-events-none"
        style={{ width: 320, height: 320, top: "15%", left: "20%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,23,63,.1) 0%, transparent 70%)" }} />

      {/* Main revenue card */}
      <div className="af absolute card gradient-border p-5 shadow-2xl"
        style={{ width: 288, top: 0, right: 0 }}>
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="mono text-xs muted mb-1">Receita · Últimos 12 meses</p>
            <p style={{ fontSize: 26, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-.02em" }}>
              R$ 2.84M
            </p>
          </div>
          <span className="mono text-xs font-semibold px-2 py-1 rounded-lg"
            style={{ background: "rgba(52,211,153,.1)", color: "#34D399", border: "1px solid rgba(52,211,153,.2)" }}>
            +{metricVal}%
          </span>
        </div>
        <div className="flex items-end gap-1 mt-4" style={{ height: 64 }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? "#e5173f" : i >= bars.length - 4 ? "rgba(229,23,63,.35)" : "rgba(255,255,255,.06)",
                transition: "height .5s ease",
              }} />
          ))}
        </div>
        <div className="flex justify-between mt-2 mono" style={{ fontSize: 10, color: "rgba(255,255,255,.25)" }}>
          <span>Jan</span><span>Mar</span><span>Jun</span><span>Set</span><span>Dez</span>
        </div>
      </div>

      {/* Integrations card */}
      <div className="afb absolute card p-4 shadow-xl"
        style={{ width: 200, top: 60, left: 0 }}>
        <p className="mono text-xs muted mb-3">Integrações Ativas</p>
        {[{ n: "Mercado Livre", c: "#F5E642" }, { n: "Google Sheets", c: "#34A853" }, { n: "OpenAI GPT-4", c: "#74AA9C" }, { n: "Bravik ERP", c: "#e5173f" }]
          .map(({ n, c }) => (
            <div key={n} className="flex items-center gap-2 mb-2">
              <div className="ap rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: c }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,.65)" }}>{n}</span>
              <div className="ml-auto rounded-full" style={{ width: 5, height: 5, background: "#34D399" }} />
            </div>
          ))}
      </div>

      {/* Code card */}
      <div className="afc absolute card p-4 shadow-xl"
        style={{ width: 256, top: 220, left: 16 }}>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="rounded-full" style={{ width: 8, height: 8, background: "#FF5F57" }} />
          <div className="rounded-full" style={{ width: 8, height: 8, background: "#FEBC2E" }} />
          <div className="rounded-full" style={{ width: 8, height: 8, background: "#28C840" }} />
          <span className="mono ml-2" style={{ fontSize: 10, color: "rgba(255,255,255,.25)" }}>automation.ts</span>
        </div>
        <div className="mono" style={{ fontSize: 11, lineHeight: 1.7 }}>
          <p><span style={{ color: "#60A5FA" }}>const</span> <span style={{ color: "#f5f5f5" }}>sync</span> <span style={{ color: "#60A5FA" }}>= await</span></p>
          <p className="pl-4"><span style={{ color: "#34D399" }}>bravik</span>.<span style={{ color: "#FBBF24" }}>automate</span>{"({"}</p>
          <p className="pl-6"><span style={{ color: "rgba(255,255,255,.4)" }}>trigger:</span> <span style={{ color: "#F87171" }}>"new_order"</span>,</p>
          <p className="pl-6"><span style={{ color: "rgba(255,255,255,.4)" }}>sync:</span> <span style={{ color: "#60A5FA" }}>true</span>,</p>
          <p className="pl-6"><span style={{ color: "rgba(255,255,255,.4)" }}>notify:</span> <span style={{ color: "#60A5FA" }}>["slack", "email"]</span></p>
          <p className="pl-4">{"});"}</p>
          <p style={{ color: "#34D399", marginTop: 4 }}>{"// ✓ Pedido sincronizado (0.3s)"}</p>
        </div>
      </div>

      {/* AI card */}
      <div className="af absolute card p-4 shadow-xl"
        style={{ width: 224, bottom: 80, right: 16, borderColor: "rgba(229,23,63,.2)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ width: 28, height: 28, background: "rgba(229,23,63,.15)" }}>
            <Brain size={13} color="#e5173f" />
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>Bravik AI</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="ap rounded-full" style={{ width: 5, height: 5, background: "#e5173f" }} />
            <span className="mono" style={{ fontSize: 9, color: "rgba(229,23,63,.8)" }}>LIVE</span>
          </div>
        </div>
        <p className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.75)", minHeight: 16 }}>
          {aiText}<span className="cur" style={{ color: "#e5173f" }}>_</span>
        </p>
      </div>

      {/* KPI grid */}
      <div className="afb absolute card p-3 shadow-xl"
        style={{ width: 192, bottom: 0, left: 0 }}>
        <div className="grid grid-cols-2 gap-2">
          {[
            { l: "Uptime", v: "99.9%", c: "#34D399" }, { l: "Pedidos", v: "1.847", c: "#60A5FA" },
            { l: "Usuários", v: "124",  c: "#FBBF24" }, { l: "Erros",   v: "0",     c: "#34D399" },
          ].map(({ l, v, c }) => (
            <div key={l} className="rounded-xl p-2.5" style={{ background: "#1a1a1a" }}>
              <p className="mono" style={{ fontSize: 9, color: "rgba(255,255,255,.3)" }}>{l}</p>
              <p className="mono font-bold" style={{ fontSize: 14, color: c }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { l: "Soluções",   h: "#solucoes"  },
    { l: "Produtos",   h: "#produtos"  },
    { l: "Cases",      h: "#cases"     },
    { l: "Sobre",      h: "#sobre"     },
    { l: "Processo",   h: "#processo"  },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(7,7,7,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.055)" : "1px solid transparent",
        transition: "all .4s cubic-bezier(.16,1,.3,1)",
      }}>
      <div className="container flex items-center justify-between" style={{ height: 64 }}>
        <a href="#" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <div className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ width: 32, height: 32, background: "#e5173f" }}>
            <span className="mono font-bold text-white" style={{ fontSize: 13 }}>B</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white tracking-tight" style={{ fontSize: 13, fontFamily: "'Bricolage Grotesque',sans-serif" }}>BRAVIK</span>
            <span className="mono" style={{ fontSize: 8, letterSpacing: ".18em", color: "rgba(255,255,255,.3)", textTransform: "uppercase" }}>Systems</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(({ l, h }) => <a key={h} href={h} className="nav-link">{l}</a>)}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="mailto:contato@braviksystems.com.br" className="nav-link">Contato</a>
          <a href="https://wa.me/5511999999999" className="btn-primary">
            Falar com Especialista <ArrowRight size={14} />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden" style={{ color: "rgba(255,255,255,.6)", background: "none", border: "none", cursor: "pointer" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(7,7,7,.98)", borderTop: "1px solid rgba(255,255,255,.055)" }}>
          {links.map(({ l, h }) => (
            <a key={h} href={h} onClick={() => setOpen(false)}
              style={{ color: "rgba(255,255,255,.5)", fontSize: 15, textDecoration: "none" }}>
              {l}
            </a>
          ))}
          <a href="https://wa.me/5511999999999" className="btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>
            Falar com Especialista <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, position: "relative", overflow: "hidden" }}>
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* Gradient vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(229,23,63,.06) 0%, transparent 70%)" }} />

      <div className="container" style={{ padding: "80px 24px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, ease: [.16, 1, .3, 1] }}>
            <div className="label mb-8">
              <div className="ap rounded-full" style={{ width: 5, height: 5, background: "#e5173f", display: "inline-block" }} />
              Parceiro Estratégico de Tecnologia
            </div>

            <h1 style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-.035em", marginBottom: 24, fontFamily: "'Bricolage Grotesque',sans-serif" }}>
              Transformamos<br />
              processos em<br />
              <span style={{ color: "#e5173f" }}>vantagem<br />competitiva.</span>
            </h1>

            <p style={{ fontSize: 18, color: "rgba(255,255,255,.48)", lineHeight: 1.65, maxWidth: 480, marginBottom: 40 }}>
              O código é o meio. O resultado operacional é o objetivo. Desenvolvemos soluções digitais com visão prática de negócio — pensadas para funcionar dentro da realidade da sua empresa.
            </p>

            <div className="flex flex-wrap gap-3" style={{ marginBottom: 52 }}>
              <a href="#solucoes" className="btn-primary" style={{ fontSize: 15, padding: "15px 30px" }}>
                Conhecer Soluções <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/5511999999999" className="btn-outline" style={{ fontSize: 15, padding: "15px 30px" }}>
                Falar com Especialista <Phone size={15} />
              </a>
            </div>

            <div className="flex flex-col gap-3" style={{ paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.07)" }}>
              {[
                { icon: Target,    text: "Diagnóstico do processo antes de qualquer proposta" },
                { icon: Code2,     text: "Desenvolvimento com arquitetura limpa e escalável" },
                { icon: Activity,  text: "Comprometimento com resultado, não apenas com entrega" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ width: 28, height: 28, background: "rgba(229,23,63,.1)", border: "1px solid rgba(229,23,63,.15)" }}>
                    <Icon size={12} color="#e5173f" />
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [.16, 1, .3, 1], delay: .15 }}>
            <HeroViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Manifesto Strip ──────────────────────────────────────────────────────────

function Manifesto() {
  const points = [
    { icon: Brain,       text: "Entendemos o processo antes de propor qualquer solução" },
    { icon: Target,      text: "O código é o meio — o resultado operacional é o objetivo" },
    { icon: Shield,      text: "Arquitetura limpa, escalável e fácil de evoluir" },
    { icon: TrendingUp,  text: "Tecnologia como ferramenta de negócio, não de custo" },
  ];
  return (
    <section style={{ borderTop: "1px solid rgba(255,255,255,.055)", borderBottom: "1px solid rgba(255,255,255,.055)", padding: "40px 0" }}>
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map(({ icon: Icon, text }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
              className="flex items-center gap-3">
              <div className="rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ width: 36, height: 36, background: "rgba(229,23,63,.1)", border: "1px solid rgba(229,23,63,.15)" }}>
                <Icon size={15} color="#e5173f" />
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.5 }}>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Value Prop ───────────────────────────────────────────────────────────────

function ValueProp() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>
            <div className="label mb-6">Nossa Diferença</div>
            <h2 className="h2 mb-6">
              Engenharia digital<br />
              com visão prática<br />
              <span className="red">de negócio.</span>
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.48)", lineHeight: 1.7, marginBottom: 24 }}>
              A Bravik Systems nasceu da combinação entre <strong style={{ color: "#f5f5f5", fontWeight: 600 }}>experiência prática em gestão empresarial e processos produtivos</strong> e conhecimento técnico em desenvolvimento de software — duas perspectivas que raramente coexistem na mesma equipe.
            </p>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.48)", lineHeight: 1.7 }}>
              Isso nos permite entender o problema operacional antes de propor qualquer solução. O código é o meio. O resultado no processo do cliente é o objetivo.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8, ease: [.16, 1, .3, 1], delay: .1 }}
            className="grid grid-cols-2 gap-4">
            {[
              { icon: Boxes,      title: "Visão de Negócio",      desc: "Entendemos processos, gargalos e impacto financeiro antes de qualquer linha de código." },
              { icon: Code2,      title: "Excelência Técnica",    desc: "Arquitetura limpa, escalável e mantida com os mais altos padrões de desenvolvimento." },
              { icon: Activity,   title: "Foco em Resultado",     desc: "Medimos sucesso pelos resultados do cliente — não pelo código entregue." },
              { icon: Rocket,     title: "Visão de Longo Prazo",  desc: "Construímos soluções preparadas para crescer com a empresa pelos próximos anos." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="card p-5">
                <div className="rounded-xl flex items-center justify-center mb-4"
                  style={{ width: 40, height: 40, background: "rgba(229,23,63,.1)" }}>
                  <Icon size={17} color="#e5173f" />
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{title}</h4>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────

function Problems() {
  return (
    <section className="section" style={{ background: "rgba(255,255,255,.015)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 64 }}>
          <div className="label mb-5">Diagnóstico</div>
          <h2 className="h2 mb-4">Sua empresa ainda<br /><span className="red">opera com esses gargalos?</span></h2>
          <p className="muted" style={{ fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            Identificamos os problemas mais comuns e desenvolvemos soluções que os eliminam na raiz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map(({ icon: Icon, prob, sol, tag }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .06, duration: .6, ease: [.16, 1, .3, 1] }}
              className="card p-5">
              <div className="flex items-start justify-between mb-5">
                <div className="rounded-xl flex items-center justify-center"
                  style={{ width: 40, height: 40, background: "rgba(229,23,63,.1)", flexShrink: 0 }}>
                  <Icon size={17} color="#e5173f" />
                </div>
                <span className="tag">{tag}</span>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <AlertTriangle size={12} color="rgba(251,146,60,.6)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.38)", textDecoration: "line-through", lineHeight: 1.5 }}>{prob}</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={12} color="#34D399" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.75)", lineHeight: 1.55 }}>{sol}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────

function Products() {
  return (
    <section id="produtos" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          style={{ marginBottom: 64 }}>
          <div className="label mb-5">Produtos Proprietários</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="h2">
              Soluções desenvolvidas<br /><span className="red">pela Bravik.</span>
            </h2>
            <p className="muted" style={{ fontSize: 15, maxWidth: 380, lineHeight: 1.65 }}>
              Além de desenvolver soluções sob medida, a Bravik Systems constrói seus próprios produtos — tecnologia validada na prática, disponível para novos clientes.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map(({ status, statusColor, name, tagline, desc, modules, icon: Icon, accent }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .1, duration: .7, ease: [.16, 1, .3, 1] }}
              className="card gradient-border p-7 flex flex-col" style={{ gap: 0 }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="rounded-2xl flex items-center justify-center"
                  style={{ width: 52, height: 52, background: `${accent}18`, border: `1px solid ${accent}30` }}>
                  <Icon size={22} color={accent} />
                </div>
                <span className="mono font-bold px-2.5 py-1 rounded-lg"
                  style={{ fontSize: 10, background: `${statusColor}15`, color: statusColor, border: `1px solid ${statusColor}25` }}>
                  {status}
                </span>
              </div>
              {/* Title */}
              <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-.02em", marginBottom: 6 }}>
                {name}
              </h3>
              <p style={{ fontSize: 13, color: accent, fontWeight: 600, marginBottom: 16 }}>{tagline}</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.65, marginBottom: 24, flex: 1 }}>{desc}</p>
              {/* Modules */}
              <div className="flex flex-col gap-2 mb-6">
                {modules.map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <div className="rounded-full flex-shrink-0"
                      style={{ width: 4, height: 4, background: accent }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>{m}</span>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <a href="https://wa.me/5511999999999"
                className="flex items-center gap-2 font-semibold"
                style={{ fontSize: 13, color: accent, textDecoration: "none", transition: "gap .2s ease" }}>
                {status === "Em Operação" ? "Saber Mais" : "Acompanhar Evolução"}
                <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Roadmap strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: .3, duration: .7 }}
          className="rounded-2xl border mt-8 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(229,23,63,.04)", borderColor: "rgba(229,23,63,.15)" }}>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
              A Bravik Systems continuará lançando novos produtos.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)" }}>
              SaaS, automações verticais, IA aplicada — nosso roadmap está em constante evolução.
            </p>
          </div>
          <a href="https://wa.me/5511999999999" className="btn-outline flex-shrink-0" style={{ fontSize: 13 }}>
            Acompanhar Novidades <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Solutions ────────────────────────────────────────────────────────────────

function Solutions() {
  return (
    <section id="solucoes" className="section" style={{ background: "rgba(255,255,255,.015)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="text-center" style={{ marginBottom: 64 }}>
          <div className="label mb-5">Serviços</div>
          <h2 className="h2 mb-4">O que desenvolvemos<br /><span className="red">para o seu negócio</span></h2>
          <p className="muted" style={{ fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
            Cada solução é construída com foco no benefício gerado ao negócio — não apenas na tecnologia utilizada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, benefit, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .045, duration: .6, ease: [.16, 1, .3, 1] }}
              className="card p-5 flex flex-col">
              <div className="rounded-xl flex items-center justify-center mb-5"
                style={{ width: 40, height: 40, background: "rgba(229,23,63,.1)" }}>
                <Icon size={17} color="#e5173f" />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, fontFamily: "'Bricolage Grotesque',sans-serif" }}>{title}</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{desc}</p>
              <div className="flex items-start gap-2 rounded-xl p-2.5" style={{ background: "#1a1a1a" }}>
                <CheckCircle2 size={11} color="#e5173f" style={{ flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontSize: 11, color: "rgba(255,255,255,.5)" }}>{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cases ────────────────────────────────────────────────────────────────────

function CaseCard({ c, i }: { c: typeof cases[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * .08, duration: .7, ease: [.16, 1, .3, 1] }}
      className="card overflow-hidden">
      {/* Image */}
      <div className="relative" style={{ aspectRatio: "16/7", background: "#1a1a1a", overflow: "hidden" }}>
        {c.img ? (
          <img src={c.img} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.7)" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)" }}>
            <Brain size={48} color="rgba(229,23,63,.2)" />
          </div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,7,7,.9) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span className="mono font-semibold px-3 py-1.5 rounded-full"
            style={{ fontSize: 11, background: "rgba(7,7,7,.85)", color: "#e5173f", border: "1px solid rgba(229,23,63,.3)" }}>
            {c.tag}
          </span>
        </div>
        <div style={{ position: "absolute", top: 16, right: 16 }}>
          <span className="mono px-2 py-1 rounded-lg"
            style={{ fontSize: 10, background: "rgba(7,7,7,.75)", color: c.status === "Concluído" ? "#34D399" : "#818CF8",
              border: `1px solid ${c.status === "Concluído" ? "rgba(52,211,153,.25)" : "rgba(129,140,248,.25)"}` }}>
            {c.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: "'Bricolage Grotesque',sans-serif", letterSpacing: "-.02em", marginBottom: 6 }}>
          {c.title}
        </h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.6, marginBottom: 20 }}>{c.headline}</p>

        {/* Highlights */}
        <div className="flex flex-col gap-2 mb-6">
          {c.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2">
              <div className="rounded-full flex-shrink-0" style={{ width: 4, height: 4, background: "#e5173f" }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Expanded */}
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: .4, ease: [.16, 1, .3, 1] }}>
            <div className="border-t pt-6 mt-2 space-y-5" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              {[
                { l: "Contexto",  t: c.context   },
                { l: "Desafio",   t: c.challenge  },
                { l: "Solução",   t: c.solution   },
                { l: "Impacto",   t: c.impact     },
              ].map(({ l, t }) => (
                <div key={l}>
                  <p className="mono font-semibold mb-1.5" style={{ fontSize: 10, color: "#e5173f", letterSpacing: ".1em", textTransform: "uppercase" }}>{l}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", lineHeight: 1.65 }}>{t}</p>
                </div>
              ))}
              {/* Techs */}
              <div>
                <p className="mono font-semibold mb-3" style={{ fontSize: 10, color: "#e5173f", letterSpacing: ".1em", textTransform: "uppercase" }}>Tecnologias</p>
                <div className="flex flex-wrap gap-2">
                  {c.techs.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button onClick={() => setExpanded(!expanded)} className="btn-outline"
            style={{ fontSize: 12, padding: "10px 18px" }}>
            {expanded ? "Ocultar Estudo de Caso" : "Ver Estudo de Caso"}
            <Eye size={13} />
          </button>
          {c.img && (
            <button className="btn-primary" style={{ fontSize: 12, padding: "10px 18px" }}>
              Acessar Projeto <ArrowUpRight size={13} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Cases() {
  return (
    <section id="cases" className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ marginBottom: 64 }}>
          <div>
            <div className="label mb-5">Estudos de Caso</div>
            <h2 className="h2">Projetos que provam<br /><span className="red">a nossa capacidade.</span></h2>
          </div>
          <p className="muted" style={{ fontSize: 15, maxWidth: 360, lineHeight: 1.65 }}>
            Cada projeto é apresentado com contexto, desafio, solução e resultado — não apenas como um card de portfólio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}

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
