import {
  CheckCircle2,
  Clock,
  Lock,
  Shield,
} from "lucide-react";

export const trustSignals = [
  {
    icon: Shield,
    text: "Contrato transparente",
  },
  {
    icon: Clock,
    text: "Prazo cumprido",
  },
  {
    icon: CheckCircle2,
    text: "Suporte pós-entrega",
  },
  {
    icon: Lock,
    text: "Código seguro e escalável",
  },
] as const;