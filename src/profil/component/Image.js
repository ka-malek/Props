import React from "react";
import image from './King.jpg'

function Wa(props){
    console.log(props)
    return(
        <div>
            <img src={image} alt="wa"/>
        </div>
    )
};

export default Wa;