# EP04 -Talk is cheap, show me the code(Theory)


## Is JSX Mandatory for React?

- **JSX Requirement:** JSX is not mandatory for React but highly recommended. It simplifies UI development by allowing HTML-like syntax in JavaScript.

## Is ES6 Mandatory for React?

- **ES6 Requirement:** While not mandatory, using ES6 enhances React development. It offers modern JavaScript features that make code more concise and readable.

## Writing Comments in JSX:

- **Syntax:** Wrap comments in curly braces and use JavaScript-style comments (`{/* Comment */}`) within JSX to add comments.

## `<React.Fragment></React.Fragment>` and `<></>`:

- **`<React.Fragment>`:** Allows wrapping multiple elements without adding an extra node to the DOM. Useful when you don't need an additional parent element.
  
- **`<></>` (Short Syntax):** Provides a concise way of using fragments. Introduced in React 16.2, it's shorthand for `<React.Fragment>`.

## Virtual DOM:

- **Definition:** An in-memory representation of the actual DOM. React uses it for efficient DOM updates, comparing the virtual DOM with the real DOM to minimize re-rendering.

## Reconciliation in React:

- **Process:** React's algorithm for updating the DOM. It compares the previous and current Virtual DOM to determine the minimal changes needed to update the actual DOM.

## React Fiber:

- **Description:** A reimplementation of the React reconciliation algorithm. It enables asynchronous rendering and improves performance by handling priorities and interruptions.

## Why Keys in React? When Needed?

- **Purpose:** Keys help React identify list items uniquely, aiding in efficient updates.
- **Need for Keys:** Essential when rendering arrays of components to optimize rendering and maintain component state.

## Using Index as Keys in React:

- **Use of Index:** It's not recommended due to potential issues with component reordering and performance when elements are added or removed.

## Props in React:

- **Definition:** Short for properties, props are used to pass data from parent to child components in React.

## Config Driven UI:

- **Definition:** A UI design approach where the UI structure and behavior are driven by configurations or settings rather than hard-coded logic. It allows for more dynamic and customizable interfaces.
