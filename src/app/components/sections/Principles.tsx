import { motion } from "motion/react";
import {
  Activity,
  Brain,
  Clock,
  Code2,
  Shield,
  Target,
} from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Diagnóstico antes de proposta",
    desc:
      "Nenhuma solução é proposta sem antes entender como o processo funciona hoje, onde estão os gargalos e qual é o impacto real do problema para o negócio.",
  },
  {
    icon: Code2,
    title: "Código como ferramenta, não produto final",
    desc:
      "Desenvolvimento de software é o meio que utilizamos. O objetivo é sempre o resultado operacional — maior controle, menos retrabalho, mais clareza para quem decide.",
  },
  {
    icon: Shield,
    title: "Arquitetura pensada para durar",
    desc:
      "Construímos com estrutura limpa e escalável desde o início — para que a solução possa crescer junto com a empresa sem exigir refatorações custosas no futuro.",
  },
  {
    icon: Clock,
    title: "Transparência em cada fase",
    desc:
      "Escopo definido, cronograma comunicado, entregas parciais e nenhuma surpresa. O cliente acompanha o progresso em cada etapa do desenvolvimento.",
  },
  {
    icon: Activity,
    title: "Presença depois da entrega",
    desc:
      "O projeto não termina no go-live. Acompanhamos a operação, corrigimos o que precisa ser ajustado e evoluímos a solução conforme o negócio cresce.",
  },
  {
    icon: Target,
    title: "Soluções adequadas ao momento",
    desc:
      "Recomendamos o que faz sentido para a realidade atual do cliente — sem vender complexidade desnecessária nem subestimar o que o processo realmente exige.",
  },
];

export function Principles() {
  return (
    <section
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(229,23,63,.04) 0%, transparent 70%)",
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
            marginBottom: 56,
          }}
        >
          <div className="label mb-4">
            Princípios de Trabalho
          </div>

          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,40px)",
              fontWeight: 800,
              fontFamily:
                "'Bricolage Grotesque',sans-serif",
              letterSpacing: "-.025em",
            }}
          >
            Como a Bravik{" "}

            <span className="red">
              pensa e trabalha
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map(
            (
              {
                icon: Icon,
                title,
                desc,
              },
              index,
            ) => (
              <motion.div
                key={title}
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
                className="card p-6"
              >
                <div
                  className="rounded-xl flex items-center justify-center mb-4"
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(229,23,63,.1)",
                    border:
                      "1px solid rgba(229,23,63,.12)",
                  }}
                >
                  <Icon
                    size={16}
                    color="#e5173f"
                  />
                </div>

                <h3
                  style={{
                    fontSize: 14,
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
                    color: "rgba(255,255,255,.42)",
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