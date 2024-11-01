import About from "@/components/About";
import Features from "@/components/Features";
import HomeSlider from "@/components/HomeSlider";
import Services from "@/components/Services";
import { Testimony } from "@/components/Testimony";

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] bg-white">
            <HomeSlider />
            <About />
            <Services />
            <Features />
            <Testimony />
        </div>
    );
}
