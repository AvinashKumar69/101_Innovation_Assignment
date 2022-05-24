import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between px-5 h-20 bg-emerald-300'>
            <h1 className='text-2xl font-bold font-serif'>
                <Link to='/'>TheFoodList</Link>
            </h1>

            <div className='space-x-6'>
                <i className="fa-solid fa-magnifying-glass" />
                <i className="fa-solid fa-bars" />
            </div>
        </header>
    )
}

export default Header;