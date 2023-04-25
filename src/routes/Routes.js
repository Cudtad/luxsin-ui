import Home from "~/pages/Home/Home";
import ManJewelry from "~/pages/ManJewelry/ManJewelry";
import WomanJewelry from "~/pages/WomanJewelry/WomanJewelry";

const publicRoutes = [
    {path: "/", Component: Home},
    {path: "/man-jewelry", Component: ManJewelry},
    {path: "/woman-jewelry", Component: WomanJewelry},
];

const privateRoutes = [];


export { publicRoutes, privateRoutes}