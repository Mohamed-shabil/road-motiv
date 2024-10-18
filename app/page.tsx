import About from "@/components/About";
import Features from "@/components/Features";
import Services from "@/components/Services";
import { Testimony } from "@/components/Testimony";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-[1200px] mx-auto ">
                <section className="grid grid-cols-12 gap-2 h-[43rem]">
                    <div className="col-span-12 md:col-span-6 flex items-center flex-col justify-center ">
                        <div
                            className="md:-mt-10 mx-4 md:mx-0"
                            data-aos="fade-right"
                        >
                            <h5 className="rounded-full bg-primary/20 text-primary px-2 py-1 inline-block my-4 text-sm">
                                | Cargon-Transport Logistics
                            </h5>
                            <h1 className="text-4xl md:text-7xl font-medium leading-normal">
                                Delivering Success Through Logistics And
                                Expertise
                            </h1>
                            <p className="text-sm mt-4">
                                Whether it's international shipping, domestic
                                transport, specialized logistics, our expertise
                                ensures that every shipment is handled with
                                precision and care.
                            </p>
                            <Button
                                className="text-white my-4 rounded-full"
                                size={"lg"}
                            >
                                Contact us
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="">
                                <Image
                                    src={"/truck.png"}
                                    width={"500"}
                                    height={"300"}
                                    alt=""
                                />
                            </div>
                            <Image
                                src={"/hero.png"}
                                alt={"hero"}
                                width={"500"}
                                height={"1080"}
                                className="absolute right-0 -z-10 bg-cover top-0 max-w-4xl h-[900px]"
                            />
                        </div>
                    </div>
                </section>
                {/* Hero section */}
                <About />
            </div>
            <Services />
            {/*  */}
            <Features />
            <Testimony />
        </div>
    );
}
