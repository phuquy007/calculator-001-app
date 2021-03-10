import React, { useState } from "react";
import CalculatorFormPtr18 from "./Components/CalculatorFormPtr18/CalculatorFormPtr18"
import ResultDisplay from "./Components/ResultDisplayPtr18/ResultDisplayPtr18"

function App() {

  const [equation, setEquation] = useState({});
  const [result, setResult] = useState();

  function updateEquation(e) {
    setEquation({
      ...equation, 
      [e.target.id]:e.target.value
    })
  }

  function doOperation(){
    switch(equation.operation){
      case "add": 
        //Do Add 
        setResult(parseFloat(equation.operand1) + parseFloat(equation.operand2));
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
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
