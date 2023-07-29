const authTokenKey = "authToken";

export const useAuthToken = () => {
    const setToken = (token) => {
        localStorage.setItem(authTokenKey, token);
    }

    const isAuthorized = () => {
        return !!localStorage.getItem(authTokenKey);
    }

    return { setToken, isAuthorized };
}
