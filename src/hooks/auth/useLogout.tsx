import Cookies from "js-cookie";

export function useLogout(){
    const logout = () => {
        Cookies.remove("user");
        Cookies.remove("token");
        window.location.reload();
    };

    return {logout};
}