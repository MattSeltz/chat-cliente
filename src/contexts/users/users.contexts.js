import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUserGlobal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserGlobal } = usersSlice.actions;

export default usersSlice.reducer;
