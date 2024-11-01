import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Mohamed Shabil",
        review: "The best service in town! I sent my shipment to Oman, and it was delivered the next day. Thanks for the outstanding customer service! Special thanks to Md Noufal for always being there to assist with any questions. 💕",
    },
    {
        name: "Adnan",
        review: "NEXT LEVEL SERVICE!!!! I just wanted to express my gratitude to the Road Motiv Logistics team for everything. I've been working with them since 2018. #FLOMATIC INTERNATIONAL DUBAI",
    },
    {
        name: "Ahmed K.",
        review: "I've been using Road Motiv Logistics for my international shipments, and they never disappoint. Their attention to detail and timely deliveries are unmatched.",
    },
    {
        name: "Maria L.",
        review: "The customer service at Road Motiv Logistics is top-notch! They are always available to answer my questions and provide assistance. Truly a fantastic team!",
    },
    {
        name: "John D.",
        review: "I sent my package to Saudi Arabia, and it arrived the next day. Road Motiv Logistics is my go-to for all my shipping needs",
    },
    {
        name: "Fatima S.",
        review: "Road Motiv Logistics has been a game changer for our logistics operations. Their global presence and expert team make them the best in the industry!",
    },
];

export function Testimony() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-center flex-col py-10">
                <h5 className="rounded-full px-2 py-1 bg-primary/20 text-primary inline-block my-4 text-sm">
                    | Cargon-Transport Logistics
                </h5>
                <h2 className="text-3xl text-center md:text-center md:text-4xl font-semibold leading-tight mx-4 text-primary">
                    Efficient Working Process
                </h2>
                <p className="text-sm max-w-lg  text-center my-2 mx-4">
                    our working process is designed to deliver efficient,
                    reliable, & tailored logistics solutions. From the initial
                    consultation to the final delivery,
                </p>
            </div>
            <div className="">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimony, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1">
                                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                                className="size-14 rounded-full object-cover"
                                            />

                                            <div>
                                                <div className="flex justify-center gap-0.5 text-primary">
                                                    <Star
                                                        size={"1em"}
                                                        className="fill-yellow-500 text-yellow-500"
                                                    />
                                                    <Star
                                                        size={"1em"}
                                                        className="fill-yellow-500 text-yellow-500"
                                                    />
                                                    <Star
                                                        size={"1em"}
                                                        className="fill-yellow-500 text-yellow-500"
                                                    />
                                                    <Star
                                                        size={"1em"}
                                                        className="fill-yellow-500 text-yellow-500"
                                                    />
                                                    <Star
                                                        size={"1em"}
                                                        className="fill-yellow-500 text-yellow-500"
                                                    />
                                                </div>

                                                <p className="mt-0.5 text-lg font-medium ">
                                                    {testimony.name}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-gray-700">
                                            {testimony.review}
                                        </p>
                                    </blockquote>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </div>
    );
}
