import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";

class ButtonBreakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuBreakfast : menu[0].breakfast,
            show : true,
            orders: []
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
            const name = target.getAttribute("name");
            const price = target.getAttribute("value");
            console.log('funcionando' + name + " " + price);
        }

        // submit(name, price){
        //     const orders = this.state.orders;
        //     const order = {
        //         item: name,
        //         price: price,
        //     }
        //     orders.push(order);
        //     this.props.addCommands(this.state.orders);
        // }


    render(){
      const breakfast = this.state.menuBreakfast.map((menu, i) => {
            return(
                <p  key={i} >
                    <button className="btn btn-secondary buttonFoodPosition"
                        onClick={this.print} type='submit' name={menu.description} value={menu.price}>
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