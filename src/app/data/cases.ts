export type CaseStatus =
  | "Entregue"
  | "Em Desenvolvimento"
  | "Em Operação"
  | "Em Planejamento";

export type CaseType =
  | "Projeto para Cliente"
  | "Solução Proprietária";

export interface CaseStudy {
  tag: string;
  type: CaseType;
  status: CaseStatus;
  title: string;
  headline: string;
  context: string;
  challenge: string;
  solution: string;
  impact: string;
  techs: string[];
  highlights: string[];
  img?: string;
  projectUrl?: string;
}

export const cases: CaseStudy[] = [
  {
    tag: "Indústria",
    type: "Projeto para Cliente",
    status: "Entregue",
    title: "Grupo Clemal",
    headline: "Plataforma institucional desenvolvida para fortalecer a presença digital e a comunicação B2B.",
    context:
      "Grupo atuante no setor industrial precisava de uma presença digital que comunicasse com clareza a escala das suas operações para parceiros e clientes corporativos.",
    challenge:
      "Ausência de presença digital estruturada dificultava o contato com parceiros e transmitia uma percepção aquém do real porte da empresa.",
    solution:
      "Desenvolvemos um website institucional moderno com foco em credibilidade, apresentação estruturada dos produtos e operações, SEO técnico e canal de contato voltado ao público corporativo.",
    impact:
      "Website institucional publicado com foco em fortalecer a presença digital da empresa, reforçar a credibilidade e facilitar o relacionamento comercial com clientes e parceiros.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SEO"],
    highlights: [
      "Website institucional publicado",
      "Estrutura completa de SEO técnico",
      "Canal comercial integrado",
    ],
    img: "/SiteGrupoClemalPortifolio.png",
    projectUrl: "https://site-grupo-clemal.vercel.app",
  },
  {
    tag: "Automotivo",
    type: "Projeto para Cliente",
    status: "Entregue",
    title: "Auto Onze",
    headline: "Website institucional desenvolvido para ampliar a presença digital e facilitar o contato com novos clientes.",
    context:
      "Negócio automotivo consolidado regionalmente, mas sem nenhuma presença online estruturada para quem buscasse os serviços em buscadores.",
    challenge:
      "Inexistência de canal digital impedia que clientes locais encontrassem a empresa fora do boca a boca e das indicações presenciais.",
    solution:
      "Desenvolvemos um website institucional responsivo com apresentação dos serviços, integração direta com WhatsApp e otimização para buscas locais através de SEO.",
    impact:
      "Website publicado com estrutura de SEO local, canal direto de atendimento via WhatsApp e presença digital estruturada para ampliar a visibilidade da empresa.",
    techs: ["React", "Tailwind CSS", "SEO Local", "WhatsApp API"],
    highlights: [
      "Website publicado em produção",
      "Integração direta com WhatsApp",
      "SEO Local implementado",
    ],
    img: "/SiteAutoOnzePortifolio.png",
    projectUrl: "https://autoonze.com.br",
  },
  {
    tag: "Construção",
    type: "Projeto para Cliente",
    status: "Entregue",
    title: "Big Lajes",
    headline:
      "Website institucional desenvolvido para fortalecer a presença digital e simplificar a solicitação de orçamentos.",

    context:
      "Fabricante de lajes treliçadas com atuação consolidada no setor da construção civil, mas sem uma presença digital estruturada para apresentar seus produtos e captar novos clientes.",

    challenge:
      "A ausência de um website dificultava a divulgação da empresa, limitava a geração de novos contatos e concentrava as solicitações de orçamento em canais informais.",

    solution:
      "Desenvolvemos um website institucional responsivo com apresentação técnica dos produtos, galeria de projetos, formulário de orçamento, integração com WhatsApp e estrutura completa de SEO para ampliar a visibilidade da empresa.",

    impact:
      "Website publicado com foco em fortalecer a presença digital da empresa, facilitar a solicitação de orçamentos e oferecer uma apresentação profissional dos produtos e serviços.",

    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "SEO",
      "Google Analytics",
    ],

    highlights: [
      "Website institucional publicado",
      "Solicitação de orçamento integrada",
      "SEO técnico implementado",
    ],

    img: "/SiteBigLajesPortifolio.png",
    projectUrl: "https://biglajesbh.com.br",
  },
  {
    tag: "Sistema Interno",
    type: "Solução Proprietária",
    status: "Em Desenvolvimento",
    title: "Bravik ERP",
    headline: "ERP modular para gestão de processos produtivos e administrativos.",
    context:
      "Contexto operacional com controle de pedidos, produção e faturamento distribuído em planilhas — modelo que funciona no início, mas cria gargalos com o crescimento do volume.",
    challenge:
      "Sem centralização dos dados operacionais, a tomada de decisão depende de consolidações manuais, sujeitas a erros e sem visibilidade em tempo real.",
    solution:
      "Estamos desenvolvendo o Bravik ERP: sistema modular com Dashboard, Gestão de Clientes, Pedidos, Produção, Relatórios e Orçamentos — integrado em uma única plataforma.",
    impact:
      "Produto proprietário em desenvolvimento, projetado para centralizar processos operacionais, aumentar a produtividade e reduzir controles manuais.",
    techs: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "Docker",
    ],
    highlights: [
      "Desenvolvimento ativo dos módulos principais",
      "Arquitetura pensada para escalabilidade",
      "Produto interno com potencial de licenciamento futuro",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Automação",
    type: "Solução Proprietária",
    status: "Em Operação",
    title: "ML Automation System",

    headline:
      "Automação de pedidos do Mercado Livre com integração via API e registro automático no Google Sheets.",

    context:
      "Operação com múltiplas contas do Mercado Livre exigia controle manual de pedidos, cálculo de taxas e consolidação de informações em planilhas, tornando o processo lento e sujeito a falhas.",

    challenge:
      "Eliminar atividades repetitivas, reduzir erros operacionais e garantir que todos os pedidos fossem registrados automaticamente, sem duplicidades e com informações financeiras consistentes.",

    solution:
      "Desenvolvemos uma solução integrada à API do Mercado Livre que captura pedidos automaticamente, identifica a conta de origem, calcula valores e taxas, registra os dados no Google Sheets e impede registros duplicados.",

    impact:
      "Sistema proprietário em operação que automatiza todo o fluxo de registro dos pedidos, reduz o tempo operacional, elimina tarefas manuais repetitivas e aumenta a confiabilidade das informações.",

    techs: [
      "Node.js",
      "Mercado Livre API",
      "Google Sheets API",
      "Google APIs",
      "REST APIs"
    ],

    highlights: [
      "Integração em tempo real com o Mercado Livre",
      "Registro automático dos pedidos no Google Sheets",
      "Controle de duplicidades e separação por conta"
    ],

    img: "/MLAplicationSystem.png",
  },
  {
    tag: "IA · Em Planejamento",
    type: "Solução Proprietária",
    status: "Em Planejamento",
    title: "Bravik AI Quotes",
    headline:
      "Sistema para geração estruturada de propostas comerciais com apoio de IA.",
    context:
      "A elaboração de propostas comerciais detalhadas consome tempo considerável quando feita do zero a cada solicitação — especialmente em projetos com escopo variável.",
    challenge:
      "Ausência de um fluxo estruturado de orçamentação torna o processo dependente de quem elabora, dificultando padronização, velocidade e escalonamento.",
    solution:
      "Sistema em planejamento que utilizará IA para apoiar a estruturação de propostas — com análise de escopo, sugestão de itens, templates configuráveis e fluxo de aprovação digital.",
    impact:
      "Projeto em fase de planejamento com arquitetura inicial definida para futura integração ao ecossistema Bravik Systems.",
    techs: ["React", "TypeScript", "OpenAI API", "Supabase", "Node.js"],
    highlights: [
      "Conceito validado internamente",
      "Arquitetura sendo desenhada",
      "Sem prazo de lançamento definido",
    ],
  },
];