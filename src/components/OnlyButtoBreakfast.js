import React from 'react';
import "./ButtonFood.css";
import OnlyButtonsMenuBreakfast from "./OnlyButtonsMenuBreakfast"

class OnlyButtonBreakfast extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    //     this.state = {
    //         show : true
    //     };
    //     this.toggleDiv = this.toggleDiv.bind(this)

    // }

    //     toggleDiv = (e) => {
    //         e.preventDefault();
    //         this.setState ({ show : !this.state.show 
    //         })
    //     }


    render(){
    
        return(
           
        <div className="bottonBreak buttonsmenu">
            <a className="btn btn-primary btn-warning" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            Desayuno
            </a>

            <div className="collapse buttonsmenu" id="collapseExample1">
                <div className="card card-body buttonsmenu">
                <OnlyButtonsMenuBreakfast />
                </div>
            </div>    
                
           </div>
        )}
}

export default OnlyButtonBreakfast;