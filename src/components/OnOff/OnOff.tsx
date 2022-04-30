import React from "react";
import './OnOff.css';


export function OnOff(props:any){
    //способ 1 и способ 2 стилизации span
    return <div>
        <span onClick={()=> props.setStatus()} className={props.status ? 'green':''}>On</span>
        <span onClick={()=> props.setStatus()} className={!props.status? 'red':''} >Off</span>
        <span className={`${props.status ? 'green':'red'} blue`}></span>
        <span className={'blue '+ (props.status ? 'green':'red')}></span>
    </div>
}