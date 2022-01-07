import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Scanner from './components/Scanner';

function App() {
  const [result, setResult] = useState({first:'',second:"",third:'',fourth:''})
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:"100vh"}}>
      <div className="main">
     <Form result={result} setResult={setResult}/>
      </div>
      <div className="hello">
     <Scanner result={result} setResult={setResult}/>
      </div>
    </div>
  );
}

export default App;
