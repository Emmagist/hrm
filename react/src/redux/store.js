// Import the necessary dependencies.
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice";

// Create the Redux store.
const store = configureStore({
    reducer: { sidebarReducer },
});

// Export the store as a named export.
export { store };
