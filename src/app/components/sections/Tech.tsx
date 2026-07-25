import { motion } from "motion/react";

import { techs } from "../../data/techs";

export function Tech() {
  return (
    <section
      style={{
        borderTop:
          "1px solid rgba(255,255,255,.055)",
        borderBottom:
          "1px solid rgba(255,255,255,.055)",
        padding: "72px 0",
      }}
    >
      <div className="container">
        <motion.div
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
            duration: 0.7,
          }}
          className="text-center"
          style={{
            marginBottom: 48,
          }}
        >
          <div className="label mb-4">
            Stack
          </div>

          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              fontFamily:
                "'Bricolage Grotesque',sans-serif",
            }}
          >
            Tecnologias modernas e{" "}

            <span className="red">
              comprovadas
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map(
            (
              {
                name,
                color,
              },
              index,
            ) => (
              <motion.div
                key={name}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.4,
                }}
                className="card flex items-center gap-2.5 px-4 py-2.5"
                style={{
                  cursor: "default",
                  borderRadius: 12,
                }}
              >
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: 7,
                    height: 7,
                    background: color,
                  }}
                />

                <span
                  className="mono font-medium"
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  {name}
                </span>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}