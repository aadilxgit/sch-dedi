"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const categoriesData = [
  { name: 'Value', value: 'value' },
  { name: 'Premium', value: 'ryzen' }, 
  { name: 'LTO', value: 'lto' }
];

const valuePlans = [
  { name: '2GB Value KVM VPS', cores: 2, memory: 2, storage: 25, bandwidth: 2, price: 5.00, storageType: 'SSD' },
  { name: '4GB Value KVM VPS', cores: 2, memory: 4, storage: 50, bandwidth: 3, price: 9.00, storageType: 'SSD' },
  { name: '6GB Value KVM VPS', cores: 4, memory: 6, storage: 75, bandwidth: 4, price: 13.00, storageType: 'SSD' },
  { name: '8GB Value KVM VPS', cores: 4, memory: 8, storage: 100, bandwidth: 5, price: 17.00, storageType: 'SSD' },
  { name: '12GB Value KVM VPS', cores: 6, memory: 12, storage: 150, bandwidth: 8, price: 24.00, storageType: 'SSD' },
  { name: '16GB Value KVM VPS', cores: 8, memory: 16, storage: 200, bandwidth: 10, price: 33.00, storageType: 'SSD' },
  { name: '24GB Value KVM VPS', cores: 12, memory: 24, storage: 300, bandwidth: 12, price: 49.00, storageType: 'SSD' },
  { name: '32GB Value KVM VPS', cores: 16, memory: 32, storage: 400, bandwidth: 16, price: 65.00, storageType: 'SSD' }
];

const premiumPlans = [
  { name: '2GB Premium KVM VPS', cores: 1, memory: 2, storage: 25, bandwidth: 2, price: 9.00, storageType: 'NVMe' },
  { name: '4GB Premium KVM VPS', cores: 1, memory: 4, storage: 50, bandwidth: 3, price: 17.00, storageType: 'NVMe' },
  { name: '6GB Premium KVM VPS', cores: 2, memory: 6, storage: 75, bandwidth: 4, price: 25.00, storageType: 'NVMe' },
  { name: '8GB Premium KVM VPS', cores: 2, memory: 8, storage: 100, bandwidth: 5, price: 33.00, storageType: 'NVMe' },
  { name: '12GB Premium KVM VPS', cores: 3, memory: 12, storage: 150, bandwidth: 8, price: 49.00, storageType: 'NVMe' },
  { name: '16GB Premium KVM VPS', cores: 4, memory: 16, storage: 200, bandwidth: 10, price: 65.00, storageType: 'NVMe' },
  { name: '24GB Premium KVM VPS', cores: 6, memory: 24, storage: 300, bandwidth: 12, price: 97.00, storageType: 'NVMe' },
  { name: '32GB Premium KVM VPS', cores: 8, memory: 32, storage: 400, bandwidth: 16, price: 129.00, storageType: 'NVMe' }
];

const sliderTrackRanges = {
  cpuCores: { min: 0, max: 16 },
  memoryGB: { min: 0, max: 32 },
  diskGB: { min: 0, max: 400 },
  bandwidthTB: { min: 0, max: 16 },
};

const valueNodeSpecs = {
    cpu: 'AMD EPYC 7542', cores: 'Shared', ram: 'DDR4-2666MHz RAM', storage: 'RAID 1 U.2 Storage', network: '10Gbps Shared Uplink',
};

const premiumNodeSpecs = {
    cpu: 'AMD Ryzen 9 7950X', cores: 'Dedicated', ram: 'DDR5-3600MHz RAM', storage: 'RAID 1 NVMe Storage', network: '10Gbps Shared Uplink',
};

const specNameToDisplayName = (specName) => { 
    switch (specName) {
        case 'cpuCores': return 'CPU Cores';
        case 'memoryGB': return 'Memory';
        case 'diskGB': return 'Disk Size';
        case 'bandwidthTB': return 'Bandwidth';
        case 'ipv4Count': return 'Additional IPv4';
        default: return '';
    }
};
const getSpecUnit = (specName) => { 
    switch (specName) {
        case 'memoryGB': return 'GB';
        case 'diskGB': return 'GB';
        case 'bandwidthTB': return 'TB';
        default: return '';
    }
};

