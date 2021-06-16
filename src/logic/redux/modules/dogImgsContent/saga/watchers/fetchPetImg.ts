import { takeLatest } from "redux-saga/effects";

import { fetchPetImg } from "../../actions";
import { fetchPetAsync } from "../workers/fetchPetImg";

export function* getPetImgWatcher() {
  yield takeLatest(fetchPetImg, fetchPetAsync);
}
