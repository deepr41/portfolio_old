import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "active-nav",
  initialState: {
    value: "main",
  },
  reducers: {
    main: (state) => {
      state.value = "main";
    },
    about: (state) => {
      state.value = "about";
    },
    contact: (state) => {
      state.value = "contact";
    },
    projects: (state) => {
      state.value = "projects";
    },
  },
});

export const { main, about, contact, projects } = navSlice.actions;

export default navSlice.reducer;
