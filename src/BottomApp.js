import './BottomApp.css'
import { useState } from 'react';

function BottomApp() {
    return (
        <div className="bottom-app">
        <FactorInput index={ 0 } />
        <FactorInput index={ 1 } />
        <FormulaInput />
        <GoButton />
      </div>
    );
}

function FactorInput({ index }) {

    var [ value, setValue ] = useState(index)
    var [ style, setStyle ] = useState("normal-input")
  
    const handleChange = (event) => {
      if (event.target.value.toString().length <= 8) { 
        setValue(event.target.value)
      } else {
        setValue(value.substring(0, 8))
      }
  
      if (isNaN(parseFloat(event.target.value)) === true) {
        setStyle("error-input")
      } else {
        setStyle("normal-input")
      }
    };
    return (
      <input className={ "factor factor" + (index + 1) + " " + style } type="number" value={ value } onChange={ handleChange } maxLength="3" />
    )
  }
  
  function FormulaInput() {
    var [ style, setStyle ] = useState("normal-input")
  
    const handleChange = (event) => {
      setStyle("normal-input")
    }
  
    return (
      <input className={ style + " formula" } type="text" onChange={ handleChange }/>
    );
  }
  
  function GoButton() {
    return (
      <button className="go">GO!</button>
    )
  }

  export default BottomApp; 