import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";
//import AddCommand from "./AddCommand";

class OnlyButtonsMenuMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuMeal : menu[1].meal,
            printFood : [],
        };
    
    }

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
            }, () => {const totalCommand = document.getElementsByClassName("totalCommand")[0]
            totalCommand.innerHTML="";
            this.state.printFood.map((item,i) =>{
                return totalCommand.innerHTML += "<p>" + item.keyFood + item.keyPrice + "</p>";
            })
                console.log(this.state.printFood)
            
        })

    }

        

    render(){
      const mealButtons = this.state.menuMeal.map((menu, i) => {
            return(
                <p className="buttonsmenu" key={i} >
                    <button className="btn btn-secondary" key={i} onClick={this.addItem} name={menu.description}  value={menu.price}>
                        {menu.description}
                        <br></br> 
                        {menu.price}
                    </button>
                </p>     
              
                    
            )
        });
        return(
        
        <section>
            {mealButtons}
        </section>
        
           
        )}
}

export default OnlyButtonsMenuMeal;