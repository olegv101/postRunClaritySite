import React from 'react';
import { RiRunFill } from "react-icons/ri";

export default function Features() {

    const features = [
        {
            title: "Built for developers",
            description:
                "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: <RiRunFill />,
        },
        {
            title: "Ease of use",
            description:
                "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <RiRunFill />,
        },
        {
            title: "Pricing like no other",
            description:
                "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <RiRunFill />,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <RiRunFill />,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <RiRunFill />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <RiRunFill />,
        },
        {
            title: "Money back guarantee",
            description:
                "If you donot like EveryAI, we will convince you to like us.",
            icon: <RiRunFill />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <RiRunFill />,
        },
    ];

    return (
        <div className='min-h-screen p-20 flex justify-center'>
            <div className="flex flex-col">
                <h1 className='text-9xl'>Features</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
                    {features.map((feature, index) => (
                        <div className='w-60 p-10 rounded-lg bg-pink-400 text-white' key={index}>
                            <h2 className='text'>{feature.title}</h2>
                            {feature.icon}
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};