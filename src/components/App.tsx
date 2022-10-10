import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, CartPage } from "./Pages";
import Header from "./Header";

const App: React.FC = () => {
    return (
        <Router>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
