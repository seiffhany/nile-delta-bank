import { routes } from "./routes";
import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            {
                routes.map(({path, element, parent}, index) => {
                    if (parent) {
                        return (
                            <Route key={index} element={parent}>
                                <Route path={path} element={element} />
                            </Route>
                        )
                    }
                    return (
                        <Route key={index} path={path} element={element} />
                    )
                })
            }
        </Routes>
    )
}

export default AppRoutes;