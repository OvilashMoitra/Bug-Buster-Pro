import { JwtPayload } from "jwt-decode";
import { jwtHelper } from "./jwtHelper";


const saveToLocalStorage = (key:string,token: Record<any,string>) => {
    if (token && key) {
        localStorage.setItem(key,JSON.stringify(token));
    }
}
const getUserInfo = () => {
    const accessToken = localStorage.getItem('BBP_TOKEN');
    let token;
    if (accessToken) {
        token= JSON.parse(accessToken)
    }
    const userInfo =  jwtHelper.decodeToken(token);
    return userInfo ;
}

const removeFromLocalStorage = (key:string) => {
    if (key) {
        localStorage.removeItem(key);
    }
}

export const localStorageHelper = {
    saveToLocalStorage,
    getUserInfo,
    removeFromLocalStorage
}