import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { call } from "redux-saga/effects";
import { fetchPetDog } from "../api/fetchPet";
import { fetchPetImgPending, fetchPetImgSuccess } from "../logic/redux/modules/dogImgsContent/actions";
import { fetchPetAsync } from "../logic/redux/modules/dogImgsContent/saga/workers/fetchPetImg";

describe("Fetch data", () => {
  test("Fetch pet's image success", () => {
    const fakePetData = { data: { message: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_767.jpg", status: "success" } };

    return expectSaga(fetchPetAsync)
      .put(fetchPetImgPending())
      .provide([[matchers.call.fn(fetchPetDog), fakePetData]])
      .put(fetchPetImgSuccess(fakePetData.data))
      .run();
  });

  test("Fetch pet's image with error", () => {
    const fakePetData = {
      response: {
        data: {
          status: "error",
          message: "Breed not found (master breed does not exist)",
          code: 404,
        },
      },
    };

    return expectSaga(fetchPetAsync)
      .put(fetchPetImgPending())
      .provide([[call(fetchPetDog, "fake_breed"), fakePetData]])
      .run();
  });
});
