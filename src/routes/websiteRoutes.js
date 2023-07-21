import { v4 as uuid } from "uuid";
import { ROUTENAMES } from "routes/routes";
import {
    Home
} from "containers";

export const WebsiteRoutes = [
    {
        name: "Home",
        component: <Home />,
        path: ROUTENAMES.home,
    },
    {
        name: "Home with Category",
        component: <Home />,
        path: ROUTENAMES.home_with_category_id,
    },
];