import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import "./index.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
