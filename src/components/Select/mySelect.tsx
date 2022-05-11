import React from "react";
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
        <div className={'select-item'} onClick={collapsedHandler}>{props.value || 'Имя'}</div>
        {
            props.collapsed && props.items.map(i => {
                return <div
                    className={'select-item'}
                    onMouseEnter={(e) => {
                        let elem = e.target as HTMLDivElement
                        elem.style.background = "grey"
                    }}
                    onMouseLeave={(e) => {
                        let elem = e.target as HTMLDivElement
                        elem.style.background = "white"
                    }}
                    onClick={() => {
                        props.onChange(i.value)
                    }}>
                    {i.title}
                </div>
            })
        }

    </div>
}