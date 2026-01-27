import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { Multiworld } from "./pages/Multiworld";
import { RegisterUser } from "./pages/Auth/RegisterUser";

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
        path: "/registeruser",
        element: <RegisterUser />,
    },
];

export default AppRoutes;
