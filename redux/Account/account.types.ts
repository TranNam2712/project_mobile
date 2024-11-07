export enum AccountType {
  CHECK_LOGIN = "CHECK_LOGIN",
}

interface ActionCheckLogin {
  type: AccountType.CHECK_LOGIN;
}

export type Action = ActionCheckLogin;
