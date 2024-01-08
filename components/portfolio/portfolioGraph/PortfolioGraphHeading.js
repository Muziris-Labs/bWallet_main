import React from 'react'
import Image from 'next/image';
import { ArrowTrendingDownIcon,ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

function PortfolioGraphHeading({ amount, percentage }) {
    return (
        <div className="flex flex-col gap-3">
            <h4 className='text-[#5F5F5F]'>Portfolio Value</h4>

            <div className='flex flex-row items-center'>
                <h2 className="font-clash-display text-5xl font-medium text-gray-300 mr-4">
                    {amount}
                </h2>
                <div
                    className={`flex justify-end gap-1 text-sm font-semibold rounded-lg px-1 py-[2px] ${percentage < 0 ? "text-red-600 bg-red-500/30" : "text-green-500 bg-green-500/20"
                        }`}
                >
                    {percentage < 0 ? (
                        <>
                            <h4 className='flex flex-row'>
                                <ArrowTrendingDownIcon className="h-5 w-5" />
                                <span>{` (${Number(percentage).toFixed(1)}%)`}</span>
                            </h4>
                        </>
                    ) : (
                        <>
                            <h4 className='flex flex-row'>
                                <ArrowTrendingUpIcon className="h-5 w-5" />
                                <span>{` (${Number(percentage).toFixed(1)}%)`}</span>
                            </h4> 
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioGraphHeading