import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { getToken } from "../helper/LocalStorage";
import Navigation from "./Navigation";

function ProductedRoute({ path, component: Component, user, roles, ...rest }) {
    return (
        <Route
            path={path}
            render={(props) => {
                if (!getToken()) {
                    return <Redirect to="/login" />;
                } else if (roles && !checkUser(user, roles)) {
                    return <div>Error</div>;
                }

                return (
                    <div className="mt-14">
                        <Navigation user={user} />
                        <Component {...props} />
                    </div>
                );
            }}
            {...rest}
        />
    );
}

function checkUser(user, roles) {
    return roles.findIndex((role) => role === user?.role) !== -1;
}

ProductedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
};

export default ProductedRoute;
