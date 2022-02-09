import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../App.css'

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
    }, [itemOffset, filterNames, setCurrentCharacters]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % filterNames.length;
        setItemOffset(newOffset);
    };

    return ( 
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={5}
            previousLabel="<  " 
            breakLabel="..."
            nextLabel="  > "
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}            
            containerClassName={'inline-flex my-6'}
            pageClassName={'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            breakClassName={'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            previousClassName={'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            nextClassName={'py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
        />            
    )
};

export default Pagination;