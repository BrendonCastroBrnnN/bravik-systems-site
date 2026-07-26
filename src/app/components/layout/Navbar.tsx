import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { CONTACT } from "../../constants/contact";
import { navigationLinks } from "../../data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(7,7,7,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,.055)"
          : "1px solid transparent",
        transition: "all .4s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div
        className="container flex items-center justify-between"
        style={{ height: 64 }}
      >
        <a
          href="#"
          className="flex items-center gap-2.5"
          style={{ textDecoration: "none" }}
          aria-label="Voltar ao início"
        >
          <img
            src="/BravikSystemsBGBR.png"
            alt="Bravik Systems"
            style={{
              width: "auto",
              height: 55,
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {navigationLinks.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="nav-link"
          >
            Contato
          </a>

          <a
            href={CONTACT.whatsappUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Especialista
            <ArrowRight size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="lg:hidden"
          style={{
            color: "rgba(255,255,255,.6)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(7,7,7,.98)",
            borderTop: "1px solid rgba(255,255,255,.055)",
          }}
        >
          {navigationLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobileMenu}
              style={{
                color: "rgba(255,255,255,.5)",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}

          <a
            href={CONTACT.whatsappUrl}
            className="btn-primary"
            style={{
              marginTop: 8,
              justifyContent: "center",
            }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Falar com Especialista
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}