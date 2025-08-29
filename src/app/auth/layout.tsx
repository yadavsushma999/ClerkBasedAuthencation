// app/(auth)/layout.tsx

import { currentUser } from "@clerk/nextjs/server"; // Clerk
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '600' });
const lora = Lora({ subsets: ['latin'], weight: '400', style: ['italic'] });


type Props = {
    children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
    const user = await currentUser();

    if (user) redirect("/"); // redirect logged-in users away from auth pages

    return (
        <div className="h-screen flex w-full justify-center ">
            <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
                <div className="mb-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Bizzia Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <h1 className={`text-3xl text-gray-800 tracking-wide ${playfair.className}`}>
                            Bizzia
                        </h1>
                    </div>
                    <p className={`text-sm text-gray-500 pl-12 -mt-1 ${lora.className}`}>
                        A business-savvy AI bot
                    </p>
                </div>


                {children}
            </div>
            <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px
            overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
                <h2 className={` md:text-4xl font-bold ${playfair.className} `}>
                    Hi, I&apos;m your AI poweres sales assistant , Bizzia!
                </h2>
                <p className={`text-iridium md:text-sm mb-10 ${lora.className}`}>
                    Bizzia is capable of capturing lead information without a form...{
                        ''
                    }
                    <br />
                    something never done before 😉
                </p>
                <Image
                    src="/images/Spreadsheets-bro.png"
                    alt="app-image"
                    loading="lazy"
                    sizes="30"
                    className="absolute shrink-0 !w-[1600px] top-48"
                    width={0}
                    height={0} />
            </div>
        </div>
    )
};

export default Layout;
