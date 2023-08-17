import React from "react";
import ReactPaginate from "react-paginate";
import { getAllMovies } from "../axios/axios";


const Pagination = ({ numberOfPages, handlePageChange }) => {
    const handlePageClick = (data) => {
        const page = data.selected + 1;
        handlePageChange(page);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            // pageCount={pageCount}
            pageCount={numberOfPages}
            renderOnZeroPageCount={null}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
