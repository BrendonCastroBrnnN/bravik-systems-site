import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { CONTACT } from "../../constants/contact";
import { COMPANY } from "../../constants/company";

const navLinks = [
  {
    label: "Soluções",
    href: "#solucoes",
  },
  {
    label: "Produtos",
    href: "#produtos",
  },
  {
    label: "Cases",
    href: "#cases",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Processo",
    href: "#processo",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: CONTACT.instagramUrl,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: CONTACT.linkedinUrl,
  },
  {
    icon: Github,
    label: "GitHub",
    href: CONTACT.githubUrl,
  },
  {
    icon: Mail,
    label: "E-mail",
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    href: CONTACT.whatsappUrl,
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop:
          "1px solid rgba(255,255,255,.055)",
        background: "#070707",
      }}
    >
      <div
        className="container"
        style={{
          padding: "72px 24px 40px",
        }}
      >
        <div
          className="grid lg:grid-cols-4 gap-12"
          style={{
            marginBottom: 60,
          }}
        >
          <div className="lg:col-span-2">
            <div
              style={{
                marginBottom: 20,
              }}
            >
              <img
                src="/BravikSystemsBGBR.png"
                alt="Bravik Systems"
                style={{
                  width: "auto",
                  height: 80,
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.35)",
                lineHeight: 1.7,
                maxWidth: 340,
                marginBottom: 24,
              }}
            >
              Desenvolvemos soluções digitais sob medida que
              aumentam produtividade, reduzem custos e aceleram
              o crescimento das empresas.
            </p>

            <div className="flex gap-2.5">
              {socialLinks.map(
                ({
                  icon: Icon,
                  label,
                  href,
                }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="card flex items-center justify-center"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      color: "rgba(255,255,255,.38)",
                      textDecoration: "none",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p
              className="mono font-semibold"
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,.25)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
                marginBottom: 20,
              }}
            >
              Navegação
            </p>

            <div className="flex flex-col gap-3">
              {navLinks.map(
                ({
                  label,
                  href,
                }) => (
                  <a
                    key={href}
                    href={href}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,.38)",
                      textDecoration: "none",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color =
                        "#f5f5f5";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color =
                        "rgba(255,255,255,.38)";
                    }}
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p
              className="mono font-semibold"
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,.25)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
                marginBottom: 20,
              }}
            >
              Contato
            </p>

            <div
              className="flex flex-col gap-3"
              style={{
                marginBottom: 20,
              }}
            >
              <a
                href={`mailto:${CONTACT.email}`}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.38)",
                  textDecoration: "none",
                }}
              >
                {CONTACT.email}
              </a>

              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.38)",
                  textDecoration: "none",
                }}
              >
                {CONTACT.phone}
              </a>
            </div>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: 12,
                padding: "10px 18px",
              }}
            >
              Falar Agora
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: 28,
            borderTop:
              "1px solid rgba(255,255,255,.045)",
          }}
        >
          <p
            className="mono"
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.18)",
            }}
          >
            © {new Date().getFullYear()} {COMPANY.name} ·{" "}
            {COMPANY.copyright}
          </p>

          <p
            className="mono"
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.18)",
            }}
          >
            {COMPANY.developedBy}
          </p>
        </div>
      </div>
    </footer>
  );
}