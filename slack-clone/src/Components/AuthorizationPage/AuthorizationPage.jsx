import 'bootstrap/dist/css/bootstrap.min.css'
import {Formik} from "formik";
import * as Yup from 'yup';

import "./AuthorizationPage.css";
import {login} from "./authApi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuthToken} from "../../Hooks/useAuthToken";

const LoginShema = Yup.object().shape({
    email: Yup.string().required("Обязательное поле"),
    password: Yup.string().min(5, "Не менее 5 символов").required("Обязательное поле")
})

export const AuthorizationPage = () => {
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useAuthToken();

    const onSubmit = (values, { setSubmitting }) => {
        login(values.email, values.password).then(({ data }) => {
            setShowWarning(false);
            if (data.token) {
                setToken(data.token);
                navigate("/", { replace: true });
            }
        }).catch(() => {
            setShowWarning(true);
        }).finally(() => {
            setSubmitting(false);
        });
    };

    return (
        <>
            <h1>Авторизация</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginShema}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} style={{width: 400}}>
                        <div className="mb-3">
                            <div className="input-header">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <div className="input-validation">{errors.email && touched.email && errors.email}</div>
                            </div>
                            <input
                                id="emailInput"
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="input-header">
                                <label htmlFor="passwordInput" className="form-label">Пароль</label>
                                <div className="input-validation">{errors.password && touched.password && errors.password}</div>
                            </div>
                            <input
                                id="passwordInput"
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </div>
                        <div className="d-flex p-2">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                Submit
                            </button>
                            {showWarning && <div className="input-validation p-2">Вы ввели неверный логин или пароль</div>}
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}
