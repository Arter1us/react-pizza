import Categories from "../Categories";
import Sort from "../Sort";

export default function Navbar() {

    return (
        <nav className="navbar">
            <Categories />
            <Sort />
        </nav>
    )
}