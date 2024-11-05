import { Button } from "@/components/ui/button";
import { CircleHelp, Mail, MessageSquareText, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
    const contacts = [
        {
            icon: <CircleHelp className="text-primary" />,
            title: "Help Center",
            description: "Get Question ? We got an answer",
            link: "",
        },
        {
            icon: <Phone className="text-primary" />,
            title: "Call us now",
            description:
                "Need immediate assistance? Call us directly for support.",
            link: "tel:+966 570855938",
        },
        {
            icon: <MessageSquareText className="text-primary" />,
            title: "Chat with us",
            description: "Prefer texting? Start a WhatsApp chat with our team.",
            link: "https://wa.me/+966598065938?text=Hi Road Motive",
        },
        {
            icon: <Mail className="text-primary" />,
            title: "Email us now",
            description:
                "Have a question? Send us an email and we’ll get back to you soon.",
            link: "mailto:info@roadmotive.com",
        },
    ];
    return (
        <section className="max-w-[1200px] mx-auto h-auto my-28">
            <div className="flex items-center justify-center flex-col py-10">
                <h5 className="rounded-full px-2 py-1 bg-primary/20 text-primary inline-block my-4 text-sm">
                    | Road Motiv Logistics
                </h5>
                <h2 className="text-3xl text-center md:text-center md:text-4xl font-semibold leading-tight mx-4">
                    Let Us Know Your Queries!
                </h2>
                <p className="text-sm max-w-lg  text-center my-2 mx-4">
                    Team Road Motiv Logistics is always happy to answer all your
                    queries. Please contact us in the given phone number or mail
                    id at your convenience. We shall get back to you soon.
                </p>
            </div>
            <div className="flex justify-center flex-col gap-4">
                <div className="grid grid-cols-12 gap-4">
                    {contacts.map((contact) => (
                        <div
                            className="col-span-12 flex justify-center md:col-span-6"
                            key={contact.title}
                        >
                            <div className="mx-2 p-4 w-full max-w-xl rounded-lg bg-white">
                                <div className="flex gap-2">
                                    <div className="w-full flex gap-4 items-center">
                                        <div className="rounded-lg w-12 h-12 bg-primary/30 flex items-center justify-center">
                                            {contact.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-medium">
                                                {contact.title}
                                            </h4>
                                            <p className="text-xs font-normal text-gray-500">
                                                {contact.description}
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={contact.link}>
                                        <Button className="rounded-full">
                                            {"Contact"}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative rounded-lg w-full h-96">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
