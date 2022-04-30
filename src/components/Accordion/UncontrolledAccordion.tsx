import React, {useState} from "react";

type AccordionPropsType = {
    titleValue:string

}
type AccordionTitlePropsType = {
    title:string
    setCollapsed: Function
    collapsed: boolean
}
export function UncontrolledAccordion(props:AccordionPropsType) {
    let[collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title = {props.titleValue} setCollapsed={setCollapsed} collapsed ={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType){
    return (
        <h1 onClick={()=> {props.setCollapsed(!props.collapsed)}}>{props.title}</h1>
    )
}


function AccordionBody() {
    return <ul>
        <li>1.Петя</li>
        <li>2.Галя</li>
        <li>3.Витя</li>
    </ul>
}