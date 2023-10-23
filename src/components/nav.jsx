import React, { useState } from "react";
export default function Nav(){
    const [isClicked, setIsClicked] = useState(false)
    const viewMenu = () =>{
        setIsClicked(isClicked => !isClicked)
        console.log(isClicked)
    }

    return(
        <>
        <img src="./images/hamburger-menu.png" alt="hamburger-menu" className="hamburger-menu" onClick={viewMenu}/>
        <nav>
            <div className="nav-bar">
            <div className="nav-box">
                <h1>Fnamy<span>Cakes</span></h1>
            </div>
            <div className="nav-box">
                <ul id= {isClicked ? "menu" : undefined} >
                    <li>Home</li>
                    <li>Cakes</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="nav-box">
                <ul>
                    <li><img src="./images/Ellipse 22.png" alt="profile-image" /></li>
                    <li><img src="./images/heart-3510.png" alt="favorite" /></li>
                    <li><img src="./images/cart.png" alt="favorite" /></li>
                </ul>
            </div>  
            </div>  
        </nav>
        </>
    )
}