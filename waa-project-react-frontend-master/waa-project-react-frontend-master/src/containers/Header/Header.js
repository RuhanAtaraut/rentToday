import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import hasRole from "../../util/hasRole";

const Header = () => {
    const { currentUser, updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        updateUser(null);
        sessionStorage.setItem('user', "");
        navigate('/'); // Redirect to home after logout
    };

    return (
        <header className='w-full bg-[#212121] sticky top-0 z-20'>
            <nav className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
                {/* Left: Logo aligned to the left corner */}
                <Link to='/' className='logo'>
                    <img src="/logo.png" alt="Logo" className="h-16 w-16 rounded-full ml-0" />
                </Link>

                {/* Right: Links and Auth Buttons */}
                <div className='flex items-center space-x-4'>
                    {hasRole(currentUser, 'ADMIN') && (
                        <Link to='/admin' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                            Admin
                        </Link>
                    )}
                    {hasRole(currentUser, 'OWNER') && (
                        <Link to='/owner' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                            Owner
                        </Link>
                    )}
                    {hasRole(currentUser, 'CUSTOMER') && (
                        <Link to='/customer' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                            Customer
                        </Link>
                    )}
                    {currentUser && (
                        <Link to='/messages' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                            Messages
                        </Link>
                    )}
                    {(hasRole(currentUser, 'OWNER') || hasRole(currentUser, 'ADMIN')) && (
                        <Link to='/owner/add-property' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                            Add Property
                        </Link>
                    )}
                    {!currentUser && (
                        <>
                            <Link to='/register' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                                Register
                            </Link>
                            <Link to='/login' className="px-5 py-2 rounded text-white shadow-md bg-blue-500">
                                Login
                            </Link>
                        </>
                    )}
                    {currentUser && (
                        <button
                            onClick={logoutHandler}
                            className="px-5 py-2 rounded text-white shadow-md bg-blue-500"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
