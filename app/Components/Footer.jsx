import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import CopyRight from './CopyRight';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="  flex justify-between flex-col lg:flex-row items-center pt-24 px-12 lg:px-24 pb-12">
      <Image
     width={250}
     height={150}
     src="/images/Logo.png"
     alt="logo"/>
     <div className="flex justify-center flex-col lg:flex-row items-center gap-8 pt-8 text-gray-700">
        <Link href="/about" className="border-l-2 pl-4">عن دريزل</Link>
        <Link href="/contact-us">تواصل معنا</Link>
       <div className='flex justify-center gap-4'>
       <Link href="https://x.com/Drizzle_wash" className="w-10 h-10 bg-[#addeed] rounded-full flex justify-center items-center"><FaTwitter/></Link>
       <Link href="https://www.instagram.com/drizzle_wash " className="w-10 h-10 bg-[#addeed] rounded-full flex justify-center items-center"><CiInstagram/></Link>
       <Link href="https://www.tiktok.com/@drizzle_wash" className="w-10 h-10 bg-[#addeed] rounded-full flex justify-center items-center"><FaTiktok/></Link>
       </div>
     </div>
      </div>
     <CopyRight/>
    </footer>
  )
}

export default Footer