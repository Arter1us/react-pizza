import Categories from "./Categories";
import Sort from "./Sort";

const Navbar: React.FC = () => {

    return (
        <nav className="navbar">
            <Categories />
            <Sort />
        </nav>
    )
};

export default Navbar;