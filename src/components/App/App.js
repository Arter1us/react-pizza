import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, CartPage, EmptyCartPage } from '../Pages';
import Header from '../Header';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/empty-cart" element={<EmptyCartPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;