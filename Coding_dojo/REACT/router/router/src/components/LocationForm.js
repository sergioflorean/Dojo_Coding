import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Location from "./Location";

const LocationForm = (prop) => {
    return (
        <div>
            <p>
                <Link to="/location/seattle">Seattle</Link>
                |
                <Link to="/location/chicago">Chicago</Link>
                |
                <Link to="/location/burbank">Burbank</Link>
            </p>
            <Routes>
                <Route path="/location/:city" element={<Location />} />
            </Routes>
        </div>
    );

}

export default LocationForm;