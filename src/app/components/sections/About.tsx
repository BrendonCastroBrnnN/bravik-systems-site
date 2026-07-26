import { motion } from "motion/react";

const timeline = [
  {
    year: "2025",
    title: "Fundação da Bravik Systems",
    description:
      "Início da empresa com foco no desenvolvimento de soluções digitais para negócios, unindo experiência prática em gestão e tecnologia.",
  },
  {
    year: "2026",
    title: "Primeiros Produtos Próprios",
    description:
      "Desenvolvimento do Bravik ERP, ML Automation System e evolução do portfólio de sites, sistemas e automações.",
  },
  {
    year: "Hoje",
    title: "Em constante evolução",
    description:
      "Construindo soluções digitais que simplificam processos e geram valor para empresas de diferentes segmentos.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="section"
      style={{
        background: "rgba(255,255,255,.015)",
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
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
              Sobre a Bravik
            </div>

            <h2 className="h2 mb-8">
              Entendemos negócios.
              <br />

              <span className="red">
                Depois,
                <br />
                desenvolvemos
                <br />
                a tecnologia.
              </span>
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              A Bravik Systems foi fundada por alguém que atuou
              na gestão de processos produtivos e no controle
              operacional de empresas antes de dedicar-se ao
              desenvolvimento de software. Essa trajetória
              moldou uma forma diferente de enxergar tecnologia.
            </p>

            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Antes de desenvolver qualquer solução, entendemos
              como o processo funciona hoje — onde estão os
              gargalos, onde o tempo é desperdiçado, onde a
              informação se perde. Tecnologia sem esse
              entendimento é apenas custo.
            </p>

            <div className="card p-6 flex items-center gap-5">
              <div
                className="rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  background: "rgba(229,23,63,.1)",
                  border:
                    "1px solid rgba(229,23,63,.15)",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily:
                      "'Bricolage Grotesque',sans-serif",
                    color: "#e5173f",
                  }}
                >
                  B
                </span>
              </div>

              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  Brendon Guilherme Castro
                </p>

                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.38)",
                    marginTop: 3,
                  }}
                >
                  Fundador · Desenvolvedor Full Stack
                </p>

                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.28)",
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  Formação prática em gestão de produção e
                  processos empresariais.
                  <br />
                  Desenvolvimento full-stack com foco em soluções
                  operacionais.
                </p>
              </div>
            </div>
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
          >
            <div
              style={{
                paddingLeft: 24,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(229,23,63,.4) 20%, rgba(229,23,63,.4) 80%, transparent)",
                }}
              />

              <div className="flex flex-col gap-10">
                {timeline.map(
                  (
                    {
                      year,
                      title,
                      description,
                    },
                    index,
                  ) => (
                    <motion.div
                      key={year}
                      initial={{
                        opacity: 0,
                        x: 16,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0"
                          style={{
                            marginLeft: -33,
                            marginTop: 4,
                          }}
                        >
                          <div
                            className="rounded-full border-2 flex items-center justify-center"
                            style={{
                              width: 16,
                              height: 16,
                              borderColor: "#e5173f",
                              background: "#070707",
                            }}
                          >
                            <div
                              className="rounded-full"
                              style={{
                                width: 6,
                                height: 6,
                                background: "#e5173f",
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <span
                            className="mono font-bold px-2.5 py-0.5 rounded-lg inline-block mb-3"
                            style={{
                              fontSize: 11,
                              background:
                                "rgba(229,23,63,.1)",
                              color: "#e5173f",
                              border:
                                "1px solid rgba(229,23,63,.2)",
                            }}
                          >
                            {year}
                          </span>

                          <h3
                            style={{
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
                              fontSize: 13,
                              color:
                                "rgba(255,255,255,.4)",
                              lineHeight: 1.6,
                            }}
                          >
                            {description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}