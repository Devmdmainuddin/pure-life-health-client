import { Link, useLoaderData } from "react-router-dom";
// import useAllCart from "../../hook/useAllCart";
import { useEffect, useState } from "react";
import axios from "axios";


const About = () => {
    // const items = useAllCart()
    const [itemsperpage, setitemsperpage] = useState(9)
    const { count } = useLoaderData()
    const numberofPage = Math.ceil(count / itemsperpage);
const [currentPage,setcurrentPage]=useState(0)
const [items,setitems]=useState([])
const pages = [...Array(numberofPage).keys()]

    // const pages = [];
    // for (let i = 0; i< numberofPage; i++){
    //     pages.push(i)
    // }
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/items?page=${currentPage}&size=${itemsperpage}`)
        .then(data => {
            setitems(data.data)
        })
    },[currentPage,itemsperpage])
    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }
const handlepre =()=>{
    if(currentPage > 0){
        setcurrentPage(currentPage - 1)
    }
}
const handlenext =()=>{
    if(currentPage < pages.length -1){
        setcurrentPage(currentPage + 1)
    }
}

    return (<>

        <div className="hero min-h-screen bg-base-200 py-12">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/1bhH9fb/5.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/nMGKqWx/7.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />

                </div>
                <div className='lg:w-1/2  p-4'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
                items.map(item =>
                    <article key={item._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={item.image}
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">
                            <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {item.category} </h3>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">{item.name}</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {item.descaption}
                            </p>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                <span>{item.price}</span>
                                <span>{item.rating} </span>
                            </div>
                            <Link to={`/cartItems/${item._id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-rose-600 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>details</button></Link>
                        </div>

                    </article>)
            }

        </div>
        {/* <h2>total items : {count.length}</h2> */}
        <h2>pagination</h2>
        <p>current page : {currentPage}</p>
        <button onClick={handlepre}>pre</button>
        {
            pages.map(page => <button onClick={()=>setcurrentPage(page)} key={page} className={currentPage === page ? "bg-orange-300 p-3" : 'mx-6 p-3 border-2'}>{page}</button>)
        }
        <button onClick={handlenext}>next</button>
        <select name="" value={itemsperpage} onChange={handleItemsPerPage} id="">
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
            <option value="18">18</option>
            <option value="21">21</option>

        </select>
    </>

    );
};

export default About;