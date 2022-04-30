import React, {useState} from "react";
import './mySelect.css';

export type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

export function MySelect(props: SelectPropsType) {

    let collapsedHandler = () => props.setCollapsed(!props.collapsed)
    return <div className={'select'}>
        <div className={'.select-item'} onClick={collapsedHandler}>{props.value || 'Значение'}</div>
        {
            props.collapsed && props.items.map(i =>{
                return <div onMouseEnter={(e)=>{
                    let elem =e.target as HTMLButtonElement
                    elem.style.background = "grey"
                }}
                            onMouseLeave={(e)=>{
                                let elem =e.target as HTMLButtonElement
                                elem.style.background = "white"
                            }}
                                onClick={()=>{props.onChange(i.value)}}>
                    {i.title}
                </div>
            })
        }

    </div>
}