

// import React, { useState } from 'react';
// import './TaskList.css'; // Import the CSS file
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from 'react-router-dom';

// const TaskList = (props) => {
//     const navigate = useNavigate();
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [priority, setPriority] = useState(1); // Default priority
//     const [date, setDate] = useState('');
//     const [tasks, setTasks] = useState([]);

//     const handleViewTasks = () => {
//         navigate('/viewtasks', { state: { arrData: tasks } }); // Pass tasks to ViewTasks
//     };

//     const buttonStyle = {
//         marginTop: '20px',
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontSize: '16px',
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         localStorage.setItem('title',title);
//         localStorage.setItem('description',description);
//         localStorage.setItem('priority',priority);
//         localStorage.setItem('date',date);

//         if (title && description && priority && date) {
//             const newTask = { 
//                 title: title, 
//                 description: description, 
//                 priority: priority, 
//                 date: date 
//             };
//             setTasks([...tasks, newTask]);
//             setTitle('');
//             setDescription('');
//             setPriority(1); // Reset priority
//             setDate(''); // Reset date
//         }
//     };

//     const deleteTask = (index) => {
//         const filteredData = tasks.filter((ele, ind) =>{
//             return index!==ind;
//         })
//         setTasks(filteredData);
//     };

//     return (
//         <div className="task-list-container">
//             <button onClick={handleViewTasks} style={buttonStyle}>View Tasks</button>
//             <h4>Your Tasks:</h4>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Task Title:</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Task Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Priority (1-5):</label>
//                     <input
//                         type="number"
//                         value={priority}
//                         onChange={(e) => setPriority(e.target.value)}
//                         min="1"
//                         max="5"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Due Date:</label>
//                     <input
//                         type="date"
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Add Task</button>
//             </form>

//             <ul>
//                 {tasks.map((task, ind) => (
//                     <li key={ind}>
//                         <strong>{localStorage.getItem('title') && (
//             <div>
//                Title: <p>{localStorage.getItem('Name')}</p>
//             </div>
//          )}</strong> - {task.description} 
//                         <br />
//                         Priority: {task.priority}, Due Date: {task.date} 
//                         <i className="fa-solid fa-trash" id='ind'  style={{paddingLeft:'20px', cursor: 'pointer'}} onClick={() => deleteTask(ind)}></i>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TaskList;



import React, { useState, useEffect } from 'react';
import './TaskList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const TaskList = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1); // Default priority
    const [date, setDate] = useState('');
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, [tasks]);

    const handleViewTasks = () => {
        navigate('/viewtasks', { state: { arrData: tasks } });
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = { 
            title: title, 
            description: description, 
            priority: priority, 
            date: date 
        };

        // const updatedTasks = [...tasks, newTask];
        setTasks([...tasks,newTask]);

        // Save updated tasks in localStorage
        localStorage.setItem('tasks', JSON.stringify([...tasks,newTask]));

        // Reset form fields
        setTitle('');
        setDescription('');
        setPriority(1);
        setDate('');
    };

    const deleteTask = (index) => {
        const filteredTasks = tasks.filter((_, ind) => index !== ind);
        setTasks(filteredTasks);

        // Update localStorage after deleting a task
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    };

    return (
        <div className="task-list-container">
            <button onClick={handleViewTasks} style={buttonStyle}>View Tasks</button>
            <h4>Your Tasks:</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Task Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Priority (1-5):</label>
                    <input
                        type="number"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task, ind) => (
                    <li key={ind}>
                        <strong>{task.title}</strong> - {task.description} 
                        <br />
                        Priority: {task.priority}, Due Date: {task.date} 
                        <i 
                            className="fa-solid fa-trash" 
                            style={{ paddingLeft: '20px', cursor: 'pointer' }} 
                            onClick={() => deleteTask(ind)}
                        ></i>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
