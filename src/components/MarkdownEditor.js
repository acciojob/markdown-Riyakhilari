import React, { useState } from "react";
import { marked } from "marked";
import "./../styles/styles.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello World");

  return (
    <div className="container">
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
