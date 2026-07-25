import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const revenueBars = [38, 55, 44, 72, 51, 83, 65, 78, 57, 92, 74, 97];

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
  const [metricValue, setMetricValue] = useState(68);

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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMetricValue((currentValue) =>
        currentValue >= 97 ? 68 : currentValue + 1,
      );
    }, 80);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="relative select-none"
      style={{ height: 560 }}
      aria-hidden="true"
    >
      <div
        className="absolute ag pointer-events-none"
        style={{
          width: 320,
          height: 320,
          top: "15%",
          left: "20%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229,23,63,.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="af absolute card gradient-border p-5 shadow-2xl"
        style={{
          width: 288,
          top: 0,
          right: 0,
        }}
      >
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="mono text-xs muted mb-1">
              Receita · Últimos 12 meses
            </p>

            <p
              style={{
                fontSize: 26,
                fontWeight: 800,
                fontFamily: "'Bricolage Grotesque',sans-serif",
                letterSpacing: "-.02em",
              }}
            >
              R$ 2.84M
            </p>
          </div>

          <span
            className="mono text-xs font-semibold px-2 py-1 rounded-lg"
            style={{
              background: "rgba(52,211,153,.1)",
              color: "#34D399",
              border: "1px solid rgba(52,211,153,.2)",
            }}
          >
            +{metricValue}%
          </span>
        </div>

        <div
          className="flex items-end gap-1 mt-4"
          style={{ height: 64 }}
        >
          {revenueBars.map((height, index) => (
            <div
              key={`${height}-${index}`}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${height}%`,
                background:
                  index === revenueBars.length - 1
                    ? "#e5173f"
                    : index >= revenueBars.length - 4
                      ? "rgba(229,23,63,.35)"
                      : "rgba(255,255,255,.06)",
                transition: "height .5s ease",
              }}
            />
          ))}
        </div>

        <div
          className="flex justify-between mt-2 mono"
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,.25)",
          }}
        >
          <span>Jan</span>
          <span>Mar</span>
          <span>Jun</span>
          <span>Set</span>
          <span>Dez</span>
        </div>
      </div>

      <div
        className="afb absolute card p-4 shadow-xl"
        style={{
          width: 200,
          top: 60,
          left: 0,
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
          top: 220,
          left: 16,
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
          bottom: 80,
          right: 16,
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
          width: 192,
          bottom: 0,
          left: 0,
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