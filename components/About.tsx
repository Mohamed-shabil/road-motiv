"use client";
import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section className="grid grid-cols-12 gap-4 h-auto md:h-[40rem]">
            <div className="col-span-12 md:col-span-6">
                <div className="columns-2 gap-4 px-4" data-aos="fade-right">
                    <div className="rounded-md">
                        <Image
                            width={"250"}
                            height={"400"}
                            alt="packaging"
                            className="w-full aspect-auto mb-4"
                            src="/grid-1.png"
                        />
                    </div>
                    <div className="rounded-md">
                        <Image
                            width={"400"}
                            height={"300"}
                            alt="packaging"
                            className="w-full aspect-video rounded-md"
                            src="/grid-4.jpg"
                        />
                    </div>

                    <div className="rounded-md">
                        <Image
                            width={"400"}
                            height={"300"}
                            alt="packaging"
                            className="w-full aspect-video mb-4"
                            src="/grid-3.png"
                        />
                    </div>

                    <div className="rounded-md max-h-96">
                        <Image
                            width={"250"}
                            height={"350"}
                            alt="packaging"
                            className="w-full aspect-auto rounded-md"
                            src="/grid-2.png"
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-4">
                <div>
                    <h5 className="rounded-full bg-primary/20 text-primary px-2 py-1 inline-block my-4 text-sm">
                        | Cargon-Transport Logistics
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left">
                        Our Commitment: Reliable and Efficient Logistics
                    </h2>
                    <p className="my-4 text-center md:text-left ">
                        With years of industry experience and a commitment to
                        innovation, we have become leaders in providing
                        comprehensive, reliable, and efficient logistics
                        solutions. Our dedicated team of experts works
                        tirelessly to ensure.
                    </p>
                    <div className="flex flex-col md:h-16 h-auto flex-wrap gap-2 my-4">
                        <div className="flex gap-2 items-center">
                            <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                <Check className="text-primary" size={"1em"} />
                            </div>
                            <p className="text-sm">
                                Experts in Logistics Management
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                <Check className="text-primary" size={"1em"} />
                            </div>
                            <p className="text-sm">
                                Leaders in Global Logistics
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                <Check className="text-primary" size={"1em"} />
                            </div>
                            <p className="text-sm">
                                Transforming Transport & Logistics
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                <Check className="text-primary" size={"1em"} />
                            </div>
                            <p className="text-sm">Driving Logistics Success</p>
                        </div>
                    </div>
                    <div className="flex bg-primary/10 flex-row p-2 rounded text-sm gap-2">
                        <span className="h-[40px] w-2 rounded-md bg-primary"></span>
                        <p>
                            We are driving success and creating opportunities
                            for growth. Discover difference with a logistics
                            partner that is truly invested in your success.
                        </p>
                    </div>
                    <div className="my-4">
                        <Button size={"lg"} className="rounded-full">
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
