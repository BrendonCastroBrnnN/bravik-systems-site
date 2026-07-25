import "../styles/global.css";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Cases } from "./components/sections/Cases";
import { CTA } from "./components/sections/CTA";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Manifesto } from "./components/sections/Manifesto";
import { Principles } from "./components/sections/Principles";
import { Problems } from "./components/sections/Problems";
import { Process } from "./components/sections/Process";
import { Products } from "./components/sections/Products";
import { Segments } from "./components/sections/Segments";
import { Solutions } from "./components/sections/Solutions";
import { Tech } from "./components/sections/Tech";
import { ValueProp } from "./components/sections/ValueProp";


// ─── Global Styles ────────────────────────────────────────────────────────────

// ─── Data ────────────────────────────────────────────────────────────────────

// ─── Hero Composition ─────────────────────────────────────────────────────────

// ─── Navbar ───────────────────────────────────────────────────────────────────

// ─── Hero ─────────────────────────────────────────────────────────────────────

// ─── Manifesto Strip ──────────────────────────────────────────────────────────

// ─── Value Prop ───────────────────────────────────────────────────────────────

// ─── Problems ─────────────────────────────────────────────────────────────────

// ─── Products ─────────────────────────────────────────────────────────────────

// ─── Solutions ────────────────────────────────────────────────────────────────

// ─── Cases ────────────────────────────────────────────────────────────────────

// ─── About ────────────────────────────────────────────────────────────────────

// ─── Process ──────────────────────────────────────────────────────────────────

// ─── Tech ─────────────────────────────────────────────────────────────────────

// ─── Principles ──────────────────────────────────────────────────────────────

// ─── Segments ─────────────────────────────────────────────────────────────────

// ─── FAQ ──────────────────────────────────────────────────────────────────────

// ─── CTA ──────────────────────────────────────────────────────────────────────

// ─── Footer ───────────────────────────────────────────────────────────────────

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      style={{
        background: "#070707",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <Manifesto />
      <ValueProp />
      <Problems />
      <Products />
      <Solutions />
      <Cases />
      <About />
      <Process />
      <Tech />
      <Principles />
      <Segments />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
