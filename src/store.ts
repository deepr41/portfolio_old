import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import navReducer from "./components/navSlice";

const rootReducers = {
  reducer: {
    navActive: navReducer,
  },
};

export default function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    combineReducers({ navReducer }),
    preloadedState,
    composedEnhancers
  );

  return store;
}
