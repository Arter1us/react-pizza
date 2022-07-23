//import { useSelector } from 'react-redux';

import Header from '../Header';
import Navbar from '../Navbar';
import PizzasList from '../PizzasList';


function App() {

    //const { pizzas } = useSelector(state => state);
    //const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Navbar />
                <PizzasList />
            </div>
        </div>
    );
}

export default App;