import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {v4 as uuid} from "uuid";
import {WebsiteRoutes} from "routes/websiteRoutes";
import {MainWebsiteLayout} from "components/layout";
import {GlobalStyles} from "utils/globalStyles";

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Router>
                <MainWebsiteLayout>
                    <Routes>
                        {WebsiteRoutes.map((item) => (
                                <Route key={uuid()} element={item.component} path={item.path} name={item.name} id={uuid()}/>
                            )
                        )}
                    </Routes>
                </MainWebsiteLayout>
            </Router>
        </React.Fragment>

    )
}
