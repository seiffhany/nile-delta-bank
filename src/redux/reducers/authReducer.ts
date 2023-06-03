import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

const initialState = {
    user: {
        first_name: 'client',
        last_name: 'x'
    },
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
                isLoggedIn: false,
            };
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };
        default:
            return state;
    }
}