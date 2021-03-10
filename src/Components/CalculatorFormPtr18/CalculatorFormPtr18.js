import React from "react";

function CalculatorFormPtr18(props){
    return(
        <div className="row">
            <div className="col-4">
            <label for="operand1" className="col-2 col-form-label">Operand 1</label>
                <input type="text" className="form-control-plaintext" id="operand1" onChange={props.update}/>
            </div>
            <div className="col-4">
                <select className="form-select" id="operation" onChange={props.update}>
                    <option selected>Please select an operation</option>
                    <option value="add">Addition</option>
                </select>
            </div>
            <div className="col-4">
                <label for="operand2" className="col-2 col-form-label">Operand 2</label>
                <input type="text" className="form-control-plaintext" id="operand2" onChange={props.update}/>
            </div>
            <button onClick={props.action}>Go!</button>
        </div>

        
    )
}

export default CalculatorFormPtr18;