import React from 'react';
import {Link} from 'react-router-dom';

class ButtonKitchen extends React.Component {
    render(){
        return(
            <div>
                <Link to="kitchen">
                    <button type="button" className="btn btn-success btn-lg positionButton">Cocina</button>
                </Link>
            </div>

        )
    }
}

export default ButtonKitchen