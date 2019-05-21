import React from 'react';


class AddCommand extends React.Component {
    render(){
    
        const addFoodCommand = this.props.orderFood.map((food,i) => {
            return (
            <p key={i}> 
            
            {food.keyFood}
            {food.keyPrice} 
            
            </p>
            )
        })

        return(
            <div>
                {addFoodCommand}
            </div>
           
        )
    }
}

export default AddCommand;