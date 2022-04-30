import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

type PageTitlePropsType ={
    title:string
}
function App() {
    let[onOff,setOnOff] = useState(false);
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    function setStatus(){
        setOnOff(!onOff);
    }
    return (
        <div className="App">
            <PageTitle title = {'This is components'} />
            <Rating value ={ratingValue} setRatingValue ={setRatingValue} />
            <Accordion titleValue= {'Контроль Меню'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
            <OnOff status={onOff} setStatus={setStatus}/>
            <OnOff2/>
            <UncontrolledAccordion titleValue={'USERS'} />
            <UncontrolledRating/>
        </div>
    );
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>
}


export default App;
