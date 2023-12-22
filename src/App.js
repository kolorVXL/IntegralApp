import './App.css';
import BottomApp from './BottomApp.js';
import TopResult from './TopResult.js';
import MainGraphApp from './MainGraphApp.js';
import { useState } from 'react';

function App() {
  
  var [ xMax, setXMax ] = useState(1)
  var [ xMin, setXMin ] = useState(0)
  var [ num, setNum ] = useState(20)

  return (
    <div className="App">
      <MainGraphApp min={ xMin } max={ xMax } list={ List() }/>
      <TopResult value={ 500 } func={ [ num, setNum ] }/>
      <BottomApp minState={ [ xMin, setXMin ] } maxState={ { xMax, setXMax } }/>
    </div>
  );
}

function List() {

  var list = []
  var f;
  for (f = -10.0; f < 10.0; f += 0.05) {
    list.push(ListFunction(f))
  }
  return list;
}

function ListFunction(x) {
  return (x*x*x) - (23*x*x) - (40*x) - 4
}

export default App;
