# EP01 -Inception (Theory)


## Emmet:
- Efficiency Tool: Emmet accelerates HTML/CSS workflow by using shorthand notations to generate code. It's a plugin in many text editors, enabling developers to write code faster and with fewer keystrokes.

## Library vs. Framework:
- Library: A library is a collection of reusable code components or functions that can be utilized for specific tasks. It's a "use when needed" tool, allowing developers to incorporate its functionalities into their codebase as required. Libraries like React, jQuery, or NumPy provide tools to perform various tasks but leave control with the developer.

- Framework: On the other hand, a framework is a pre-defined structure that dictates the architecture of an application. It provides a skeleton where developers build their applications. Frameworks like AngularJS, Django, or Express.js impose a specific structure and flow, offering a higher level of control over the application but within the framework's constraints.

## CDN (Content Delivery Network):
- Global File Hosting: A CDN is a network of servers distributed across different geographic locations, designed to host and deliver files. It's utilized to distribute commonly used files (like libraries, frameworks, stylesheets, or scripts) globally, reducing latency and speeding up content delivery to users by serving resources from a server closer to them.

## React:
- Naming: React got its name due to its reactive and responsive nature. It efficiently updates and renders user interfaces in response to data changes, hence the name "React."

## crossorigin in script tag:
- Cross-Origin Resource Sharing: The crossorigin attribute in a script tag is used to specify how the browser should handle loading files from different origins (domains). It's particularly useful to prevent Cross-Origin Resource Sharing (CORS) issues when fetching resources from external sources.

## React vs. ReactDOM:
- React: React is the core library responsible for managing components, state, and rendering logic.

- ReactDOM: ReactDOM deals specifically with interacting with the Document Object Model (DOM), providing methods for rendering React components into the DOM.

## react.development.js vs. react.production.js via CDN:

### Development vs. Production:
- react.development.js is larger and contains additional error messages and warnings, beneficial during the development phase for debugging.

- react.production.js is optimized for production, smaller in size, and lacks non-essential messages, focusing solely on performance.

## async and defer:

### Script Loading Attributes:
- async: Loads the script asynchronously while parsing the HTML; it doesn't block rendering.

- defer: Loads the script after HTML parsing but before the DOMContentLoaded event, ensuring it doesn't delay page rendering while maintaining order of execution.