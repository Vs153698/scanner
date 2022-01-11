import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const Auto = () => {
    const [focusindex, setFocusindex] = useState(0)
    const inputref1 = useRef()
    const inputref2 = useRef()
    const inputref3 = useRef()
    useEffect(() => {
        console.log("focus index", focusindex);
        
        if (focusindex === 0) {
            inputref1.current.focus()

        }
        else if (focusindex === 1) {
            inputref2.current.focus()

        }
        else {
            inputref3.current.focus()
        }
    },[focusindex])
    const wrapper = useRef()
    const handleKeyup = (e) => {
        const maxlength = e.target.getAttribute("maxLength")
        console.log("maxLength is", maxlength);
        const length = e.target.value.length
        console.log("length is", maxlength);
        if (parseInt(maxlength) === parseInt(length)) {
            setFocusindex(focusindex >2 ? 0 : parseInt(focusindex) + 1)
        }
    }


    return (
        <>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <div className="navbar-brand" href="#">Autojump to next formfield</div>
            </nav>
            <div className="wrapper">
                <div className="row mb-4 mt-4">
                    <div className="col-10 offset-1">
                        <div id="autojump" ref={wrapper} onKeyUp={handleKeyup} className="row">
                            <div className="col-4">
                                <input type="text" ref={inputref1} onKeyUp={handleKeyup} className="form-control" maxLength="12" placeholder="max-length:12" />
                            </div>
                            <div className="col-4">
                                <input type="text" ref={inputref2} onKeyUp={handleKeyup} className="form-control" maxLength="12" placeholder="max-length:12" />
                            </div>
                            <div className="col-4">
                                <input type="text" ref={inputref3} className="form-control" maxLength="14" placeholder="max-length:14" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="tmp-wrapper container">
                <h1>Autojump to next formfield</h1>
                <p>
                    After reaching the max-length, it automatically focuses the next formfield/input.
                </p>
            </div>
        </>
    )
}

export default Auto
