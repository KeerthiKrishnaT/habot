import React, { useState } from 'react';

type PostRequirementsProps = {};

const PostRequirements: React.FC<PostRequirementsProps> = () => {
    const [activeTab, setActiveTab] = useState('buyer');
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handlePlayVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsVideoPlaying(true);
    };

    return (
        <section className="text-white container mx-auto">
            <div className=" py-16 px-20 bg-blue-900  mx-2.5 md:flex justify-between gap-10">
                <div className="md:w-2/3 mb-8 md:mb-0 ">
                    <div className="relative">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                title="YouTube video player"
                                frameBorder="0"
                                
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded shadow-lg"
                            ></iframe>
                    </div>
                </div>
                <div className="md:w-1/3 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4 space-x-4">
                        <button
                            onClick={() => handleTabClick('buyer')}
                            className={`font-bold ${
                                activeTab === 'buyer' ? 'text-red-600' : 'text-white'
                            }`}
                        >
                            Buyer
                        </button>
                        <button
                            onClick={() => handleTabClick('supplier')}
                            className={`font-bold ${
                                activeTab === 'supplier' ? 'text-red-600' : 'text-white'
                            }`}
                        >
                            Supplier
                        </button>
                    </div>
                    {activeTab === 'buyer' && (
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> Post your
                                requirements.
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> Sit back for
                                multiple suppliers to contact you.
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> 
                             Choose among the suppliers based on the ratings and reviews.
                            </li>
                        </ul>
                    )}
                    {activeTab === 'supplier' && (
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> Complete your
                                profile and get notified for opportunities.
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> Contact buyers
                                and share your quote for the service.
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-400 mr-2">✔️</span> Connect and
                                leave feedback for each other.
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PostRequirements;
