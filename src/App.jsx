import React from 'react';
import Navbar from './component/Navbar';
import Form from './component/Form';
const App = () => {
    return (
        <div className='dashboard'>
            <Navbar /> 
         <div className='form'>
         <Form />
         </div>
 </div>
 
    );
};

export default App;


