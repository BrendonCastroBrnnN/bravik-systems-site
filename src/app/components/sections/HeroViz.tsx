import { useEffect, useState } from "react";
import { Brain, BriefcaseBusiness, Check } from "lucide-react";

const integrations = [
  { name: "Mercado Livre", color: "#F5E642" },
  { name: "Google Sheets", color: "#34A853" },
  { name: "OpenAI GPT-4", color: "#74AA9C" },
  { name: "Bravik ERP", color: "#e5173f" },
];

const kpis = [
  { label: "Uptime", value: "99.9%", color: "#34D399" },
  { label: "Pedidos", value: "1.847", color: "#60A5FA" },
  { label: "Usuários", value: "124", color: "#FBBF24" },
  { label: "Erros", value: "0", color: "#34D399" },
];

const aiMessages = [
  "Analisando requisitos...",
  "Mapeando integrações...",
  "Gerando proposta...",
  "Aprovado ✓ R$ 48.200",
];

export function HeroViz() {
  const [aiText, setAiText] = useState(aiMessages[0]);

  useEffect(() => {
    let currentMessageIndex = 0;

    const interval = window.setInterval(() => {
      currentMessageIndex =
        (currentMessageIndex + 1) % aiMessages.length;

      setAiText(aiMessages[currentMessageIndex]);
    }, 2200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="relative select-none lg:translate-x-6 xl:translate-x-10"
      style={{
        height: 540,
        width: "100%",
        maxWidth: 560,
        marginLeft: "auto",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute ag pointer-events-none"
        style={{
          width: 360,
          height: 360,
          top: "16%",
          left: "28%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229,23,63,.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="af absolute card gradient-border p-5 shadow-2xl"
        style={{
          width: 288,
          top: 8,
          right: -115,
          zIndex: 2,
        }}
      >
        <div className="mb-4">
          <p
            className="mono"
            style={{
              fontSize: 10,
              color: "rgba(229,23,63,.75)",
              marginBottom: 6,
              fontWeight: 700,
              letterSpacing: ".08em",
            }}
          >
            ARQUITETURA
          </p>

          <p
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "rgba(255,255,255,.88)",
              lineHeight: 1.35,
            }}
          >
            Soluções conectadas
            <br />
            de ponta a ponta
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {[
            {
              label: "Frontend",
              value: "React + TypeScript",
            },
            {
              label: "Backend",
              value: "Node.js + APIs",
            },
            {
              label: "Dados",
              value: "Supabase + SQL",
            },
            {
              label: "Automação",
              value: "Webhooks + Integrações",
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4"
              style={{
                paddingBottom: 8,
                borderBottom: "1px solid rgba(255,255,255,.05)",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,.35)",
                }}
              >
                {label}
              </span>

              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "rgba(255,255,255,.68)",
                  textAlign: "right",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            height: 2,
            width: "100%",
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #e5173f 0%, rgba(229,23,63,.25) 55%, transparent 100%)",
          }}
        />
      </div>

      <div
        className="afc absolute card p-4 shadow-xl"
        style={{
          width: 230,
          top: 138,
          right: -92,
          zIndex: 4,
          borderColor: "rgba(229,23,63,.18)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              width: 32,
              height: 32,
              background: "rgba(229,23,63,.12)",
              border: "1px solid rgba(229,23,63,.18)",
            }}
          >
            <BriefcaseBusiness
              size={15}
              color="#e5173f"
            />
          </div>

          <div>
            <p
              className="mono"
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,.35)",
                marginBottom: 2,
              }}
            >
              PORTFÓLIO ATIVO
            </p>

            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,.78)",
              }}
            >
              Soluções reais em execução
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {[
            {
              value: "3",
              text: "Websites publicados",
            },
            {
              value: "1",
              text: "Automação em operação",
            },
            {
              value: "1",
              text: "ERP em desenvolvimento",
            },
          ].map(({ value, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5"
            >
              <div
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  width: 18,
                  height: 18,
                  background: "rgba(52,211,153,.1)",
                  border: "1px solid rgba(52,211,153,.18)",
                }}
              >
                <Check
                  size={10}
                  color="#34D399"
                  strokeWidth={3}
                />
              </div>

              <span
                className="mono font-bold"
                style={{
                  width: 16,
                  fontSize: 12,
                  color: "#e5173f",
                }}
              >
                {value}
              </span>

              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,.53)",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="afb absolute card p-4 shadow-xl"
        style={{
          width: 210,
          top: 78,
          left: 8,
          zIndex: 3,
        }}
      >
        <p className="mono text-xs muted mb-3">
          Integrações Ativas
        </p>

        {integrations.map(({ name, color }) => (
          <div
            key={name}
            className="flex items-center gap-2 mb-2"
          >
            <div
              className="ap rounded-full flex-shrink-0"
              style={{
                width: 6,
                height: 6,
                background: color,
              }}
            />

            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,.65)",
              }}
            >
              {name}
            </span>

            <div
              className="ml-auto rounded-full"
              style={{
                width: 5,
                height: 5,
                background: "#34D399",
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="afc absolute card p-4 shadow-xl"
        style={{
          width: 256,
          top: 238,
          left: 76,
          zIndex: 4,
        }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: "#FF5F57",
            }}
          />

          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: "#FEBC2E",
            }}
          />

          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: "#28C840",
            }}
          />

          <span
            className="mono ml-2"
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,.25)",
            }}
          >
            automation.ts
          </span>
        </div>

        <div
          className="mono"
          style={{
            fontSize: 11,
            lineHeight: 1.7,
          }}
        >
          <p>
            <span style={{ color: "#60A5FA" }}>const</span>{" "}
            <span style={{ color: "#f5f5f5" }}>sync</span>{" "}
            <span style={{ color: "#60A5FA" }}>= await</span>
          </p>

          <p className="pl-4">
            <span style={{ color: "#34D399" }}>bravik</span>.
            <span style={{ color: "#FBBF24" }}>automate</span>
            {"({"}
          </p>

          <p className="pl-6">
            <span style={{ color: "rgba(255,255,255,.4)" }}>
              trigger:
            </span>{" "}
            <span style={{ color: "#F87171" }}>
              "new_order"
            </span>
            ,
          </p>

          <p className="pl-6">
            <span style={{ color: "rgba(255,255,255,.4)" }}>
              sync:
            </span>{" "}
            <span style={{ color: "#60A5FA" }}>true</span>,
          </p>

          <p className="pl-6">
            <span style={{ color: "rgba(255,255,255,.4)" }}>
              notify:
            </span>{" "}
            <span style={{ color: "#60A5FA" }}>
              ["slack", "email"]
            </span>
          </p>

          <p className="pl-4">{"});"}</p>

          <p
            style={{
              color: "#34D399",
              marginTop: 4,
            }}
          >
            {"// ✓ Pedido sincronizado (0.3s)"}
          </p>
        </div>
      </div>

      <div
        className="af absolute card p-4 shadow-xl"
        style={{
          width: 224,
          bottom: 96,
          right: 0,
          zIndex: 5,
          borderColor: "rgba(229,23,63,.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              width: 28,
              height: 28,
              background: "rgba(229,23,63,.15)",
            }}
          >
            <Brain size={13} color="#e5173f" />
          </div>

          <span
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
              fontWeight: 600,
            }}
          >
            Bravik AI
          </span>

          <div className="ml-auto flex items-center gap-1">
            <div
              className="ap rounded-full"
              style={{
                width: 5,
                height: 5,
                background: "#e5173f",
              }}
            />

            <span
              className="mono"
              style={{
                fontSize: 9,
                color: "rgba(229,23,63,.8)",
              }}
            >
              LIVE
            </span>
          </div>
        </div>

        <p
          className="mono"
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,.75)",
            minHeight: 16,
          }}
        >
          {aiText}
          <span
            className="cur"
            style={{ color: "#e5173f" }}
          >
            _
          </span>
        </p>
      </div>

      <div
        className="afb absolute card p-3 shadow-xl"
        style={{
          width: 200,
          bottom: 0,
          left: 28,
          zIndex: 3,
        }}
      >
        <div className="grid grid-cols-2 gap-2">
          {kpis.map(({ label, value, color }) => (
            <div
              key={label}
              className="rounded-xl p-2.5"
              style={{ background: "#1a1a1a" }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 9,
                  color: "rgba(255,255,255,.3)",
                }}
              >
                {label}
              </p>

              <p
                className="mono font-bold"
                style={{
                  fontSize: 14,
                  color,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}