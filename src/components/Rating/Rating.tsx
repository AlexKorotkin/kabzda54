import React from "react";
import imgWhite from './img/white.png'
import imgBlack from './img/black.png'

 export type RatingValueType =0|1|2|3|4|5
type RatingPropsType ={
    value: RatingValueType
    setRatingValue: (value:0|1|2|3|4|5)=> void
}
type StarPropsType ={
    selected: boolean
    value: RatingValueType
    setRatingValue: (value:0|1|2|3|4|5)=> void
}
export function Rating(props:RatingPropsType) {

    return (
        <div>
            <Star selected = {props.value>0} value ={1} setRatingValue ={props.setRatingValue} />
            <Star selected = {props.value>1} value ={2} setRatingValue ={props.setRatingValue} />
            <Star selected = {props.value>2} value ={3} setRatingValue ={props.setRatingValue} />
            <Star selected = {props.value>3} value ={4} setRatingValue ={props.setRatingValue} />
            <Star selected = {props.value>4} value ={5} setRatingValue ={props.setRatingValue} />
        </div>
    )
}

function Star(props:StarPropsType) {

    return (
        <span style={{border:'0px'}} onClick={()=>{props.setRatingValue(props.value)}}>
            {
                (props.selected) ? <img
                        src={imgBlack}
                        width={'60px'}
                        height={'60px'}
                        alt=""/>:
                    <img
                        src={imgWhite}
                        width={'60px'}
                        height={'60px'}
                        alt=""/>
            }
        </span>
    )

}