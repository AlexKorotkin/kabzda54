import React from "react";

type AccordionPropsType = {
    items: string[];
    titleValue:string
    collapsed:boolean
    setAccordionCollapsed: (value:boolean)=> void
}
type AccordionTitlePropsType = {
    title:string
    items: string[]
    collapsed: boolean
    setAccordionCollapsed: (value:boolean)=> void
}
type AccordionBodyPropsType = { items: string[] }


export function Accordion(props:AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title = {props.titleValue}
                            items = {props.items}
                            collapsed={props.collapsed}
                            setAccordionCollapsed={props.setAccordionCollapsed} />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType){
    return (
        <h1 onClick={()=> {props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h1>
    )
}


function AccordionBody(props:AccordionBodyPropsType) {
    let itemsBody = props.items.map(i => <li>{i}</li> )
    return <ul>
        {itemsBody}
    </ul>
}