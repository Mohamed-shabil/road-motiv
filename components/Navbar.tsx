import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "#sevices" },
        { label: "Testimony", url: "#testimony" },
    ];
    return (
        <nav className=" bg-white border-gray-200 shadow-md fixed z-50 w-full top-0">
            <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-2">
                <Link
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src={"/logo.png"}
                        width={150}
                        height={50}
                        alt="Road Motive"
                    />
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navLinks.map((nav) => (
                            <li key={nav.label}>
                                <Link
                                    href={nav.url}
                                    className="block py-2 px-3 rounded text-black font-normal hover:text-primary transition"
                                    aria-current="page"
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
