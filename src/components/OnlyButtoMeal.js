import React from 'react';
import "./ButtonFood.css";
import OnlyButtonsMenuMeal from "./OnlyButtonsMenuMeal"

class OnlyButtoMeal extends React.Component {
    // constructor(props){
    //     super(props);
    // }

        

    render(){
    
        return(
        <div className="bottonMeal">

            <button className="btn btn-primary btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Comida
            </button>

            <div className="collapse" id="collapseExample">
                <div className="card card-body buttonsmenu">
                    <OnlyButtonsMenuMeal />
                </div>
            </div>
           
        </div>
        )}
}

export default OnlyButtoMeal;