import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsHeartPulse } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handlelogOut = () => {
        logOut()
            .then(() => console.log('user logged successfully'))
            .catch(error => console.error(error))
    }

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a className="#">
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                            pure life  <span>healty</span></span>

                    </a>


                    <div className="flex md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"><AiOutlineMenuUnfold /></button>
                        {isMenuOpen && (
                            <div className='absolute z-10 top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='Brush tech artisty'
                                                title='Brush tech artisty'
                                                className='Brush tech artisty'
                                            >

                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    pure life  <span>healty</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <NavLink
                                                    to='/'
                                                    data-tooltip-id="Home"
                                                    data-tooltip-content="Home!"
                                                    data-tooltip-place="top"

                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/ArtandCraft'
                                                    data-tooltip-id="ArtandCraft"
                                                    data-tooltip-content="Art & Craft!"
                                                    data-tooltip-place="top"
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    art & craft
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/addCraft'
                                                    data-tooltip-id="addCraft"
                                                    data-tooltip-content="add Craft!"
                                                    data-tooltip-place="top"
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    addCraft
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/updatecraft/'
                                                    data-tooltip-id="UpdateCraft"
                                                    data-tooltip-content="Update Craft!"
                                                    data-tooltip-place="top"
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    UpdateCraft
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/myartcraft'
                                                    data-tooltip-id="addCrmyartcraftaft"
                                                    data-tooltip-content="my art & craft"
                                                    data-tooltip-place="top"
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    my Art & Craft
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/contact'
                                                    aria-label='contact'
                                                    title='contact'
                                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                >
                                                    contact
                                                </NavLink>
                                            </li>
                                        </ul>

                                        <div className="flex flex-col justify-center items-center my-6">
                                            {
                                                user ? <div className="dropdown dropdown-start">
                                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                        <div className="w-8 rounded-full">
                                                            <img aria-label='About Us'
                                                                title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/n3pxCKM/profile.png"} />
                                                        </div>
                                                    </label>
                                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li>
                                                            <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={handlelogOut}
                                                                className="btn btn-sm  btn-ghost">Logout</button>

                                                        </li>
                                                    </ul>
                                                </div>
                                                    : <div className="dropdown dropdown-start">
                                                        <label tabIndex={0} className="">
                                                            <div className="w-10 ">
                                                                <p className="" ><CgProfile className="text-[32px]" ></CgProfile></p>

                                                            </div>
                                                        </label>
                                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                                            <Link to='/login'>
                                                                <button className="btn btn-sm  btn-ghost">login</button>
                                                            </Link>

                                                        </ul>


                                                    </div>

                                            }

                                        </div>




                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className=" hidden    absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</Link>
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</Link>
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</Link>
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</Link>
                        <Link to='/dasbord' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">dasbord</Link>
                    </div>
                    <div className="flex  md:flex-row md:mx-6 gap-x-3 items-center">
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#"><BsHeartPulse  className="text-[30px]" /></Link>
                        <Link to='/' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#"><FiShoppingCart  className="text-[30px]" /></Link>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 rounded-full">
                                        <img aria-label='About Us'
                                            title={`${user.displayName}`} className="z-[1111]" src={user?.photoURL || "https://i.ibb.co/n3pxCKM/profile.png"} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                    </li>
                                    <li>
                                      <Link to ='/myOrder'><button className="btn btn-sm mx-auto btn-ghost">My Order</button></Link>  

                                    </li>
                                    <li>
                                        <button
                                            onClick={handlelogOut}
                                            className="btn btn-sm  btn-ghost">Logout</button>

                                    </li>
                                </ul>
                            </div>
                                : <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="">
                                        <div className="w-10 ">
                                            <p ><CgProfile className="text-[32px]"></CgProfile></p>

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1111] p-2 shadow bg-base-100 rounded-box w-52">
                                        <Link to='/login'>
                                            <button className="btn btn-sm  btn-ghost">login</button>
                                        </Link>

                                    </ul>


                                </div>

                        }

                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;