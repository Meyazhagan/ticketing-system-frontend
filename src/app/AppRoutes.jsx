import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductedRoute from "../components/ProtectedRoute";
import Login from "./auth/Login";
import VerifyUser from "./auth/VerifyUser";
import Register from "./auth/Register";
import ResendVerification from "./auth/ResendVerification";
import Dashboard from "./dashboard";
import ForgotPassword from "./auth/Forgot";
import ResetPassword from "./auth/Reset";
import useAppContext from "../context/AppContext";
import CreateQuery from "./pages/CreateQuery";
// import Converstation from "./pages/Converstation";
import Navigation from "../components/Navigation";
import Converstation from "./pages/Converstation";
import AssignQuery from "./pages/AssignQuery";
import { getToken } from "../helper/LocalStorage";

function AppRoutes() {
    const { user } = useAppContext();

    return (
        <div>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
                <Route path="/reset-password/:token" exact component={ResetPassword} />
                <Route path="/resend-verification" exact component={ResendVerification} />
                <Route path="/verify-user/:token" exact component={VerifyUser} />
                <ProductedRoute
                    path="/dashboard"
                    component={Dashboard}
                    roles={["STUDENT", "MENTOR", "ADMIN"]}
                    user={user}
                />
                <ProductedRoute
                    path="/create-query"
                    component={CreateQuery}
                    roles={["STUDENT"]}
                    user={user}
                />
                <ProductedRoute
                    path="/assign-query"
                    component={AssignQuery}
                    roles={["MENTOR"]}
                    user={user}
                />
                <ProductedRoute
                    path="/query/:queryId/converstation/:converstationId"
                    component={Converstation}
                    roles={["STUDENT", "MENTOR"]}
                    user={user}
                />
                <Redirect from="/" exact to="/dashboard" />
            </Switch>
        </div>
    );
}

export default AppRoutes;
