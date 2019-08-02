import React from 'react';
import {Link} from  'react-router-dom'
const Pagination = ({paginate,totalPosts,postsPerPage}) => {
    const pageNumbers = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <ul>
            {pageNumbers.map(num =>(
                <li key={num}   aria-label="Pagination Navigation" role="navigation" className="ui pagination menu">
<Link aria-current="false"
    aria-disabled="false"
    tabindex="0"
    value={num}
    type="firstItem"
    class="icon item" onClick={()=> paginate(num)} >{num}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;