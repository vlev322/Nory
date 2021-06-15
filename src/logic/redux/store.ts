import { createBrowserHistory } from "history";
import { configureStore, ThunkAction, Action, applyMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [],
  enhancers: [applyMiddleware(routerMiddleware(history))],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
