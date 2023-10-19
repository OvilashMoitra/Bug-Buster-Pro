"use client"
import { JwtPayload } from "jwt-decode";
import { jwtHelper } from "./jwtHelper";
import * as ls from 'local-storage';
 


const saveToLocalStorage = (key:string,token: Record<any,string>) => {
    if (token && key) {
        localStorage.setItem(key,JSON.stringify(token));
    }
}
const getUserInfo = () => {

    const accessToken = ls.get('BBP_TOKEN') as {
        BBP_Access_token:string
    };

    const userInfo =  jwtHelper.decodeToken(accessToken.BBP_Access_token);
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
