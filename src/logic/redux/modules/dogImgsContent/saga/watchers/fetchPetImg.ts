import { takeLatest } from "redux-saga/effects";

import { FETCH_PET_IMG } from "../../constants";
import { fetchPetAsync } from "../workers/fetchPetImg";

export function* getPetImgWatcher() {
  yield takeLatest(FETCH_PET_IMG, fetchPetAsync);
}
