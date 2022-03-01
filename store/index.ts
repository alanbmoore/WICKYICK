import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";

export default configureStore({
  reducer: {
    loading: loadingSlice,
  },
});
