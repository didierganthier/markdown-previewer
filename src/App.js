import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';  // This will contain enhanced styles

const defaultMarkdown = `# Welcome to Markdown Previewer!

## This is a sub-heading...

[Link to Google](https://www.google.com)

\`Inline code\`

\`\`\`
Block of code
\`\`\`

- List item
> Blockquote

![Image of a cat](https://placekitten.com/200/300)

**Bold text**`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="app container mt-5">
      <h1 className="text-center mb-4">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <textarea
            id="editor"
            className="form-control editor"
            rows="15"
            value={markdown}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <div
            id="preview"
            className="preview p-4"
            dangerouslySetInnerHTML={getMarkdownText()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;