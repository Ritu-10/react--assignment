import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      {console.log(data)}
      <div>
        <input type="search" value={search} onChange={handleSearch} />
        {data
          ?.filter((x) => {
            return (
              x.name.toLowerCase().includes(search.toLowerCase()) 
             
            );
          })
          .map((x, id) => {
            return (
              <div key={id}>
                <h4>
                  {x.email}
                  <br /> {x.name}
                </h4>
                <button>DELETE</button>
              </div>
            );
          })}
      </div>
    </>
  );
}