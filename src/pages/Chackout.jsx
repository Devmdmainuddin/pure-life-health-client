import { useLoaderData } from "react-router-dom";
import useAuth from "../hook/useAuth";
const Chackout = () => {

    const service = useLoaderData();
    const { title, price, _id, image, } = service;
    const { user } = useAuth() || {};

    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = user?.email;
        const date = e.target.date.value;
        const address = e.target.address.value;


        // console.log(name, price, image, type)

        const order = {
            customerName: name,
            price,
            date,
            address,
            email,
            image,
            service: title,
            service_id: _id
        };

        console.log(order)
        fetch(`${import.meta.env.VITE_API_URL}/order`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inside post', data)
                if (data?.insertedId) {

                    alert('order successfully')
                }
            })


    };

    return (
        <div>

            <h2>{title}</h2>


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
                            chackout Product
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddProduct}>
                    <div className="flex gap-8 flex-col md:flex-row">
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="name">
                                name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={user?.displayName}
                                placeholder="type your name"
                                id="name"
                                name="name"
                            />
                            <label className="block mb-2 dark:text-white" htmlFor="email">
                                email
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="email"
                                defaultValue={user?.email}
                                placeholder="email"
                                id="email"
                                name="email"
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                defaultValue={image}
                                placeholder="Enter image url"
                                id="image"
                                name="image"
                            />



                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="date">
                                date
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="date"
                                placeholder="Enter Image URL"
                                id="date"
                                name="date"
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
                                defaultValue={'$' + price}
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                            />



                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="address"
                            >
                                address
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                type="text"
                                placeholder="Enter your  address"
                                id="address"
                                name="address"
                            />
                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="confirm order"
                    />
                </form>
            </div>

        </div>
    );
};

export default Chackout;