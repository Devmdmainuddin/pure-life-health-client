
import {  useState } from "react";
import useAuth from "../hook/useAuth";
import axios from 'axios'
import CreateCategorey from "../components/CreateCategorey";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {  useNavigate } from "react-router-dom";
import useCategorey from "../hook/useCategorey";

const Dasbord = () => {
  const { user } = useAuth() || {};
  const categorey = useCategorey();
  // const [catitems, setcatitems] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

//   useEffect(() => {
//     const catedata = async () =>{
//       const { data } = await axios(`${import.meta.env.VITE_API_URL}/categorey`)
//       setcatitems(data);
//     }
//     catedata()
//     // fetch('http://localhost:5000/categorey')
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //         setcatitems(data);
          
//     //     });
// }, [])


  const handleAddProduct =async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const descaption=form.descaption.value;
    const price = form.price.value;
    const image = form.image.value;
    const category = form.category.value;
    const date = startDate
    const rating = form.rating.value;
    const email = user.email;
    const min_price = parseFloat(form.min_price.value)
    const max_price = parseFloat(form.max_price.value)
    
    // console.log(name, price, image, type)

    const info = { title, price,descaption, image, category,rating,date,min_price,
      max_price, email };

    // fetch("http://localhost:5000/addCartItems", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body:JSON.stringify(info)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data?.insertedId) {
    //      form.reset();
    //       alert('create categorey successfully')
    //   }
    // })
    
    try{
const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/addCartItems`,info)
console.log(data)
navigate('/myOrder')
    }
    catch (err){
      console.log(err)
    }
   
  };
  return (
    <div>



<div className="flex flex-col items-center">
        <CreateCategorey></CreateCategorey>

      </div>

      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] mt-6">
    

        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              add Product
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="title">
              title
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="title"
                id="title"
                name="title"
              />
               <label className="block mb-2 dark:text-white" htmlFor="descaption">
               descaption
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="descaption"
                id="descaption"
                name="descaption"
              />

<label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="category"
            >
              category Name
            </label>
            <select
              name="category"
              id="category"
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="Select category"
            >
              {categorey.map(cat=><option key={cat._id} value={`${cat.categorey}`} selected>
              {cat.categorey}
              </option>)}
              
              
            </select>
            <div>
              <label className='text-gray-700  block mt-4 mb-2 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
             
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
               <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />
             

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
              <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
               <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                date
              </label>
              

            
              {/* <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                
              /> */}
              {/* Date Picker Input Field */}
              <DatePicker className="w-full p-2 border  rounded-md focus:outline-[#FF497C]" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default Dasbord;