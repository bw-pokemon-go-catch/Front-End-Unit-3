import React from 'react';


const SearchBox = (props) => {
   
    return (
        <div>
            <input   
onChange={props.onChange}
name='search'
value={props.search}
placeholder='search that pokemon'
            />
        </div>
    );
};

export default SearchBox;