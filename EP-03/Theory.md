# EP03 -Laying the foundation(Theory)


## React.createElement vs JSX

### React.createElement

- **Method:** Creates React elements programmatically using JavaScript function calls.
  
 Syntax is verbose and involves calling `React.createElement()` with arguments for element type, properties, and children.
  
- **Example:** 
  ```javascript
  React.createElement('h1', { className: 'title' }, 'Hello, World!');

### JSX:

- **Definition:** JSX (JavaScript XML) is an extension to JavaScript used in React for creating React elements. It allows mixing HTML-like syntax within JavaScript.
- **Purpose:** Simplifies the creation of React elements by enabling the use of familiar HTML-like syntax.
- **Usage:** JSX gets transpiled by tools like Babel into `React.createElement()` calls.

## Superpowers of JSX:

1. **HTML-like Syntax:** Allows writing HTML-like code in JavaScript.
2. **Component Composition:** Easily compose components in a familiar HTML structure.
3. **JavaScript Integration:** Seamlessly embed JavaScript expressions within JSX.
4. **Readability:** Enhances code readability and maintainability in React applications.

## Role of `type` Attribute in `<script>` Tag:

- **Purpose:** Specifies the scripting language or content type within the `<script>` tag.
- **Options:** Common values include:
  - `type="text/javascript"`: Default; JavaScript code.
  - `type="module"`: Denotes an ECMAScript module.
  - `type="application/json"`: Specifies JSON content.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX:

- **`{TitleComponent}`:** Renders the content of the `TitleComponent` without surrounding tags. Useful for rendering text or elements directly.
- **`{<TitleComponent/>}`:** Renders the `TitleComponent` using self-closing tags. Commonly used for rendering components directly.
- **`{<TitleComponent></TitleComponent>}`:** Renders the `TitleComponent` with opening and closing tags. Typically used when additional content needs to be added around the component.


## Babel & Parcel Role in JSX

- **Babel:** Transpiler converting JSX to JavaScript that browsers can understand. It transforms JSX into React.createElement calls.
  
- **Parcel:** Bundler that handles various file types including JSX. It integrates with Babel for JSX transformation and efficient bundling.

## Components

- **Definition:** Fundamental building blocks in React, encapsulating UI elements and logic.
  
## Functional Components

- **Definition:** Components defined as JavaScript functions, returning JSX.
  
### Composing Components

- **Purpose:** Building complex UI by combining multiple smaller components.
  
- **Advantage:** Encourages reusability, modularity, and cleaner code structure.
