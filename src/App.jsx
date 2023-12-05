import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import basicPlugin from "grapesjs-preset-newsletter";

const App = () => {
  const [editor, setEditor] = useState(null);

  const parserCss = (css, editor) => {
    const result = [];
      result.push({
        selectors: '.test, div .otherclass',
        style: { color: 'white', backgroundColor: 'red' }
      })
    // ...
    return result; // Result should be ALWAYS an array
  };

  useEffect(() => {
    const e = grapesjs.init({
      container: "#editor",
      plugins: [basicPlugin],
      pluginsOpts: {
        [basicPlugin]: {
          inlineCss: false,
          cmdTglImages: "false",
        },
      },
      parser: {
        parserCss
      }
    });

    setEditor(e);
  }, []);

  // useEffect(() => {
  //   if (editor) {
      
  //   }
  // }, editor);

  return (
    <div className="main">
      <div id="editor"></div>
    </div>
  );
};

export default App;
