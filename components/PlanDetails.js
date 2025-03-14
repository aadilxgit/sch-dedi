"use client"
import React from 'react';

function PlanDetails({ plan }) {
    return (
        <div className="plan-details col-span-full p-5 bg-zinc-900 border border-zinc-700 rounded-lg mt-4">
            <h4 className="ls font-black text-xl mb-6 pb-3 border-b border-zinc-700">
                {plan.model} Dedicated Server Details
            </h4>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <tbody className="divide-y divide-zinc-700">
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">CPU</td>
                            <td className="py-3 px-4 text-white">{plan.details.cpu}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">Clock Speed</td>
                            <td className="py-3 px-4 text-white">{plan.details.clockSpeed}</td>
                        </tr>
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">Cores/Threads</td>
                            <td className="py-3 px-4 text-white">{plan.details.cores}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">RAM</td>
                            <td className="py-3 px-4 text-white">{plan.details.ram}</td>
                        </tr>
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">Storage</td>
                            <td className="py-3 px-4 text-white">{plan.details.storage}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">Bandwidth</td>
                            <td className="py-3 px-4 text-white">{plan.details.bandwidth}</td>
                        </tr>
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">IP Addresses</td>
                            <td className="py-3 px-4 text-white">{plan.details.ip}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">Operating Systems</td>
                            <td className="py-3 px-4 text-white">{plan.details.os}</td>
                        </tr>
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">Location</td>
                            <td className="py-3 px-4 text-white">{plan.details.location}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">Quick Sync Video</td>
                            <td className="py-3 px-4 text-white">{plan.details.quickSync}</td>
                        </tr>
                        <tr className="bg-zinc-800/50">
                            <td className="py-3 px-4 font-medium text-zinc-400">Support</td>
                            <td className="py-3 px-4 text-white">{plan.details.support}</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-zinc-400">Setup Time</td>
                            <td className="py-3 px-4 text-white">{plan.details.setupTime}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlanDetails;