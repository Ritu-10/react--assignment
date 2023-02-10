import React, { useEffect, useState } from 'react';
import './style.css';
import style from "./App.module.css"
export default function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  // const [fildata, setFilData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function deleted(id) {
    setData((pres) => {
      let newData = [...pres];
      let filterData = newData.filter((x) => x.id !== id);
      return filterData;
    });
  }
  function Sorting() {
    console.log("hello")
    setData((pres) => {

      let newData = [...pres];
      newData.sort((a,b)=> {
      return  a.name.localeCompare( b.name) 
      } );
      console.log(newData)
      return newData;
    });
  }
  return (
    <>
      {/* {console.log(data)} */}
      <div>
        <input type="search" value={search} onChange={handleSearch} />
        <button onClick={Sorting}>a to z</button>
        {data
          ?.filter((x) => {
            return (
              x.name.toLowerCase().includes(search.toLowerCase()) ||
              x.email.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((x, id) => {
            return (
              <div className={style.wrapper} key={id}>
                <h4>
                  {x.email}
                  <br /> {x.name}
                </h4>
                <button onClick={() => deleted(x.id)}>DELETE</button>
              </div>
            );
          })}
      </div>
    </>
  );
}
