"use client"
import React, { useState } from 'react';
import PlanDetails from './PlanDetails.js'; 

function PlanItem({ plan }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="plan-item grid gap-4 hover:bg-zinc-900 transition-all duration-300 p-5 border-b border-zinc-700 lg:grid-cols-7 lg:items-center">
            <div className="flex flex-col items-start">
                <span className="ls font-bold text-left">{plan.model}</span>
                <span className="ls opacity-70">{plan.specs}</span>
            </div>
            <div className="flex items-center lg:justify-center">
                <span className="ls font-medium text-center">{plan.ram}</span>
            </div>
            <div className="flex items-center lg:justify-center">
                <span className="ls font-medium text-center">{plan.storage}</span>
            </div>
            <div className="flex items-center lg:justify-center">
                <span className="ls font-medium text-center">{plan.bandwidth}</span>
            </div>
            <div className="flex items-center lg:justify-center">
                <span className="ls font-medium text-center">{plan.ip}</span>
            </div>
            <div className="flex items-center lg:justify-center">
                <span className="ls font-medium text-center text-lg">{plan.price}</span>
            </div>
            <div className="flex items-center lg:justify-center pr-2">
                <div className="flex gap-2 lg:flex-col lg:items-start 2xl:flex-row 2xl:items-center 2xl:justify-end">
                    <button
                        className="details-button flex items-center gap-2 text-white rounded-md bg-zinc-600 px-4 py-2 font-bold 
                        hover:bg-zinc-500 hover:translate-y-[2px] hover:shadow-md hover:scale-[0.98]
                        active:translate-y-[3px] active:shadow-sm
                        transition-all ease-in-out duration-300 whitespace-nowrap max-w-[140px]"
                        onClick={() => setShowDetails(!showDetails)} 
                    >
                        <span>Details</span>
                    </button>
                    <a target="_blank" rel="noopener noreferrer" href={`/about/dedicated/${plan.model.toLowerCase().replace(/\s+/g, '-')}`}>
                        <button
                            className="flex items-center gap-2 text-white rounded-md bg-[#7964e4] px-4 py-2 font-bold 
                            hover:bg-[#6753d3] hover:translate-y-[2px] hover:shadow-md hover:scale-[0.98]
                            active:translate-y-[3px] active:shadow-sm
                            transition-all ease-in-out duration-300 whitespace-nowrap max-w-[140px]"
                        >
                            <span>Buy Now</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.23017 13.7094C3.93159 13.9965 3.92228 14.4713 4.20938 14.7698C4.49647 15.0684 4.97125 15.0777 5.26983 14.7906L9.76983 10.5406C9.91689 10.3992 10 10.204 10 10C10 9.79599 9.91689 9.60078 9.76983 9.45938L5.26983 5.20938C4.97125 4.92228 4.49647 4.93159 4.20938 5.23017C3.92228 5.52875 3.93159 6.00353 4.23017 6.29063L8.16792 10L4.23017 13.7094Z" fill="white"/>
                                <path d="M10.2302 13.7094C9.93159 13.9965 9.92228 14.4713 10.2094 14.7698C10.4965 15.0684 10.9713 15.0777 11.2698 14.7906L15.7698 10.5406C15.9169 10.3992 16 10.204 16 10C16 9.79599 15.9169 9.60078 15.7698 9.45938L11.2698 5.20938C10.9713 4.92228 10.4965 4.93159 10.2094 5.23017C9.92228 5.52875 9.93159 6.00353 10.2302 6.29063L14.1679 10L10.2302 13.7094Z" fill="white"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            {}
            {showDetails && <PlanDetails plan={plan} />}
        </div>
    );
}

export default PlanItem;