import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "./sidebar/navbar";
function App() {
  const [html, sethtml] = useLocalStorage("html", "");
  const [css, setcss] = useLocalStorage("css", "");
  const [js, setjs] = useLocalStorage("js", "");
  const [srcDOC, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Navbar srcDOC={srcDOC} html={html} css={css} js={js} />
      <div className="pane top pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={sethtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setcss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setjs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDOC}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
