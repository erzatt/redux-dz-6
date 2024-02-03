import React from 'react';
import {Outlet} from "react-router-dom";

const Loyout = () => {
    return (
        <>
            <Outlet/>
            <footer><p>03.02.2024</p></footer>
        </>
    );
};

export default Loyout;