import { call, put, StrictEffect } from "redux-saga/effects";
import { fetchPetDog } from "../../../../../../api/fetchPet";
import { fetchPetImgError, fetchPetImgPending, fetchPetImgSuccess } from "../../actions";
import { AxiosResponse, AxiosError } from "axios";
import { DogApiResponse, DogApiErrorResponse } from "../../../../../../types/common";

type Lal = AxiosResponse<DogApiResponse> | AxiosError<DogApiErrorResponse>;

export function* fetchPetAsync(): Generator<StrictEffect, any, Lal> {
  try {
    yield put(fetchPetImgPending());
    const response = yield call(fetchPetDog);
    if ("data" in response) {
      yield put(fetchPetImgSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchPetImgError(error));
  }
}
