import { configureStore } from "@reduxjs/toolkit";
import pastrmajlijaReducer from "./pastrmajlijaReducer";

export const store = configureStore({
  reducer: {
    pastrmajlija: pastrmajlijaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
