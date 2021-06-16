import { fork, takeLatest } from "redux-saga/effects";

import { getPetImgWatcher } from "./modules/dogImgsContent/saga/watchers/fetchPetImg";
import { fetchPetAsync } from "./modules/dogImgsContent/saga/workers/fetchPetImg";

export const CHANGE_PAGE_ROUTE = "@@router/LOCATION_CHANGE";

export function* getPetImgWhenPageChanged() {
  yield takeLatest(CHANGE_PAGE_ROUTE, fetchPetAsync);
}

export function* rootSaga() {
  yield fork([getPetImgWatcher, getPetImgWhenPageChanged]);
}
