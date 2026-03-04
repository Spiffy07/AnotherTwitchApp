import { MyComponents } from "./pages/MyComponents";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { Multiworld } from "./pages/Multiworld";
import { RegisterUser } from "./pages/Auth/RegisterUser";
import { LoginUser } from "./pages/Auth/Login";

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "/mycomponents",
        element: <MyComponents />,
    },
    {
        path: "/fetch-data",
        element: <FetchData />,
    },
    {
        path: "/multiworld",
        element: <Multiworld />,
    },
    {
        path: "/account/registration",
        element: <RegisterUser />,        
    },
    {
        path: "/account/login",
        element: <LoginUser />,
    }
];

export default AppRoutes;
