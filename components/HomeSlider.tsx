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
        heading: "From doorstep to destination",
        description: "Road Motiv ensures reliability every mile",
    },
    {
        heading: "Timely. Seamless. Trustworthy.",
        description:
            "Your Deliveries, our Commitment. Count on us to bring excellence to your doorstep every Time.",
    },
    {
        heading: "Road Transport ",
        description: "Safe • Secure • Fast • Reliable",
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
        <section className="mx-auto px-4 md:p-0 mb-24 rounded-lg">
            <Carousel setApi={setApi} className="rounded-lg">
                <CarouselContent className="">
                    {headings.map((heading, index) => (
                        <CarouselItem key={index} className="rounded-md">
                            <div className="relative rounded-md">
                                <Image
                                    width={720}
                                    height={480}
                                    className="w-full h-[90vh] bg-cover rounded-lg"
                                    src={`/slide-${index + 1}.jpg`}
                                    alt={"tr"}
                                />
                                <div className="absolute w-full h-[90vh] rounded-md top-0 left-0 flex items-center justify-center bg-slate-950/50 flex-col">
                                    <div
                                        className="text-center flex flex-col gap-4 items-center"
                                        data-aos="fade-up"
                                    >
                                        <h4 className="max-w-2xl text-2xl md:text-5xl text-white font-medium px-2">
                                            {heading.heading}
                                        </h4>
                                        <p className="text-gray-300 w-[80%] md:max-w-md text-sm font-normal ">
                                            {heading.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-10" />
                <CarouselNext className="right-10" />
            </Carousel>
        </section>
    );
};

export default HomeSlider;
