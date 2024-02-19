// EntityDummyComponent.jsx
import React from 'react';
import '../App.css';

const dummyData = {
  "_id": {
    "$oid": "65d02a8bc82bc44e03331ed4"
  },
  "name": "Prinsesstårta",
  "description": "Traditional layer cake with sponge cake, cream, marzipan.",
  "price": 29.99,
  "calories": 350,
  "type": "layer cake",
  "occasions": [
    "celebrations",
    "parties"
  ]
};

const EntityDummyComponent = () => {
  return (
    <div>
      <h2>{dummyData.name}</h2>
      <table className="entity-table">
        <tbody>
          <tr>
            <td><strong>Description:</strong></td>
            <td>{dummyData.description}</td>
          </tr>
          <tr>
            <td><strong>Price:</strong></td>
            <td>${dummyData.price}</td>
          </tr>
          <tr>
            <td><strong>Calories:</strong></td>
            <td>{dummyData.calories}</td>
          </tr>
          <tr>
            <td><strong>Type:</strong></td>
            <td>{dummyData.type}</td>
          </tr>
          <tr>
            <td><strong>Occasions:</strong></td>
            <td>{dummyData.occasions.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EntityDummyComponent;
