import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Pages from './RouteStacks'

const RouteService = ()=>{
    return(
        <Router>
            <Pages/>
        </Router>
    )
}

export default RouteService;