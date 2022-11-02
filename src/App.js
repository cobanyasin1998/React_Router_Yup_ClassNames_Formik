import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import BlogLayout from "./Pages/Blog/BlogLayout";
import BlogIndex from "./Pages/Blog/BlogIndex";
import BlogCategories from "./Pages/Blog/BlogCategories";
import BlogPost from "./Pages/Blog/BlogPost";
import Page404 from "./Pages/Page404";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import AuthLayout from "./Pages/Auth/AuthLayout";
import Login from "./Pages/Auth/Login";
import HomeLayout from "./Pages/HomeLayout";

function App() {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogIndex />} />
            <Route path="categories" element={<BlogCategories />} />
            <Route path="post/:url" element={<BlogPost />} />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
