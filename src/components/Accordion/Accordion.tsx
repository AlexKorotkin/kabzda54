import React from "react";

type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    setAccordionCollapsed: (value:boolean)=> void
}
type AccordionTitlePropsType = {
    title:string
    collapsed: boolean
    setAccordionCollapsed: (value:boolean)=> void
}
export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title = {props.titleValue}
                            collapsed={props.collapsed}
                            setAccordionCollapsed={props.setAccordionCollapsed} />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType){
    return (
        <h1 onClick={()=> {props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h1>
    )
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}