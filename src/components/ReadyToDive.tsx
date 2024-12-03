import React from 'react';

type ReadyToDiveProps = {};

const ReadyToDive: React.FC<ReadyToDiveProps> = () => {
    const locations = [
        'Abu Dhabi',
        'Dubai',
        'Sharjah & Ajman',
        'Fujairah',
        'Ras Al Khaimah',
        'Umm Al Quwain'
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:flex items-center justify-between gap-x-56">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Ready to dive into HABOT?</h2>
                    <p className="text-gray-700 mb-6">
                        Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
                        Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first
                        step towards realizing your entrepreneurial dreams.
                    </p>
                    <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"><span className='flex gap-8'>Sign up Today!<img src="./images/Vector.png" width="30" alt="Vector" className=" mr-2" /></span></button>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {locations.map((location, index) => (
                        <div key={index} className="border border-[#E7760D] p-4 rounded text-center  hover:bg-[#E7760D] transition duration-200">
                            {location}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReadyToDive;
