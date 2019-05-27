import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Tittle from "./components/Tittle";
import ButtonWaiter from "./components/ButtonWaiter";
import ButtonKitchen from "./components/ButtonKitcken";
import ButtonAdministration from "./components/ButtonAdministration";
import Waiter from './components/waiter';
import Kitchen from './components/kitchen';
import Administration from './components/administration';

//import ButtonBreakfast from "./components/ButtonBreakfast";
//import ButtonMeal from "./components/ButtonMeal";
// import NameCostumer from "./components/nameCostumer";
// import OnlyButtonBreakfast from "./components/OnlyButtoBreakfast";
// import OnlyButtoMeal from "./components/OnlyButtoMeal"
// //import BreakfastCommand from "./components/AddCommand";
// import AddCommand from "./components/AddCommand"




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Tittle />
        </header>
        <section className="button-position">
          <ButtonWaiter />
          <ButtonKitchen />
          <ButtonAdministration />
        </section>
        <Route exact path="/" component={Waiter} />
        <Route path="/waiter" component={Waiter} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/administration" component={Administration} />
        {/* <div>
          <div>
            <NameCostumer />
          </div>

          <div className="buttons-food">
            <div>
            <OnlyButtonBreakfast />
            </div>

            <div>
            <OnlyButtoMeal />
            </div>

          </div>

          <div className="commandPosition">
          <AddCommand />
          </div>

        </div> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
