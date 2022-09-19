import urls from "../enums/urls";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({children, redirectTo = urls.LOGIN, allow = [], ...props})=>{
    const allowBoolExec = allow.map((func)=>func())
    return(
        <Route
        {...props}
        render={({location})=>
        !allowBoolExec.includes(false)?(
            children
        ):(
            <Redirect
            to={{
                pathname: redirectTo,
                state: {from : location}
            }}
            />
        )
    }
    />
    )
}
export default PrivateRoute;