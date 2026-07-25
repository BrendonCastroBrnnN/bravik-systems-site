import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { faqs } from "../../data/faqs";

export function FAQ() {
  return (
    <section
      id="faq"
      className="section"
    >
      <div
        className="container"
        style={{
          maxWidth: 860,
        }}
      >
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
          className="text-center"
          style={{
            marginBottom: 56,
          }}
        >
          <div className="label mb-5">
            FAQ
          </div>

          <h2 className="h2">
            Perguntas{" "}

            <span className="red">
              frequentes
            </span>
          </h2>
        </motion.div>

        <Accordion.Root
          type="single"
          collapsible
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {faqs.map(
            (
              {
                q,
                a,
              },
              index,
            ) => (
              <motion.div
                key={q}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                }}
              >
                <Accordion.Item
                  value={`faq-${index}`}
                  className="card overflow-hidden"
                  style={{
                    borderRadius: 14,
                  }}
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "20px 24px",
                        textAlign: "left",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#f5f5f5",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'DM Sans',sans-serif",
                        transition: "color .2s ease",
                      }}
                    >
                      <span>{q}</span>

                      <ChevronDown
                        size={15}
                        color="rgba(255,255,255,.3)"
                        style={{
                          flexShrink: 0,
                          transition: "transform .2s ease",
                        }}
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content>
                    <div
                      style={{
                        padding: "0 24px 20px",
                        borderTop:
                          "1px solid rgba(255,255,255,.055)",
                        paddingTop: 16,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,.5)",
                          lineHeight: 1.7,
                        }}
                      >
                        {a}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ),
          )}
        </Accordion.Root>
      </div>
    </section>
  );
}