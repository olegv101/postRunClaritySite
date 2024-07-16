import React from 'react';
import { RiRunFill, RiMapPin2Fill, RiCommunityFill, RiCalendarCheckFill, RiCompass3Fill, RiChat3Fill, RiMedalFill, RiGlobalFill } from "react-icons/ri";

export default function Features() {

    const features = [
        {
            title: "Connect with Strava",
            description: "Mirror your existing Strava activities directly in-app.",
            icon: <RiRunFill size={32}/>,
        },
        {
            title: "Find Local Clubs",
            description: "Discover running clubs near your current location.",
            icon: <RiMapPin2Fill size={32}/>,
        },
        {
            title: "Join Community Events",
            description: "Participate in local running events and meetups.",
            icon: <RiCommunityFill size={32}/>,
        },
        {
            title: "Schedule Runs",
            description: "Plan your runs and join scheduled group runs.",
            icon: <RiCalendarCheckFill size={32}/>,
        },
        {
            title: "Explore New Routes",
            description: "Find popular running routes in any city.",
            icon: <RiCompass3Fill size={32}/>,
        },
        {
            title: "Instant Messaging",
            description: "Chat with local runners and organize meetups.",
            icon: <RiChat3Fill size={32}/>,
        },
        {
            title: "Track Achievements",
            description: "Monitor your progress and earn badges.",
            icon: <RiMedalFill size={32}/>,
        },
        {
            title: "Global Integration",
            description: "Connect with runners worldwide and share experiences.",
            icon: <RiGlobalFill size={32}/>,
        },
    ];

    return (
        <div className='bg-black bg-grid-white/[0.2]'>
            <div className='min-h-screen p-20 flex justify-center '>
                <div className="flex flex-col">
                    <h1 className='text-9xl text-white font-semibold mx-auto mb-10'>Features</h1>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full max-w-6xl">
                        {features.map((feature, index) => (
                            <div className='hover:-translate-y-2 hover:border hover:border-black transition duration-1000, w-60 p-10 rounded-lg bg-pink-400 text-white' key={index}>
                                <div className='mb-2'>{feature.icon}</div>
                                <h2 className='text-2xl font-semibold mb-2'>{feature.title}</h2>
                                <p className='opacity-60'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
