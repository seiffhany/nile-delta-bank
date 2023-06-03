import { REGISTER_USER } from "../types";

import { Dispatch } from "redux";

export const registerAction = (user: any) => (dispatch: Dispatch) => {
    dispatch({
        type: REGISTER_USER,
        payload: user
    });
}