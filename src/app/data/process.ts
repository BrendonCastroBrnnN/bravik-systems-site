export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mergulhamos no negócio para entender processos, gargalos e oportunidades antes de propor qualquer solução tecnológica.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definimos escopo, entregas, tecnologias e cronograma com total transparência — sem surpresas durante o desenvolvimento.",
  },
  {
    n: "03",
    title: "Arquitetura",
    desc: "Projetamos a estrutura técnica com foco em escalabilidade, segurança e manutenibilidade de longo prazo.",
  },
  {
    n: "04",
    title: "UX / UI",
    desc: "Desenhamos interfaces que tornam a tecnologia simples, intuitiva e agradável de usar — independente do perfil do usuário.",
  },
  {
    n: "05",
    title: "Desenvolvimento",
    desc: "Codificamos com qualidade, testes contínuos e revisões frequentes para garantir confiabilidade em produção.",
  },
  {
    n: "06",
    title: "Testes",
    desc: "Validamos cada funcionalidade em diferentes cenários e dispositivos antes de qualquer implantação.",
  },
  {
    n: "07",
    title: "Implantação",
    desc: "Lançamos com acompanhamento próximo na fase de go-live para garantir estabilidade desde o primeiro minuto.",
  },
  {
    n: "08",
    title: "Suporte",
    desc: "Permanecemos presentes após a entrega para ajustes, melhorias e evolução contínua da solução.",
  },
  {
    n: "09",
    title: "Melhoria Contínua",
    desc: "Monitoramos resultados e evoluímos a solução junto com o crescimento da empresa — sem fim de contrato real.",
  },
];