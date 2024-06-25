import React, {useCallback, useState} from "react";
import {TSignIn} from "types/repository/auth.type.ts";
import {AuthRepository} from "../../repositories/auth.ts";
import {useAuth} from "context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

export function useSignIn() {
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<TSignIn>({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const data = await AuthRepository.signIn(formData)
            Cookies.set('token', data.token, { expires: 1 });
            Cookies.set('username', data.user.username, { expires: 1 });

            setUser({
                token: data.token,
                username: data.user.username,
                isActiveUser: true
            })
            navigate("/")
        }catch (e : any){
            alert(e.response.data.detail)
        }
    }, [formData]);

    return {
        formData,
        handleChange,
        handleSubmit
    }
}