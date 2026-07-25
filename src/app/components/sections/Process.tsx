import { motion } from "motion/react";

import { processSteps } from "../../data/process";

export function Process() {
  return (
    <section
      id="processo"
      className="section"
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
            Processo
          </div>

          <h2 className="h2 mb-4">
            Processo estruturado.
            <br />

            <span className="red">
              Entrega previsível.
            </span>
          </h2>

          <p
            className="muted"
            style={{
              fontSize: 17,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Da primeira conversa ao suporte contínuo — cada fase
            tem propósito, entregáveis claros e transparência
            total.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map(
            (
              {
                n,
                title,
                desc,
              },
              index,
            ) => (
              <motion.div
                key={n}
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
                  delay: index * 0.06,
                  duration: 0.6,
                }}
                className="card p-6"
              >
                <p
                  className="mono font-black"
                  style={{
                    fontSize: 40,
                    lineHeight: 1,
                    marginBottom: 16,
                    color: "rgba(229,23,63,.18)",
                    fontFamily:
                      "'Bricolage Grotesque',sans-serif",
                  }}
                >
                  {n}
                </p>

                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: 8,
                    fontFamily:
                      "'Bricolage Grotesque',sans-serif",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.4)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}