import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';

function TareaList() {
  const [tareas, setTareas] = useState([
  ]);

  const [newTarea, setNewTarea] = useState("");

  const addtarea = () => {
    if (newTarea !== "") {
      setTareas([ { text: newTarea, isCompleted: false },...tareas]);
      setNewTarea("");
    }
  };

  const Lista = (index) => {
    const newTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, isCompleted: !tarea.isCompleted };
      } else {
        return tarea;
      }
    });
    setTareas(newTareas);
  };
  
  const handleDeleteTodo = (index) => {
    const newTareas = [...tareas];
    newTareas.splice(index, 1);
    setTareas(newTareas);
  };

  const ListaChange = (event) => {
    setNewTarea(event.target.value);
  };

  const KeyDown = (event) => {
    if (event.key === "Enter") {
      addtarea();
    }
  };

  return (
    <div className='App' >
            <header className='App-header'>
      <h1>  Lista de Tareas</h1>
      <ul>
      <input placeholder="Ingrese la tarea aqui..." type="text" value={newTarea} onChange={ListaChange} onKeyDown={KeyDown} />
      <br/>
      <Button variant="success" className='Button' onClick={addtarea}>Agregar Nueva Tarea</Button >
      <Button variant="danger"  onClick={handleDeleteTodo}>Eliminar Ultima Tarea Ingresada  </Button >
        {tareas.map((tarea, index) => (
          <li key={index}    style={{
            color: tarea.isCompleted ? "green" : "#ff5050",
          }}>
           {index + 1}. {tarea.text}{" "}
    <input type="checkbox" checked={tarea.isCompleted} onChange={() => Lista(index)} />{" "}
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default TareaList;