import React from "react";
import { v4 as uuid } from "uuid";
import { ROUTENAMES } from "routes/routes";
import {
    Home
} from "containers";

export const WebsiteRoutes = [
    {
        id: uuid(),
        name: "Home",
        component: <Home />,
        path: ROUTENAMES.home,
    },
];