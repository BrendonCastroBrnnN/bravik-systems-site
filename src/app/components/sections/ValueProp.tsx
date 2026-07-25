import { motion } from "motion/react";
import {
  Activity,
  Boxes,
  Code2,
  Rocket,
} from "lucide-react";

const valueItems = [
  {
    icon: Boxes,
    title: "Visão de Negócio",
    description:
      "Entendemos processos, gargalos e impacto financeiro antes de qualquer linha de código.",
  },
  {
    icon: Code2,
    title: "Excelência Técnica",
    description:
      "Arquitetura limpa, escalável e mantida com os mais altos padrões de desenvolvimento.",
  },
  {
    icon: Activity,
    title: "Foco em Resultado",
    description:
      "Medimos sucesso pelos resultados do cliente — não pelo código entregue.",
  },
  {
    icon: Rocket,
    title: "Visão de Longo Prazo",
    description:
      "Construímos soluções preparadas para crescer com a empresa pelos próximos anos.",
  },
];

export function ValueProp() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="label mb-6">
              Nossa Diferença
            </div>

            <h2 className="h2 mb-6">
              Engenharia digital
              <br />
              com visão prática
              <br />
              <span className="red">de negócio.</span>
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              A Bravik Systems nasceu da combinação entre{" "}
              <strong
                style={{
                  color: "#f5f5f5",
                  fontWeight: 600,
                }}
              >
                experiência prática em gestão empresarial e
                processos produtivos
              </strong>{" "}
              e conhecimento técnico em desenvolvimento de
              software — duas perspectivas que raramente
              coexistem na mesma equipe.
            </p>

            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.7,
              }}
            >
              Isso nos permite entender o problema operacional
              antes de propor qualquer solução. O código é o
              meio. O resultado no processo do cliente é o
              objetivo.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="grid grid-cols-2 gap-4"
          >
            {valueItems.map(
              ({ icon: Icon, title, description }) => (
                <div key={title} className="card p-5">
                  <div
                    className="rounded-xl flex items-center justify-center mb-4"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(229,23,63,.1)",
                    }}
                  >
                    <Icon size={17} color="#e5173f" />
                  </div>

                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 6,
                      fontFamily:
                        "'Bricolage Grotesque',sans-serif",
                    }}
                  >
                    {title}
                  </h4>

                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,.4)",
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </p>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}