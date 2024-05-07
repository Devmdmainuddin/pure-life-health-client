import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <div >
                  <Navbar></Navbar>
            </div>
            <div className='md:min-h-[calc(100vh-309px)]   lg:px-8 p-6'>
                <Outlet ></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Layout;