import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import CodeEditor2 from '@uiw/react-textarea-code-editor';

 function TextEditor() {
  const [code, setCode] = useState(
    ``
  );
  return (
    <>
    <CodeEditor
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      style={{
        backgroundColor: "#",
        width: '50%',
        padding: '5px',
        marginTop: '0.8rem',
        marginBottom: '0.8rem',
        borderRadius: '1rem',
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  </>
  );
}
export default TextEditor;




