import React from 'react'

const Form = ({result,setResult}) => {
    const handlechange = (e)=>{
        setResult({...result,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="mb-3 mt-5">
                <label style={{fontFamily: 'Baloo Bhai 2'}} for="exampleFormControlInput1" className="form-label">FIRST DATA</label>
                <input type="text" className="form-control" onChange={handlechange} name='first' disabled={result.first !== '' && result.first.length >= 12 ? true : false} min={12} value={result.first} id="exampleFormControlInput1" placeholder="234567788888" />
            </div>
            <div className="mb-3">
                <label style={{fontFamily: 'Baloo Bhai 2'}} for="exampleFormControlInput11" className="form-label">SECOND DATA</label>
                <input type="text" className="form-control" onChange={handlechange} name='second' disabled={result.second !== '' && result.second.length >= 12 ? true : false}min={12}  value={result.second} id="exampleFormControlInput11" placeholder="23456778886565" />
            </div>
            <div className="mb-3">
                <label style={{fontFamily: 'Baloo Bhai 2'}} for="exampleFormControlInput1111" className="form-label">THIRD DATA</label>
                <input type="text" className="form-control" onChange={handlechange} name='third' disabled={result.third !== '' && result.third.length >= 12 ? true : false} min={12} value={result.third} id="exampleFormControlInput1111" placeholder="43435535354545" />
            </div>
            <div className="mb-3">
                <label style={{fontFamily: 'Baloo Bhai 2'}} for="exampleFormControlInput111" className="form-label">FOURTH DATA</label>
                <input type="text" className="form-control" onChange={handlechange} name='fourth' disabled={result.fourth !== '' && result.fourth.length >= 12 ? true : false} min={12}  value={result.fourth} id="exampleFormControlInput111" placeholder="344343434343" />
            </div>
        </div>
    )
}

export default Form
