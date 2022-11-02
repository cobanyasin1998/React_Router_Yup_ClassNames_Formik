import { useAuth } from "../Context/AuthContext";

export default function Profile() {
  const { setUser } = useAuth();

  const logOutHandle = () => {
    setUser(false);
  };

  return (
    <div>
      <button onClick={logOutHandle}>Çıkış Yap</button>
    </div>
  );
}
