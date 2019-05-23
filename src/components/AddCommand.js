import React from 'react';


class AddCommand extends React.Component {
    render(){

        return(
            
        <div className="card text-center commandStyle" >
            <div className="card-body">
                <h5 className="card-title">Pedido</h5>
                <p className="card-text totalCommand"></p>
                <button className="btn btn-primary"  >Enviar Pedido</button>
            </div>
        </div>
           
        )
    }
}

export default AddCommand;