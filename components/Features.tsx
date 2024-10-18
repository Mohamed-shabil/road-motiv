import { ChartLine, CloudCog, Library, Shield } from "lucide-react";
import React from "react";

const Features = () => {
    return (
        <section className="h-auto mb-4 md:h-[43rem] bg-black">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <h5 className="rounded-full bg-slate-400/20 text-white px-2 py-1 inline-block my-4 text-sm">
                        | Cargon-Transport Logistics
                    </h5>
                    <h2 className="text-white text-3xl font-semibold leading-tight px-2 text-center">
                        Efficient Working Process
                    </h2>
                    <p className="text-sm max-w-lg text-gray-400 text-center my-2 px-2 ">
                        our working process is designed to deliver efficient,
                        reliable, & tailored logistics solutions. From the
                        initial consultation to the final delivery,
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <Library className="text-white" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Coordination & Execution
                        </h4>
                        <p className="text-white text-sm font-light">
                            We then coordinate & manage all aspects of
                            transportation, leveraging our global network.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <Shield className="text-white" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Secure Transportation
                        </h4>
                        <p className="text-white text-sm font-light">
                            Trust our meticulous process to streamline your
                            supply chain and drive your business forward.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <ChartLine className="text-white" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Planning & Strategy
                        </h4>
                        <p className="text-white text-sm font-light">
                            Throughout the journey, our team monitors progress
                            in real-time, providing you with updates.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <CloudCog className="text-white" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Real-Time Monitoring
                        </h4>
                        <p className="text-white text-sm font-light">
                            Finally, we ensure timely and secure delivery of
                            your goods, followed by a thorough review.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
