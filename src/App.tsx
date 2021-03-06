import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {GetValueOfUncontrolledInputByButton} from "./components/UncontrolledInput/GetValueOfUncontrolledInputByButton";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput/ControlledInput";
import {ItemType, MySelect} from "./components/Select/mySelect";
import {Select} from "./components/Select/Select";

type PageTitlePropsType ={
    title:string
}
function App() {
    let[onOff,setOnOff] = useState(false);
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let[selectValue,setSelectValue] = useState<string>('');
    let[collapsed,setCollapsed] = useState<boolean>(false);
    let[selectValue2,setSelectValue2] = useState<string>('2');

    let items:string[] = ['Stars','Moon','Sun','Cars'];
    let selectItems:ItemType[] = [
        {title: 'Valera', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Nika', value: 3}
    ];
    let selectItems2:ItemType[] = [
        {title: 'Valera', value: '1'},
        {title: 'Alex', value: '2'},
        {title: 'Nika', value: '3'}
    ];
    function setStatus(){
        setOnOff(!onOff);
    };
    function nameSelect(value:number){
        let name = selectItems.find(n=> n.value === value)
        if (name){
            setSelectValue(name.title)
            setCollapsed(false)
        }
    }

    function onChange (value: string){
        let select = selectItems2.find(v => v.value === value)
        if (select) setSelectValue2(select.value)

    }

    return (
        <div className="App">
            <PageTitle title = {'This is components'} />
            <Rating value ={ratingValue} setRatingValue ={setRatingValue} />
            <Accordion items = {items} titleValue= {'???????????????? ????????'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
            <OnOff status={onOff} setStatus={setStatus}/>
            <OnOff2/>
            <UncontrolledAccordion titleValue={'USERS'} />
            <UncontrolledRating/>
            <UncontrolledInput/>
            <GetValueOfUncontrolledInputByButton/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <MySelect items={selectItems} value={selectValue} onChange={nameSelect} collapsed = {collapsed} setCollapsed ={setCollapsed} />
           <Select value={selectValue2} onChange={onChange} items={selectItems2} />
        </div>
    );
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>
}


export default App;
