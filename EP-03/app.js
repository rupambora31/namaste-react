import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX => HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) -PARCEL -Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
