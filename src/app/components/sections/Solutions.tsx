import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import { services } from "../../data/services";

export function Solutions() {
  return (
    <section
      id="solucoes"
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
            marginBottom: 64,
          }}
        >
          <div className="label mb-5">
            Serviços
          </div>

          <h2 className="h2 mb-4">
            O que desenvolvemos
            <br />

            <span className="red">
              para o seu negócio
            </span>
          </h2>

          <p
            className="muted"
            style={{
              fontSize: 17,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Cada solução é construída com foco no benefício
            gerado ao negócio — não apenas na tecnologia
            utilizada.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(
            (
              {
                icon: Icon,
                title,
                benefit,
                desc,
              },
              index,
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.045,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card p-5 flex flex-col"
              >
                <div
                  className="rounded-xl flex items-center justify-center mb-5"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(229,23,63,.1)",
                  }}
                >
                  <Icon
                    size={17}
                    color="#e5173f"
                  />
                </div>

                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 6,
                    fontFamily:
                      "'Bricolage Grotesque',sans-serif",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.4)",
                    lineHeight: 1.6,
                    marginBottom: 14,
                    flex: 1,
                  }}
                >
                  {desc}
                </p>

                <div
                  className="flex items-start gap-2 rounded-xl p-2.5"
                  style={{
                    background: "#1a1a1a",
                  }}
                >
                  <CheckCircle2
                    size={11}
                    color="#e5173f"
                    style={{
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  />

                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    {benefit}
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