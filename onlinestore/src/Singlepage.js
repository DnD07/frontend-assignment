import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const API = "https://fakestoreapi.com/products";

const Singlepage = () =>{

const {id} = useParams();

useEffect(() =>{
    getSinglePageProduct(`${API}?id=${id}`)
})

    return(
        <>ddcnjd</>
    )
}

export default Singlepage;