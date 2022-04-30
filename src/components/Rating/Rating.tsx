import React from "react";

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
                        src='https://w7.pngwing.com/pngs/690/192/png-transparent-black-star-three-dimensional-stars-angle-triangle-symmetry-thumbnail.png'
                        width={'60px'}
                        height={'60px'}
                        alt=""/>:
                    <img
                        src='https://w7.pngwing.com/pngs/457/519/png-transparent-star-white-stars-angle-white-triangle-thumbnail.png'
                        width={'70px'}
                        height={'70px'}
                        alt=""/>
            }
        </span>
    )

}