import {
    Anvil,
    Backpack,
    Building2,
    ChartBar,
    ChartSpline,
    icons,
} from "lucide-react";
import React from "react";

const services = [
    {
        icon: (
            <Building2
                strokeWidth={1.25}
                size={"2.5em"}
                className="text-white"
            />
        ),
        title: "Smart business model that works for you",
    },
    {
        icon: (
            <Anvil strokeWidth={1.25} size={"2.5em"} className="text-white" />
        ),
        title: "Personable Dedicated Support",
    },
    {
        icon: (
            <Backpack
                strokeWidth={1.25}
                size={"2.5em"}
                className="text-white"
            />
        ),
        title: "Award Winning Training",
    },
    {
        icon: (
            <ChartBar
                strokeWidth={1.25}
                size={"2.5em"}
                className="text-white"
            />
        ),
        title: "Highest Commission Best Supplier Partners",
    },
    {
        icon: (
            <ChartSpline
                strokeWidth={1.25}
                size={"2.5em"}
                className="text-white"
            />
        ),
        title: "Innovative Marketing",
    },
    {
        icon: (
            <Building2
                strokeWidth={1.25}
                size={"2.5em"}
                className="text-white"
            />
        ),
        title: "Trailblazing Technology",
    },
];

const Services = () => {
    return (
        <div className="bg-primary/5 h-auto">
            <div className="max-w-[1200px] mx-4 md:mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <h5 className="rounded-full bg-primary/30 text-primary px-2 py-1 inline-block my-4 text-sm">
                        | Cargon-Transport Logistics
                    </h5>
                    <h2 className="text-center text-2xl md:text-4xl font-semibold leading-tight ">
                        Efficient Working Process
                    </h2>
                    <p className="text-sm max-w-lg text-gray-700 text-center my-2">
                        our working process is designed to deliver efficient,
                        reliable, & tailored logistics solutions. From the
                        initial consultation to the final delivery,
                    </p>
                </div>
                <div className="pb-14 flex items-center flex-wrap gap-4">
                    {services.map((service, i) => (
                        <div
                            className="w-full rounded-lg max-w-sm border border-gray-200 min-h-[240px] bg-white shadow-sm"
                            key={service.title}
                        >
                            <div className=" p-8">
                                <div className="flex justify-between">
                                    <div className="h-24 w-24 bg-primary rounded-full grid place-content-center">
                                        {service.icon}
                                    </div>
                                    <span className="text-6xl bg-gradient-to-b from-blue-500 to-white text-transparent bg-clip-text">
                                        {i + 1}
                                    </span>
                                </div>
                                <div className="text-xl md:text-2xl font-medium mt-4">
                                    {service.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
