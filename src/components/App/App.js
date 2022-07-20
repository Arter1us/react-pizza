import { useSelector } from 'react-redux';

function App() {

    const { pizzas } = useSelector(state => state);
    //const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <div className="container">
                <div>{pizzas}</div>
            </div>
        </div>
    );
}

export default App;