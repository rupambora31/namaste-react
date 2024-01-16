# EP11 -Data is the new oil!(Theory)

## Prop Drilling:

- **Definition:** Prop drilling is passing data through multiple layers of components by using props, which can lead to a complex and less maintainable code structure.

## Lifting the State Up:

- **Definition:** Lifting state up is a React pattern where state that is used by multiple components is moved to a common ancestor component to share the state among its descendants.

## Context Provider and Context Consumer:

- **Context Provider:** A component in React Context API that provides values to its descendants. It is used with `createContext` and `Provider` component.
- **Context Consumer:** A component in React Context API that consumes values provided by the `Provider` component. It is used with the `Consumer` component or the `useContext` hook.

## Default Value in Context Provider:

- **Behavior:** If you don't pass a value to the `Provider`, it takes the default value specified in the `createContext` method when creating the context.
