import React, { useState, useEffect, useRef } from 'react';
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
                setIsAccordionOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className="bg-white	 text-white fixed w-full top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-12 md:px-12">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <img src="./../images/Habotlogo.png" alt="Logo" className=" mr-2" />
                    </div>
                    <button onClick={toggleMenu} className="md:hidden focus:outline-none z-50">
                        <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                        <svg className={`w-6 h-6 ${!isMenuOpen ? 'hidden' : ''}`} fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <nav
                        ref={menuRef}
                        className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out md:transition-none`}
                    >
                        <ul className="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-4 text-[#6D6E71] gap-8">
                            <li className="self-center">
                                <a href="#" className="block py-2 md:py-0 hover:text-gray-300 transition duration-200">
                                Find Suppliers
                                </a>
                            </li>
                            <li className="relative group self-center">
                                <button
                                    onClick={toggleAccordion}
                                    className="block py-2 md:py-0 hover:text-gray-300 transition duration-200 flex items-center justify-between w-full md:w-auto"
                                >
                                    Find Service Tags
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {isAccordionOpen && (
                                    <ul className="mt-2 space-y-2 bg-gray-700 md:bg-white text-white md:text-gray-800 rounded shadow-lg md:absolute md:left-0 w-full md:w-48">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200">
                                            Service Tags 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200">
                                            Service Tags 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200">
                                            Service Tags 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 md:hover:bg-gray-100 transition duration-200">
                                            Service Tags 4
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="self-center">
                                <button className="rounded-md border border-2 border-[#00732F] py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#00732F] hover:text-white hover:bg-[#00732F] hover:border-[#00732F] focus:text-white focus:bg-[#00732F] focus:border-[#00732F] active:border-[#00732F] active:text-white active:bg-[#00732F] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                    Login / Sign Up
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
