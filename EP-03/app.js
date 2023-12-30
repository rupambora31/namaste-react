import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const title = (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h2 id="heading">Namaste React Functional Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
