import { Formik, Form, Field } from "formik";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();

  // const { handleSubmit, handleChange, values } = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     setUser(values);
  //     navigate(location?.state?.return_url || "/", {
  //       replace: true,
  //       state: {},
  //     });
  //   },
  // });

  return (
    <>
      <title>Login</title>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          setUser(values);
          navigate(location?.state?.return_url || "/");
        }}
      >
        {({ values }) => (
          <Form>
            <>
              <Field name="username" />
              <br />
              <Field name="password" type="password" />
              <br />
              <button type="submit">Giriş Yap</button>
            </>
          </Form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı</label>
        <input
          id="username"
          type="text"
          value={values.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Parola</label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <button type="submit">Giriş Yap</button>
      </form> */}
    </>
  );
}
