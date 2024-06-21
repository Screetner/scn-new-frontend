export type TSignIn = {
    username: string
    password: string
}

type user = {
    username : string
}

export type TSignInResponse = {
    message: string
    token: string
    user: user
}