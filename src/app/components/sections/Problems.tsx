import { motion } from "motion/react";
import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { problems } from "../../data/problems";

export function Problems() {
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
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{ marginBottom: 64 }}
        >
          <div className="label mb-5">
            Diagnóstico
          </div>

          <h2 className="h2 mb-4">
            Sua empresa ainda
            <br />

            <span className="red">
              opera com esses gargalos?
            </span>
          </h2>

          <p
            className="muted"
            style={{
              fontSize: 17,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Identificamos os problemas mais comuns e
            desenvolvemos soluções que os eliminam na raiz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map(
            (
              {
                icon: Icon,
                prob,
                sol,
                tag,
              },
              index,
            ) => (
              <motion.div
                key={`${tag}-${prob}`}
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
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card p-5"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="rounded-xl flex items-center justify-center"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(229,23,63,.1)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} color="#e5173f" />
                  </div>

                  <span className="tag">
                    {tag}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle
                    size={12}
                    color="rgba(251,146,60,.6)"
                    style={{
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.38)",
                      textDecoration: "line-through",
                      lineHeight: 1.5,
                    }}
                  >
                    {prob}
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2
                    size={12}
                    color="#34D399"
                    style={{
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.75)",
                      lineHeight: 1.55,
                    }}
                  >
                    {sol}
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