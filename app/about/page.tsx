import { Flag, Handshake, Target } from "lucide-react";
import React from "react";

const AboutPage = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-[1200px] px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img
                                className=" rounded-xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717741205.png"
                                alt="about Us image"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover"
                            src="https://pagedone.io/asset/uploads/1717741215.png"
                            alt="about Us image"
                        />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Empowering Each Other to Succeed
                                </h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Road Motiv Transport is a Saudi -based
                                    logistics and transportation solutions
                                    provider. We have transformed ourselves into
                                    one of the most sought-after and trustworthy
                                    international prestigious companies in the
                                    GCC with our own offices in UAE, KSA, Qatar,
                                    Kuwait, Bahrain and Oman.
                                </p>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Road Motiv Transport has tremendous
                                    experience and expertise in the domain and
                                    has become one of the trusted and recognized
                                    names in the field of logistics. We see
                                    ourselves as a One-Stop solution for our
                                    customers
                                </p>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    With unrivalled expertise and dedication to
                                    stringent work standards, Road Motiv
                                    Transport has earned a niche in the market.
                                    The enormous success of Road Motiv Transport
                                    may be due to the proactive and highly
                                    competent experts that work tirelessly to
                                    guarantee each customer has a flawless
                                    logistical experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-20 flex flex-wrap flex-row justify-between gap-2">
                    <div className="p-4 rounded-md border border-slate-300 max-w-[350px]">
                        <div className="flex items-center justify-center ">
                            <span className="p-3  rounded-full bg-primary/70 mb-4">
                                <Flag size={"3rem"} />
                            </span>
                        </div>
                        <h2 className="text-center text-xl">Our Vision</h2>
                        <p className="text-sm text-slate-600">
                            Our goal is to be an invaluable partner to our
                            clients by assisting them in developing and
                            maximizing long-term competitive advantages. We
                            accomplish this by assisting customers in bringing
                            their products to market in a timely, efficient, and
                            safe manner. Our clients can be confident that every
                            encounter will be guided by the essential values of
                            our business, honesty and respect.
                        </p>
                    </div>
                    <div className="p-4 rounded-md border border-slate-300 w-full max-w-[380px] ">
                        <div className="flex items-center justify-center">
                            <span className="p-3  rounded-full bg-primary/70 mb-4">
                                <Target size={"3rem"} />
                            </span>
                        </div>
                        <h2 className="text-center text-xl">Our Mission</h2>
                        <p className="text-sm text-slate-600">
                            Our objective is to serve each and every one of our
                            clients with a great, dependable experience while
                            providing outstanding value in the marketplace and
                            setting the benchmark for professionalism in the
                            logistic solutions we provide. We seek to run
                            responsibly, both for our clients and for our staff,
                            for whom we want to create a safe and secure work
                            environment.
                        </p>
                    </div>

                    <div className="p-4 rounded-md border border-slate-300 w-full max-w-[350px] ">
                        <div className="flex items-center justify-center">
                            <span className="p-3  rounded-full bg-primary/70 mb-4">
                                <Handshake size={"3rem"} />
                            </span>
                        </div>
                        <h2 className="text-center text-xl">Our Service</h2>
                        <p className="text-sm text-slate-600">
                            We are very much concentrated to achieve 100%
                            satisfaction from our customers with our higher
                            level of service experience. All our clients ensure
                            us as a trusted goods transportation provider
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
