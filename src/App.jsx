import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";

const App = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const e = grapesjs.init({
      container: "#editor",
    });

    setEditor(e);
  }, []);

  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
};

export default App;
