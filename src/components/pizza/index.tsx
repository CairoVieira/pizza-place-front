import React from "react";
import pizzaText from "../../images/pizza-text.png";
import pizza from "../../images/pizza.png";

const Pizza = () => {
    return (
        <div className="container-fluid pizza">
            <div className="pizza-img-div">
                <img src={pizzaText} alt="Pizza" className="pizza-text" />
                <img src={pizza} alt="Pizza" className="pizza-img" />
            </div>
        </div>
    );
};

export { Pizza };
