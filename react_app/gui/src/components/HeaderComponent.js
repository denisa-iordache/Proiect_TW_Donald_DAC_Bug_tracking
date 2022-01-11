import React from "react";
import ReactFragment from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <React.Fragment>
            <div className="header">
                 <Link to='/home'>Bug Tracker</Link>
                 <div className="header-right">
                     <Link to='/home'>Home</Link>
                     <Link to='/login'>Log In</Link>
                     <Link to='/register'>Register</Link>
                 </div>
             </div>
        </React.Fragment>
    )
}

export default Header