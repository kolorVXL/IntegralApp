import './App.css';
import BottomApp from './BottomApp.js';
import TopResult from './TopResult.js';
import MainGraphApp from './MainGraphApp.js';
import { useState } from 'react';

function App() {
  
  var [ xMax, setXMax ] = useState("1")
  var [ xMin, setXMin ] = useState("0")
  var [ num, setNum ] = useState(20)
  var [ func, setFunc ] = useState("return x")

  const Check = (r, mn, mx) => { return IsNumVaild(r) && IsVaild(mx) && IsVaild(mn) }

  const List = (realNum) => {
    if (!Check(realNum, xMin, xMax)) {
      return [0];
    }
    
    var list = []
    var f
    for (f = parseFloat(xMin); f < parseFloat(xMax); f += (parseFloat(xMax) - parseFloat(xMin))/parseInt(realNum)) {
      list.push(new Function("x", func)((parseFloat(f))))
    }
    return list;
  }

  const Value = () => {
    var list = List(num)
    if (!Check(num, xMin, xMax) || list.length === 0) {
      return 0.000;
    }
    var sum = list.reduce((a, b) => { return a + b })
    return ((sum / parseInt(num)) * (parseFloat(xMax) - parseFloat(xMin))).toFixed(6)
  }

  return (
    <div className="App">
      <MainGraphApp min={ xMin } max={ xMax } list={ List(Math.min(document.querySelector("#root").clientWidth, num)) } />
      <TopResult value={ Value() } func={ setNum } />
      <BottomApp minState={ [ xMin, setXMin ] } maxState={ [ xMax, setXMax ] } setFunc={ setFunc } />
    </div>
  );
}

function IsNumVaild(x) {
  if (isNaN(parseInt(x))) {
    return false;
  }
  if (x < 1 || x > 100000) {
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
