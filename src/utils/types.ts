export interface TUser {
    email: string,
    name: string
}

export interface TUserWithPassword extends TUser {
    password: string
}

export type TUserData = {
    user: TUser,
    accessToken: string
    refreshToken: string
}
export type TUserLoginData = {
    email: string,
    password: string
}

export type TRegistrationResponse = TUserData & TResponse


export type TResponse = {
    success: boolean;
    message: string;
}