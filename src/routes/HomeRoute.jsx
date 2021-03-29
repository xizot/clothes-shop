import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/path";
const Home = lazy(() => import("../pages/Home/Home"));
function HomeRoute() {
    return (
        <Switch>
            <Route
                exact
                path={PATH.HOME}
                component={() => (
                    <Suspense fallback={<Loading />}>{<Home />}</Suspense>
                )}
            />
        </Switch>
    );
}

export default HomeRoute;
