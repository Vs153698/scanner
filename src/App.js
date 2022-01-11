// import { useState } from 'react';
import './App.css';
import Auto from './components/Auto';
// import Form from './components/Form';
// import Scanner from './components/Scanner';

function App() {
  // const [result, setResult] = useState({first:'',second:"",third:'',fourth:''})
  // const handleclick=()=>{
  //   setResult({first:"",second:"",third:"",fourth:""})
  // }
  return (
    <>
    {/* <h1 style={{textAlign:'center',paddingTop:"50px"}}>Barcode Scanner</h1>
    <div className="App" style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:"100vh",marginTop:'-50px'}}>
    <div className="main" style={{width:'300px'}}>
    <Form result={result} setResult={setResult}/>
    <button onClick={handleclick} className='btn btn-lg btn-danger'>Reset Value</button>
    </div>
    <div className="hello">
    <Scanner result={result} setResult={setResult}/>
    </div>
    </div> */}
    {/* <div className="App" style={{display:'flex',justifyContent:'space-around',alignItems:'center',height:"100vh",marginTop:'-50px'}}> */}
    <Auto/>
    {/* </div> */}
    </>
  );
}

export default App;
