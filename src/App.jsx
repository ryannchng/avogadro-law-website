import { useEffect } from "react";
import { pageHtml } from "./pageHtml.js";

export default function App() {
  useEffect(() => {
    void import("../script.js");
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
