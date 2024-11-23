import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="p-6  sm:p-12 md:p-24 pt-16 sm:pt-20 md:pt-32 w-full md:w-10/12 mt-12 rounded-2xl flex flex-col justify-center items-center 
    bg-[url('/images/Home.png')] bg-cover bg-center gap-4 bg-second relative text-center"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-extrabold max-w-[90%] sm:max-w-[750px] md:max-w-[850px] leading-normal md:leading-snug">
        غسل معنا ووفر بنزين سيارتك ووفر من طاقتك ووقتك في المغاسل التقليدية
      </h1>
      <p className="text-white font-light text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[650px] mt-4">
        الخيار الأول والمفضل لعملاء غسيل السيارات في المملكة العربية السعودية، من خلال تقديم تجربة مميزة ومريحة للعملاء وتوفير خدمات غسيل السيارات بجودة عالية
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <Link href="https://play.google.com/store/apps/details?id=com.eltamiuz.drizzle">
        <Image
          src="/images/play.png"
          width={150}
          height={50}
          alt="Google Play"
          className="w-40 sm:w-48 lg:w-56"
        />
        </Link>
         <Link href="https://apps.apple.com/us/app/%D8%AF%D8%B1%D9%8A%D8%B2%D9%84/id6698719175?platform=iphone">
         <Image
          src="/images/apple.png"
          width={150}
          height={50}
          alt="App Store"
          className="w-40 sm:w-48 lg:w-56"
        />
         </Link>
      </div>
      <div className="hidden lg:flex justify-evenly items-center gap-4 w-full absolute -bottom-[200px]">
      <Image
          src="/images/hero0.PNG"
          className="rounded-xl w-[250px] h-[180px] lg:w-[350px] lg:h-[250px]"
          width={350}
          height={250}
          alt="hero1"
        />
        <Image
          src="/images/her01.PNG"
          className="rounded-xl w-[250px] h-[180px] lg:w-[350px] lg:h-[250px]"
          width={350}
          height={250}
          alt="hero2"
        />
        <Image
          src="/images/hero2.PNG"
          className="rounded-xl w-[250px] h-[180px] lg:w-[350px] lg:h-[250px]"
          width={350}
          height={250}
          alt="hero3"
        />
      </div>
      <Link target="_blank" href="https://api.whatsapp.com/send?phone=00966531333483"
                className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md" >
               <FaWhatsapp size={28}/>
            </Link>
    </div>
  );
};

export default Hero;
