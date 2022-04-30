import React, {ChangeEvent, useState} from "react";

export  function UncontrolledInput(){

    let [inputValue, setInputValue] = useState('5')

    function onChangeHandler(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.currentTarget.value);
    }

    return <div>
        <input value={inputValue} onChange={onChangeHandler} type="text"/>
    </div>

}