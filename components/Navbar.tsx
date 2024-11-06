import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "#sevices" },
        { label: "Testimony", url: "#testimony" },
    ];
    return (
        <nav className="px-5  bg-white border-gray-200 shadow-md z-50 w-full top-0 sticky">
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
                <div className="md:flex hidden gap-4">
                    {navLinks.map((link) => (
                        <Link href={link.url}>{link.label}</Link>
                    ))}
                </div>
                <div className="md:hidden flex">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Open</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link href={link.url}>{link.label}</Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
