import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    const {image,title,descaption,category,rating,price,_id}=service;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src={image}
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        <h3 dateTime="2022-10-10" className="block text-xs text-gray-500"> {category} </h3>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {descaption}
                        </p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                            <span>{price}</span>
                            <span>{rating} </span>
                        </div>
                        <Link to={`/cartItems/${_id}`} className="block text-center mt-3 w-full rounded text-white px-12 py-3 text-sm font-medium bg-rose-600 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto" ><button>details</button></Link>
                    </div>

                </article>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
  };
export default ServiceCard;