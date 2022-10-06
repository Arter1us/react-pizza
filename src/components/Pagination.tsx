import { useDispatch } from "react-redux";
import ReactPaginate from 'react-paginate';
import { currentPageChanged } from "../redux/PizzasSlice";

const Pagination: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <ReactPaginate
            className='pagination'
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(currentPageChanged(event.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
        />
    )
};

export default Pagination;