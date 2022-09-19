import React, {Suspense} from "react";
import './App.css'
import RouteService from "./routes/ReouteService";

export default function App(){
    return(
        <Suspense fallback={<div>Loading......</div>}>
                <RouteService/>
        </Suspense>
    )
}