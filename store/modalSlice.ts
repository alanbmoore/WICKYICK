import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  showModal: boolean;
}

const initialState: IModal = {
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
