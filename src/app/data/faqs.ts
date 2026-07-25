export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Quanto tempo leva para desenvolver um sistema?",
    a: "Depende do escopo. Websites de alto nível são entregues em 2 a 4 semanas. Sistemas completos (ERPs, plataformas customizadas) variam de 2 a 6 meses. Após o diagnóstico, apresentamos um cronograma detalhado com marcos de entrega e revisões intermediárias.",
  },
  {
    q: "Qual é o investimento necessário para contratar?",
    a: "O valor é definido após o diagnóstico e planejamento — sempre com uma proposta transparente, detalhada e sem surpresas. Trabalhamos com escopo fechado para projetos definidos e modelo de manutenção contínua para evoluções após a entrega.",
  },
  {
    q: "Vocês oferecem suporte técnico após a entrega?",
    a: "Sim. O suporte pós-entrega faz parte do nosso processo padrão. Acompanhamos a fase de go-live e mantemos contrato de suporte para estabilidade, ajustes e evolução contínua da solução conforme o crescimento da empresa.",
  },
  {
    q: "É possível integrar com sistemas que já temos?",
    a: "Sim. Desenvolvemos integrações entre sistemas via APIs REST, webhooks e conexões diretas a bancos de dados. Avaliamos cada integração durante o diagnóstico para identificar a melhor abordagem técnica e o impacto no custo do projeto.",
  },
  {
    q: "Que tipo de empresa a Bravik Systems atende?",
    a: "Atendemos principalmente empresas de médio porte, indústrias, prestadores de serviço, startups em crescimento e negócios que querem modernizar seus processos. O pré-requisito é ter um desafio real a resolver — não apenas uma demanda por software.",
  },
  {
    q: "Como é o processo de desenvolvimento na prática?",
    a: "Seguimos 9 etapas: Diagnóstico → Planejamento → Arquitetura → UX/UI → Desenvolvimento → Testes → Implantação → Suporte → Melhoria Contínua. Cada fase tem entregáveis claros e o cliente acompanha o progresso de perto durante todo o processo.",
  },
];