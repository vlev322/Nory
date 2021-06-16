import { combineReducers } from "redux";
import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";
import { petImgReducer } from "./modules/dogImgsContent/reducer";
import { PetImgState } from "../../types/common";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    petImage: petImgReducer,
  });

export interface State {
  router: RouterState;
  petImg: PetImgState;
}

export default createRootReducer;
