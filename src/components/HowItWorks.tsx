import React from 'react';

type Step = {
    id: number;
    text: string;
    icon: React.ReactNode; // Added an icon field
};

type HowItWorksProps = {};

const HowItWorks: React.FC<HowItWorksProps> = () => {
    const steps: Step[] = [
        { id: 1, text: "Select Your Role and Sign Up", icon:<img src="./images/Userplus.png" alt="Logo" className=" mr-2" />},
        { id: 2, text: "Buyers Post Your Requirements", icon:<img src="./images/document.png" alt="Logo" className=" mr-2" />},
        { id: 3, text: "Review, Select, and Contact the Best Suppliers", icon:<img src="./images/Search.png" alt="Logo" className=" mr-2" />},
        { id: 4, text: "Suppliers Complete your profile and get notified for oppertunities", icon: <img src="./images/edit.png" alt="Logo" className=" mr-2" />},
        { id: 5, text: "Contact Buyers and Share your Quote for the service", icon: <img src="./images/quote-request.png" alt="Logo" className=" mr-2" /> },
        { id: 6, text: "Both the parties can Connect and Make Bussiness Leave a Feedback", icon: <img src="./images/Shakehand.png" alt="Logo" className=" mr-2" />},
    ];


    return (
        <section className="py-16 ">
            <div className="container mx-auto px-10 md:px-28">
                <h2 className="text-3xl font-semibold text-center mb-8">How it works?</h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Buyers post their needs and review top suppliers, while suppliers complete profiles,
                    connect with potential buyers, and build successful business relationships, sharing valuable feedback.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`flex flex-col items-center text-center p-6 ${index % 2 === 0 ? 'bg-[#E8FBFF]' : 'bg-white'}`}
                        >
                            <div className="text-4xl mb-4">{step.icon}</div> {/* Icon */}
                            <div className="text-xl font-bold mb-2">Step {step.id}</div>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
