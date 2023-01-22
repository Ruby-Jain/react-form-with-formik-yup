import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useState } from "react";
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
          <Route index element={<Layout />} />

          <Route path="manageconfig" element={<Manageconfig getformData={getData}/>}>
            <Route
              path="yearrange"
              element={<Yearrange onSubmit={getData}/>}
            />

            <Route path="dimensions" element={<Dimensions />} />
            <Route path="activityunits" element={<Activityunits />} />
            <Route path="fuelblendings" element={<Fuelblendings />} />
            <Route path="explorescenario" element={<Explorescenario />} />
            <Route path="manageassump" element={<Manageassump />} />
            <Route path="explorescenario" element={<Explorescenario />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
