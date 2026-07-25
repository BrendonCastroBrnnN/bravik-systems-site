import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Brain,
  Eye,
} from "lucide-react";

import type { CaseStudy } from "../../data/cases";

interface CaseCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseCard({
  caseStudy,
  index,
}: CaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    img,
    title,
    tag,
    status,
    headline,
    highlights,
    context,
    challenge,
    solution,
    impact,
    techs,
  } = caseStudy;

  const details = [
    {
      label: "Contexto",
      text: context,
    },
    {
      label: "Desafio",
      text: challenge,
    },
    {
      label: "Solução",
      text: solution,
    },
    {
      label: "Impacto",
      text: impact,
    },
  ];

  const isCompleted = status === "Concluído";

  return (
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
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="card overflow-hidden"
    >
      <div
        className="relative"
        style={{
          aspectRatio: "16/7",
          background: "#1a1a1a",
          overflow: "hidden",
        }}
      >
        {img ? (
          <img
            src={img}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(.7)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
            }}
          >
            <Brain
              size={48}
              color="rgba(229,23,63,.2)"
            />
          </div>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(7,7,7,.9) 0%, transparent 60%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <span
            className="mono font-semibold px-3 py-1.5 rounded-full"
            style={{
              fontSize: 11,
              background: "rgba(7,7,7,.85)",
              color: "#e5173f",
              border:
                "1px solid rgba(229,23,63,.3)",
            }}
          >
            {tag}
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <span
            className="mono px-2 py-1 rounded-lg"
            style={{
              fontSize: 10,
              background: "rgba(7,7,7,.75)",
              color: isCompleted
                ? "#34D399"
                : "#818CF8",
              border: `1px solid ${
                isCompleted
                  ? "rgba(52,211,153,.25)"
                  : "rgba(129,140,248,.25)"
              }`,
            }}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="p-7">
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
          {title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,.5)",
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {headline}
        </p>

        <div className="flex flex-col gap-2 mb-6">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2"
            >
              <div
                className="rounded-full flex-shrink-0"
                style={{
                  width: 4,
                  height: 4,
                  background: "#e5173f",
                }}
              />

              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,.5)",
                }}
              >
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {isExpanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="border-t pt-6 mt-2 space-y-5"
              style={{
                borderColor:
                  "rgba(255,255,255,.06)",
              }}
            >
              {details.map(({ label, text }) => (
                <div key={label}>
                  <p
                    className="mono font-semibold mb-1.5"
                    style={{
                      fontSize: 10,
                      color: "#e5173f",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </p>

                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.55)",
                      lineHeight: 1.65,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}

              <div>
                <p
                  className="mono font-semibold mb-3"
                  style={{
                    fontSize: 10,
                    color: "#e5173f",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  Tecnologias
                </p>

                <div className="flex flex-wrap gap-2">
                  {techs.map((technology) => (
                    <span
                      key={technology}
                      className="tag"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            type="button"
            onClick={() =>
              setIsExpanded(
                (currentValue) => !currentValue,
              )
            }
            className="btn-outline"
            style={{
              fontSize: 12,
              padding: "10px 18px",
            }}
            aria-expanded={isExpanded}
          >
            {isExpanded
              ? "Ocultar Estudo de Caso"
              : "Ver Estudo de Caso"}

            <Eye size={13} />
          </button>

          {img && (
            <button
              type="button"
              className="btn-primary"
              style={{
                fontSize: 12,
                padding: "10px 18px",
              }}
            >
              Acessar Projeto
              <ArrowUpRight size={13} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}