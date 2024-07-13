import {TSignIn, TSignInResponse} from "@/types/repository/auth.type.ts";
import axios from "@/libs/axios.ts";

export class AuthRepository {
    static async signIn(body : TSignIn){
        const { data} = await axios.post<TSignInResponse>("/auth/signIn", body)
        return data;
    }
}