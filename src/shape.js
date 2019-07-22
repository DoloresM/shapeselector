import React from "react";

const Shape = (props) =>{
  const shape = props.shape;
  const selectShape = props.selectShape;
  const timesclicked = props.timesclicked;
  

  return (
    <div className={shape} onClick={() => {selectShape(shape); timesclicked(); }}/>
  )
}

export default Shape
