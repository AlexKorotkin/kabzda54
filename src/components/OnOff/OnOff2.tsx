import React, {useState} from "react";



export function OnOff2(){
    let [on, setOn] =useState(false);
    const onStyle = {
        width: '50px',
        border: '1 px solid black',
        backgroundColor: on? 'green': ''

    }
    let  offStyle ={
        width: '50px',
        border: '1 px solid black',
        backgroundColor: !on ? 'red': ''
    }
    let indicatorStyle = {
          marginLeft: '10px',
         width: '10px',
         height: '10px',
         borderRadius: '50%',
         backgroundColor: on? 'green': 'red'
    }
    let b = {
        color:'blue'
    }

    return <div>
        <span onClick={()=>{setOn(true)}} style={onStyle}>ON</span>
        <span onClick={()=>{setOn(false)}} style={offStyle}>OFF</span>
        <span style={indicatorStyle}></span>
    </div>
}