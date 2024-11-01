import { cn } from "@/lib/utils";
import {
    Anvil,
    Backpack,
    Building2,
    ChartBar,
    ChartSpline,
    icons,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Badge from "./Badge";

const services = [
    {
        title: "Sea Freight",
        description:
            "Our skilled team strategically optimizes shipping routes to deliver the most cost-efficient solutions while rigorously upholding precise timing and delivery commitments.",
    },
    {
        title: "Land Freight",
        description:
            "Our trained personnel, knowledgeable about technical capabilities and precise legal regulations, provide reliable and responsible services.",
    },
    {
        title: "Air Freight",
        description:
            "This quick and dependable transportation to global destinations, utilizing the best airlines, is recommended for sensitive and high-value shipments.",
    },
];

const Services = () => {
    return (
        <div className="bg-primary/5 h-auto">
            <div className="max-w-[1200px] mx-4 md:mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <Badge content="| Road Motiv Services" />
                    <h2 className="text-center text-2xl md:text-4xl font-semibold leading-tight text-primary ">
                        Seamless Global Forwarding Solutions
                    </h2>
                    <p className="text-sm max-w-lg text-gray-700 text-center my-2 text-muted-foreground">
                        At Road Motiv Logistics, we offer premium services
                        including air freight, sea freight, land freight,
                        customs clearance, warehousing, project cargo handling,
                        insurance, and a quality assurance program.
                    </p>
                </div>
                <div className="pb-14 flex items-center flex-col flex-wrap gap-4">
                    {services.map((service, i) => (
                        <div
                            className={cn(
                                "flex flex-row",
                                (i + 1) % 2 == 0
                                    ? "flex-row-reverse"
                                    : "flex-row"
                            )}
                            data-aos={
                                (i + 1) % 2 == 0 ? "fade-left" : "fade-right"
                            }
                        >
                            <div className="flex-1 flex items-center justify-center">
                                <Image
                                    src={`/s${i + 1}.png`}
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </div>
                            <div className="flex-1 flex items-center">
                                <div
                                    className="max-w-md"
                                    data-aos={
                                        (i + 1) % 2 == 0
                                            ? "fade-righ"
                                            : "fade-left"
                                    }
                                >
                                    <h1 className="text-6xl bg-gradient-to-b from-[#253d86] to-white text-transparent bg-clip-text">
                                        0{i + 1}
                                    </h1>
                                    <h1 className="font-medium text-2xl my-4">
                                        {service.title}
                                    </h1>
                                    <p className="text-sm">
                                        {service.description}
                                    </p>
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
