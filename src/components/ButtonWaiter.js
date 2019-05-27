import React from 'react';
import {Link} from 'react-router-dom';

class ButtonWaiter extends React.Component {
    render(){
        return(
            <div>
                <Link to="/">
                    <button type="button" className="btn btn-danger btn-lg positionButton">Mesero</button>
                </Link>
            </div>

        )
    }
}

export default ButtonWaiter