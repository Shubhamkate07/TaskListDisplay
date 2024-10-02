import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Todos.css';

const Todos = () => {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  });

  const [arr, setArr] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: todo.title,
      description: todo.description
    };
    
    setArr([...arr, data]);
    setTodo({ title: '', description: '' }); // Clear form after submission
  };

  const deleteTask=(index)=>{
let filterdData=arr.filter((ele,ind)=>{
    return ind!=index;
})

setArr(filterdData);
  }

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title"
            value={todo.title} 
            onChange={handleChange} 
            placeholder="Enter title"
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            name="description"
            value={todo.description} 
            onChange={handleChange} 
            placeholder="Enter description"
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <div className='arrdata'>
        {arr.map((ele, ind) => (
          <div className='container' key={ind}>
            <p><span>{ele.name}</span><span>-:  {ele.description}</span> <i className="fa-solid fa-trash" id='ind' onClick={()=>deleteTask(ind)}></i></p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
