import React from "react";
import carrito from "../assets/img/carrito.png";

const cartWidget = ()=> {
    return (
        <div>
            <a href="/"> <li><img src={carrito}  alt="carrito"/></li> </a>
        </div>
    )
}

export default cartWidget;