import './BottomApp.css'
import { useState } from 'react';

function BottomApp({ minState, maxState, setFunc }) {
  return (
    <div className="bottom-app">
      <FactorInput index={0} state={minState} />
      <FactorInput index={1} state={maxState} />
      <FormulaInput setFunc={ setFunc }/>
      <GoButton />
    </div>
  );
}

var func = new Function("x", "return x + 1")

function FactorInput({ index, state }) {

  var [value, setValue] = state
  var [style, setStyle] = useState("normal-input")

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
    <input className={"factor factor" + (index + 1) + " " + style} type="number" value={value} onChange={handleChange} maxLength="3" />
  )
}

function FormulaInput({ setFunc }) {
  var [style, setStyle] = useState("normal-input")

  const handleChange = (e) => {
    try {
      var str = ""
      var singleFunctions = [ "round", "floor", "ceil", "abs", "sqrt", "cbrt", "exp", "log2", "sin", "cos", "tan" ]
      singleFunctions.forEach((fu) => {
        str += `const ${fu} = (a) => { return Math.${fu}(a) }; `
      })

      str += "const log = (a, b) => { return Math.log(b) / Math.log(a) }; "
      str += "const ln = (a) => { return Math.log(a) }; "
      str += "const pow = (a, b) => { return Math.pow(a, b) }; "
      str += "const p = (a, b) => { return Math.pow(a, b) }; "

      str += "const e = Math.E; "
      str += "const pi = Math.PI; "

      var manyFunctions = [ "min", "max" ]
      manyFunctions.forEach((fu) => {
        str += `const ${fu} = (...values) => { return Math.${fu}(...values) }; `
      })
      
      str += `return ${e.target.value};`
      console.log(str)
      new Function("x", str)(1.0)
      setFunc(str)
      setStyle("normal-input")
    } catch (e) {
      console.log(e)
      setStyle("error-input")
    }
  }

  return (
    <input className={style + " formula"} type="text" onChange={handleChange} />
  );
}

function GoButton() {
  return (
    <button className="go">GO!</button>
  )
}

function makeStructure(strs) {
  func = new Function("x", `return ${strs}`)
}

export default BottomApp; 