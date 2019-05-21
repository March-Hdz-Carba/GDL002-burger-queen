import React from 'react';
import "./ButtonFood.css";
import OnlyButtonsMenuBreakfast from "./OnlyButtonsMenuBreakfast"

class OnlyButtonBreakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : true
        };
        this.toggleDiv = this.toggleDiv.bind(this)

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
                Desayuno
                </button>
 
           {!this.state.show && <OnlyButtonsMenuBreakfast />} 
           </div>
        )}
}

export default OnlyButtonBreakfast;