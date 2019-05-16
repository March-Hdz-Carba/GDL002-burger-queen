import React from 'react';
import "./ButtonFood.css";

class NameCostumer extends React.Component {
    constructor(){
        super();
        this.state = {
            name: null,
           // names:'',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleAddNames = this.handleAddNames.bind(this);
    }

    handleInput(e){
        const { value } = e.currentTarget;

        this.setState({
            name: value
        }, () => console.log(this.state));
    } 

    handleSubmit(e){
        e.preventDefault();
        console.log("enviando")
    }

    // handleAddNames(name) {
    //     this.setState({
    //         name:[this.state.names, name]
    //     })
    // }
    
    print = () => {
        // const target = event.currentTarget;
        // console.log("target", target );
        const name = this.state.name;
        console.log('funcionando' + name);
    }

    render(){
        return(
        <div className="input-group input-group-sm mb-3 inputName row">
            <div className="col-8">
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                onChange={this.handleInput} 
                name={this.handleInput}
                className="form-control colorIn subCap" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Nombre del cliente" />
            </form>

            </div>
            <div className="col-4">
            <button type="submit" onClick={this.print} className="btn btn-secondary subCap">Capturar</button>
            </div>
            
        </div>

        )
    }
}

export default NameCostumer;