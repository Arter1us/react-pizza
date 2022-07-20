//import { useSelector } from 'react-redux';

import Header from '../Header';
import Navbar from '../Navbar';
import PizzaList from '../PizzaList';


function App() {

    //const { pizzas } = useSelector(state => state);
    //const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Navbar />
                <PizzaList />
            </div>
        </div>
    );
}

export default App;