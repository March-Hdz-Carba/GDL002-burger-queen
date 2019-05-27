import React from "react";
import './ButtonFood.css';
import NameCostumer from "./nameCostumer";
import OnlyButtonBreakfast from "./OnlyButtoBreakfast";
import OnlyButtoMeal from "./OnlyButtoMeal"
//import BreakfastCommand from "./components/AddCommand";
import AddCommand from "./AddCommand"


const Waiter = () => (
    <div className="main-content">
        <div className="container">
            <div>

                <div>
                <NameCostumer />
                </div>

                <div className="buttons-food">
                <div>
                <OnlyButtonBreakfast />
                </div>

                <div>
                <OnlyButtoMeal />
                </div>

                </div>

                <div className="commandPosition">
                <AddCommand />
                </div>

            </div>
        </div>
    </div>
);

export default Waiter;