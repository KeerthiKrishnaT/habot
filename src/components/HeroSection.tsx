import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat h-screen relative" style={{ backgroundImage: 'url(./images/background.png)' }}>
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-4xl font-semibold text-white mb-4">Are You a Supplier?</h2>
                <p className="text-lg text-white mb-8">Explore Matching Opportunities.</p>
                <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 w-full max-w-4xl	">
                    <div className="relative w-full md:w-96">
                        <input type="text" placeholder="Search your keyword here..." className="pl-10 pr-4 py-3 rounded w-full" />
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E7760D]" />
                    </div>
                    <div className="relative w-full md:w-96">
                        <input type="text" placeholder="Enter your market location here..." className="pl-10 pr-4 py-3 rounded w-full" />
                        <FontAwesomeIcon icon={faLocationDot} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E7760D]" />
                    </div>
                    <button type="submit" className=" bg-green-600 text-white rounded-none w-full px-5 py-2.5 text-center me-2 mb-2 md:w-auto">Search</button>
                </form>
                <p className="text-sm py-4 text-white mb-8 font-bold">Are you a buyer? <a className="font-normal hover:underline">Click here if you are looking to post a requirements</a></p>
            </div>
        </section>
    );
};

export default HeroSection;
