import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/pages/register/Register";
import "./index.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
