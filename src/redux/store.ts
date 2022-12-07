import { configureStore } from "@reduxjs/toolkit";
import groupTourReducer from "./groupTourSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    groupTour: groupTourReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
