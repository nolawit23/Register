import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, year, batch });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Year:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Batch:</label>
        <input
          type="text"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', border: '1px solid' }}
        />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', border: 'none' }}>
        Submit
      </button>
    </form>
  );
}

export default Form;

