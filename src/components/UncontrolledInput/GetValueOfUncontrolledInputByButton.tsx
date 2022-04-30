import React, {useRef, useState} from "react";

export  function GetValueOfUncontrolledInputByButton(){

    let [inputValue, setInputValue] = useState('5');
    let inputRef = useRef<HTMLInputElement>(null);
    let OnClickHandler = () => {
        let el = inputRef.current as HTMLInputElement
        setInputValue(el.value)
    }

    return <div>
        <input ref={inputRef}  type="text"/> <button onClick={OnClickHandler} >x</button>
        <span>{inputValue}</span>
    </div>

}