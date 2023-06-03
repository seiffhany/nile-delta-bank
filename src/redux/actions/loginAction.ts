import { LOGIN_USER } from "../types";

import { Dispatch } from "redux";

export const loginAction = (user: any) => (dispatch: Dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: user,
    });
};

