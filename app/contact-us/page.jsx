import React from 'react'
import MainLayout from '../Components/MainLayout'
import { CiClock1 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";

const page = () => {
  return (
   <MainLayout>
          <div
        className="p-6 min-h-[400px] sm:p-12 md:p-24 pt-16 sm:pt-40 md:pt-32 w-full md:w-10/12 mt-12 rounded-2xl flex flex-col justify-center items-center 
    bg-[url('/images/Home.png')] text-white bg-cover bg-center gap-8 bg-second relative text-center"
      >
        <h1 className="text-4xl font-extrabold leading-normal ">تواصل معنا</h1>
      </div>
      <div className="flex justify-center items-center py-12 text-white">
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <div className="w-full max-w-xs h-[280px] flex flex-col rounded-xl bg-first justify-center items-center border-2 border-white p-8 md:p-12 space-y-4">
      <CiClock1 size={45} />
      <h1>ساعات العمل</h1>
      <p>3 العصر الى 3 الفجر</p>
    </div>
    <div className="w-full max-w-xs h-[280px] flex flex-col rounded-xl bg-first justify-center items-center border-2 border-white p-8 md:p-12 space-y-4">
      <LuMapPin size={45} />
      <h1>المكان</h1>
      <p>خدماتنا متنقلة</p>
    </div>
    <div className="w-full max-w-xs h-[280px] flex flex-col rounded-xl bg-first justify-center items-center border-2 border-white p-8 md:p-12 space-y-4">
      <FaPhone size={35} />
      <h1>قنوات الاتصال</h1>
      <p>واتساب :0531333483</p>
      <p>الايميل :Care@drizzle.sa</p>
    </div>
  </div>
</div>
   </MainLayout>
  )
}

export default page