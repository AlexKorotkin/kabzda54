import React, {ChangeEvent, useState} from "react";

export  function ControlledInput(){
 let [parentValue, setParentValue]= useState('')

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <div>
        <input value={parentValue} onChange={onChangeHandler}   type="text"/>

    </div>

}

export  function ControlledCheckbox(){
    let [parentValue, setParentValue]= useState(false)
    let onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => setParentValue(e.currentTarget.checked)

    return <div>
        <input checked={parentValue}  onChange={onChangeHandler}  type="checkbox"/>

    </div>

}

export  function ControlledSelect(){
    let [parentValue, setParentValue]= useState<string| undefined>('')
    let onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <div>
        <select value={parentValue} onChange={onChangeHandler} name="2" id="1">
            <option value={1} >Пункт 1</option>
            <option value={2} >Пункт 2</option>
            <option value={3} >Пункт 3</option>
        </select>
    </div>

}