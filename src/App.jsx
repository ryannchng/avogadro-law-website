import { useEffect } from "react";
import DotPattern from "./components/ui/dot-pattern-1.jsx";
import { Component as TurbulentFlow } from "./components/ui/turbulent-flow.jsx";
import { pageHtml } from "./pageHtml.js";

export default function App() {
  useEffect(() => {
    void import("../script.js");
  }, []);

  return (
    <>
      <nav className="site-nav" aria-label="Website sections">
        <a className="site-nav__brand" href="#top">Avogadro</a>
        <div className="site-nav__links">
          <a href="#top">Home</a>
          <a href="#gay-lussac">Gay-Lussac</a>
          <a href="#core">Core</a>
          <a href="#logic">Logic</a>
          <a href="#ratios">Ratios</a>
          <a href="#variables">Variables</a>
          <a href="#stp">STP</a>
          <a href="#demo">Demo</a>
          <a href="#uses">Uses</a>
          <a href="#quiz">Quiz</a>
        </div>
      </nav>
      <TurbulentFlow className="landing-hero">
        <DotPattern
          width={14}
          height={14}
          cx={1}
          cy={1}
          cr={0.42}
          className="landing-dot-pattern"
        />
        <div id="top" className="landing-hero__copy">
          <p className="eyebrow">SCH3U Gas Laws Project</p>
          <h1>Avogadro&apos;s Law</h1>
          <p className="hero-copy">
            At constant temperature and pressure, the volume of a gas is directly
            proportional to the number of moles of gas.
          </p>
        </div>
      </TurbulentFlow>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </>
  );
}
