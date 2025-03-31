"use client";
import React, { useState, useEffect } from 'react';

const categoriesData = [
    { name: 'Value', value: 'value' },
    { name: 'LTO', value: 'lto' },
];

const lineupsData = [
    { name: 'Balanced', value: 'Balanced' },
    { name: 'CPU Optimized', value: 'CPU Optimized' },
    { name: 'Memory Optimized', value: 'Memory Optimized' },
];

// Update the plans array to start from zero and include the basic plans
const valuePlans = [
  {
    name: 'Starter',
    cores: 0,
    memory: 0,
    storage: 0,
    bandwidth: 0,
    ipv4: 1,
    price: 0
  },
  {
    name: '2GB Value KVM VPS',
    cores: 2,
    memory: 2,
    storage: 25,
    bandwidth: 2,
    ipv4: 1,
    price: 5.00
  },
  {
    name: '4GB Value KVM VPS',
    cores: 2,
    memory: 4,
    storage: 50,
    bandwidth: 3,
    ipv4: 1,
    price: 9.00
  },
  {
    name: '6GB Value KVM VPS',
    cores: 4,
    memory: 6,
    storage: 75,
    bandwidth: 4,
    ipv4: 1,
    price: 13.00
  },
  {
    name: '8GB Value KVM VPS',
    cores: 4,
    memory: 8,
    storage: 100,
    bandwidth: 5,
    ipv4: 1,
    price: 17.00
  },
  {
    name: '12GB Value KVM VPS',
    cores: 6,
    memory: 12,
    storage: 150,
    bandwidth: 8,
    ipv4: 1,
    price: 24.00
  },
  {
    name: '16GB Value KVM VPS',
    cores: 8,
    memory: 16,
    storage: 200,
    bandwidth: 10,
    ipv4: 1,
    price: 33.00
  },
  {
    name: '24GB Value KVM VPS',
    cores: 12,
    memory: 24,
    storage: 300,
    bandwidth: 12,
    ipv4: 1,
    price: 49.00
  },
  {
    name: '32GB Value KVM VPS',
    cores: 16,
    memory: 32,
    storage: 400,
    bandwidth: 16,
    ipv4: 1,
    price: 65.00
  }
];

// Add this function to find the nearest plan based on memory
const findNearestPlan = (memory) => {
  return valuePlans.reduce((prev, curr) => {
    return Math.abs(curr.memory - memory) < Math.abs(prev.memory - memory) ? curr : prev;
  });
};

// Update vpsSpecsData to start from 0
const vpsSpecsData = {
  cpuCores: { min: 0, max: 16, initial: 0 },
  memoryGB: { min: 0, max: 32, initial: 0 },
  diskGB: { min: 0, max: 400, initial: 0 },
  bandwidthTB: { min: 0, max: 16, initial: 0 },
  ipv4Count: { min: 1, max: 1, initial: 1 },
};

