import { AccountType, Action } from "./account.types";

interface IUser {
  id: number;
  name: string;
  roleId: number;
}

interface State {
  isLogin: boolean;
  user: IUser | null;
}

const initState = {
  isLogin: false,
  user: null,
};

const reducer = (state: State = initState, action: Action) => {
  switch (action.type) {
    case AccountType.CHECK_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
