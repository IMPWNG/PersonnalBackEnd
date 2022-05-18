import { Auth } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signup = (formData, router) => async (dispatch) =>{ 
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: Auth.AUTH, data });
        router.push("/");
    } catch (err) {
        
        console.log(err);
    };
};