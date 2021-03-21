import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../constants/path";
const Home = lazy(() => import("../pages/Home/Home"));
const Loading = () => <>Loading ...</>;
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
