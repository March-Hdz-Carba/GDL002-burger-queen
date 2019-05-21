import React from 'react';
import './App.css';
import Tittle from "./components/Tittle";
import ButtonWaiter from "./components/ButtonWaiter";
import ButtonKitchen from "./components/ButtonKitcken";
import ButtonAdministration from "./components/ButtonAdministration";
//import ButtonBreakfast from "./components/ButtonBreakfast";
//import ButtonMeal from "./components/ButtonMeal";
import NameCostumer from "./components/nameCostumer";
import OnlyButtonBreakfast from "./components/OnlyButtoBreakfast";
import OnlyButtoMeal from "./components/OnlyButtoMeal"
//import BreakfastCommand from "./components/AddCommand";




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Tittle />
      </header>
      <section className="button-position">
        <ButtonWaiter />
        <ButtonKitchen />
        <ButtonAdministration />
      </section>
        <NameCostumer />
      <div className="buttons-food">
        <OnlyButtonBreakfast />
        <OnlyButtoMeal />
      </div>
    </div>
  );
}

export default App;
