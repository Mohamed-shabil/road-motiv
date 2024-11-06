import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="mx-auto max-w-[1200px] ">
                <div className="flex justify-between md:flex-row flex-col items-center py-16">
                    <h2 className="font-medium text-3xl md:text-5xl text-white my-4 mx-4">
                        Join Us Today And let Us Help <br />
                        You To Grow Your Business.
                    </h2>
                    <Link href={"/contact"}>
                        <Button
                            className="bg-white text-primary hover:bg-primary/20 hover:text-white rounded-full"
                            size={"lg"}
                        >
                            Contact us
                        </Button>
                    </Link>
                </div>
                <Separator />
                <div className="p-2 bg-white rounded-t-xl mt-16">
                    <div className="px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex justify-center text-teal-600">
                            <Image
                                height={50}
                                width={150}
                                alt="road motiv"
                                src={"/logo.png"}
                            />
                        </div>

                        <p className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-gray-500">
                            Road Motiv Logistics promises an unparalleled,
                            hassle-free logistics experience, delivering
                            excellence through world-class services, top-tier
                            solutions, and a strong, reliable infrastructure.
                        </p>

                        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/"
                                >
                                    Home{" "}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="/About"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="#"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                    href="#"
                                >
                                    {" "}
                                    Testimony
                                </Link>
                            </li>
                        </ul>

                        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                            <li>
                                <Link
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <Instagram
                                        size={"1.3em"}
                                        className="text-primary"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-gray-700/75"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <Twitter
                                        size={"1.3em"}
                                        className="text-primary"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="">
                                    <span className="sr-only">Dribbble</span>
                                    <Facebook
                                        size={"1.3em"}
                                        className="text-primary"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
