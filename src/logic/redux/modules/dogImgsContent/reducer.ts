import { createReducer } from "@reduxjs/toolkit";
import { PetImgState } from "../../../../types/common";
import { fetchPetImgPending, fetchPetImgSuccess, fetchPetImgError } from "./actions";

const initialState: PetImgState = {
  pending: false,
  error: null,
  image: "",
};

export const petImgReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPetImgPending, (state) => {
      state.pending = true;
      state.image = "";
      state.error = null;
    })
    .addCase(fetchPetImgSuccess, (state, action) => {
      state.image = action.payload.message;
      state.pending = false;
      state.error = null;
    })
    .addCase(fetchPetImgError, (state, action) => {
      state.error = action.payload.response?.data || null;
      state.pending = false;
    });
});
