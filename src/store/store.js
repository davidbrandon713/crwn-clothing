import { compose, legacy_createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { loggerMiddleWare } from "./middleware/logger";
// import logger from "redux-logger";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);