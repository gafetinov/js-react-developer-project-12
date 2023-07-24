import 'bootstrap/dist/css/bootstrap.min.css'
import {Formik} from "formik";
import * as Yup from 'yup';

import "./AuthorizationPage.css";

const LoginShema = Yup.object().shape({
    email: Yup.string().email("Неверный формат").required("Обязательное поле"),
    password: Yup.string().min(6, "Не менее 6 символов").required("Обязательное поле")
})

export const AuthorizationPage = () => {
    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
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
                                type="email"
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
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}
