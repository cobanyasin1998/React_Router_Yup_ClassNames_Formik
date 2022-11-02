import { useAuth } from "../../Context/AuthContext";
import { useNavigate,useLocation } from "react-router-dom";
export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const loginHandle = () => {
    setUser({
      username: "Yasin Çoban",
      id: 1,
    });
    navigate(location?.state?.return_url || "/")
  };

  return (
    <>
      Login Page <br></br>
      <button onClick={loginHandle}>Giriş Yap</button>
    </>
  );
}
