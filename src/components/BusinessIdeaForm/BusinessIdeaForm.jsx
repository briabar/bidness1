import React from 'react';
import {
    Button,
  } from "semantic-ui-react";

export default function BusinessIdea(props){
    console.log(props)
    

    return (
        <>
    <form autoComplete="off" onSubmit={props.handleSave}>
    <span className="businessidea">{props.value}</span>
    <input name="idea" type="hidden" value={props.value}></input>
    <Button
    color="blue"
    fluid
    size="large"
    type="submit"
    className="btn"
  >

    Save Idea
</Button>
<br />
<Button
    color="blue"
    fluid
    size="large"
    onClick={props.handleIdea}
    className="btn"
  >

    Generate Disruptive Business Idea
</Button>
</form>
</>
)
}