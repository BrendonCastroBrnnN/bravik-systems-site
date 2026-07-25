import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  Rocket,
  Shield,
} from "lucide-react";

import { COMPANY } from "../../constants/company";
import { CONTACT } from "../../constants/contact";

const trustSignals = [
  {
    icon: Shield,
    text: "Contrato transparente",
  },
  {
    icon: Clock,
    text: "Prazo cumprido",
  },
  {
    icon: CheckCircle2,
    text: "Suporte pós-entrega",
  },
  {
    icon: Lock,
    text: "Código seguro e escalável",
  },
];

export function CTA() {
  return (
    <section
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(229,23,63,.09) 0%, transparent 55%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 700,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(229,23,63,.12) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div
        className="container text-center"
        style={{
          position: "relative",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div
            className="label mb-8"
            style={{
              fontSize: 10,
            }}
          >
            <Rocket size={11} />

            Pronto para transformar sua operação?
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-.035em",
              marginBottom: 24,
              fontFamily:
                "'Bricolage Grotesque',sans-serif",
            }}
          >
            Vamos desenvolver a próxima
            <br />

            <span
              style={{
                color: "#e5173f",
              }}
            >
              solução da sua empresa?
            </span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,.42)",
              lineHeight: 1.65,
              maxWidth: 560,
              margin: "0 auto 52px",
            }}
          >
            Transforme processos manuais em tecnologia.
            Automatize tarefas. Acelere o crescimento do seu
            negócio com soluções desenvolvidas sob medida pela{" "}
            {COMPANY.name}.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: 15,
                padding: "16px 34px",
                boxShadow:
                  "0 0 48px rgba(229,23,63,.3)",
              }}
            >
              Solicitar Orçamento

              <ArrowRight size={17} />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-outline"
              style={{
                fontSize: 15,
                padding: "16px 34px",
              }}
            >
              Enviar E-mail

              <Mail size={16} />
            </a>
          </div>

          <div
            className="flex flex-wrap justify-center gap-8 mt-16 pt-12"
            style={{
              borderTop:
                "1px solid rgba(255,255,255,.055)",
            }}
          >
            {trustSignals.map(
              ({
                icon: Icon,
                text,
              }) => (
                <div
                  key={text}
                  className="flex items-center gap-2"
                >
                  <Icon
                    size={13}
                    color="#e5173f"
                  />

                  <span
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.4)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}