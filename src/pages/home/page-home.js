import React from "react";
import urls from "../../enums/urls";

const Home = () => {
    const navigateTo =(path) =>
    window.location.replace(`${window.location.origin}/#${path}`)
    return(
        <div>
            Ini Halaman Home YGY
            <button onClick={()=>navigateTo(urls.ABOUT)}>
                go to About
            </button>
        </div>
    )
}

export default Home;