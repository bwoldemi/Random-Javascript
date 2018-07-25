import React from 'react'

export const Person = (props)=>{
    return <div>
                    <p onClick={props.click}> Name {props.name} age  {props.age} </p>
                    <p> {props.children} </p>
                    <input onChange={props.changeName} type="text"/>
            </div>
}