// Update the nodeSpecifications object with more details
const nodeSpecifications = {
    cpu: 'Intel® Xeon® E5-2699 v4',
    cores: '22 Cores / 44 Threads',
    baseFreq: '2.20 GHz',
    turboFreq: '3.60 GHz Turbo',
    cache: '55MB Cache',
    tdp: '145W TDP',
    memory: 'DDR4 ECC Memory',
    storage: 'Enterprise NVMe Storage',
    network: '2.5 Gbps Network Port',
    raid: 'Hardware RAID Support',
    features: [
        'Intel® Hyper-Threading Technology',
        'Intel® Turbo Boost Technology 2.0',
        'Intel® vPro™ Technology',
        'Advanced Vector Extensions 2.0',
        'Hardware-assisted Virtualization',
        'Enhanced SpeedStep® Technology',
        'Thermal Monitoring Technologies',
        'Execute Disable Bit'
    ]
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

// Add this new component for LTO Panel
const LTOPanel = () => (
    <div className="flex flex-col items-center justify-center p-8 bg-[#141418] border border-[#7964e4] rounded-lg text-center w-full">
        <h3 className="text-2xl font-bold text-white mb-4">Limited Time Offers</h3>
        <p className="text-white/80 text-center mb-6 max-w-2xl">
            Please visit our billing panel to explore exclusive LTO deals and special discounts.
        </p>
        <button 
            className="bg-[#7964e4] text-white px-6 py-3 rounded-md font-bold hover:bg-[#6753d3] transition-all"
            onClick={() => window.location.href = 'https://billing.yourdomain.com'}
        >
            View LTO Offers
        </button>
    </div>
);

// 1. Update the initial state to default to 'value'
const PricingSection = () => {
    // Initialize all states
    const [selectedCategory, setSelectedCategory] = useState('value');
    const [selectedLocation, setSelectedLocation] = useState('value');
    const [selectedLineup, setSelectedLineup] = useState('Balanced');
    const [cpuCores, setCpuCores] = useState(vpsSpecsData.cpuCores.initial);
    const [memoryGB, setMemoryGB] = useState(vpsSpecsData.memoryGB.initial);
    const [diskGB, setDiskGB] = useState(vpsSpecsData.diskGB.initial);
    const [bandwidthTB, setBandwidthTB] = useState(vpsSpecsData.bandwidthTB.initial);
    const [totalPrice, setTotalPrice] = useState(0);

    // Update the price calculation based on selected plan
    useEffect(() => {
        const currentPlan = findNearestPlan(memoryGB);
        setTotalPrice(currentPlan.price);
    }, [cpuCores, memoryGB, diskGB, bandwidthTB]);

    // Update all values when slider changes
    const handleSliderChange = (spec, value) => {
        const intValue = parseInt(value, 10);
        const nextPlan = valuePlans.find(plan => {
            switch(spec) {
                case 'cpuCores': return plan.cores >= intValue;
                case 'memoryGB': return plan.memory >= intValue;
                case 'diskGB': return plan.storage >= intValue;
                case 'bandwidthTB': return plan.bandwidth >= intValue;
                default: return false;
            }
        }) || valuePlans[valuePlans.length - 1];

        setCpuCores(nextPlan.cores);
        setMemoryGB(nextPlan.memory);
        setDiskGB(nextPlan.storage);
        setBandwidthTB(nextPlan.bandwidth);
        setTotalPrice(nextPlan.price);
    };

    // Update the render functions to use the selected states
    // Update the renderPricingHeader function with better mobile responsiveness
    const renderPricingHeader = () => (
        <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border border-[#7964e4] w-[95%] mx-auto md:w-full">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    {/* Title and Price - Stack vertically on mobile */}
                    <div className="flex flex-col gap-3 items-start">
                        <span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                            {memoryGB}GB Value KVM VPS
                        </span>
                        <div className="bg-[#7964e4] px-4 py-2 rounded-md self-start">
                            <span className="text-xl md:text-2xl font-bold text-white">${totalPrice}/mo</span>
                        </div>
                    </div>
                    
                    {/* Buttons - Always stack vertically on mobile */}
                    <div className="flex flex-col gap-3 w-full md:flex-row md:justify-end">
                        <button 
                            className="w-full md:w-auto bg-transparent border border-[#7964e4] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7964e4]/10 transition-all"
                            onClick={() => window.location.href = 'https://billing.yourdomain.com'}
                        >
                            View Plans
                        </button>
                        <button 
                            className="w-full md:w-auto bg-[#7964e4] text-white px-6 py-2 rounded-md font-medium hover:bg-[#6753d3] transition-all"
                            onClick={() => window.location.href = 'https://deploy.yourdomain.com'}
                        >
                            Deploy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Update the renderSlider function
    const renderSlider = (specName, specData, currentValue, setValue) => {
        return (
            <div className="flex flex-col gap-4 mb-6"> {/* Added margin-bottom */}
                <div className="flex flex-row items-center gap-4">
                    {renderSpecIcon(specName)}
                    <div className="flex flex-row justify-between items-center w-full">
                        <span>{specNameToDisplayName(specName)}</span>
                        <span>{currentValue}{getSpecUnit(specName)}</span>
                    </div>
                </div>
                <input
                    type="range"
                    min={specData.min}
                    max={specData.max}
                    value={currentValue}
                    step="1"
                    className="w-full h-2" /* Increased height */
                    style={{
                        appearance: 'none',
                        background: `linear-gradient(to right, 
                            #7964e4 0%, 
                            #7964e4 ${((currentValue - specData.min) / (specData.max - specData.min)) * 100}%, 
                            #2b2b2b ${((currentValue - specData.min) / (specData.max - specData.min)) * 100}%, 
                            #2b2b2b 100%)`,
                        height: '8px', /* Increased thickness */
                        borderRadius: '4px'
                    }}
                    onChange={(e) => handleSliderChange(specName, parseInt(e.target.value))}
                />
            </div>
        );
    };

    const renderSpecIcon = (specName) => {
        const iconStyle = { width: '20px', height: '20px' };
        switch (specName) {
            case 'cpuCores':
                return (
                    <svg style={iconStyle} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6H6V14H14V6Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.25 3V1.75C9.25 1.33579 9.58579 1 10 1C10.4142 1 10.75 1.33579 10.75 1.75V3H12.25V1.75C12.25 1.33579 12.5858 1 13 1C13.4142 1 13.75 1.33579 13.75 1.75V3H14.25C15.7688 3 17 4.23122 17 5.75V6.25H18.25C18.6642 6.25 19 6.58579 19 7C19 7.41421 18.6642 7.75 18.25 7.75H17V9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H17V12.25H18.25C18.6642 12.25 19 12.5858 19 13C19 13.4142 18.6642 13.75 18.25 13.75H17V14.25C17 15.7688 15.7688 17 14.25 17H13.75V18.25C13.75 18.6642 13.4142 19 13 19C12.5858 19 12.25 18.6642 12.25 18.25V17H10.75V18.25C10.75 18.6642 10.4142 19 10 19C9.58579 19 9.25 18.6642 9.25 18.25V17H7.75V18.25C7.75 18.6642 7.41421 19 7 19C6.58579 19 6.25 18.6642 6.25 18.25V17H5.75C4.23122 17 3 15.7688 3 14.25V13.75H1.75C1.33579 13.75 1 13.4142 1 13C1 12.5858 1.33579 12.25 1.75 12.25H3V10.75H1.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25H3V7.75H1.75C1.33579 7.75 1 7.41421 1 7C1 6.58579 1.33579 6.25 1.75 6.25H3V5.75C3 4.23122 4.23122 3 5.75 3H6.25V1.75C6.25 1.33579 6.58579 1 7 1C7.41421 1 7.75 1.33579 7.75 1.75V3H9.25ZM4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z" fill="white" />
                    </svg>
                );
            case 'memoryGB':
                return (
                    <svg style={iconStyle} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.63196 3.53326C4.84778 2.63402 5.65196 2 6.57674 2H13.4231C14.3479 2 15.1521 2.63401 15.3679 3.53325L17.3441 11.7674C16.9303 11.5951 16.4762 11.5 15.9999 11.5H3.99994C3.52368 11.5 3.06963 11.5951 2.65576 11.7674L4.63196 3.53326Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 13C2.89543 13 2 13.8954 2 15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15C18 13.8954 17.1046 13 16 13H4ZM15.2402 15C15.2402 14.5858 15.576 14.25 15.9902 14.25H16.0002C16.4144 14.25 16.7502 14.5858 16.7502 15V15.01C16.7502 15.4242 16.4144 15.76 16.0002 15.76H15.9902C15.576 15.76 15.2402 15.4242 15.2402 15.01V15ZM12.9902 14.25C12.576 14.25 12.2402 14.5858 12.2402 15V15.01C12.2402 15.4242 12.576 15.76 12.9902 15.76H13.0002C13.4144 15.76 13.7502 15.4242 13.7502 15.01V15C13.7502 14.5858 13.4144 14.25 13.0002 14.25H12.9902Z" fill="white" />
                    </svg>
                );
            case 'diskGB':
                return (
                    <svg style={iconStyle} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.19569 12.8694L2.37071 13.353C2.14108 13.4876 2 13.7338 2 14C2 14.2662 2.14108 14.5124 2.37071 14.647L9.62071 18.897C9.85493 19.0343 10.1451 19.0343 10.3793 18.897L17.6293 14.647C17.8589 14.5124 18 14.2662 18 14C18 13.7338 17.8589 13.4876 17.6293 13.353L16.8043 12.8694L11.1379 16.1911C10.4352 16.603 9.56479 16.603 8.86213 16.1911L3.19569 12.8694Z" fill="white" />
                        <path d="M3.19569 8.86937L2.37071 9.35298C2.14108 9.48759 2 9.73382 2 10C2 10.2662 2.14108 10.5124 2.37071 10.647L9.62071 14.897C9.85493 15.0343 10.1451 15.0343 10.3793 14.897L17.6293 10.647C17.8589 10.5124 18 10.2662 18 10C18 9.73382 17.8589 9.48759 17.6293 9.35298L16.8043 8.86937L11.1379 12.1911C10.4352 12.603 9.56479 12.603 8.86213 12.1911L3.19569 8.86937Z" fill="white" />
                        <path d="M10.3793 1.10298C10.1451 0.965675 9.85493 0.965675 9.62071 1.10298L2.37071 5.35298C2.14108 5.48759 2 5.73382 2 6C2 6.26618 2.14108 6.51241 2.37071 6.64702L9.62071 10.897C9.85493 11.0343 10.1451 11.0343 10.3793 10.897L17.6293 6.64702C17.8589 6.51241 18 6.26618 18 6C18 5.73382 17.8589 5.48759 17.6293 5.35298L10.3793 1.10298Z" fill="white" />
                    </svg>
                );
            case 'bandwidthTB':
                return (
                    <svg style={iconStyle} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.675986 6.94117C3.03728 4.51116 6.34284 3 10 3C13.6572 3 16.9628 4.51116 19.3241 6.94117C19.6098 7.23522 19.6064 7.70424 19.3165 7.99417L18.9629 8.34776C18.8209 8.48979 18.6278 8.56891 18.427 8.56741C18.2261 8.56591 18.0343 8.48391 17.8944 8.33977C15.8944 6.27907 13.0973 5 10 5C6.90281 5 4.10564 6.27907 2.10566 8.33977C1.96577 8.48391 1.77392 8.56591 1.57307 8.56741C1.37222 8.56891 1.17916 8.48979 1.03713 8.34776L0.683537 7.99417C0.39361 7.70424 0.390247 7.23522 0.675986 6.94117ZM3.50123 9.77378C5.13848 8.06527 7.44548 7 10 7C12.5546 7 14.8616 8.06527 16.4988 9.77378C16.7811 10.0684 16.7762 10.5345 16.4877 10.823L16.134 11.1767C15.9913 11.3194 15.797 11.3986 15.5952 11.3963C15.3933 11.394 15.2009 11.3104 15.0615 11.1645C13.786 9.82985 11.9906 9 10 9C8.00951 9 6.21406 9.82985 4.93858 11.1645C4.79912 11.3104 4.60672 11.394 4.40487 11.3963C4.20302 11.3986 4.00877 11.3194 3.86604 11.1767L3.5124 10.823C3.22391 10.5345 3.21894 10.0684 3.50123 9.77378ZM6.32061 12.6144C7.23335 11.6229 8.5445 11 10 11C11.4556 11 12.7667 11.6229 13.6794 12.6144C13.9518 12.9103 13.9423 13.3683 13.658 13.6527L13.3041 14.0066C13.1591 14.1516 12.9611 14.2309 12.7562 14.2261C12.5512 14.2213 12.3572 14.1328 12.2192 13.9812C11.6694 13.3773 10.8793 13 10 13C9.12075 13 8.33066 13.3773 7.7809 13.9812C7.64289 14.1328 7.44884 14.2213 7.24388 14.2261C7.03893 14.2309 6.84094 14.1516 6.69598 14.0066L6.34208 13.6527C6.05771 13.3683 6.04824 12.9103 6.32061 12.6144ZM9.11615 15.3661C9.34153 15.1407 9.65506 15 10 15C10.345 15 10.6585 15.1407 10.8839 15.3661C11.1768 15.659 11.1768 16.1339 10.8839 16.4268L10.5304 16.7803C10.2375 17.0732 9.76259 17.0732 9.4697 16.7803L9.11615 16.4268C8.82325 16.1339 8.82325 15.659 9.11615 15.3661Z" fill="white" />
                    </svg>
                );
            case 'ipv4Count':
                return (
                    <svg style={iconStyle} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.75 4.75C10.75 4.33579 10.4142 4 10 4C9.58579 4 9.25 4.33579 9.25 4.75V9.25H4.75C4.33579 9.25 4 9.58579 4 10C4 10.4142 4.33579 10.75 4.75 10.75L9.25 10.75V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V10.75L15.25 10.75C15.6642 10.75 16 10.4142 16 10C16 9.58579 15.6642 9.25 15.25 9.25H10.75V4.75Z" fill="white" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const locationButtons = categoriesData.map((category) => (
        <div className="flex flex-col gap-4 w-full sm:w-auto" key={category.value}>
            <button
                style={selectedLocation === category.value ? pricingSectionStyles.locationButtonSelected : pricingSectionStyles.locationButton}
                className={selectedLocation === category.value ? "btn-selected" : ""}
                onClick={() => handleLocationSelect(category.value)}
            >
                <span>{category.name}</span>
            </button>
        </div>
    ));

    const lineupButtons = lineupsData.map((lineup) => (
        <button
            key={lineup.value}
            style={selectedLineup === lineup.value ? pricingSectionStyles.lineupButtonSelected : pricingSectionStyles.lineupButton}
            onClick={() => handleLineupSelect(lineup.value)}
            className={selectedLineup === lineup.value ? "btn-selected" : ""}
        >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2091_936)">
                    <path d="M20.6298 2.67028C20.2406 2.44324 19.7594 2.44324 19.3702 2.67028L5 11.0529L20 19.8029L35 11.0529L20.6298 2.67028Z" fill="white" fillOpacity="0.9" />
                    <path d="M36.25 13.218L21.25 21.968V36.968L35.6298 28.5797C36.0139 28.3557 36.25 27.9446 36.25 27.5V13.218Z" fill="white" fillOpacity="0.9" />
                    <path d="M18.75 36.968V21.968L3.75 13.218V27.5C3.75 27.9446 3.98614 28.3557 4.37016 28.5797L18.75 36.968Z" fill="white" fillOpacity="0.9" />
                </g>
                <defs>
                    <clipPath id="clip0_2091_936">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="flex-grow"></div>
            <div className="flex flex-col gap-2">
                <span style={selectedLineup === lineup.value ? pricingSectionStyles.lineupSpanHovered : pricingSectionStyles.lineupSpan}>{selectedLineup === lineup.value ? "Deploy" : "Deploy"}</span>
                <span style={pricingSectionStyles.lineupName}>{lineup.name}</span>
            </div>
        </button>
    ));

    // Update the renderNodeSpecs function
    const renderNodeSpecs = () => (
        <div className="bg-[#141418] p-4 md:p-6 rounded-lg border border-[#7964e4] w-[90%] mx-auto md:w-full h-full"> {/* Add h-full */}
            <div className="flex flex-col gap-6 h-full"> {/* Add h-full */}
                <div className="bg-[#7964e4] p-3 rounded-md">
                    <h3 className="text-lg md:text-xl font-bold text-white text-center">Node Specifications</h3>
                </div>
                
                <div className="flex flex-col gap-6">
                    {/* Processor Section */}
                    <div className="space-y-2">
                        <h4 className="text-white/90 font-semibold text-sm md:text-base">Processor</h4>
                        <div className="pl-4 space-y-1.5 text-sm md:text-base">
                            <p className="text-white/80">{nodeSpecifications.cpu}</p>
                            <p className="text-white/80">{nodeSpecifications.cores}</p>
                            <p className="text-white/80">Base: {nodeSpecifications.baseFreq}</p>
                            <p className="text-white/80">Cache: {nodeSpecifications.cache}</p>
                        </div>
                    </div>

                    <div className="h-[1px] bg-white/10"></div>

                    {/* System Section */}
                    <div className="space-y-2">
                        <h4 className="text-white/90 font-semibold text-sm md:text-base">System</h4>
                        <div className="pl-4 space-y-1.5 text-sm md:text-base">
                            <p className="text-white/80">{nodeSpecifications.memory}</p>
                            <p className="text-white/80">{nodeSpecifications.storage}</p>
                            <p className="text-white/80">{nodeSpecifications.network}</p>
                        </div>
                    </div>

                    <div className="h-[1px] bg-white/10"></div>

                    {/* Features Section */}
                    <div className="space-y-2">
                        <h4 className="text-white/90 font-semibold text-sm md:text-base">Key Features</h4>
                        <div className="pl-4">
                            {nodeSpecifications.features.slice(0, 3).map((feature, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm md:text-base">
                                    <span className="text-[#7964e4] mt-1">•</span>
                                    <span className="text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Modify rendering based on selected category
    const renderPricingContent = () => {
        return (
            <div className="flex flex-col gap-8 w-[90%] mx-auto md:w-full">
                {/* Header Section */}
                <div className="bg-[#141418] p-4 md:p-6 rounded-lg border border-[#7964e4]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                                {memoryGB}GB Value KVM VPS
                            </span>
                            <div className="bg-[#7964e4] px-4 py-2 rounded-md self-start md:self-auto">
                                <span className="text-xl md:text-2xl font-bold text-white">${totalPrice}/mo</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-3">
                            <button 
                                className="w-full md:w-auto bg-transparent border border-[#7964e4] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7964e4]/10 transition-all"
                                onClick={() => window.location.href = 'https://billing.yourdomain.com'}
                            >
                                View Plans
                            </button>
                            <button 
                                className="w-full md:w-auto bg-[#7964e4] text-white px-6 py-2 rounded-md font-medium hover:bg-[#6753d3] transition-all"
                                onClick={() => window.location.href = 'https://deploy.yourdomain.com'}
                            >
                                Deploy Now
                            </button>
                        </div>
                    </div>
                </div>
    
                {/* Sliders Section */}
                <div className="bg-[#141418] p-6 rounded-lg">
                    <div className="flex flex-col gap-4">
                        {renderSlider('cpuCores', vpsSpecsData.cpuCores, cpuCores, setCpuCores)}
                        {renderSlider('memoryGB', vpsSpecsData.memoryGB, memoryGB, setMemoryGB)}
                        {renderSlider('diskGB', vpsSpecsData.diskGB, diskGB, setDiskGB)}
                        {renderSlider('bandwidthTB', vpsSpecsData.bandwidthTB, bandwidthTB, setBandwidthTB)}
                    </div>
                </div>
    
                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">{cpuCores}</span> vCPU</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">{memoryGB}GB</span> Memory</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">{diskGB}GB</span> NVMe</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">{bandwidthTB}TB</span> Bandwidth</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">2.5Gbps</span> Port</span>
                    </div>
                    <div className="flex items-center p-3 bg-[#141418] rounded">
                        <span><span className="font-bold text-[#7964e4]">1</span> IPv4</span>
                    </div>
                </div>
            </div>
        );
    };

    // 2. Update the category buttons mapping
    const categoryButtons = categoriesData.map((category) => (
        <div className="flex flex-col gap-4 w-full sm:w-auto" key={category.value}>
            <button
                className={`px-6 py-3 rounded-md font-bold transition-all ${
                    selectedCategory === category.value 
                        ? 'bg-[#7964e4] text-white' 
                        : 'bg-[#141418] text-white/80 hover:bg-[#1c1c1f]'
                }`}
                onClick={() => setSelectedCategory(category.value)}
            >
                <span>{category.name}</span>
            </button>
        </div>
    ));

    // Fix the return statement where class attributes are used
    return (
        <div className="bg-zinc-950">
            <div className="p-4 md:p-5 py-12 md:py-24 container mx-auto flex flex-col gap-8 px-4 md:px-[44px]" id="Plans">
                {/* Category Toggle Switch */}
                <div className="w-[90%] xl:w-1/4 mx-auto md:mx-0">
                    <h4 className="text-white/90 font-semibold text-sm md:text-base mb-3">Select Category</h4>
                    <div className="bg-[#141418] p-1.5 rounded-lg inline-flex w-full md:w-[93%] border border-[#7964e4]">
                        {categoriesData.map((category, index) => (
                            <button
                                key={category.value}
                                className={`
                                    flex-1 px-6 py-2.5 rounded-md font-medium transition-all text-sm
                                    ${selectedCategory === category.value 
                                        ? 'bg-[#7964e4] text-white' 
                                        : 'text-white/80 hover:text-white hover:bg-white/5'
                                    }
                                    ${index === 0 ? 'rounded-l-md' : 'rounded-r-md'}
                                `}
                                onClick={() => setSelectedCategory(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conditional Content */}
                {selectedCategory === 'lto' ? (
                    <div className="flex flex-col items-center justify-center p-8 bg-[#141418] border border-[#7964e4] rounded-lg text-center w-full">
                        <h3 className="text-2xl font-bold text-white mb-4">Limited Time Offers</h3>
                        <p className="text-white/80 text-center mb-6 max-w-2xl">
                            Please visit our billing panel to explore exclusive LTO deals and special discounts.
                        </p>
                        <button 
                            className="bg-[#7964e4] text-white px-6 py-3 rounded-md font-bold hover:bg-[#6753d3] transition-all"
                            onClick={() => window.location.href = 'https://billing.yourdomain.com'}
                        >
                            View LTO Offers
                        </button>
                    </div>
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

const violet500 = '#7964e4';  // Your primary purple
const violet700 = '#6753d3';  // Darker shade for hover
const violet900 = '#5342c2';  // Even darker shade
const zinc900 = '#18181b';
const zinc800 = '#2b2b2b';
const zinc700 = '#3f3f46';
const errorRed = '#7964e4';   // Replace red with purple
const errorRedHover = '#6753d3';
const errorRedBorder = '#8d7be8';
const errorRedHoverDarker = '#5342c2';
const errorBgLight = '#eceafe';  // Light purple background
const white = '#FFFFFF';
const white80 = 'rgba(255, 255, 255, 0.8)';
const white60 = 'rgba(255, 255, 255, 0.6)';
const white10 = 'rgba(255, 255, 255, 0.1)';
const gray400 = '#8D8D96';
const gray500 = '#6b7280';
const gray900 = '#111827';
const darkBg = '#141418';
const darkBgHover = '#1C1C1F';
const darkBgHoverLighter = '#232323';

const pricingSectionStyles = {
    pricingSectionContainer: {
        backgroundColor: 'rgb(9, 9, 11)', // zinc-950
    },
    sectionTitleContainer: {
    },
    sectionTitleRed: {
        color: '#7964e4',
    },
    sectionTitle: {
        color: white,
    },
    locationSelectionContainer: {
    },
    locationLabel: {
        color: white60,
    },
    locationButtonsContainer: {
    },
    locationButton: {
        backgroundColor: 'rgba(35, 35, 35, 0.1)',
        border: `2px solid ${white10}`, // Fix: Use template literal
        borderRadius: '0.375rem',
        padding: '1rem 3rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        transition: 'all 0.3s', // Fix: Use 'all' instead of 'colors'
        color: white,
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: 1,
        userSelect: 'none',
        fontWeight: 500,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        backgroundImage: 'none',
        WebkitAppearance: 'button',
        textTransform: 'none',
        overflow: 'visible',
        margin: 0,
        fontFamily: 'inherit',
        textRendering: 'auto',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        textIndent: '0px',
        textShadow: 'none',
        display: 'inline-block',
        boxSizing: 'border-box',
        webkitTapHighlightColor: 'transparent',
        MozAppearance: 'none',
        ':hover': {
            backgroundColor: errorRed,
            color: white,
            transform: 'translateX(0px)',
        },
        ':disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
            transform: 'translateX(0px)',
            backgroundColor: errorRed,
            color: white,
        },
    },
    locationButtonSelected: {
        backgroundColor: errorRed,
        border: `2px solid ${errorRedBorder}`,
        borderRadius: '0.375rem',
        padding: '1rem 3rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        transition: 'all 0.3s',
        color: white,
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: 1,
        userSelect: 'none',
        fontWeight: 500,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        touchAction: 'manipulation',
        backgroundImage: 'none',
        WebkitAppearance: 'button',
        textTransform: 'none',
        overflow: 'visible',
        margin: 0,
        fontFamily: 'inherit',
        textRendering: 'auto',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        textIndent: '0px',
        textShadow: 'none',
        display: 'inline-block',
        boxSizing: 'border-box',
        webkitTapHighlightColor: 'transparent',
        MozAppearance: 'none',
    },
    locationIcon: {
        height: '1.25rem',
        width: '1.25rem',
    },
    lineupSelectionContainer: {
    },
    lineupLabel: {
        color: white60,
        fontSize: '1rem',
        fontWeight: '500',
    },
    lineupGridContainer: {
    },
    lineupGrid: {
    },
    lineupOptionsColumn: {
    },
    lineupButton: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'flex-start',
        padding: '0.75rem',
        border: '1px solid',
        gap: '0.5rem',
        transition: 'all 0.3s',
        borderRadius: '0.375rem',
        backgroundColor: 'rgba(203, 42, 61, 0.7)', // Error red with opacity for selected
        borderColor: errorRedBorder, // Error red border for selected
        ':hover': {
            backgroundColor: darkBgHover,
            borderColor: errorRedBorder,
            borderRadius: '0.75rem',
        },
        '&.btn-selected': {
            backgroundColor: errorRed,
            borderColor: errorRedBorder,
            borderRadius: '0.375rem',
        },
    },
    lineupButtonSelected: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        alignItems: 'flex-start',
        padding: '0.75rem',
        border: '1px solid',
        gap: '0.5rem',
        transition: 'all 0.3s',
        borderRadius: '0.375rem',
        backgroundColor: errorRed,
        borderColor: errorRedBorder,
    },
    lineupSpan: {
        transition: 'all 0.3s',
        color: gray400,
    },
    lineupSpanHovered: {
        transition: 'all 0.3s',
        color: white80,
    },
    lineupName: {
        color: white,
        fontWeight: 'bold',
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
    },
    techSpecBox: {
        padding: '1rem',
        backgroundColor: darkBg,
    },
    techSpecTitle: {
        color: errorBgLight,
        fontWeight: '500',
    },
    techSpecList: {
        listStyleType: 'disc',
        listStylePosition: 'inside',
    },
    discountBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '0.5rem',
    },
    discountBold: {
        fontWeight: 'bold',
    },
    planDetailsColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    planDetailsInnerColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    planHeaderRow: {
        flexDirection: 'column',
        mdFlexDirection: 'row',
        mdJustifyContent: 'space-between',
        alignItems: 'flex-start',
        mdAlignItems: 'center',
        gap: '1rem',
    },
    planTitlePrice: {
        flexDirection: 'col',
        gap: '1rem',
    },
    planTitle: {
        fontWeight: 'bold',
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
    },
    planPrice: {
        backgroundColor: errorRed,
        borderBottom: `4px solid ${errorRedBorder}`,
        paddingTop: '0.25rem',
        paddingLeft: '0.25rem',
        paddingRight: '0.25rem',
    },
    planButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end', // Align to right
        width: '100%'
    },
    moreInfoButton: {
        color: white,
        borderTop: `2px solid ${errorRedBorder}`,
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        fontWeight: 'bold',
        backgroundColor: errorRed,
        '&:hover': {  // Fix: Use & for pseudo-classes
            backgroundColor: errorRedHoverDarker,
            color: white,
            transform: 'translateX(0.25rem)',
        },
        transition: 'all 0.3s',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
    },
    deployButton: {
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap',
        justifyContent: 'center',
        textAlign: 'center',
        color: white,
        borderRight: `2px solid ${errorRedBorder}`,
        borderTop: `2px solid ${errorRedBorder}`,
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        fontWeight: 'bold',
        backgroundColor: errorRed,
        ':hover': {
            backgroundColor: errorRedHoverDarker,
            color: white,
            transform: 'translateX(0.25rem)',
        },
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        ':disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
            transform: 'translateX(0px)',
            backgroundColor: errorRed,
            color: white,
        },
        borderRadius: '0 0.5rem 0 0', // bottom-left and top-right rounded
    },
    specSlidersContainer: {
        flexDirection: 'col',
        gap: '0.5rem',
    },
    sliderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
    },
    sliderLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.5rem',
    },
    specLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
    },
    sliderTrack: (specData, currentValue) => ({
        height: '1.125rem',
        width: '100%',
        background: `linear-gradient(to right, 
            ${violet500} 0%, 
            ${violet500} ${((currentValue - specData.min) / (specData.max - specData.min)) * 100}%, 
            ${zinc800} ${((currentValue - specData.min) / (specData.max - specData.min)) * 100}%, 
            ${zinc800} 100%)`
    }),
    sliderThumb: (specData, currentValue) => ({
        height: '1.25rem',
        width: '1.25rem',
        backgroundColor: violet700,
        border: 'none',
        position: 'absolute',
        zIndex: 0,
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'none',
        transform: `translate(-10px, -1px) translateX(${((currentValue - specData.min) / (specData.max - specData.min)) * 100}%)`, // Dynamic thumb position
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        borderRadius: '50%',
    }),
    priceColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
    },
    priceLabel: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
    },
    specDetailsGrid: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1rem',
    },
    specValuesGrid: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1rem',
    },
    specValueBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem',
        backgroundColor: darkBg,
        ':hover': {
            backgroundColor: darkBgHoverLighter,
        },
        transition: 'all 0.3s',
    },
    // Add this to your styles object
    sliderStyles: {
        '& input[type="range"]': {
            WebkitAppearance: 'none',
            width: '100%',
            height: '4px',
            borderRadius: '2px',
            background: '#2b2b2b',
            outline: 'none',
            padding: '0',
            margin: '0',
            
            '&::-webkit-slider-thumb': {
                WebkitAppearance: 'none',
                appearance: 'none',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#7964e4',
                cursor: 'pointer',
                transition: 'background .15s ease-in-out',
                '&:hover': {
                    background: '#6753d3'
                }
            },
            
            '&:active::-webkit-slider-thumb': {
                background: '#5342c2'
            }
        }
    },
    nodeSpecsBox: {
        backgroundColor: darkBg,
        border: `1px solid ${violet500}`,
        borderRadius: '0.5rem',
        transition: 'all 0.3s',
        height: '100%', // Make it full height
        display: 'flex',
        flexDirection: 'column',
    },
};

export default PricingSection;