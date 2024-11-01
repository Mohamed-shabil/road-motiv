"use client";
import React, { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const headings = [
    {
        heading: "Dependable and Efficient Freight Solutions",
        description:
            "Road Motiv Logistics promises an unparalleled, hassle-free logistics experience, delivering excellence through world-class services, top-tier solutions, and a strong, reliable infrastructure.",
    },
    {
        heading: "On-Time Deliveries, Every Time",
        description:
            "With our reliable transportation network, we guarantee timely deliveries, ensuring that your goods reach their destination without delay",
    },
    {
        heading: "High-Quality, Professional Logistics Services",
        description:
            "Whether you need air, sea, or ground transportation, our customized shipping services connect you to markets around the world.",
    },
];
const HomeSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    useEffect(() => {
        if (!api) {
            console.log("no api");
            return;
        } else {
            console.log(api.selectedScrollSnap());
        }
        setCurrent(api.selectedScrollSnap() + 1);
    }, [api]);

    useEffect(() => {
        AOS.refresh();
    }, [current]);

    console.log("Current Slide ", current);
    return (
        <section className="w-full mx-auto p-4 my-24">
            <Carousel
                className=" rounded-lg overflow-hidden h-[90vh] md:h-[85vh]"
                setApi={setApi}
            >
                <CarouselContent>
                    {headings.map((heading, index) => (
                        <CarouselItem key={index}>
                            <div className={`overflow-hidden relative`}>
                                <Image
                                    width={720}
                                    height={480}
                                    className="w-full h-[90vh] bg-cover rounded-lg"
                                    src={`/slide-${index + 1}.jpg`}
                                    alt={"tr"}
                                />
                                <div className="absolute w-full h-[85vh] top-0 left-0 flex items-center justify-center bg-slate-950/50 flex-col">
                                    <div
                                        className="text-center flex flex-col gap-4 items-center "
                                        data-aos="fade-up"
                                    >
                                        <h4 className="max-w-2xl text-5xl text-white font-medium">
                                            {heading.heading}
                                        </h4>
                                        <p className="text-gray-300 max-w-md text-sm font-normal ">
                                            {heading.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default HomeSlider;
