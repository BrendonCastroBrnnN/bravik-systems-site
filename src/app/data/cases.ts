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
    headline: "Website institucional para empresa do setor industrial.",
    context:
      "Grupo atuante no setor industrial precisava de uma presença digital que comunicasse com clareza a escala das suas operações para parceiros e clientes corporativos.",
    challenge:
      "Ausência de presença digital estruturada dificultava o contato com parceiros e transmitia uma percepção aquém do real porte da empresa.",
    solution:
      "Desenvolvemos uma plataforma institucional com navegação objetiva, apresentação estruturada das operações e formulário de contato B2B integrado.",
    impact:
      "Entregável: website institucional em produção. Acompanhamento de resultados comerciais fica a cargo do cliente — sem dados reportados até o momento.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SEO"],
    highlights: [
      "Plataforma institucional entregue e em produção",
      "Identidade digital estruturada",
      "SEO técnico desde a fundação",
    ],
    img: "/SiteGrupoClemalPortifolio.png",
    projectUrl: "https://site-grupo-clemal.vercel.app",
  },
  {
    tag: "Automotivo",
    type: "Projeto para Cliente",
    status: "Entregue",
    title: "Auto Onze",
    headline: "Website institucional com foco em presença local e contato direto.",
    context:
      "Negócio automotivo consolidado regionalmente, mas sem nenhuma presença online estruturada para quem buscasse os serviços em buscadores.",
    challenge:
      "Inexistência de canal digital impedia que clientes locais encontrassem a empresa fora do boca a boca e das indicações presenciais.",
    solution:
      "Construímos uma plataforma com apresentação dos serviços, integração direta com WhatsApp e estrutura de SEO local para buscas na região.",
    impact:
      "Entregável: website em produção com canal de contato ativo. Impacto sobre volume de contatos é acompanhado pelo cliente.",
    techs: ["React", "Tailwind CSS", "SEO Local", "WhatsApp API"],
    highlights: [
      "Website institucional entregue e no ar",
      "Integração direta com WhatsApp",
      "Estrutura de SEO local implementada",
    ],
    img: "/SiteAutoOnzePortifolio.png",
    projectUrl: "https://autoonze.com.br",
  },
  {
    tag: "Construção",
    type: "Projeto para Cliente",
    status: "Entregue",
    title: "Big Lajes",
    headline: "Website empresarial para apresentação de produtos e captação de orçamentos.",
    context:
      "Empresa do setor de construção com produto consolidado, mas sem canal digital para alcançar compradores fora do seu raio de indicações.",
    challenge:
      "A ausência de presença digital limitava o alcance comercial e dificultava a solicitação de orçamentos por canais distintos das indicações.",
    solution:
      "Desenvolvemos um site institucional com apresentação técnica dos produtos, formulário de solicitação de orçamento e conteúdo orientado para SEO.",
    impact:
      "Entregável: website em produção com canal de captação de orçamentos ativo. Acompanhamento de resultados é responsabilidade do cliente.",
    techs: ["React", "TypeScript", "Node.js", "SEO", "Analytics"],
    highlights: [
      "Website com formulário de orçamento operacional",
      "Apresentação técnica dos produtos",
      "Estrutura de SEO implementada",
    ],
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=900&h=500&fit=crop&auto=format",
  },
  {
    tag: "Sistema Interno",
    type: "Solução Proprietária",
    status: "Em Desenvolvimento",
    title: "Bravik ERP",
    headline: "Sistema de gestão de processos produtivos em desenvolvimento pela Bravik.",
    context:
      "Contexto operacional com controle de pedidos, produção e faturamento distribuído em planilhas — modelo que funciona no início, mas cria gargalos com o crescimento do volume.",
    challenge:
      "Sem centralização dos dados operacionais, a tomada de decisão depende de consolidações manuais, sujeitas a erros e sem visibilidade em tempo real.",
    solution:
      "Estamos desenvolvendo o Bravik ERP: sistema modular com Dashboard, Gestão de Clientes, Pedidos, Produção, Relatórios e Orçamentos — integrado em uma única plataforma.",
    impact:
      "Projeto em desenvolvimento como produto interno. Módulos principais em construção. Ainda sem dados de uso em produção para reportar.",
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
      "Automação de pedidos do Mercado Livre com registro automático no Google Sheets.",
    context:
      "Operação específica no Mercado Livre com múltiplas contas ativas exigia controle manual de pedidos, cálculos e registros — processo suscetível a erros e lento.",
    challenge:
      "O registro manual de cada pedido, o cálculo de taxas e a separação por conta consumiam tempo operacional diário e geravam inconsistências nos controles.",
    solution:
      "Desenvolvemos uma solução que integra com as contas do Mercado Livre via API, captura pedidos automaticamente, calcula valores e taxas, separa por conta e registra no Google Sheets com controle de duplicidades.",
    impact:
      "Sistema em operação no contexto para o qual foi desenvolvido. Pedidos são registrados automaticamente. O controle operacional manual desta etapa foi eliminado.",
    techs: [
      "Node.js",
      "Mercado Livre API",
      "Google Sheets API",
      "Google APIs",
      "REST APIs",
    ],
    highlights: [
      "Integração ativa com Mercado Livre via API",
      "Registro automático de pedidos no Google Sheets",
      "Controle de duplicidades e separação por conta implementados",
    ],
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
      "Projeto em fase de planejamento. Nenhum resultado a reportar. Disponível como solução futura da Bravik Systems.",
    techs: ["React", "TypeScript", "OpenAI API", "Supabase", "Node.js"],
    highlights: [
      "Conceito validado internamente",
      "Arquitetura sendo desenhada",
      "Sem prazo de lançamento definido",
    ],
  },
];