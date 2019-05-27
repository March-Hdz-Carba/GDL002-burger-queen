import React from 'react';
import {menu} from "./food.json";
import "./ButtonFood.css";
//import ButtonDelete from "./buttonDelete";

class OnlyButtonsMenuBreakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuBreakfast : menu[0].breakfast,
            printFood : [],
        };
    }
        
        // print = (event) => {
        //     const target = event.currentTarget;
        //     const name = target.getAttribute("name");
        //     const price = target.getAttribute("value");
        //     console.log('funcionando' + name + " " + price);
        // }

        removeItems(index){
            this.setState({
                printFood: this.state.printFood.filter((e, i) => {
                    return i !== index 
                })
            })
        }

        addItem = (event) => {
            const target = event.currentTarget;
            const keyFood = target.getAttribute("name");
            const keyPrice = target.getAttribute("value");
            console.log(keyFood, keyPrice);
        
            const obj ={
                keyFood,
                keyPrice
            }


            this.setState({
                printFood: [...this.state.printFood, obj]
            }, () => { const totalCommand = document.getElementsByClassName("totalCommand")[0]
            totalCommand.innerHTML="";
            this.state.printFood.map((item,i) =>{
                return totalCommand.innerHTML += "<p>" + item.keyFood + item.keyPrice +  <button type="button" class="btn btn-light" 
                                                    onClick={this.removeItems.bind(this, i)} key={i}>
                                                        Eliminar
                                                    </button> + "</p>"   

            //<ButtonDelete  onClick={this.removeItems.bind(this, i)} key={i}/> + "</p>";
            })
                console.log(this.state.printFood)
            
        })
                
        }




    render(){
      const breakfast = this.state.menuBreakfast.map((menu, i) => {
            return(
                <p className="buttonsmenu" key={i} >
                    <button className="btn btn-secondary buttonFoodPosition"
                    key={i} onClick={this.addItem} name={menu.description}  value={menu.price}>
                        {menu.description}
                        <br></br> 
                        {menu.price}
                    </button>
                </p>    
            )
        });
        return(
            <section>
                {breakfast}
                {/* <div className="comandOrderStyle">
                    <AddCommand orderFood={this.state.printFood}/>
                </div>     */}
           </section>
        )}
}

export default OnlyButtonsMenuBreakfast;