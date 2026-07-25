import { Brain, Database, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  status: string;
  statusColor: string;
  name: string;
  tagline: string;
  desc: string;
  modules: string[];
  icon: LucideIcon;
  accent: string;
}

export const products: Product[] = [
  {
    status: "MVP em Desenvolvimento",
    statusColor: "#FBBF24",
    name: "Bravik ERP",
    tagline: "Gestão integrada de processos produtivos.",
    desc: "Sistema de gestão em desenvolvimento para empresas que precisam centralizar controle de pedidos, produção, clientes e faturamento em uma única plataforma — sem depender de planilhas ou softwares genéricos.",
    modules: [
      "Dashboard operacional",
      "Gestão de pedidos",
      "Controle de produção",
      "Relatórios gerenciais",
      "Módulo de orçamentos",
      "Gestão de clientes",
    ],
    icon: Database,
    accent: "#e5173f",
  },
  {
    status: "Em Operação",
    statusColor: "#34D399",
    name: "ML Automation System",
    tagline: "Automação de pedidos integrada ao Mercado Livre.",
    desc: "Solução desenvolvida para um contexto específico de operação no Mercado Livre — automatiza o registro de pedidos, cálculos e controle operacional com integração direta ao Google Sheets.",
    modules: [
      "Integração com contas do Mercado Livre",
      "Sincronização automática de pedidos",
      "Registro no Google Sheets",
      "Cálculo de valores e taxas",
      "Separação por conta",
      "Controle de pedidos processados",
      "Prevenção de duplicidades",
    ],
    icon: Workflow,
    accent: "#3ECF8E",
  },
  {
    status: "Em Planejamento",
    statusColor: "#818CF8",
    name: "Bravik AI Quotes",
    tagline: "Geração de propostas comerciais com IA.",
    desc: "Sistema em planejamento que utilizará inteligência artificial para apoiar a elaboração de propostas comerciais — reduzindo o tempo gasto na estruturação de orçamentos repetitivos.",
    modules: [
      "Geração estruturada de propostas",
      "Análise de escopo por IA",
      "Templates configuráveis",
      "Revisão e aprovação digital",
      "Histórico de versões",
    ],
    icon: Brain,
    accent: "#818CF8",
  },
];