import React, { useState } from "react";
import CalculatorFormPtr18 from "./Components/CalculatorFormPtr18/CalculatorFormPtr18"

function App() {

  const [equation, setEquation] = useState({});

  function updateEquation(e) {
    setEquation({
      ...equation, 
      [e.target.id]:[e.target.value]
    })
  }

  function doOperation(){
    switch(equation.operation){
      case "add": 
        //Do Add
        console.log("Result: " + (parseFloat(equation.operand1) + parseFloat(equation.operand2)));
        break;
      default:
        console.log("Sorry we don't do that here...");
        break;
    }
  }

  return (
    <div className="App">
      <h1>This is a calculator</h1>
      <CalculatorFormPtr18 update={updateEquation} action={doOperation}/>
    </div>
  );
}

export default App;
