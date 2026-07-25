import {
  BarChart3,
  Brain,
  Code2,
  GitMerge,
  Globe,
  MonitorSmartphone,
  Package,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  benefit: string;
  desc: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Sistemas Sob Medida",
    benefit: "Processos otimizados para sua realidade",
    desc: "Plataformas desenvolvidas especificamente para o seu negócio — sem adaptações ou limitações de softwares prontos.",
  },
  {
    icon: Globe,
    title: "Websites Institucionais",
    benefit: "Credibilidade que converte visitantes",
    desc: "Presença digital de alto padrão que transmite autoridade e gera oportunidades reais de negócio.",
  },
  {
    icon: MonitorSmartphone,
    title: "Portais Corporativos",
    benefit: "Central de informações para toda a operação",
    desc: "Ambientes digitais completos para gestão de conteúdo, parceiros, colaboradores e clientes.",
  },
  {
    icon: Package,
    title: "ERP & CRM",
    benefit: "Visibilidade total sobre vendas e operações",
    desc: "Sistemas de gestão e relacionamento desenvolvidos para as necessidades reais da sua empresa.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & BI",
    benefit: "Decisões baseadas em dados, não intuição",
    desc: "Visualização de dados em tempo real que transforma números em ações estratégicas.",
  },
  {
    icon: GitMerge,
    title: "Integrações & APIs",
    benefit: "Um ecossistema que trabalha em sincronia",
    desc: "Conectamos sistemas distintos, eliminando silos de informação e duplicidade de processos.",
  },
  {
    icon: Workflow,
    title: "Automações Inteligentes",
    benefit: "Horas de trabalho manual → produtividade",
    desc: "Fluxos automatizados que executam tarefas repetitivas e liberam equipe para o que importa.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    benefit: "Tecnologia aplicada a problemas reais de processo",
    desc: "IA integrada a fluxos operacionais: análise de dados, geração de conteúdo estruturado e automação cognitiva de tarefas.",
  },
  {
    icon: Sparkles,
    title: "Consultoria Tecnológica",
    benefit: "Clareza sobre o que usar e quando",
    desc: "Diagnóstico, planejamento e roadmap tecnológico para empresas que querem estruturar ou evoluir sua operação digital.",
  },
];