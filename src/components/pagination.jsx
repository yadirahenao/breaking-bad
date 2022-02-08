import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({
    filterNames,
    setCurrentCharacters
}) => {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 5;
        // Aqui dice que elementos debe de pintar la aplicacion
        setCurrentCharacters(filterNames.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filterNames.length / 5));
    }, [itemOffset, 5, filterNames]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % filterNames.length;
        setItemOffset(newOffset);
    };

    return (    
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )
};

export default Pagination;