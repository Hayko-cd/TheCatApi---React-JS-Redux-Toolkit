import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {WebsiteRoutes} from "routes/websiteRoutes";
import { v4 as uuid } from "uuid";

export const App = () => {
    return (
        <Router>
            <Routes>
                {WebsiteRoutes.map((item) => (
                        <Route key={uuid()} element={item.component} path={item.path} name={item.name}/>
                    )
                )}
            </Routes>
        </Router>
    )
}
