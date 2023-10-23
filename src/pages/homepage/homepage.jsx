import React from "react";
import ObjBox from "./obj-box";
import ScrollBox from "./scroll-box";
import cakeInfo from "../../utility/cakeInfo";
export default function HomePage(){
    return(
        <main>
            <section>
                <div className="hero-image"><img src="./images/cake2.jpg" alt="hero-image"/></div>             
            </section>
            <section>
                <ObjBox/>
            </section>
            <section>
                <h1>OUR POPULAR PRODUCTS</h1>
                <div className="slidescroll-container">
                    {cakeInfo.map(data => <ScrollBox cakeData = {data}/>)}
                </div>
            </section>
        </main>
    )
}