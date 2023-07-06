import React, { useEffect, useState} from "react";
import "./App.css"
import Singlepage from "./Singlepage";
// import { NavLink } from "react-router-dom";


const Home = () => {

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
//   console.log(items.filter(items => items.title.toLowerCase().includes("f")))

  const fetchAPI = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      setItems(await res.json())
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand">Online Store</p>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="text" onChange={(e) => setQuery(e.target.value)}>
              Search
            </button>
          </form>
        </div>
      </nav>
      {
        items.filter(items => items.title.toLowerCase().includes(query))       
        
        .map((curItem) => {
            return(
                
         <div key= {curItem.id} className="card " style={{width: "18rem", gap: "3rem"}}>
  <div className="card-body">
    <h5 className="card-title">{curItem.title}</h5>
  <p className="card-price">{curItem.price}</p>
    <p className="card-text">{curItem.description}</p>
    <p className="card-text">{curItem.category}</p>
       
  <img src={curItem.image} className="card-img-top" alt="items" style={{width: "12rem", height: "12rem"}}/>
       
    <p className="rate" href="#">Rate: {curItem.rating.rate}</p>
    <p className="count" href="#">Count: {curItem.rating.count}</p>
  </div>
   
</div>

                
                
            )
        })
      }

   

     

      
    </>
  );
};

export default Home;
