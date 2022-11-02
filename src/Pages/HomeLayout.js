import { NavLink, Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Ana Sayfa</NavLink>&nbsp;&nbsp;
        <NavLink to="/contact">İletişim</NavLink>&nbsp;&nbsp;
        <NavLink to="/profile">Profil</NavLink>&nbsp;&nbsp;
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
