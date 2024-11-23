import Link from "next/link";
import React from "react";

const Advange = () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 lg:px-24 py-24 justify-center lg:items-start items-center gap-4">
      <div className="lg:w-1/2 flex justify-start space-y-8 items-start flex-col">
        <h1 className="lg:text-5xl text-3xl font-extrabold leading-normal text-second lg:max-w-[440px]">
          لماذا تستثمر معنا في دريزل ؟
        </h1>
        <p className="leading-[38px]  text-lg max-w-[640px] ">
          نحن في دريزل نقدر الفرصة للشراكة معك ونرى العديد من الأسباب المقنعة
          للاستثمار معنا. ‍ استثمارك معنا يمثل الفرصة المثالية للانضمام إلى
          عائلة دريزل وتحقيق النجاح في عالم غسيل السيارات مع دعم قوي وفرص كبيرة
          للنمو.
        </p>
        <Link href="https://apps.apple.com/us/app/%D8%AF%D8%B1%D9%8A%D8%B2%D9%84/id6698719175?platform=iphone">
          {" "}
          <button className="bg-first p-3 px-6 text-[18px] text-white rounded-[50px] hover:shadow-xl transition-all  hover:bg-first">
            جرب دريزل الأن
          </button>
        </Link>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center flex-col gap-4">
        <div className="flex justify-start items-start flex-col space-y-4 py-4">
          <h1 className="text-second text-xl">تجربة ناجحة</h1>
          <p className="text-[#4e4949ed]">
            لديها سجل حافل في مجال غسيل السيارات باعتبارها علامة تجارية موثوقة
            وذات جودة عالية. استثمارك معنا يتيح لك الاستفادة من تلك الخبرة
            والتميز.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col space-y-4 py-4">
          <h1 className="text-second text-xl">دعم شامل</h1>
          <p className="text-[#4e4949ed]">
            نحن هنا لدعمك في كل خطوة. من تقديم التدريب والدعم التقني إلى الإشراف
            والتسويق، نقدم الدعم الكامل لضمان نجاحك.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col space-y-4 py-4">
          <h1 className="text-second text-xl">نمو مستدام</h1>
          <p className="text-[#4e4949ed]">
            مع نموذج العمل المستدام والدعم المتواصل، يمكنك بناء أعمالك بشكل
            مستدام وتحقيق نجاح طويل الأمد.
          </p>
        </div>
        <div className="flex justify-start items-start flex-col space-y-4 py-4">
          <h1 className="text-second text-xl">فرصة للتوسع</h1>
          <p className="text-[#4e4949ed]">
            مع توجيهاتنا ودعمنا، يمكنك توسيع أعمالك والاستفادة من الفرص المتاحة
            في سوق غسيل السيارات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advange;
