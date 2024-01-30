import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";

export default configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
