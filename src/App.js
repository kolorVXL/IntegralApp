import './App.css';
import BottomApp from './BottomApp.js';
import TopResult from './TopResult.js';

function App() {
  return (
    <div className="App">
      <TopResult value={ 500 } />
      <BottomApp />
    </div>
  );
}

export default App;
