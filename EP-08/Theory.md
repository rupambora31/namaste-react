# EP07 -Finding the path!(Theory)

## Various Ways to Add Images into an App with Code Examples:

- **HTML `<img>` Tag:**
  ```html
  <img src="path/to/image.jpg" alt="Description" />
  ```
- **Using CSS:**

  ```css
  .image {
    background-image: url('path/to/image.jpg');
  }
  ```

- **Using React (JSX):**

  ```jsx
  import React from 'react';
  import imageSrc from './path/to/image.jpg';

  const ImageComponent = () => {
    return <img src={imageSrc} alt="Description" />;
  };
  ```

## `console.log(useState())`:

- **Behavior:** It logs an array containing the state value and the setter function returned by the useState() hook.
- **Example Output:** `[stateValue, setStateFunction]`

## Behavior of `useEffect` without a Dependency Array:

- **Effect:** Without a dependency array, useEffect runs after every render, potentially causing unnecessary re-executions of the effect code.
- **Consequence:** It may lead to performance issues or unexpected behavior if the effect updates the state without proper dependencies.

## SPA (Single Page Application):

- **Definition:** SPA is a web application that loads a single HTML page and dynamically updates content as the user interacts with the app.

## Difference Between Client-Side Routing and Server-Side Routing:

- **Client-Side Routing:** Handles navigation and rendering of different views in the browser using JavaScript without server requests for each page change.

- **Server-Side Routing:** Involves the server fetching and rendering different views in response to each navigation request, resulting in complete page reloads.
