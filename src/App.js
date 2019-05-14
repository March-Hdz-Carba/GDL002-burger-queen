import React from 'react';
import './App.css';
import Tittle from "./components/Tittle"
import ButtonWaiter from "./components/ButtonWaiter"
import ButtonKitchen from "./components/ButtonKitcken"
import ButtonAdministration from "./components/ButtonAdministration"


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
      
    </div>
  );
}

export default App;
