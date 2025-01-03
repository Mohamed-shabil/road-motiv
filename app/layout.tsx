import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

const inter = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Road Motiv",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Chat />
                <Footer />
            </body>
        </html>
    );
}
