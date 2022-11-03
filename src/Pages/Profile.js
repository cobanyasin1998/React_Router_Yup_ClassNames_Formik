import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Profile() {
  const { setUser, user } = useAuth();

  const logOutHandle = () => {
    setUser(false);
  };

  return (
    <div>
      {user && <button onClick={logOutHandle}>Çıkış Yap</button>}
      {!user && <Link to="/auth/login">Giriş Yap</Link>}
    </div>
  );
}
