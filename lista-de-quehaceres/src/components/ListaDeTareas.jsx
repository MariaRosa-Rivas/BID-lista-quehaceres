import React, { useState } from 'react'
import Tarea from './Tarea';
const ListaDeTareas = () => {

    const [chores, SetChores] = useState([]);
    const [newChores, setNewChores] = useState("");


    const handleNewchores = (e) => {
        e.preventDefault();
        let aux=[...chores]
        aux.push({name:newChores, status:false})
        SetChores([...aux]);
        console.log("chores:", aux);
        setNewChores("");
    }
    const handleStatusChange=(value, idx)=>{
        let aux=[...chores]
        aux[idx].status=value;
        SetChores([...aux]);
    }
    const handleDeleteChange=(idx)=>{
        let aux=[...chores]
        let filtered = aux.filter((value, index, array)=> index !== idx)
        SetChores([...filtered]);
    }

  return (
    <div>
        <form onSubmit={ handleNewchores }>
            <input type="text" value={newChores} onChange ={(e)=> setNewChores(e.target.value)}  />
            <button>Agregar</button>
        </form>
        <ul>
           {chores.map((item, idx, list)=>{
            return(
                <Tarea key={"Tarea" + item + idx}  {...item} handleStatus={handleStatusChange} index={idx} handleDelete={handleDeleteChange}/>
            )
           })}
        </ul>
    </div>
  )
}

export default ListaDeTareas