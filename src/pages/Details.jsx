import { FaCaravan } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Details = () => {
    const cartItems = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddProduct = async (e) => {
        const form = e.target;
        const productId = cartItems._id;
        const productImage = cartItems.image;
        const productTitle = cartItems.title;
        const usercComment = form.comment.value
        const rating = form.rating.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const userImage = user.image;
        const commentTime = (new Date()).toDateString();
        const info = { productTitle, productImage, rating, productId, userName, userEmail, userImage, commentTime, usercComment };
        console.log(info)
    }
    console.log(cartItems)
    return (
        <div>
            <h2>details page</h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={cartItems.image} alt="Product Image" />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className=" py-2">
                                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                            </div>
                            <div className=" py-2">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                            </div>
                            <div className=" py-2">
                                <Link to={`/chackout/${cartItems._id}`}><button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">chackout</button> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2"> {cartItems.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {cartItems.descaption}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">price : </span>
                                <span className="text-gray-600 dark:text-gray-300">${cartItems.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">In Stock : </span>
                                <span className="text-gray-600 dark:text-gray-300">stockStatus</span>
                            </div>
                        </div>


                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <div className="flex items-center gap-x-2"><FaCaravan className="text-2xl" /><span> SHIPPING & RETURNS</span></div>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                    from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                    up for the company{`'`}s newsletter or follow it on social media.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <div className="flex items-center gap-x-2"><FaCartArrowDown className="text-2xl" /><span> CARE INSTRUCTIONS</span></div>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                    from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                    up for the company{`'`}s newsletter or follow it on social media.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> SHARE</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                    from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                    up for the company{`'`}s newsletter or follow it on social media.
                                </p>
                            </details>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {cartItems.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h2 className="text-center text-2xl text-slate-600 my-7">Add A Comment </h2>
                        <form onSubmit={handleAddProduct} className='mt-12 max-w-[768px] mx-auto'>
                            <div className="flex gap-8 ">
                                <div className="flex-1 items-start">
                                    <label className="block mb-2 dark:text-white" htmlFor="title">Comment </label>
                                    <input
                                        className="w-full h-[100px] p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                        type="text"
                                        placeholder=" Comment "
                                        id="title"
                                        name="title" />
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
                                        min={1}
                                        type="number"
                                        placeholder="Enter Rating 1 to 5 "
                                        id="rating"
                                        name="rating"
                                    />
                                </div>
                            </div>

                            <input
                                className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                                type="submit"
                                value="Add Comment"
                            />

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Details;