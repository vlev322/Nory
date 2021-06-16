import { createBrowserHistory } from "history";
import { configureStore, ThunkAction, Action, applyMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers";
import { rootSaga } from "./rootSaga";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [],
  enhancers: [applyMiddleware(routerMiddleware(history)), applyMiddleware(sagaMiddleware)],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
