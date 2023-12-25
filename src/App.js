import './App.css';
import BottomApp from './BottomApp.js';
import TopResult from './TopResult.js';
import MainGraphApp from './MainGraphApp.js';
import { useState } from 'react';

function App() {
  
  var [ xMax, setXMax ] = useState("1")
  var [ xMin, setXMin ] = useState("0")
  var [ num, setNum ] = useState(20)

  const Check = () => { return IsNumVaild(num) && IsVaild(xMin) && IsVaild(xMax) }

  const List = () => {
    console.log(`${num} ${xMin} ${xMax}`)
    if (!Check()) {
      return [0];
    }
    
    var list = []
    var f
    var i = 0
    for (f = parseFloat(xMin); f < parseFloat(xMax); f += (parseFloat(xMax) - parseFloat(xMin))/parseInt(num)) {
      i += 1
      list.push(ListFunction(parseFloat(f)))
      if (i > 1000) {
        break
      }
    }
    return list;
  }

  const Value = () => {
    var list = List()
    if (!Check() || list.length === 0) {
      return 0.000;
    }
    var sum = list.reduce((a, b) => { return a + b })
    return ((sum / parseInt(num)) * (parseFloat(xMax) - parseFloat(xMin))).toFixed(6)
  }

  return (
    <div className="App">
      <MainGraphApp min={ xMin } max={ xMax } list={ List() } />
      <TopResult value={ Value() } func={ setNum } />
      <BottomApp minState={ [ xMin, setXMin ] } maxState={ [ xMax, setXMax ] } />
    </div>
  );
}

function ListFunction(x) {
  return Math.sin(x)
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

function IsVaild(x) {
  if (isNaN(parseFloat(x))) {
    return false;
  }
  return true;
}

export default App;
