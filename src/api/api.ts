import type {TRegistrationResponse, TResponse, TUserLoginData, TUserWithPassword} from "@/utils/types";
import axios from "axios";

export const BASE_URL = "https://norma.nomoreparties.space/api/"
const handleResponse = (res: Response) => {
    if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
}

export function getIngredientsData() {
    return axios(`${BASE_URL}ingredients`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching ingredients data:', error);
            return [];
        });
}

//TODO: refactor to use axios
export function getInitialOrder(ingredientIds: Array<number>) {
    return fetch(`${BASE_URL}orders`, {
        method: "POST",
        body: JSON.stringify({ingredients: ingredientIds}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

export function getReorderPassword(email: string): Promise<TResponse> {
    return fetch(`${BASE_URL}password-reset`, {
        method: "POST",
        body: JSON.stringify({email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}


export function getRegisterUserData(userData: TUserWithPassword): Promise<TRegistrationResponse> {
    return fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

export function getLoginUserData(userData: TUserLoginData): Promise<TRegistrationResponse> {
    return fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

export function getLogOut(token: string): Promise<TResponse> {
    return fetch(`${BASE_URL}auth/logout`, {
        method: "POST",
        body: JSON.stringify({token}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(handleResponse)
}

export function updateUserData(accessToken: string, user: TUserWithPassword): Promise<TRegistrationResponse> {
    return fetch(`${BASE_URL}auth/user`, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'authorization': accessToken
        }
    })
        .then(handleResponse)
}

export function getUserData(accessToken: string): Promise<TRegistrationResponse> {
    return fetch(`${BASE_URL}auth/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': accessToken
        }
    })
        .then(handleResponse)
}
