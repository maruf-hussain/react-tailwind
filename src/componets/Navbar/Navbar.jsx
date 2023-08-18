import React, { useState } from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'




const Navbar = () => {
    const routes = [
        { name: "Home", path: "/", id: "route-home" },
        { name: "Products", path: "/products", id: "route-products" },
        { name: "About Us", path: "/about", id: "route-about" },
        { name: "Services", path: "/services", id: "route-services" },
        { name: "Contact", path: "/contact", id: "route-contact" }
      ];

      const [open, setOpen] = useState(false);
      
    return (
        <nav>

            <div className='md:hidden '  onClick={()=> setOpen(!open)}>
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-red-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>
                  

            <ul className={`md:flex md:static duration-200 p-4 bg-purple-400 pl-4 absolute ${open ? 'top-6 ': '-top-48'}`}>
            {
                routes.map(route => <Link 
                    key={route.id} 
                    route={route}>

                    </Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;