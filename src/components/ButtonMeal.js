import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";

class ButtonMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuMeal : menu[1].meal,
            show : true,
        }
    }

        toggleDiv = () => {
            this.setState ({ show : !this.state.show 
            })
        }

        print = (event) => {
            const target = event.currentTarget;
            const name = target.getAttribute("name")
            console.log('funcionando' + name);
        }

    render(){
      const mealButtons = this.state.menuMeal.map((menu, i) => {
            return(
                <p>
                    <button className="btn btn-secondary" key={i} onClick={this.print} name={menu.description} value={menu.price}>
                        {menu.description} 
                        {menu.price}
                    </button>
                </p>    
                    
            )
        });
        return(
        <div>
            <button onClick={ this.toggleDiv.bind(this) } className="btn btn-warning breakfastPosition" type="button" >
                Comida
            </button>   
           { !this.state.show && (<div className="buttonFoodPosition">{mealButtons}</div>)} 
        </div>
        )}
}

export default ButtonMeal;