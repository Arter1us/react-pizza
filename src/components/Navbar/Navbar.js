import Categories from "../Categories";
import Sort from "../Sort";

const Navbar = () => {

    return (
        <nav className="navbar">
            <Categories />
            <Sort />
        </nav>
    )
};

export default Navbar;