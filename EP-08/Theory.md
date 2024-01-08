# EP08 -Let's get Classy!(Theory)

## Creating Nested Routes in `react-router-dom`:

``` jsx
// ParentRoute.js
import { Route, Switch } from 'react-router-dom';
import ChildRoute from './ChildRoute';

const ParentRoute = () => {
  return (
    <Switch>
      <Route exact path="/parent" component={ParentComponent} />
      <Route path="/parent/child" component={ChildRoute} />
    </Switch>
  );
};
```

## `createHashRouter` and `createMemoryRouter` in React Router Docs:

- **`createHashRouter`:** Uses URL hash to manage routing, suitable for legacy browser support.

- **`createMemoryRouter`:** Keeps session history in memory without changing the URL.

## Order of Lifecycle Method Calls in Class-Based Components:

1. `constructor()`
2. `render()`
3. `componentDidMount()`
4. `componentDidUpdate()`
5. `componentWillUnmount()`

## Importance of `componentDidMount`:

- **Purpose:** Used for initial data fetching or side effects after the component has been mounted in the DOM.

## Importance of `componentWillUnmount` with Example:

- **Purpose:** Executes cleanup actions before the component is removed from the DOM, preventing memory leaks

```jsx
componentDidMount() {
  this.interval = setInterval(() => {
    // Some action
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

```

## Purpose of `super(props)` in Constructor:

- **Reason:** Calls the parent class constructor and allows access to `this.props` in the constructor of the child class.

## Why Callback Function of `useEffect` Can't Be Async:

- **Limitation:** `useEffect` expects a cleanup function or dependencies array as a return or nothing at all. Async functions return a Promise, which isn't compatible with the expected cleanup behavior or synchronous execution of `useEffect`.
