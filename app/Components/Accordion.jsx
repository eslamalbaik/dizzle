"use client";
import React, { useState } from 'react'
import { BsChevronDownMini } from "../lib/@react-icons";

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b  my-1 border-second ">
            <button
                className="flex items-center rounded-xl justify-between w-full  py-6 text-left text-lg font-medium  hover:bg-first  hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50  border-t-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl  text-right max-sm:text-lg pr-16">{question}</span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <BsChevronDownMini className="h-5 w-5  rotate-180" />
                    ) : (
                        <BsChevronDownMini className="h-5 w-5" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="px-4 py-5 text-right text-gray-500 text-[17px] max-sm:text-[15px]">{answer}</div>
            )}
        </div>
    )
}

export default Accordion