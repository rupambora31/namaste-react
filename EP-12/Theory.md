# EP12 -Let's Build our Store!(Theory)

## Redux Toolkit(RTK)

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

## `useContext` vs Redux:

- **`useContext`:**

  - **Scope:** Limited to the component and its descendants.
  - **Use Case:** Ideal for small to medium-sized applications with simple state management needs.

- **Redux:**
  - **Scope:** Global state management.
  - **Use Case:** Suitable for large-scale applications with complex state management requirements.

## Advantage of Using Redux Toolkit over Redux:

- **Redux Toolkit:**
  - **Advantage:** Provides utility functions like `createSlice` and `configureStore` for simplified Redux setup and improved developer experience.
  - **Features:** Integrates commonly used Redux libraries and patterns to streamline development.

## Dispatcher:

- **Definition:** A dispatcher is a function in Redux that sends an action to the Redux store. It is typically used in conjunction with the `dispatch` function to initiate state changes.

## Reducer:

- **Definition:** A reducer in Redux is a pure function responsible for specifying how the application's state changes in response to actions. It takes the current state and an action and returns a new state.

## Slice:

- **Definition:** A slice in Redux Toolkit is a portion of the Redux store's state and logic that can be managed independently. It combines a reducer and action creators related to a specific piece of the state.

## Selector:

- **Definition:** A selector in Redux is a function that computes derived data from the Redux store's state. It helps in efficiently extracting and processing specific information from the state.

## `createSlice` and Its Configuration:

- **Definition:** `createSlice` is a function in Redux Toolkit used to create a reducer and its associated actions.
- **Configuration:**
  - **`name`:** A string name for the slice.
  - **`initialState`:** The initial state of the slice.
  - **`reducers`:** An object containing reducer functions, each defining a specific action and its impact on the state.

```js
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'mySlice',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = mySlice.actions;
export default mySlice.reducer;
```
