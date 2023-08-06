const authTokenKey = "authToken";

export const useAuthToken = () => {
    const setToken = (token) => {
        localStorage.setItem(authTokenKey, token);
    }

    const getToken = () => {
        return localStorage.getItem(authTokenKey);
    }

    return { setToken, getToken };
}
