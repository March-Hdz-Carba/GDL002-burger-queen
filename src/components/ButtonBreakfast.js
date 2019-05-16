import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";

class ButtonBreakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuBreakfast : menu[0].breakfast,
            show : true,
        }
    }

        toggleDiv = () => {
            this.setState ({ show : !this.state.show 
            })
        }
    
       /* handleInput(e){
            const { value, name} = e.target;
            this.setState({
                [name] : value
            });
            console.log(this.state);
        } */
        
        print = (event) => {
            const target = event.currentTarget;
            const name = target.getAttribute("name")
            console.log('funcionando' + name);
        }

        

    render(){
      const breakfast = this.state.menuBreakfast.map((menu, i) => {
            return(
                <p>
                    <button className="btn btn-secondary buttonFoodPosition" key={i} onClick={this.print} name={menu.description} value={menu.price}>
                        {menu.description} 
                        {menu.price}
                    </button>
                </p>    
            )
        });
        return(
            <div>
                <button onClick={ this.toggleDiv.bind(this) } className="btn btn-warning breakfastPosition" type="button" >
                Desayuno
                </button>
 
           { !this.state.show && (<div className="buttonFoodPosition">{breakfast}</div>)} 
           </div>
        )}
}

export default ButtonBreakfast;