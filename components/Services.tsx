import Image from "next/image";
import Badge from "./Badge";
import {
    AlarmClock,
    Building2,
    Forklift,
    HandCoins,
    Headset,
    MapPinned,
    MonitorCog,
    Sparkles,
    ThermometerSnowflake,
} from "lucide-react";

const services = [
    {
        src: "/services/1.png",
        label: "Express Transport Services",
    },
    {
        src: "/services/2.png",
        label: "Flatbed, Curtain, Low bed & freezer type trucks",
    },
    {
        src: "/services/3.png",
        label: "Trucks On Monthly Basis Or Trip Wise",
    },
    {
        src: "/services/4.png",
        label: "Ware House Management",
    },
    {
        src: "/services/5.png",
        label: "Rental Crane & Forklifts Services",
    },
    {
        src: "/services/6.png",
        label: "Shifting",
    },
    {
        src: "/services/7.png",
        label: "Movements",
    },
];

const highlights = [
    {
        label: "Committed delivery on time.",
        icon: <AlarmClock className="text-primary" />,
    },
    {
        label: "Handling commodities with care",
        icon: <HandCoins className="text-primary" />,
    },
    {
        label: "Branches Across KSA",
        icon: <Building2 className="text-primary" />,
    },
    {
        label: "Computer Assisted Management",
        icon: <MonitorCog className="text-primary" />,
    },
    {
        label: "Handle Freezer type commodities",
        icon: <ThermometerSnowflake className="text-primary" />,
    },
    {
        label: "Availability of different vehicles as per customer choice",
        icon: <Forklift className="text-primary" />,
    },
    {
        label: "Track & trace system.",
        icon: <MapPinned className="text-primary" />,
    },
    {
        label: "24x7 support",
        icon: <Headset className="text-primary" />,
    },
    {
        label: "Quality customer service",
        icon: <Sparkles className="text-primary" />,
    },
];
const Services = () => {
    return (
        <div className="bg-primary/5 h-auto" id="services">
            <div className="max-w-[1200px] mx-4 md:mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <Badge content="| Road Motiv Transports Services" />
                    <h2 className="text-center text-2xl md:text-4xl font-semibold leading-tight text-primary ">
                        Seamless Global Forwarding Solutions
                    </h2>
                    <p className="text-sm max-w-lg text-gray-700 text-center my-2 text-muted-foreground">
                        At Road Motiv Transports, we offer premium services
                        including air freight, sea freight, land freight,
                        customs clearance, warehousing, project cargo handling,
                        insurance, and a quality assurance program.
                    </p>
                </div>
                <div className="relative bg-[url('/service-bg.jpg')] bg-cover w-full h-[50rem] md:h-[32rem] rounded-md mx-auto px-5 flex items-center">
                    <div className="pb-14 flex items-center flex-row flex-wrap gap-4 mx-auto justify-center pt-5">
                        {services.map((service) => (
                            <div
                                key={service.label}
                                className="w-full max-w-80 flex flex-row gap-4 items-center bg-[#d3d8e7] rounded-md p-2"
                            >
                                <div className="w-14 h-14 grid place-items-center rounded-md p-2">
                                    <Image
                                        src={service.src}
                                        alt={service.label}
                                        width={44}
                                        height={44}
                                    />
                                </div>
                                <h2 className="text-sm font-medium text-primary ">
                                    {service.label}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-20 h-[50rem] md:h-[30rem]">
                    <h2 className="text-center text-2xl md:text-4xl font-semibold leading-tight text-primary mb-8">
                        Our Service Highlights
                    </h2>
                    <div className="flex items-center justify-center flex-wrap gap-2">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="max-w-xs w-full rounded-md p-4 flex items-center gap-4 hover:bg-white ease-out transition"
                            >
                                <div className="min-w-10">{highlight.icon}</div>
                                <p className="text-primary text-wrap text-left">
                                    {highlight.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
