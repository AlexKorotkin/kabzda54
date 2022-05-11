import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './Select.module.css'

export type ItemType2 = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType2[]

}

export function Select(props: SelectPropsType) {
    let[active,setActive] = useState<boolean>(false);
    let[hoveredElementValue,setHoveredElementValue] = useState<boolean>(props.value);

    let selectedItem = props.items.find(i=> i.value === props.value)
    let hoveredItem = props.items.find(i=> i.value === hoveredElementValue)

    useEffect(()=>{setHoveredElementValue(props.value)},[props.value]) // зафиксировал один раз, когда value изменилось снаружи, но дальше
        // когда мы будем водить мышкой, перерисовка компаненты будет происходить, но так как value не меняется (зависимости),ничего не будет происходить.

    let toggleItem = () => setActive(!active);
    let onItemClick = (value: string) => {
        props.onChange(value)
        setActive(!active)
    };
    function onKeyUp(e:KeyboardEvent<HTMLDivElement>){
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i=0; i<= props.items.length; i++){
                if(props.items[i].value === hoveredElementValue){
                    let pretendentElement = e.key === 'ArrowDown'? props.items[i+1]: props.items[i-1]
                    if(pretendentElement){
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }


    return <div className={style.select}
                tabIndex={0}
                onKeyUp={onKeyUp}>
                <span className={style.main}
                      onClick={toggleItem}
                >{selectedItem && selectedItem.title}
                </span>
                {
                    active && <div className={style.items}>

                        {props.items.map(i => <div
                            className={style.item + ' ' + (hoveredItem === i ? style.selected: '')}
                         onClick={()=> {onItemClick(i.value)}}
                            onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                        >{i.title}</div>)}
                    </div>
                }

    </div>
}

