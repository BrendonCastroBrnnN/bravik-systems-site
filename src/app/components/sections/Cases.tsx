import { motion } from "motion/react";

import { cases } from "../../data/cases";
import { CaseCard } from "../cases/CaseCard";

export function Cases() {
  return (
    <section
      id="cases"
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
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{
            marginBottom: 64,
          }}
        >
          <div>
            <div className="label mb-5">
              Estudos de Caso
            </div>

            <h2 className="h2">
              Projetos que provam
              <br />

              <span className="red">
                a nossa capacidade.
              </span>
            </h2>
          </div>

          <p
            className="muted"
            style={{
              fontSize: 15,
              maxWidth: 360,
              lineHeight: 1.65,
            }}
          >
            Cada projeto é apresentado com contexto, desafio,
            solução e resultado — não apenas como um card de
            portfólio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((caseStudy, index) => (
            <CaseCard
              key={caseStudy.title}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}