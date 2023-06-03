import { LOGOUT_USER } from "../types";

import { Dispatch } from "redux";

export const logoutAction = () => (dispatch: Dispatch) => {
    dispatch({
        type: LOGOUT_USER,
    });
}