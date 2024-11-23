import React from 'react'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { GiFlexibleStar } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

const OurServices = () => {
  return (
    <div className="lg:mt-72 pb-24 flex justify-center items-center flex-col px-4">
      <h1 className="text-3xl font-extrabold py-4 text-center">
        تعرف على <span className="text-second">دريزل أفضل تطبيقات غسيل سيارات</span>
      </h1>
      <p className="text-sm font-thin py-2 text-center max-w-2xl">
        لا تفوت تجربة تطبيق دريزل لغسيل السيارات وين ما كانت سيارتك إحجز خدمة الغسيل الفورية وإستمتع بتجربة فريدة من نوعها
      </p>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8">
        {/* Card one in our services */}
        <div className="flex w-full sm:w-[45%] lg:w-[20%] justify-center flex-col bg-first rounded-2xl p-4 space-y-4 relative overflow-hidden h-[200px]">
          <span className="bg-second w-min p-2 rounded-full">
            <CiCalendar className="text-white" size={25} />
          </span>
          <h2 className="text-white text-xl">سريع</h2>
          <span className="lg:block hidden absolute -top-10 right-64 w-16 h-16 border-[#E5EBE7] border-r-[6px] border-b-[6px] rounded-full"></span>
          <p className="text-white text-sm">خدمة غسيل سريعة وسهلة وطاقم عمل إحترافي</p>
        </div>

        {/* Card two in our services */}
        <div className="flex w-full sm:w-[45%] lg:w-[20%] justify-center flex-col bg-first rounded-2xl p-4 space-y-4 relative overflow-hidden h-[200px]">
          <span className="bg-second w-min p-2 rounded-full">
            <CiLocationOn className="text-white" size={25} />
          </span>
          <h2 className="text-white text-xl">أي مكان وأي وقت</h2>
          <span className="lg:block hidden absolute -top-10 right-64 w-16 h-16 border-[#E5EBE7] border-r-[6px] border-b-[6px] rounded-full"></span>
          <p className="text-white text-sm">وين ما كانت سيارتك دريزل يوصل لك ويؤدي عمله بأفضل طريقة</p>
        </div>
       
        {/* Card three in our services */}
        <div className="flex w-full sm:w-[45%] lg:w-[20%] justify-center flex-col bg-first rounded-2xl p-4 space-y-4 relative overflow-hidden h-[200px]">
          <span className="bg-second w-min p-2 rounded-full">
            <GiFlexibleStar className="text-white" size={25} />
          </span>
          <h2 className="text-white text-xl">مرونة في الحجوزات</h2>
          <span className="lg:block hidden  absolute -top-10 right-64 w-16 h-16 border-[#E5EBE7] border-r-[6px] border-b-[6px] rounded-full"></span>
          <p className="text-white text-sm">مرونة عاليه في حجز مواعيد الغسيل</p>
        </div>

        {/* Card four in our services */}
        <div className="flex w-full sm:w-[45%] lg:w-[20%] justify-center flex-col bg-first rounded-2xl p-4 space-y-4 relative overflow-hidden h-[200px]">
          <span className="bg-second w-min p-2 rounded-full">
            <MdOutlineSupportAgent className="text-white" size={25} />
          </span>
          <h2 className="text-white text-xl">تواصل سريع</h2>
          <span className="lg:block hidden absolute -top-10 right-64 w-16 h-16 border-[#E5EBE7] border-r-[6px] border-b-[6px] rounded-full"></span>
          <p className="text-white text-sm">التواصل السريع مع عامل الغسيل بعد تأكيد الحجز</p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
