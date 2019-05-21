import React from 'react';
import "./ButtonFood.css";
import OnlyButtonsMenuMeal from "./OnlyButtonsMenuMeal"

class OnlyButtoMeal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : true,
        }
        this.toggleDiv = this.toggleDiv.bind(this);
    }

        toggleDiv = (e) => {
            e.preventDefault();
            this.setState ({ show : !this.state.show 
            })
        }

        

    render(){
    
        return(
        <div>
            <button onClick={ this.toggleDiv.bind(this) } className="btn btn-warning breakfastPosition" type="button" >
                Comida
            </button>   

           {!this.state.show && <OnlyButtonsMenuMeal />} 
        </div>
        )}
}

export default OnlyButtoMeal;