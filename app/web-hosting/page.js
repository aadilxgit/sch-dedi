"use client";
import Image from 'next/image';

export default function WebHosting() {
    const plans = [
        {
            name: "Basic Hosting",
            description: "Perfect for small websites and blogs",
            monthlyPrice: 4.99,
            yearlyPrice: 49.99,
            normalPrice: 9.99,
            features: [
                "1 Website",
                "10 GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "Daily Backups",
                "1 Email Account",
                "24/7 Support"
            ]
        },
        {
            name: "Professional",
            description: "Ideal for growing businesses",
            monthlyPrice: 9.99,
            yearlyPrice: 99.99,
            normalPrice: 19.99,
            features: [
                "5 Websites",
                "50 GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "Daily Backups",
                "5 Email Accounts",
                "Priority Support"
            ]
        },
        {
            name: "Business",
            description: "Enhanced performance for high-traffic sites",
            monthlyPrice: 14.99,
            yearlyPrice: 149.99,
            normalPrice: 29.99,
            badge: "Most Popular",
            features: [
                "Unlimited Websites",
                "100 GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "Daily Backups",
                "Unlimited Email Accounts",
                "Priority Support",
                "SSH Access"
            ]
        },
        {
            name: "Enterprise",
            description: "Maximum resources for large websites",
            monthlyPrice: 24.99,
            yearlyPrice: 249.99,
            normalPrice: 49.99,
            features: [
                "Unlimited Websites",
                "200 GB SSD Storage",
                "Unmetered Bandwidth",
                "Free SSL Certificate",
                "Daily Backups",
                "Unlimited Email Accounts",
                "Priority Support",
                "SSH Access",
                "Dedicated IP"
            ]
        }
    ];

    return (
        <div>
            <section className="relative bg-zinc-950 pt-28 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
                    {/* Background gradients */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7964e4]/20 via-zinc-900/10 to-[#7964e4]/20 blur-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/30 via-[#7964e4]/10 to-zinc-900/30 blur-2xl" />
                    </div>

                    {/* Hero Content */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 
                            border border-white/[0.05]">
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <div className="text-center lg:text-left w-full lg:w-1/2">
                                        <span className="text-[#7964e4] text-xl uppercase tracking-[0.2em] mb-4 block font-semibold">
                                            Web Solutions
                                        </span>
                                        <h1 className="text-6xl sm:text-8xl font-black text-white mb-6">
                                            Web Hosting
                                        </h1>
                                        <p className="text-zinc-300 text-lg mb-8">
                                            Lightning-fast web hosting powered by latest generation servers,
                                            NVMe SSDs, and optimized for maximum performance.
                                        </p>
                                        <div className="flex items-center justify-center lg:justify-start gap-4">
                                            <a href="#plans" 
                                               className="bg-gradient-to-r from-[#656fe4] to-[#7964e4] hover:from-[#5660d3] hover:to-[#6753d3] 
                                                      text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 
                                                      flex items-center gap-2 group">
                                                View Plans
                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                     className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Image Section */}
                                    <div className="hidden lg:flex h-[400px] w-[500px] items-center justify-center">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/* Gradient Glow Effect */}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7964e4]/20 to-[#656fe4]/20 animate-pulse blur-xl"></div>
                                            
                                            {/* Image with Animation */}
                                            <Image 
                                                src="/webhosting-hero.png" 
                                                alt="Web Hosting Illustration"
                                                width={380}
                                                height={380}
                                                className="relative object-contain z-10"
                                                style={{
                                                    animation: 'floating 3s ease-in-out infinite'
                                                }}
                                             />
                                        </div>

                                        {/* Animation Keyframes */}
                                        <style jsx>{`
                                            @keyframes floating {
                                                0% {
                                                    transform: translateY(0px);
                                                }
                                                50% {
                                                    transform: translateY(-10px);
                                                }
                                                100% {
                                                    transform: translateY(0px);
                                                }
                                            }
                                        `}</style>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section id="plans" className="bg-zinc-950 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[#7964e4] text-xl uppercase tracking-[0.2em] font-semibold mb-4">
                            HOSTING PLANS
                        </h2>
                        <p className="text-4xl sm:text-5xl font-black text-white mb-6">
                            Choose Your Web Hosting Plan
                        </p>
                        <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
                            Select from our range of web hosting plans designed to fit your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div key={index} 
                                 className="bg-[#141418] rounded-lg border border-[#7964e4] p-6
                                          transform hover:scale-105 transition-all duration-300">
                                {plan.badge && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[#7964e4] text-white px-3 py-1 rounded-full text-sm">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                                
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-white">
                                        ${plan.monthlyPrice}
                                        <span className="text-sm text-zinc-400">/mo</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">
                                        Normally ${plan.normalPrice}/mo
                                    </p>
                                </div>

                                <button className="w-full bg-[#7964e4] text-white px-4 py-3 rounded-md 
                                                 font-medium hover:bg-[#6753d3] transition-all duration-300 mb-6">
                                    Get Started
                                </button>

                                <div className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#7964e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-zinc-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}