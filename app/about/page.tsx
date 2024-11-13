import Image from "next/image";

const AboutPage = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-[1200px] px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <Image
                                width={300}
                                height={500}
                                className="rounded-xl object-cover"
                                src={"/About-1.jpg"}
                                alt="about Us image"
                            />
                        </div>
                        <Image
                            width={300}
                            height={500}
                            className="rounded-xl object-cover"
                            src={"/About-2.jpg"}
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
                                    Road Motiv Transport is a Saudi-based
                                    logistics and transportation solutions
                                    provider. We have transformed ourselves into
                                    one of the most sought-after and trustworthy
                                    international prestigious companies in the
                                    GCC with our own offices in UAE, KSA, Qatar,
                                    Kuwait, Bahrain, and Oman.
                                </p>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Road Motiv Transport has tremendous
                                    experience and expertise in the domain and
                                    has become one of the trusted and recognized
                                    names in the field of logistics. We see
                                    ourselves as a One-Stop solution for our
                                    customers.
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
                    <div className="p-2 rounded-md border border-slate-300 max-w-[350px] shadow-md">
                        <div className="max-w-[350px] h-48 overflow-hidden rounded-md">
                            <Image
                                src={"/vision.jpg"}
                                width={300}
                                height={200}
                                alt="vision"
                                className="w-full h-48 object-cover rounded-md hover:scale-110 ease-in duration-100"
                            />
                        </div>
                        <h2 className="text-center text-2xl my-2 font-semibold">
                            Our Vision
                        </h2>
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
                    <div className="p-2 rounded-md border border-slate-300 w-full max-w-[350px] shadow-md">
                        <div className="max-w-[350px] h-48 overflow-hidden rounded-md">
                            <Image
                                src={"/mission.jpg"}
                                width={300}
                                height={200}
                                alt="vision"
                                className="w-full h-48 object-cover rounded-md hover:scale-110 ease-in duration-100"
                            />
                        </div>
                        <h2 className="text-center text-2xl my-2 font-semibold">
                            Our Mission
                        </h2>
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

                    <div className="p-2 rounded-md border border-slate-300 w-full max-w-[350px] shadow-md">
                        <div className="max-w-[350px] h-48 overflow-hidden rounded-md">
                            <Image
                                src={"/service.jpg"}
                                width={300}
                                height={200}
                                alt="vision"
                                className="w-full h-48 object-cover rounded-md hover:scale-110 ease-in duration-100"
                            />
                        </div>
                        <h2 className="text-center text-2xl my-2 font-semibold">
                            Our Service
                        </h2>
                        <p className="text-sm text-slate-600">
                            We are dedicated to delivering 100% customer
                            satisfaction through exceptional service. Our
                            clients trust us as a reliable goods transportation
                            provider, and we work diligently to ensure each
                            detail is handled with care and efficiency. Our goal
                            is to exceed your expectations, building a
                            relationship based on trust and outstanding service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
