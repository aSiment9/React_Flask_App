import React, { useState, useEffect }from 'react'

const App = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    fetch("/list").then(res => res.json())
      .then(data => {
        setData(data); // Assuming data is an array
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.length ===  0 ? (
        <p>Loading...</p>
      ) : (
        data.list.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
    </div>
  );
};
export default App