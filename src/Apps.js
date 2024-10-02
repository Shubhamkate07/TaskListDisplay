import React, { useState, useEffect } from 'react';

const Apps = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [storedName, setStoredName] = useState('');
   const [storedPwd, setStoredPwd] = useState('');

   // Function to handle saving data to localStorage
   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
      // Update state with the stored values to trigger re-render
      setStoredName(name);
      setStoredPwd(pwd);
   };

   // Function to remove data from localStorage
   const remove = () => {
      localStorage.removeItem('Name');
      localStorage.removeItem('Password');
      // Clear the state to reflect the removal
      setStoredName('');
      setStoredPwd('');
   };

   // On component mount, load the initial values from localStorage
   useEffect(() => {
      const savedName = localStorage.getItem('Name');
      const savedPwd = localStorage.getItem('Password');
      if (savedName) setStoredName(savedName);
      if (savedPwd) setStoredPwd(savedPwd);
   }, []);

   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>

         {storedName && (
            <div>
               Name: <p>{storedName}</p>
            </div>
         )}
         {storedPwd && (
            <div>
               Password: <p>{storedPwd}</p>
            </div>
         )}

         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};

export default Apps;
