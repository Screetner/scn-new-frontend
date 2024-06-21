import Cookies from "js-cookie";

export function useLogout(){
    const logout = () => {
        Cookies.remove("token");
        Cookies.remove("username");
        window.location.reload();
    };

    return {logout};
}