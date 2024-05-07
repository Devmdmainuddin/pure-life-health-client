// import { data } from 'autoprefixer';
// import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategorey from '../../hook/useCategorey';
import useCartItems from '../../hook/useCartItems';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Categorey = () => {

    const items = useCartItems()
    const catitems = useCategorey();
    const [categorey, setcategorey] = useState(items || [])

    const catfilter = item => {
        const filteritems = items.filter(p => p.category === item)
        setcategorey(filteritems)
    }

    return (
        <div>
            <div className='flex gap-x-4 justify-center'>
                <button className="" type="button" onClick={() => setcategorey(items)}>all</button>
                {catitems.map(cate => <p key={cate._id} onClick={() => catfilter(cate.categorey)}>{cate.categorey
                }</p>
                )}
            </div>



            {/* {cat.filter(cat=>cat.category===cat.category).map(c=>)} */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {categorey.map(item =>
                    <article key={item._id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={item.image}
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">
                            <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {item.category} </h3>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-gray-900">{item.title}</h3>
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

                    </article>
                )}
            </div>


        </div>
    );
};

export default Categorey;