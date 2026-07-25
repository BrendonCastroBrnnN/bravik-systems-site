import { motion } from "motion/react";
import {
  Brain,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";

const manifestoPoints = [
  {
    icon: Brain,
    text: "Entendemos o processo antes de propor qualquer solução",
  },
  {
    icon: Target,
    text: "O código é o meio — o resultado operacional é o objetivo",
  },
  {
    icon: Shield,
    text: "Arquitetura limpa, escalável e fácil de evoluir",
  },
  {
    icon: TrendingUp,
    text: "Tecnologia como ferramenta de negócio, não de custo",
  },
];

export function Manifesto() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,.055)",
        borderBottom: "1px solid rgba(255,255,255,.055)",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manifestoPoints.map(
            ({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="flex items-center gap-3"
              >
                <div
                  className="rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(229,23,63,.1)",
                    border:
                      "1px solid rgba(229,23,63,.15)",
                  }}
                >
                  <Icon size={15} color="#e5173f" />
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}