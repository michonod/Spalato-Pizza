import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PastrmajlijaState {
  value: number;
  product: string;
  size: "" | "small" | "large";
  type: "" | "pork" | "chicken";
  addon: "" | "egg" | "cheese 50gr" | "cheese 100gr";
}

const initialState: PastrmajlijaState = {
  value: 0,
  product: "",
  size: "",
  type: "",
  addon: "",
};

export const pastrmajlijaSlice = createSlice({
  name: "Pastrmajlija",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    product: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
    size: (state, action: PayloadAction<"small" | "large">) => {
      state.size = action.payload;
    },
    type: (state, action: PayloadAction<"pork" | "chicken">) => {
      state.type = action.payload;
    },
    addon: (
      state,
      action: PayloadAction<"" | "egg" | "cheese 50gr" | "cheese 100gr">
    ) => {
      state.addon = action.payload;
    },
  },
});

export const { increment, decrement, product, size, type, addon } =
  pastrmajlijaSlice.actions;

export default pastrmajlijaSlice.reducer;
