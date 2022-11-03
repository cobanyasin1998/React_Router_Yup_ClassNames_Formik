import PrivateRoute from "./Components/PrivateRoute";
import AuthLayout from "./Pages/Auth/AuthLayout";
import Login from "./Pages/Auth/Login";
import BlogCategories from "./Pages/Blog/BlogCategories";
import BlogIndex from "./Pages/Blog/BlogIndex";
import BlogLayout from "./Pages/Blog/BlogLayout";
import BlogPost from "./Pages/Blog/BlogPost";
import Contact from "./Pages/Contact";
import HomeLayout from "./Pages/HomeLayout";
import Page404 from "./Pages/Page404";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Page401 from "./Pages/Page401";
import AdminRoute from "./Components/AdminRoute";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
        // admin: true,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            index: true,
            element: <BlogIndex />,
          },
          {
            path: "categories",
            element: <BlogCategories />,
          },
          {
            path: "post/:url/",
            element: <BlogPost />,
          },
          {
            path: "*",
            element: <Page404 />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/UnAuth401",
    element: <Page401/>,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.admin) {
      route.element = <AdminRoute>{route.element}</AdminRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
