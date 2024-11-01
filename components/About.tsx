"use client";
import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";
const About = () => {
    return (
        <section className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-12 gap-4 h-auto md:h-[40rem]">
                <div className="col-span-12 md:col-span-6">
                    <div className="columns-2 gap-4 px-4" data-aos="fade-right">
                        <div className="rounded-md">
                            <Image
                                width={"250"}
                                height={"400"}
                                alt="packaging"
                                className="w-full aspect-auto mb-4 rounded-md bg-cover"
                                src="/all-vehicles.jpg"
                            />
                        </div>
                        <div className="rounded-md max-h-80">
                            <Image
                                width={"400"}
                                height={"300"}
                                alt="packaging"
                                className="w-full max-h-[350px] aspect-auto rounded-md bg-cover"
                                src="/new-truck.jpg"
                            />
                        </div>

                        <div className="rounded-md">
                            <Image
                                width={"400"}
                                height={"300"}
                                alt="packaging"
                                className="w-full max-h-[320px] rounded-md bg-cover aspect-auto mb-4"
                                src="/all-ways.jpg"
                            />
                        </div>

                        <div className="rounded-md max-h-96">
                            <Image
                                width={"250"}
                                height={"350"}
                                alt="packaging"
                                className="w-full aspect-auto rounded-md"
                                src="/delivery.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="col-span-12 md:col-span-6 p-4"
                    data-aos="fade-left"
                >
                    <div>
                        <Badge content="| Road Motiv Logistics" />
                        <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight text-center md:text-left">
                            Fulfilling Promises, Every Single Day!
                        </h2>
                        <p className="text-sm text-center md:text-left text-muted-foreground my-5">
                            The preferred choice for logistics in the GCC, we
                            are Road Motiv Logistics, headquartered in the UAE.
                            Our services extend to Saudi Arabia, and we have
                            evolved into one of the most sought-after and
                            trusted international companies in the region.
                        </p>
                        <div className="flex flex-col md:h-16 h-auto flex-wrap gap-2 my-4">
                            <div className="flex gap-2 items-center">
                                <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                    <Check
                                        className="text-primary"
                                        size={"1em"}
                                    />
                                </div>
                                <p className="text-sm">
                                    Experts in Logistics Management
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                    <Check
                                        className="text-primary"
                                        size={"1em"}
                                    />
                                </div>
                                <p className="text-sm">
                                    Leaders in Global Logistics
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                    <Check
                                        className="text-primary"
                                        size={"1em"}
                                    />
                                </div>
                                <p className="text-sm">
                                    Transforming Transport & Logistics
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="rounded-md bg-primary/30 w-6 h-6 flex items-center justify-center">
                                    <Check
                                        className="text-primary"
                                        size={"1em"}
                                    />
                                </div>
                                <p className="text-sm">
                                    Driving Logistics Success
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-primary/10 flex-row p-2 rounded text-sm gap-2">
                            <span className="h-[40px] w-2 rounded-md bg-primary"></span>
                            <p>
                                We are driving success and creating
                                opportunities for growth. Discover difference
                                with a logistics partner that is truly invested
                                in your success.
                            </p>
                        </div>
                        <div className="my-4">
                            <Link href={"/contact"}>
                                <Button size={"lg"} className="rounded-full ">
                                    Contact us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
