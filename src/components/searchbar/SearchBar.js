import React from 'react'

const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="container">
                <div class="form-search-bar">
                    <i class="fas fa-search"></i>
                    <input type="search" id="form1" class="form-control" placeholder="Search by art name, creator or collection" />

                </div>
            </div>
        </div>
    )
}

export default SearchBar
