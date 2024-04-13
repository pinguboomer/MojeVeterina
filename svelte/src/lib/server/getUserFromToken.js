import {Base64} from "js-base64";

export function getUserFromToken(token) {
    const base64 = token.split('.')[1];
    return JSON.parse(Base64.decode(base64));
}