import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
    modal: modalSlice,
  },
});
