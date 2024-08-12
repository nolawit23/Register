import React, { useState } from 'react';
import Form from './component/Form';
import CallCard from './component/CallCard';

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>BITS</h2>
      <Form onSubmit={handleFormSubmit} />
      {submittedData.map((data, index) => (
        <CallCard key={index} name={data.name} year={data.year} batch={data.batch} />
      ))}
    </div>
  );
}

export default App;

