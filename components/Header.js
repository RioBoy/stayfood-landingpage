import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container py-12">
        <div className="flex items-center">
          {/* Navbar Brand Start */}
          <div className="w-auto">
            <Link href="/" className="text-2xl font-medium text-lemonade-500">Stay<span className="text-aragon-500">Food</span></Link>
          </div>
          {/* Navbar Brand End */}

          {/* Navbar Link Start */}
          <div className="w-full flex items-center justify-center">
            <ul className="flex gap-8">
              <li>
                <Link className="active text-base font-bold text-primary hover:underline" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-base font-normal text-secondary hover:underline" href="/menu">Menu</Link>
              </li>
              <li>
                <Link className="text-base font-normal text-secondary hover:underline" href="/about">About</Link>
              </li>
              <li>
                <Link className="text-base font-normal text-secondary hover:underline" href="/location">Location</Link>
              </li>
            </ul>
          </div>
          {/* Navbar Link End */}

          {/* Navbar Button Start */}
          <div className="w-auto">
            <button className="text-base font-bold text-white bg-aragon-500 py-3 px-10 rounded-[50px] hover:opacity-80 transition duration-300">Login</button>
          </div>
          {/* Navbar Button End */}
        </div>
      </div>
    </header>
  )
}

export default Header;