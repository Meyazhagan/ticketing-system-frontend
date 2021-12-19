import React from "react";
import { Switch, useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ProductedRoute from "../../components/ProtectedRoute";
import useAppContext from "../../context/AppContext";
import AllQueries from "../pages/AllQueries";
import converstation from "../pages/converstation";
import CreateQuery from "../pages/CreateQuery";

function Dashboard() {
    const history = useHistory();
    const { user } = useAppContext();

    return (
        <div className="">
            <AllQueries />
        </div>
    );
}

export default Dashboard;
