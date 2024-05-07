import axios from 'axios';
import  { useEffect, useState } from 'react';

const useCategorey = () => {
    const [catitems, setcatitems] = useState([])
    useEffect(() => {
        const catedata = async () =>{
          const { data } = await axios(`${import.meta.env.VITE_API_URL}/categorey`)
          setcatitems(data);
        }
        catedata()
},[]);

return catitems
}


export default useCategorey;