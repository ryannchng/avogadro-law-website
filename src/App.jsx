import { useEffect } from "react";
import { Component as TurbulentFlow } from "./components/ui/turbulent-flow.jsx";
import { pageHtml } from "./pageHtml.js";

export default function App() {
  useEffect(() => {
    void import("../script.js");
  }, []);

  return (
    <>
      <TurbulentFlow className="landing-hero">
        <div className="landing-hero__copy">
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
