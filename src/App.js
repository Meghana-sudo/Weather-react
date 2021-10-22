import logo from './logo.svg';
import './App.css';
import Temp from './Temp';


const api_keys = process.env.REACT_APP_API_KEY;
console.log(api_keys);
console.log(process.env.REACT_APP_API_KEY,"hello");
function App() {
  return (
    <div className="App">
      
      <Temp api_keys={api_keys}/>
     
    </div>
  );
}

export default App;