const LTOPanel = () => { 
    return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#141418] border border-[#7964e4] rounded-lg text-center w-full">
        <h3 className="text-2xl font-bold text-white mb-4">Limited Time Offers</h3>
        <p className="text-white/80 text-center mb-6 max-w-2xl">
            Please visit our billing panel to explore exclusive LTO deals and special discounts.
        </p>
        <button
            className="bg-[#7964e4] text-white px-6 py-3 rounded-md font-bold hover:bg-[#6753d3] transition-all"
            onClick={() => window.location.href = 'https://my.snakecrafthosting.com'}
        >
            View LTO Offers
        </button>
    </div>
    );
};
const IPDisplay = ({ plain }) => { 
 return (
  <div className="flex items-center gap-1">
    <span>
      {plain ? (
        "1 IPv4 & /64 IPv6 Block"
      ) : (
        <><span className="font-bold text-[#7964e4]">1</span> IPv4 & <span className="font-bold text-[#7964e4]">/64</span> IPv6 Block</>
      )}
    </span>
    <div className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-[#7964e4] cursor-help"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 invisible group-hover:visible bg-zinc-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        Additional IPv4 available at $1.50/mo
      </div>
    </div>
  </div>
 );
};
const ProcessorInfo = ({ text }) => { 
 return (
  <div className="group relative inline-block">
    <span className="text-white/80">{text}</span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-sm p-2 rounded whitespace-nowrap z-10">
      May utilize better or equivalent CPUs
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
        <div className="border-8 border-transparent border-t-zinc-800"></div>
      </div>
    </div>
  </div>
 );
};
const renderSpecIcon = (specName) => { 
    const iconStyle = { width: '20px', height: '20px', fill: 'white' };

     switch (specName) {
        case 'cpuCores': return <svg style={iconStyle} viewBox="0 0 20 20"><path d="M14 6H6V14H14V6Z" /><path fillRule="evenodd" clipRule="evenodd" d="M9.25 3V1.75C9.25 1.33579 9.58579 1 10 1C10.4142 1 10.75 1.33579 10.75 1.75V3H12.25V1.75C12.25 1.33579 12.5858 1 13 1C13.4142 1 13.75 1.33579 13.75 1.75V3H14.25C15.7688 3 17 4.23122 17 5.75V6.25H18.25C18.6642 6.25 19 6.58579 19 7C19 7.41421 18.6642 7.75 18.25 7.75H17V9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H17V12.25H18.25C18.6642 12.25 19 12.5858 19 13C19 13.4142 18.6642 13.75 18.25 13.75H17V14.25C17 15.7688 15.7688 17 14.25 17H13.75V18.25C13.75 18.6642 13.4142 19 13 19C12.5858 19 12.25 18.6642 12.25 18.25V17H10.75V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V17H7.75V18.25C7.75 18.6642 7.41421 19 7 19C6.58579 19 6.25 18.6642 6.25 18.25V17H5.75C4.23122 17 3 15.7688 3 14.25V13.75H1.75C1.33579 13.75 1 13.4142 1 13C1 12.5858 1.33579 12.25 1.75 12.25H3V10.75H1.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25H3V7.75H1.75C1.33579 7.75 1 7.41421 1 7C1 6.58579 1.33579 6.25 1.75 6.25H3V5.75C3 4.23122 4.23122 3 5.75 3H6.25V1.75C6.25 1.33579 6.58579 1 7 1C7.41421 1 7.75 1.33579 7.75 1.75V3H9.25ZM4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z" /></svg>;
        case 'memoryGB': return <svg style={iconStyle} viewBox="0 0 20 20"><path d="M4.63196 3.53326C4.84778 2.63402 5.65196 2 6.57674 2H13.4231C14.3479 2 15.1521 2.63401 15.3679 3.53325L17.3441 11.7674C16.9303 11.5951 16.4762 11.5 15.9999 11.5H3.99994C3.52368 11.5 3.06963 11.5951 2.65576 11.7674L4.63196 3.53326Z" /><path fillRule="evenodd" clipRule="evenodd" d="M4 13C2.89543 13 2 13.8954 2 15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15C18 13.8954 17.1046 13 16 13H4ZM15.2402 15C15.2402 14.5858 15.576 14.25 15.9902 14.25H16.0002C16.4144 14.25 16.7502 14.5858 16.7502 15V15.01C16.7502 15.4242 16.4144 15.76 16.0002 15.76H15.9902C15.576 15.76 15.2402 15.4242 15.2402 15.01V15ZM12.9902 14.25C12.576 14.25 12.2402 14.5858 12.2402 15V15.01C12.2402 15.4242 12.576 15.76 12.9902 15.76H13.0002C13.4144 15.76 13.7502 15.4242 13.7502 15.01V15C13.7502 14.5858 13.4144 14.25 13.0002 14.25H12.9902Z" /></svg>;
        case 'diskGB': return <svg style={iconStyle} viewBox="0 0 20 20"><path d="M3.19569 12.8694L2.37071 13.353C2.14108 13.4876 2 13.7338 2 14C2 14.2662 2.14108 14.5124 2.37071 14.647L9.62071 18.897C9.85493 19.0343 10.1451 19.0343 10.3793 18.897L17.6293 14.647C17.8589 14.5124 18 14.2662 18 14C18 13.7338 17.8589 13.4876 17.6293 13.353L16.8043 12.8694L11.1379 16.1911C10.4352 16.603 9.56479 16.603 8.86213 16.1911L3.19569 12.8694Z" /><path d="M3.19569 8.86937L2.37071 9.35298C2.14108 9.48759 2 9.73382 2 10C2 10.2662 2.14108 10.5124 2.37071 10.647L9.62071 14.897C9.85493 15.0343 10.1451 15.0343 10.3793 14.897L17.6293 10.647C17.8589 10.5124 18 10.2662 18 10C18 9.73382 17.8589 9.48759 17.6293 9.35298L16.8043 8.86937L11.1379 12.1911C10.4352 12.603 9.56479 12.603 8.86213 12.1911L3.19569 8.86937Z" /><path d="M10.3793 1.10298C10.1451 0.965675 9.85493 0.965675 9.62071 1.10298L2.37071 5.35298C2.14108 5.48759 2 5.73382 2 6C2 6.26618 2.14108 6.51241 2.37071 6.64702L9.62071 10.897C9.85493 11.0343 10.1451 11.0343 10.3793 10.897L17.6293 6.64702C17.8589 6.51241 18 6.26618 18 6C18 5.73382 17.8589 5.48759 17.6293 5.35298L10.3793 1.10298Z" /></svg>;
        case 'bandwidthTB': return <svg style={iconStyle} viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M0.675986 6.94117C3.03728 4.51116 6.34284 3 10 3C13.6572 3 16.9628 4.51116 19.3241 6.94117C19.6098 7.23522 19.6064 7.70424 19.3165 7.99417L18.9629 8.34776C18.8209 8.48979 18.6278 8.56891 18.427 8.56741C18.2261 8.56591 18.0343 8.48391 17.8944 8.33977C15.8944 6.27907 13.0973 5 10 5C6.90281 5 4.10564 6.27907 2.10566 8.33977C1.96577 8.48391 1.77392 8.56591 1.57307 8.56741C1.37222 8.56891 1.17916 8.48979 1.03713 8.34776L0.683537 7.99417C0.39361 7.70424 0.390247 7.23522 0.675986 6.94117ZM3.50123 9.77378C5.13848 8.06527 7.44548 7 10 7C12.5546 7 14.8616 8.06527 16.4988 9.77378C16.7811 10.0684 16.7762 10.5345 16.4877 10.823L16.134 11.1767C15.9913 11.3194 15.797 11.3986 15.5952 11.3963C15.3933 11.394 15.2009 11.3104 15.0615 11.1645C13.786 9.82985 11.9906 9 10 9C8.00951 9 6.21406 9.82985 4.93858 11.1645C4.79912 11.3104 4.60672 11.394 4.40487 11.3963C4.20302 11.3986 4.00877 11.3194 3.86604 11.1767L3.5124 10.823C3.22391 10.5345 3.21894 10.0684 3.50123 9.77378ZM6.32061 12.6144C7.23335 11.6229 8.5445 11 10 11C11.4556 11 12.7667 11.6229 13.6794 12.6144C13.9518 12.9103 13.9423 13.3683 13.658 13.6527L13.3041 14.0066C13.1591 14.1516 12.9611 14.2309 12.7562 14.2261C12.5512 14.2213 12.3572 14.1328 12.2192 13.9812C11.6694 13.3773 10.8793 13 10 13C9.12075 13 8.33066 13.3773 7.7809 13.9812C7.64289 14.1328 7.44884 14.2213 7.24388 14.2261C7.03893 14.2309 6.84094 14.1516 6.69598 14.0066L6.34208 13.6527C6.05771 13.3683 6.04824 12.9103 6.32061 12.6144ZM9.11615 15.3661C9.34153 15.1407 9.65506 15 10 15C10.345 15 10.6585 15.1407 10.8839 15.3661C11.1768 15.659 11.1768 16.1339 10.8839 16.4268L10.5304 16.7803C10.2375 17.0732 9.76259 17.0732 9.4697 16.7803L9.11615 16.4268C8.82325 16.1339 8.82325 15.659 9.11615 15.3661Z" /></svg>;
        case 'ipv4Count': return <svg style={iconStyle} viewBox="0 0 20 20"><path d="M10.75 4.75C10.75 4.33579 10.4142 4 10 4C9.58579 4 9.25 4.33579 9.25 4.75V9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75L9.25 10.75V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V10.75L15.25 10.75C15.6642 10.75 16 10.4142 16 10C16 9.58579 15.6642 9.25 15.25 9.25H10.75V4.75Z" /></svg>;
        default: return null;
    }
};

// Add this CSS animation at the top of your component or in your global CSS
const floatingAnimation = `
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
`;

const PricingSection = () => {

    const [selectedCategory, setSelectedCategory] = useState('value');
    const [cpuCores, setCpuCores] = useState(valuePlans[0].cores);
    const [memoryGB, setMemoryGB] = useState(valuePlans[0].memory);
    const [diskGB, setDiskGB] = useState(valuePlans[0].storage);
    const [bandwidthTB, setBandwidthTB] = useState(valuePlans[0].bandwidth);
    const [totalPrice, setTotalPrice] = useState(valuePlans[0].price);

    useEffect(() => {
        let initialPlan;
        if (selectedCategory === 'value') {
            initialPlan = valuePlans[0];
        } else if (selectedCategory === 'ryzen') {
            initialPlan = premiumPlans[0];
        } else {
            return;
        }
        if (initialPlan) {
            setCpuCores(initialPlan.cores);
            setMemoryGB(initialPlan.memory);
            setDiskGB(initialPlan.storage);
            setBandwidthTB(initialPlan.bandwidth);
            setTotalPrice(initialPlan.price);
        }
    }, [selectedCategory]);

    const handleSliderChange = (spec, value) => {
        const currentPlans = selectedCategory === 'ryzen' ? premiumPlans : valuePlans;
        if (!currentPlans || currentPlans.length === 0) return;

        let intValue = parseInt(value, 10);
        const specKey = spec === 'cpuCores' ? 'cores' : spec === 'memoryGB' ? 'memory' : spec === 'diskGB' ? 'storage' : 'bandwidth';
        const minPlanValue = currentPlans[0]?.[specKey] ?? 0; 

        if (intValue < minPlanValue) {

            intValue = minPlanValue; 
        }

        let nextPlan = currentPlans.find(plan => plan[specKey] >= intValue);

        if (!nextPlan) {
            nextPlan = currentPlans[currentPlans.length - 1];
        }

        if (nextPlan) {
             setCpuCores(nextPlan.cores);
             setMemoryGB(nextPlan.memory);
             setDiskGB(nextPlan.storage);
             setBandwidthTB(nextPlan.bandwidth);
             setTotalPrice(nextPlan.price);
        }
    };

    const renderSlider = (specName, currentValue) => {
        const plans = selectedCategory === 'ryzen' ? premiumPlans : valuePlans;
        if (!plans || plans.length === 0) return null;

        const specKey = specName === 'cpuCores' ? 'cores' : specName === 'memoryGB' ? 'memory' : specName === 'diskGB' ? 'storage' : 'bandwidth';

        const trackMin = sliderTrackRanges[specName]?.min ?? 0;
        const trackMax = sliderTrackRanges[specName]?.max ?? Math.max(...plans.map(p => p[specKey])); 

        const sliderValue = currentValue;

        const step = (specName === 'memoryGB' && trackMax > trackMin) ? 2 : 1;

        return (
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-row items-center gap-4">
                    {renderSpecIcon(specName)}
                    <div className="flex flex-row justify-between items-center w-full">
                        <span>{specNameToDisplayName(specName)}</span>
                        {}
                        <span>{currentValue}{getSpecUnit(specName)}</span>
                    </div>
                </div>
                <input
                    type="range"
                    min={trackMin} 
                    max={trackMax} 
                    value={sliderValue} 
                    step={step}
                    className="w-full h-2 appearance-none focus:outline-none focus:ring-0 cursor-pointer"
                    style={{
                        background: `linear-gradient(to right,
                            #7964e4 0%,
                            #7964e4 ${trackMax === trackMin ? 0 : ((sliderValue - trackMin) / (trackMax - trackMin)) * 100}%,
                            #2b2b2b ${trackMax === trackMin ? 0 : ((sliderValue - trackMin) / (trackMax - trackMin)) * 100}%,
                            #2b2b2b 100%)`, 
                        height: '8px',
                        borderRadius: '4px'
                    }}
                    onChange={(e) => handleSliderChange(specName, parseInt(e.target.value))}
                />
            </div>
        );
    };

    const renderNodeSpecs = () => { 
        const currentSpecs = selectedCategory === 'ryzen' ? premiumNodeSpecs : valueNodeSpecs;
        return (
            <div className="bg-[#141418] p-4 md:p-6 rounded-lg border border-[#7964e4] w-[90%] mx-auto md:w-full h-full shadow-lg flex flex-col">
                <div className="bg-[#7964e4] p-3 rounded-md shadow-[0_0_15px_rgba(121,100,228,0.3)] mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white text-center">
                        {selectedCategory === 'ryzen' ? 'Premium Node Specs' : 'Value Node Specs'}
                    </h3>
                </div>

                {/* CPU Image */}
                <div className="relative w-full flex justify-center mb-6">
                    <style>{floatingAnimation}</style>
                    <div className="relative w-[16rem] h-[16rem] flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7964e4]/20 to-[#656fe4]/20 animate-pulse blur-xl"></div>
                        <Image 
                            src={selectedCategory === 'ryzen' ? '/amdryzen7950x.png' : '/amdepyc7542edit.png'} 
                            alt={selectedCategory === 'ryzen' ? 'AMD Ryzen 7950X' : 'AMD EPYC 7542'}
                            width={320}
                            height={320}
                            className="relative w-[20rem] h-[20rem] object-contain"
                            style={{
                                animation: 'floating 3s ease-in-out infinite',
                            }}
                            priority
                         />
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-grow">
                    <div className="space-y-2">
                        <h4 className="text-white/90 font-semibold text-sm md:text-base">
                            Processor & Storage
                        </h4>
                        <div className="pl-4 space-y-1.5 text-sm md:text-base">
                            <ProcessorInfo text={currentSpecs.cpu} />
                            <p className="text-white/80">{currentSpecs.ram}</p>
                            <p className="text-white/80">{currentSpecs.storage}</p>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white/10 my-2"></div>
                    <div className="space-y-2">
                        <h4 className="text-white/90 font-semibold text-sm md:text-base">Network</h4>
                        <div className="pl-4 space-y-1.5 text-sm md:text-base">
                            <p className="text-white/80">{currentSpecs.network}</p>
                            <IPDisplay plain={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderPricingContent = () => { 
        const isPremium = selectedCategory === 'ryzen';
        const currentPlans = isPremium ? premiumPlans : valuePlans;
        const baseTitle = isPremium ? 'Premium KVM VPS' : 'Value KVM VPS';

        const currentPlan = currentPlans.find(p =>
            p.cores === cpuCores &&
            p.memory === memoryGB &&
            p.storage === diskGB &&
            p.bandwidth === bandwidthTB
        );

        const planName = currentPlan ? currentPlan.name : `${memoryGB}GB Custom ${baseTitle}`;
        const storageTypeLabel = currentPlan?.storageType || (isPremium ? 'NVMe' : 'SSD');
        const displayPrice = totalPrice;

        return (
            <div className="flex flex-col gap-8 w-[90%] mx-auto md:w-full">
                {}
                <div className="bg-[#141418] p-4 md:p-6 rounded-lg border border-[#7964e4]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                                {planName}
                            </span>
                            <div className="bg-[#7964e4] px-4 py-2 rounded-md self-start md:self-auto">
                                <span className="text-xl md:text-2xl font-bold text-white">${displayPrice.toFixed(2)}/mo</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <button
                                className="w-full md:w-auto bg-transparent border border-[#7964e4] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7964e4]/10 transition-all"
                                onClick={() => window.location.href = 'https://my.snakecrafthosting.com'}
                            >
                                View Plans
                            </button>
                            <button
                                className="w-full md:w-auto bg-[#7964e4] text-white px-6 py-2 rounded-md font-medium hover:bg-[#6753d3] transition-all"
                                onClick={() => window.location.href = 'https://my.snakecrafthosting.com'}
                            >
                                Deploy Now
                            </button>
                        </div>
                    </div>
                </div>

                {}
                <div className="bg-[#141418] p-6 rounded-lg border border-[#7964e4]">
                    <div className="flex flex-col gap-4">
                        {renderSlider('cpuCores', cpuCores)}
                        {renderSlider('memoryGB', memoryGB)}
                        {renderSlider('diskGB', diskGB)}
                        {renderSlider('bandwidthTB', bandwidthTB)}
                    </div>
                </div>

                {}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <span><span className="font-bold text-[#7964e4]">{cpuCores}</span> vCPU</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <span><span className="font-bold text-[#7964e4]">{memoryGB}GB</span> Memory</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <span><span className="font-bold text-[#7964e4]">{diskGB}GB</span> {storageTypeLabel}</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <span><span className="font-bold text-[#7964e4]">{bandwidthTB}TB</span> Bandwidth</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <span><span className="font-bold text-[#7964e4]">10Gbps</span> Shared Uplink</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded border border-[#7964e4]">
                        <IPDisplay />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-zinc-950 text-white">
            <div className="p-4 md:p-5 py-12 md:py-24 container mx-auto flex flex-col gap-8 px-4 md:px-[44px]" id="Plans">
                {}
                <div className="w-[90%] xl:w-1/3 mx-auto md:mx-0">
                    <h4 className="text-white/90 font-semibold text-sm md:text-base mb-3">Select VPS Type</h4>
                    <div className="bg-[#141418] p-1.5 rounded-lg inline-flex w-full border border-[#7964e4] shadow-[0_0_20px_rgba(121,100,228,0.2)]">
                        {categoriesData.map((category) => (
                            <button
                                key={category.value}
                                className={`
                                    flex-1 px-4 py-2.5 rounded-md font-medium transition-all duration-300 text-sm
                                    ${selectedCategory === category.value
                                        ? 'bg-gradient-to-r from-[#656fe4] to-[#7964e4] text-white shadow-[0_0_15px_rgba(121,100,228,0.3)] scale-105'
                                        : 'text-white/60'
                                    }
                                `}
                                onClick={() => setSelectedCategory(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {}
                {selectedCategory === 'lto' ? (
                    <LTOPanel />
                ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 md:gap-8">
                        <div className="w-full flex flex-col">
                            {renderNodeSpecs()}
                        </div>
                        <div className="xl:col-span-3">
                            {renderPricingContent()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PricingSection;