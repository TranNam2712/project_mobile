import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
