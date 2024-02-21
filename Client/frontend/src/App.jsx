//app.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
// import EntityDummyComponent from "./Components/EntityDummyComponent";
import axios from 'axios'
function App() {
  const [cakes,setCakes]=useState([])
  


  useEffect(() => {
    axios.get('http://localhost:3000/getcakes')
      .then(response => {
        setCakes(response.data);
        console.log(response.data);
      })
      .catch(err => console.log(err));
}, []);



  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getcookies');
        setCookies(response.data);
      } catch (error) {
        console.error('Error fetching cookies:', error);
      }
    };

    fetchCookies();
  }, []);


  return (
    <div>
      <div>
        <h1 className="title">Welcome to the website!</h1>
        <p>This website displays a list of good swedish desserts</p>
      </div>

      {/* <div>
        <EntityDummyComponent />
      </div> */}

      <div>
      {/* <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Calories</th>
              <th>Type</th>
              <th>Occasions</th>
            </tr>
          </thead>
          <tbody>
            {cakes.map(cake => (
              <tr key={cake._id}>
                <td>{cake.name}</td>
                <td>{cake.description}</td>
                <td>{cake.price}</td>
                <td>{cake.calories}</td>
                <td>{cake.type}</td>
                <td>{cake.occasions.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

<div className="cookies-table-container"> {/* Container for styling */}
      <table className="cookies-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Ingredients</th>
          <th>Origin</th>
          {/* <th>Image</th> */}
        </tr>
      </thead>
      <tbody>
        {cookies.map(cookie => (
          <tr key={cookie._id}>
            <td>{cookie.name}</td>
            <td>{cookie.description}</td>
            <td>{cookie.ingredients.join(', ')}</td>
            <td>{cookie.origin}</td>
            {/* <td><img src={cookie.image_url} alt={cookie.name} style={{ width: '100px', height: '100px' }} /></td> */}
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      </div>
    </div>
  );
}

export default App;
