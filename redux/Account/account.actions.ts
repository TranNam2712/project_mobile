import { Dispatch } from "redux";
import { Action, AccountType } from "./account.types";

export const checkLogin = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      console.log("check");
      dispatch({
        type: AccountType.CHECK_LOGIN,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
