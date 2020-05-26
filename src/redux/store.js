// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/index";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const configureStore = () => {
  const middleware = [thunk];
  const composerEnhancer = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composerEnhancer);

  return store;
};

const store = configureStore();

export default store;
