import { useEffect } from "react";
import Navbar from "../Navbar"
import PizzasList from '../PizzasList';

export default function MainPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <PizzasList />
        </>
    )
}