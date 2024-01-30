import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    currentData: [],
    totalPage: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentData: (state, action) => {
      state.currentData = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

export const { setCurrentPage, setCurrentData, setTotalPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
