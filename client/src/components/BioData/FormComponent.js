import React from 'react'
import { useState } from 'react';


function FormComponent(props) {

  return (
    <div class="form-group biodata-items">
    <label for="name">{props.title}:</label>
    <input type={props.type ? props.type : "text"} id={props.title} name={props.title} value={props.value} onChange={props.onChange} required />
  </div>
  )
}

export default FormComponent;