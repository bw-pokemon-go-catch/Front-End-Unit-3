import React from "react";
import {Link} from 'react-router-dom'
const MainPage = () => {

  return (
    <div>
      <div
        class="ui inverted vertical center aligned segment"
        style={{ minHeight: "700px", padding: "1em 0em",background:' url(https://images3.alphacoders.com/733/thumb-1920-733114.png) no-repeat center center ' }}
      >
        <div class="ui text container" style={{background:"rgba(255, 0, 0, 0.13)",padding:'10px'}}>
          <h1
            class="ui inverted header"
            style={{fontSize: '4em', fontWeight: 'normal', marginBottom: '0px ',marginTop: '3em',color:'white'}}
          >
          Welcome to the 
          Worthymon Admin Page
          </h1>
          <h2
            class="ui inverted header"
            style={{fontSize: '1.7em' ,fontWeight:' normal', marginTop: '1.5em',color:'white'}}
          >
           Add Delete or Edit your Favorite Pokemon
          </h2>
         <Link style={{color:'white'}} to='/pokemon'> <button style={{background:'#ff0000',border:'none',padding:'10px 20px'}} class="ui huge primary button">
            Get Started<i aria-hidden="true" class="right arrow icon" />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
