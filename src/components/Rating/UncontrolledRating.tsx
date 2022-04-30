import React, {useState} from "react";


type StarPropsType ={
    selected: boolean
    setValue: Function
    id: number
}
export function UncontrolledRating() {
        let[value,setValue]= useState(0)
    return (
        <div>
            <Star selected = {value>0} id={1} setValue ={setValue}/>
            <Star selected = {value>1} id={2} setValue ={setValue}/>
            <Star selected = {value>2} id={3} setValue ={setValue}/>
            <Star selected = {value>3} id={4} setValue ={setValue}/>
            <Star selected = {value>4} id={5} setValue ={setValue}/>
        </div>
    )
}

function Star(props:StarPropsType) {
    return (
        // (props.selected) ? <span onClick={()=>{props.setValue(props.id)}} ><b>Star </b></span>: <span onClick={()=>{props.setValue(props.id)}} >Star </span>
            (!props.selected) ? <img onClick={()=>{props.setValue(props.id)}}
                    src='https://w7.pngwing.com/pngs/457/519/png-transparent-star-white-stars-angle-white-triangle-thumbnail.png'
                    width={'70px'} height={'70px'} alt=""/>
                : <img onClick={()=>{props.setValue(props.id)}}
                    src='https://w7.pngwing.com/pngs/690/192/png-transparent-black-star-three-dimensional-stars-angle-triangle-symmetry-thumbnail.png'
                    width={'70px'} height={'70px'} alt=""/>


    )

}