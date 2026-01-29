import { Counter } from "./pages/Counter";
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
        path: "/counter",
        element: <Counter />,
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
        path: "/new-registration",
        element: <RegisterUser />,        
    },
    {
        path: "/user-login",
        element: <LoginUser />,
    }
];

export default AppRoutes;
