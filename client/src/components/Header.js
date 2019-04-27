import React from "react";

const Header = (props) =>{
    return (
        <div className="header">
            <h4>Google Books</h4>
            <a href="/">search</a>
            <a href="/saved">saved</a>
        </div>
    );
    }

export default Header;