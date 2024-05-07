import axios from "axios";
import { useEffect, useState } from "react";


const useCartItems = () => {
    const [items, setitems] = useState([])

useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/cartItems`)
    .then(data => {
        setitems(data.data)
    })
},[])

    return items
};

export default useCartItems;