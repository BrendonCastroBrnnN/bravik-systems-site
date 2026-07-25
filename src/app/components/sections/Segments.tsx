import { motion } from "motion/react";
import {
  Brain,
  Globe,
  Layers,
  MonitorSmartphone,
  Server,
  Workflow,
} from "lucide-react";

const segments = [
  {
    icon: Server,
    label: "Indústria",
    desc:
      "Controle de produção, pedidos e processos operacionais",
  },
  {
    icon: Globe,
    label: "Comércio e Varejo",
    desc:
      "Gestão de estoque, vendas e presença digital",
  },
  {
    icon: Workflow,
    label: "Prestadores de Serviço",
    desc:
      "Automação de fluxos, CRM e controle de contratos",
  },
  {
    icon: Layers,
    label: "Empresas em Crescimento",
    desc:
      "Sistemas escaláveis que acompanham a operação",
  },
  {
    icon: MonitorSmartphone,
    label: "Negócios sem Presença Digital",
    desc:
      "Plataformas web que estabelecem credibilidade",
  },
  {
    icon: Brain,
    label: "Operações com Alto Volume Manual",
    desc:
      "Automações que eliminam tarefas repetitivas",
  },
];

export function Segments() {
  return (
    <section
      className="section"
      style={{
        background: "rgba(255,255,255,.015)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
          style={{
            marginBottom: 56,
          }}
        >
          <div className="label mb-5">
            Segmentos
          </div>

          <h2 className="h2">
            Para quem a Bravik
            <br />

            <span className="red">
              desenvolve soluções
            </span>
          </h2>

          <p
            className="muted"
            style={{
              fontSize: 16,
              maxWidth: 500,
              margin: "16px auto 0",
            }}
          >
            Atendemos empresas que têm desafios operacionais
            reais e buscam tecnologia como ferramenta de
            solução, não de status.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {segments.map(
            (
              {
                icon: Icon,
                label,
                desc,
              },
              index,
            ) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.6,
                }}
                className="card p-5 flex items-start gap-4"
              >
                <div
                  className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(229,23,63,.1)",
                    border:
                      "1px solid rgba(229,23,63,.12)",
                    marginTop: 2,
                  }}
                >
                  <Icon
                    size={16}
                    color="#e5173f"
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 4,
                      fontFamily:
                        "'Bricolage Grotesque',sans-serif",
                    }}
                  >
                    {label}
                  </h3>

                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,.4)",
                      lineHeight: 1.55,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}