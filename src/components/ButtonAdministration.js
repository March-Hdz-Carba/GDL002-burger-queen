import React from 'react';
import {Link} from 'react-router-dom';

class ButtonAdministration extends React.Component {
    render(){
        return(
            <div>
                <Link to="administration">
                    <button type="button" className="btn btn-primary btn-lg positionButton">Administración</button>
                </Link>
            </div>

        )
    }
}

export default ButtonAdministration