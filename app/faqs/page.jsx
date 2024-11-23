"use client"
import MainLayout from "../Components/MainLayout";
import SectionAsk from "../Components/SectionAsk";
import Link from "next/link";
import React, { useState } from 'react';
import { faqs } from "../../data/data";

const Page = () => {

  return (
    <MainLayout>
              <div
        className="p-6 min-h-[400px] sm:p-12 md:p-24 pt-16 sm:pt-40 md:pt-32 w-full md:w-10/12 mt-12 rounded-2xl flex flex-col justify-center items-center 
    bg-[url('/images/Home.png')] text-white bg-cover bg-center gap-8 relative text-center"
      >
        <h1 className="text-4xl font-extrabold leading-normal ">الأسئلة الشائعة</h1>
      </div>
      <div className=" py-24 px-24 w-full h-full flex items-center flex-col ">
        <SectionAsk data={faqs} />
      </div>
    </MainLayout>
  );
};

export default Page;
