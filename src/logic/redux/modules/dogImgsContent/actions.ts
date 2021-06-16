import { createAction } from "@reduxjs/toolkit";
import { DogApiErrorResponse, DogApiResponse } from "../../../../types/common";
import { AxiosError } from "axios";

import { FETCH_PET_IMG, FETCH_PET_IMG_PENDING, FETCH_PET_IMG_SUCCESS, FETCH_PET_IMG_ERROR } from "./constants";

export const fetchPetImg = createAction(FETCH_PET_IMG);
export const fetchPetImgPending = createAction(FETCH_PET_IMG_PENDING);
export const fetchPetImgSuccess = createAction<DogApiResponse>(FETCH_PET_IMG_SUCCESS);
export const fetchPetImgError = createAction<AxiosError<DogApiErrorResponse>>(FETCH_PET_IMG_ERROR);
