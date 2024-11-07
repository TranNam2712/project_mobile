import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// reducer
import AccountReducer from "./Account/account.reducer";

const persistAccount = {
  key: "account",
  storage: AsyncStorage,
  whitelist: ["isLogin"],
};

const rootReducer = combineReducers({
  account: persistReducer(persistAccount, AccountReducer),
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
