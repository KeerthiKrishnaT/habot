import React from 'react';

type Section = {};

const Section: React.FC<Section> = () => {
    

    return (
        <section className="py-10 bg-[#E8FBFF] my-16">
            <div className="container mx-auto px-4 md:flex items-center justify-between gap-x-56">
                <div className="md:w-1/2 mb-8 md:mb-0 text-center">
                    <h2 className="text-3xl font-Poppins mb-4">Let Suppliers Find You</h2>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                   <button className='bg-[#EB7150] text-[#FFFFFF] p-4'>Get Verified</button>
                </div>
            </div>
        </section>
    );
};

export default Section;
