import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Code2,
  Phone,
  Target,
} from "lucide-react";

import { HeroViz } from "./HeroViz";

const heroBenefits = [
  {
    icon: Target,
    text: "Diagnóstico do processo antes de qualquer proposta",
  },
  {
    icon: Code2,
    text: "Desenvolvimento com arquitetura limpa e escalável",
  },
  {
    icon: Activity,
    text: "Comprometimento com resultado, não apenas com entrega",
  },
];

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(229,23,63,.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="container"
        style={{ padding: "80px 24px" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="label mb-8">
              <div
                className="ap rounded-full"
                style={{
                  width: 5,
                  height: 5,
                  background: "#e5173f",
                  display: "inline-block",
                }}
              />

              Parceiro Estratégico de Tecnologia
            </div>

            <h1
              style={{
                fontSize: "clamp(40px,5.5vw,72px)",
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-.035em",
                marginBottom: 24,
                fontFamily:
                  "'Bricolage Grotesque',sans-serif",
              }}
            >
              Transformamos
              <br />
              processos em
              <br />

              <span style={{ color: "#e5173f" }}>
                vantagem
                <br />
                competitiva.
              </span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,.48)",
                lineHeight: 1.65,
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              O código é o meio. O resultado operacional é o
              objetivo. Desenvolvemos soluções digitais com visão
              prática de negócio — pensadas para funcionar dentro
              da realidade da sua empresa.
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{ marginBottom: 52 }}
            >
              <a
                href="#solucoes"
                className="btn-primary"
                style={{
                  fontSize: 15,
                  padding: "15px 30px",
                }}
              >
                Conhecer Soluções
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/5511999999999"
                className="btn-outline"
                style={{
                  fontSize: 15,
                  padding: "15px 30px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
                <Phone size={15} />
              </a>
            </div>

            <div
              className="flex flex-col gap-3"
              style={{
                paddingTop: 40,
                borderTop:
                  "1px solid rgba(255,255,255,.07)",
              }}
            >
              {heroBenefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3"
                >
                  <div
                    className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(229,23,63,.1)",
                      border:
                        "1px solid rgba(229,23,63,.15)",
                    }}
                  >
                    <Icon size={12} color="#e5173f" />
                  </div>

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          >
            <HeroViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}