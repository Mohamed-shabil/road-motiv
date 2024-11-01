import {
    AlarmClockCheck,
    CircleDollarSign,
    Globe,
    Handshake,
} from "lucide-react";

const Features = () => {
    return (
        <section className="h-auto mb-4 md:h-[43rem] bg-black">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-center flex-col py-10">
                    <h5 className="rounded-full bg-primary/50 text-white px-2 py-1 inline-block my-4 text-sm">
                        | Road Motiv Logistics
                    </h5>
                    <h2 className="text-white text-3xl font-semibold leading-tight px-2 text-center">
                        Globally Competitive Solutions
                    </h2>
                    <p className="text-sm max-w-lg text-gray-400 text-center my-2 px-2 ">
                        We provide globally competitive solutions tailored to
                        meet the diverse needs of our clients.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <CircleDollarSign
                                strokeWidth={1.5}
                                className="text-white"
                            />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Cost-Effective Services
                        </h4>
                        <p className="text-white text-sm font-light">
                            We then coordinate & manage all aspects of
                            transportation, leveraging our global network.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <Globe strokeWidth={1.5} className="text-white" />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Worldwide Reach
                        </h4>
                        <p className="text-white text-sm font-light">
                            Our global presence allows us to make informed
                            logistics decisions, leveraging extensive experience
                            to establish ourselves as a leader in the industry.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <Handshake
                                strokeWidth={1.5}
                                className="text-white"
                            />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            skilled Team
                        </h4>
                        <p className="text-white text-sm font-light">
                            Our exceptional customer service, backed by a team
                            of highly skilled professionals, guarantees client
                            satisfaction. Experience unmatched service and peace
                            of mind when you choose us.
                        </p>
                    </div>

                    <div className="border border-gray-700 w-full max-w-[280px] p-4 rounded-md hover:bg-slate-700 transition">
                        <div className="h-10 w-10  bg-slate-900 rounded-md flex items-center justify-center mt-2 mb-4">
                            <AlarmClockCheck
                                strokeWidth={1.5}
                                className="text-white"
                            />
                        </div>
                        <h4 className="text-xl text-white font-medium mb-2">
                            Always On Time, Every Time
                        </h4>
                        <p className="text-white text-sm font-light">
                            We value your time, so you can trust us with your
                            important deliveries. With Road Motiv Logistics,
                            your precious documents will always arrive on time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
