import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users.contexts";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
