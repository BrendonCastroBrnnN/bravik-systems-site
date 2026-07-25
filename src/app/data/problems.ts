import {
  AlertTriangle,
  FileCode,
  GitMerge,
  Globe,
  Layers,
  RefreshCw,
  Server,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Problem {
  icon: LucideIcon;
  prob: string;
  sol: string;
  tag: string;
}

export const problems: Problem[] = [
  {
    icon: FileCode,
    prob: "Controle em planilhas",
    sol: "ERP sob medida com dados em tempo real, acesso multi-usuário e automação de entradas",
    tag: "ERP",
  },
  {
    icon: RefreshCw,
    prob: "Processos 100% manuais",
    sol: "Automações inteligentes com gatilhos, regras e fluxos que operam sem intervenção humana",
    tag: "Automação",
  },
  {
    icon: AlertTriangle,
    prob: "Retrabalho e erros operacionais",
    sol: "Validações, workflows e integrações que eliminam erros na origem, antes que se propaguem",
    tag: "Workflow",
  },
  {
    icon: GitMerge,
    prob: "Sistemas isolados e desconectados",
    sol: "APIs e integrações que unificam todos os sistemas em um único ecossistema de dados",
    tag: "APIs",
  },
  {
    icon: TrendingUp,
    prob: "Tomada de decisão no escuro",
    sol: "Dashboards com KPIs em tempo real que transformam dados em decisões estratégicas",
    tag: "BI",
  },
  {
    icon: Globe,
    prob: "Presença digital fraca",
    sol: "Plataformas web de alto padrão que transmitem autoridade e convertem visitantes em clientes",
    tag: "Web",
  },
  {
    icon: Layers,
    prob: "Falta de organização operacional",
    sol: "ERP personalizado para o modelo de negócio da empresa — não adaptações de software pronto",
    tag: "ERP",
  },
  {
    icon: Server,
    prob: "Sistemas legados e instáveis",
    sol: "Modernização com arquitetura escalável, segura e preparada para crescimento acelerado",
    tag: "Dev",
  },
];