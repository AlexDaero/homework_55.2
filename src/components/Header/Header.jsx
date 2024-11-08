import React from "react";
import './Header.css'

function Header (){
    return(
        <div className="header">
            <div className="container">
                <div className="header_block">
                    <a className="header_block_link" href="#">Список покупок</a>
                </div>
            </div>
        </div>
    )
}

export default Header