import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";
import AddCommand from "./AddCommand";

class ButtonMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuMeal : menu[1].meal,
            show : true,
            printFood : [],
        }
        this.toggleDiv = this.toggleDiv.bind(this);
        this.addItem = this.addItem.bind(this)
    }

        toggleDiv = () => {
            this.setState ({ show : !this.state.show 
            })
        }

        // print = (event) => {
        //     const target = event.currentTarget;
        //     const keyFood = target.getAttribute("name")
        //     this.setState({
        //         printFood: keyFood
        //     }, () => console.log(this.state));
        //    // const actuallyfood = this.state.menuMeal[keyFood].description
        //     let arrayNew = [this.state.printFood].concat(this.state.menuMeal[keyFood].description)
        //     console.log(arrayNew)
        // }

        addItem = (event) => {
            const target = event.currentTarget;
            const keyFood = target.getAttribute("name");
            const keyPrice = target.getAttribute("value");
            console.log(keyFood, keyPrice)
        
            const obj ={
                keyFood,
                keyPrice

            }
            this.setState({
                printFood: [...this.state.printFood, obj]
            }, () => console.log(this.state.printFood))
        }

        

    render(){
      const mealButtons = this.state.menuMeal.map((menu, i) => {
            return(
                    <button className="btn btn-secondary" key={i} onClick={this.addItem} name={menu.description}  value={menu.price}>
                        {menu.description} 
                        {menu.price}
                    </button>
              
                    
            )
        });
        return(
        <div>
            <button onClick={ this.toggleDiv.bind(this) } className="btn btn-warning breakfastPosition" type="button" >
                Comida
            </button>   
           { !this.state.show && (<div className="buttonFoodPosition">{mealButtons}</div>)} 
           <div className="comandOrderStyle">
               <AddCommand orderFood={this.state.printFood}/>
           </div>
        </div>
        )}
}

export default ButtonMeal;