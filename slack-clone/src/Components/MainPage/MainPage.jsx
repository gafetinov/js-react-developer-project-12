import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {replace} from "formik";
import {useAuthToken} from "../../Hooks/useAuthToken";

export const MainPage = () => {
    const { isAuthorized } = useAuthToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized()) {
            navigate("login", { replace: true });
        }
    }, []);

    return <h1>Главная страница</h1>;
}
