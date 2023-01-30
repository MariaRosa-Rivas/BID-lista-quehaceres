import React from 'react'

const Tarea = (props) => {

  return (
    <div>
        <li>{props.status === true ?
            <s>{props.name}</s>
            :
            props.name}
            <input type="checkbox" checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)}/>
            <button onClick={(e)=>props.handleDelete(props.index)}>Delete</button>
        </li>
    </div>
  )
}

export default Tarea