import React from 'react';

function CallCard({ name, year, batch }) {
  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid'}}>
      <h3 style={{ marginBottom: '10px' }}>Register</h3>
      <p>Name: {name}</p>
      <p>Year: {year}</p>
      <p>Batch: {batch}</p>
    </div>
  );
}

export default CallCard;

