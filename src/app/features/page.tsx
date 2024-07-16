import React from 'react';
import { RiRunFill } from "react-icons/ri";

export default function Features() {

    const features = [
        {
            title: "Connect with Strava",
            description:
                "Mirror your existing strava directly in-app.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "Ease of use",
            description:
                "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "Pricing like no other",
            description:
                "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "24/7 Support",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "Money back guarantee",
            description:
                "If you donot like EveryAI, we will convince you to like us.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <RiRunFill size={32}/>,
        },
    ];

    return (
        <div className='bg-grid-black/[0.2]'>
            <div className='min-h-screen p-20 flex justify-center '>
                <div className="flex flex-col">
                    <h1 className='text-9xl font-semibold mx-auto mb-10'>Features</h1>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full max-w-6xl">
                        {features.map((feature, index) => (
                            <div className='hover:-translate-y-2 hover:border hover:border-black transition ; w-60 p-10 rounded-lg bg-pink-400 text-white' key={index}>
                                <div className='mb-2'>{feature.icon}</div>
                                <h2 className='text-2xl font-semibold mb-2'>{feature.title}</h2>
                                <p className='opacity-80'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};