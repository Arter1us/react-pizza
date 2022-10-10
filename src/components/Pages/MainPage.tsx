import { useEffect } from "react";
import Navbar from "../Navbar";
import PizzasList from "../PizzasList";

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <PizzasList />
        </>
    );
};

export default MainPage;
