import { Building2, Mail, Phone } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
    return (
        <section className="max-w-[1200px] mx-auto text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <h5 className="rounded-full px-2 py-1 bg-primary/20 text-primary inline-block my-4 text-sm">
                        | Road Motiv Logistics
                    </h5>
                    <h2 className="text-3xl text-center md:text-center md:text-4xl font-semibold leading-tight mx-4">
                        Let Us Know Your Queries!
                    </h2>
                    <p className="text-sm max-w-lg  text-center my-2 mx-4">
                        Team Road Motiv Logistics is always happy to answer all
                        your queries. Please contact us in the given phone
                        number or mail id at your convenience. We shall get back
                        to you soon.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="h-64 border border-slate-300 px-4 py-6 rounded-lg">
                            <div className="flex items-center justify-center">
                                <span className="w-16 h-16 mb-4 rounded-lg grid place-items-center bg-primary/20">
                                    <Building2
                                        className="text-primary"
                                        strokeWidth={1.5}
                                        size={"2rem"}
                                    />
                                </span>
                            </div>
                            <h2 className="title-font font-semibold text-xl text-gray-900">
                                Company Details
                            </h2>
                            <p className="leading-relaxed">
                                Dammam 32242
                                <br />
                                Al Faisaliah, PO Box 4868,
                                <br />
                                Kingdom Of Saudi Arabia.
                            </p>
                        </div>
                    </div>

                    <div className=" p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="h-64 border border-slate-300 px-4 py-6 rounded-lg">
                            <div className="flex items-center justify-center">
                                <span className="w-16 h-16 mb-4 rounded-lg grid place-items-center bg-primary/20">
                                    <Mail
                                        className="text-primary"
                                        strokeWidth={1.5}
                                        size={"2rem"}
                                    />
                                </span>
                            </div>
                            <h2 className="title-font font-semibold text-xl text-gray-900">
                                Email us
                            </h2>
                            <p className="leading-relaxed">
                                info@roadmotiv.com <br />
                                favas@roadmotiv.com <br />
                                rauf@roadmotiv.com{" "}
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="h-64 border border-slate-300 px-4 py-6 rounded-lg">
                            <div className="flex items-center justify-center">
                                <span className="w-16 h-16 mb-4 rounded-lg grid place-items-center bg-primary/20">
                                    <Phone
                                        className="text-primary"
                                        strokeWidth={1.5}
                                        size={"2rem"}
                                    />
                                </span>
                            </div>
                            <h2 className="title-font font-semibold text-xl text-gray-900">
                                Call us
                            </h2>
                            <p className="leading-relaxed">
                                +966 59 806 5938 <br />
                                +966 57 085 5938
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" my-5">
                    <Image
                        src={"/contact-use.jpg"}
                        width={800}
                        height={400}
                        alt=""
                        className="rounded-md w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
