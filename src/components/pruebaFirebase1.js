import React from 'react';
import firebase from './firebase';

class ComponentToPrint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            price:[],
        };
    };

    componentDidMount() {
        const foodDescription = firebase.database().ref('description');
        foodDescription.on('price',(snapshot) => {
            let description = snapshot.val();
            let newState = [];
            for (let descriFood in description) {
                newState.push({
                    id: descriFood,
                    description: menu[0].breakfast,
                });

            }
            this.setState({
                description: newState
            });

        })
    }
}