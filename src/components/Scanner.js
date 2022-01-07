import BarcodeScannerComponent from "react-webcam-barcode-scanner";
const Scanner = ({result,setResult}) => {
  const handleupdate = (err,resultdata)=>{
      console.log(resultdata);
      if (resultdata) {
          if (result.first === '') {
              setResult({...result,first:resultdata.text})
          }else if(result.second === ''){
              setResult({...result,second:resultdata.text})
          }else if(result.third === ''){
              setResult({...result,third:resultdata.text})
          }else if(result.fourth === ''){
              setResult({...result,fourth:resultdata.text})
          }else{
              setResult({first:'none',second:"none",third:'none',fourth:'none'})
          }

      }
  }
    return (
        <div>
            <BarcodeScannerComponent width={500} height={500} onUpdate={handleupdate}/>
        </div>
    )
}

export default Scanner
