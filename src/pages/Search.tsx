import React from "react";
import SearchFilter from "../components/search-components/SearchFilter";
import CompanyReviews from "../components/search-components/CompanyReviews";

const Search: React.FC = () => {
  return ( <div className='px-20 py-8'>
            <SearchFilter />
            <CompanyReviews />
        </div>
    );
};

export default Search;
