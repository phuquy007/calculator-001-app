import React from "react";

function ResultDisplay(props){
    return(
        <div className="row">
            <div className="col-12">
                Result: {props.result}
            </div>
        </div>
    )
}

export default ResultDisplay;