// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import TaskList from './TaskList';
// import './Home.css';

// const Home = () => {

//     const location=useLocation();

//     const {username}=location.state ||{};

//   return (
//     <div>
//      <div className='container'  style={{margin:'-250px'}}>
//      <h4>Welcome {username} !</h4>
    
//      </div>

//      <TaskList username={username}/>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate for navigation
  const { username } = location.state || {};

  // Function to handle button click and navigate to ViewTasks
 

  return (
    <div>
      <div className='container' style={{ margin: '-250px' }}>
        <h4>Welcome {username}!</h4>
        
        {/* View Tasks Button */}
      
      </div>

      <TaskList username={username} />
    </div>
  );
};

// Add some simple inline styles for the button (or use CSS if preferred)


export default Home;
