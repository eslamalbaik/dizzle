import Link from "next/link"

const Power = () => {
  return (
    <div className="p-6  sm:p-12 md:p-24 pt-16 sm:pt-20 md:pt-32 w-full md:w-10/12 mt-12 rounded-2xl flex flex-col justify-center items-center 
    bg-[url('/images/Home.png')] text-white bg-cover bg-center gap-8 bg-second relative text-center">
       <h1 className="text-4xl font-extrabold leading-normal ">أضف القوة والتميز إلى مشروعك مع دريزل
        </h1>
        <p className="text-lg font-thin py-2 text-center max-w-2xl">
        هل لديك مشروع في مجال غسيل السيارات أو مجال آخر وتستخدم فيه دراجات أو معدات خاصة، وترغب في تطويره وتحويله إلى فرنشايز ناجح تحت مظلة دريزل ؟
        </p>
        <div className="flex justify-center items-center gap-8">
         <Link href="https://apps.apple.com/us/app/%D8%AF%D8%B1%D9%8A%D8%B2%D9%84/id6698719175?platform=iphone">
         <button className="bg-white  p-3 px-6 text-[18px] text-second rounded-[50px] hover:shadow-xl transition-all  hover:bg-first">
          جرب دريزل الأن
        </button>
         </Link>
        <Link href="/about">
        <button className="bg-second p-3 px-6 text-[18px] text-white rounded-[50px] hover:shadow-xl transition-all  hover:bg-first">
          معرفة المزيد
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Power