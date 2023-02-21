import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
//import { useState } from "react";
import Manageassump from "./components/Manageassump/Mangeassump";
import Manageconfig from "./components/Manageconfig/Manageconfig";
import Explorescenario from "./components/Explorescenario/Explorescenario";
import Yearrange from "./components/Manageconfig/Yearrange/Yearrange";
import Dimensions from "./components/Manageconfig/Dimentions/Dimensions";
import Activityunits from "./components/Manageconfig/Activityunits/Activityunits";
import Fuelblendings from "./components/Manageconfig/Fuelblendings/Fuelblendings";
import "./App.css";


function App() {


    const getData = (formData) => {
        console.log("form submitted", formData);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                {/* index indicates home compo or the default page or it's like navbar */}
                    <Route index element={<Layout />} />
                    {/* manageconfig is parent route */}
                    <Route path="manageconfig" element={<Manageconfig getformData={getData} />}>
                        <Route path="yearrange" element={<Yearrange onSubmit={getData} />}>
                        {/* yearrange is parent compo and sub-compo of manageconfig compo */}
                            <Route path="dimensions" element={<Dimensions />} />
                            <Route path="activityunits" element={<Activityunits />} />
                            <Route path="fuelblendings" element={<Fuelblendings />} />
                        </Route>
                        <Route path="explorescenario" element={<Explorescenario />} />
                        <Route path="manageassump" element={<Manageassump />} />
                        <Route path="explorescenario" element={<Explorescenario />} />
                    </Route>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
