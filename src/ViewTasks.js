import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ViewTasks.css';

const ViewTasks = () => {

    const [searchQuery, setSearchQuery] = useState('');

 
    const textRefs = useRef([]); // Array of refs
    const location = useLocation();
    const { arrData } = location.state || {};
    const [arr, setArr] = useState(arrData || []);
  

    const Increase = () => {
        const filteredData = arrData.filter((ele) => ele.priority >= 3);
        setArr(filteredData);
    };

    const Decrease = () => {
        const filteredData = arrData.filter((ele) => ele.priority < 3);
        setArr(filteredData);
    };

    const handleSearch = (e) => {
   
        setSearchQuery(e.target.value);
       const filterdData1=arrData.filter((ti)=>{ return ti.title.toLowerCase().includes(e.target.value.toLowerCase())});

       setArr(filterdData1);
       
      };

    const markAsDone = (index) => {
        if (textRefs.current[index]) {
            textRefs.current[index].style.textDecoration = 'line-through'; // Change title color to pink
        }
    };

    return (
        <div className="task-container">
            <h4 className="welcome-message">Welcome Buddy!!</h4>
            <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />

            <div className='btn-container'>
                <button onClick={Increase} className='btn imp-task'>IMP-Task</button>
                <button onClick={Decrease} className='btn less-imp'>Less-IMP</button>
            </div>

            <div className="card-list">
                {arr.map((ele, ind) => (
                    <div key={ind} className="task-card">
                        <h4 className="task-title" ref={(el)=>textRefs.current[ind]=el}>
                            {ele.title}
                        </h4>
                        <p className="task-description" >{ele.description}</p>
                        <span className="task-info">Priority: {ele.priority}</span>
                        <span className="task-info">Date: {ele.date}</span>
                        <button onClick={() => markAsDone(ind)}>Mark-As-Done</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewTasks;
