import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", text: "הסל הזול" },
    { href: "#", text: "ביקורות" },
    { href: "#", text: "בתי מרקחת" },
    { href: "#", text: "מוצרים" },
  ];

  const userLinks = [
    { icon: FaUser, text: "החשבון שלי" },
    { icon: FaShoppingCart, text: "הסל שלי" },
  ];

  return (
    <nav dir='ltr' className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="hidden md:flex items-center order-3 md:order-1 space-x-4">
          {userLinks.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center group">
              <Icon className="text-2xl text-gray-800 group-hover:text-green-700 group-hover:cursor-pointer transition duration-300" />
              <a href="#" className="ml-2 text-lg text-gray-800 font-medium group-hover:text-green-700 transition duration-300">{text}</a>
            </div>
          ))}
        </div>

        <button 
          className="md:hidden order-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-2xl text-gray-800 hover:text-green-700" />
        </button>

        <div className="flex items-center justify-center order-2 md:order-3 flex-grow md:flex-grow-0">
          <Link to="/">
            <img
              src="img/jenny-medical-weed-reseller-text-logo.png"
              alt="Jenny logo"
              className="h-10"
            />
          </Link>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 order-4 md:order-2`}>
          <div className='md:mr-8 space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center'>
            {navLinks.map(({ href, text }, index) => (
              <a key={index} href={href} className="text-lg text-gray-800 hover:text-green-700 font-medium transition duration-300">{text}</a>
            ))}
          </div>

          <div className="flex md:hidden flex-col items-center space-y-4 mt-4 w-full">
            {userLinks.map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center justify-center w-full group">
                <Icon className="text-2xl text-gray-800 group-hover:text-green-700 group-hover:cursor-pointer transition duration-300" />
                <a href="#" className="ml-2 text-lg text-gray-800 font-medium group-hover:text-green-700 transition duration-300">{text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}