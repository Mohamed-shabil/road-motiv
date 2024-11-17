import Image from "next/image";
import React from "react";

const More = () => {
    return (
        <section className="max-w-[1200px] mx-auto p-5 h-auto min-h-[30rem]">
            <div className="w-full grid grid-cols-12" data-aos="fade-left">
                <div className="col-span-12 sm:col-span-8">
                    <Image
                        src={"/truck.jpg"}
                        width={700}
                        height={400}
                        alt="truck"
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center">
                    <h2 className="text-3xl text-center font-semibold text-primary">
                        Network
                    </h2>
                    <p className="text-slate-900 text-center">
                        Our Network opens widely to increase your business
                        oppertunities. We have transportation services all over
                        the GCC countries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default More;
