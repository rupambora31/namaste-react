# EP06 -Exploring the world!(Theory)


## Microservice:

- **Definition:** An architectural approach breaking down an application into smaller, independent services, each serving specific business functions.

## Monolith Architecture:

- **Definition:** A traditional architectural style where an entire application is built as a single, unified unit.

## Difference Between Monolith and Microservice:

- **Monolith:** Single, unified application architecture.
  
- **Microservice:** Divides application into smaller, independent services, allowing scalability and flexibility.

## Importance of `useEffect` Hook:

- **Role:** `useEffect` Hook in React manages side effects in functional components, such as data fetching, subscriptions, or DOM manipulations.

## Optional Chaining:

- **Definition:** JavaScript feature that allows accessing nested object properties without explicitly checking if each level exists.

## Shimmer UI:

- **Definition:** Placeholder UI technique displaying loading or skeleton elements to indicate content loading.

## Difference Between JS Expression and JS Statement:

- **JS Expression:** Produces a value, can be a variable, function call, or combination.
  
- **JS Statement:** Performs an action, like declarations, loops, or conditionals.

## Conditional Rendering Example:

```jsx
const ExampleComponent = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </div>
  );
};
```

## CORS
- **Definition:** Cross-Origin Resource Sharing allows secure access to resources from one domain to another in web browsers.


## async and await:
- **async:** Keyword used before a function declaration to make it return a Promise.

- **await:** Pauses the execution of an async function, awaiting a Promise's resolution

## `const json = await data.json();` `in getRestaurants()`:
- **Role:** Fetches data asynchronously from an API and converts the response to JSON format using the json() method.