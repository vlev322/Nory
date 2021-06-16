import { createReducer } from "@reduxjs/toolkit";
import { PetImgState } from "../../../../types/common";
import { fetchPetImgPending, fetchPetImgSuccess, fetchPetImgError } from "./actions";

const initialState: PetImgState = {
  pending: false,
  error: null,
  image: "",
};

export const petImgReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPetImgPending, (state) => ({ ...state, pending: true, image: "" }));
  builder.addCase(fetchPetImgSuccess, (state, action) => ({ ...state, image: action.payload.message, pending: false }));
  builder.addCase(fetchPetImgError, (state, action) => ({ ...state, error: action.payload.response?.data || null, pending: false }));
});
