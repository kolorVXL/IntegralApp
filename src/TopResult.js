import { useState } from "react";
import "./TopResult.css"

function TopResult({ value, func }) {

    var [ style, setStyle ] = useState("normal-input")

    const handleChange = (e) => {
        func(e.target.value)
        if (IsNumVaild(e.target.value)) {
            setStyle("normal-input")
        } else {
            setStyle("error-input")
        }
    }

    return (
        <div className="top-result">
            <div>
                {value}
            </div>
            <input className={ `top-input ${style}` } type="number" onChange={ handleChange } />
        </div>
    );
}


function IsNumVaild(x) {
    if (isNaN(parseInt(x))) {
      return false;
    }
    if (x < 1 || x > 1024) {
      return false;
    }
    return true;
  }

export default TopResult;