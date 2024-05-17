import axios from "axios";
import { useEffect, useState } from "react";


const useAllCart = () => {
const [items,setitems]=useState([])

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/items`)
    .then(data => {
        setitems(data.data)
    })
},[])


    return items
};

export default useAllCart;