import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { products } from "../../data/products";
import { CONTACT } from "../../constants/contact";

export function Products() {
  return (
    <section
      id="produtos"
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
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label mb-5">
            Produtos Proprietários
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="h2">
              Soluções desenvolvidas
              <br />

              <span className="red">
                pela Bravik.
              </span>
            </h2>

            <p
              className="muted"
              style={{
                fontSize: 15,
                maxWidth: 380,
                lineHeight: 1.65,
              }}
            >
              Além de desenvolver soluções sob medida, a Bravik
              Systems constrói seus próprios produtos —
              tecnologia validada na prática, disponível para
              novos clientes.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {products.map(
            (
              {
                status,
                statusColor,
                name,
                tagline,
                desc,
                modules,
                icon: Icon,
                accent,
              },
              index,
            ) => (
              <motion.div
                key={name}
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
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card gradient-border p-7 flex flex-col"
                style={{ gap: 0 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      width: 52,
                      height: 52,
                      background: `${accent}18`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <Icon
                      size={22}
                      color={accent}
                    />
                  </div>

                  <span
                    className="mono font-bold px-2.5 py-1 rounded-lg"
                    style={{
                      fontSize: 10,
                      background: `${statusColor}15`,
                      color: statusColor,
                      border: `1px solid ${statusColor}25`,
                    }}
                  >
                    {status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily:
                      "'Bricolage Grotesque',sans-serif",
                    letterSpacing: "-.02em",
                    marginBottom: 6,
                  }}
                >
                  {name}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: accent,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  {tagline}
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.42)",
                    lineHeight: 1.65,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {desc}
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  {modules.map((module) => (
                    <div
                      key={module}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="rounded-full flex-shrink-0"
                        style={{
                          width: 4,
                          height: 4,
                          background: accent,
                        }}
                      />

                      <span
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,.55)",
                        }}
                      >
                        {module}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={CONTACT.whatsappUrl}
                  className="flex items-center gap-2 font-semibold"
                  style={{
                    fontSize: 13,
                    color: accent,
                    textDecoration: "none",
                    transition: "gap .2s ease",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {status === "Em Operação"
                    ? "Saber Mais"
                    : "Acompanhar Evolução"}

                  <ArrowRight size={13} />
                </a>
              </motion.div>
            ),
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="rounded-2xl border mt-8 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(229,23,63,.04)",
            borderColor: "rgba(229,23,63,.15)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              A Bravik Systems continuará lançando novos
              produtos.
            </p>

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.4)",
              }}
            >
              SaaS, automações verticais, IA aplicada — nosso
              roadmap está em constante evolução.
            </p>
          </div>

          <a
            href={CONTACT.whatsappUrl}
            className="btn-outline flex-shrink-0"
            style={{ fontSize: 13 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acompanhar Novidades
            <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
