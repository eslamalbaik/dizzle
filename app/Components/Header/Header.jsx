"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCloseMini, AiOutlineMenuMini } from "../../lib/@react-icons"
import Image from "next/image";
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
      <nav className="w-full px-8 pt-4 lg:p-12 md:px-0 ">
        <div className=" lg:justify-around items-center mx-auto  lg:w-[85rem] md:items-center md:flex">
          <div>
            <div
              className="flex justify-between items-center md:flex "
            >
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/images/Logo.png"
                  alt="logo"
                  width={150}
                  className="w-[200px]"
                  height={80}
                  priority
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-[--color-alt] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineCloseMini
                      size={17}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenuMini className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:flex  md:items-center md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 " : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto mt-[16px] items-end justify-start md:flex   ">
                <li className=" text-lg leading-7 font-medium text-first border-b-2 border-first py-2 md:px-3 text-center   ">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    الرئيسية
                  </Link>
                </li>
                <li className=" text-lg text-gray-500 py-2 px-3 text-center  md:border-b-0  hover:text-first hover:border-b-2 hover:border-first  ">
                <Link href="/about">من نحن</Link>
                </li>
                <li className=" text-lg text-gray-500 py-2 px-3 text-center  hover:border-b-2 hover:border-first  md:border-b-0 md:hover:text-first ">
                <Link href="/faqs">الأسئلة الشائعة</Link>
                </li>
                <li className=" text-lg text-gray-500 py-2 px-3 text-center  hover:border-b-2 hover:border-first  md:border-b-0 md:hover:text-first ">
                <Link href="/contact-us">تواصل معنا</Link>
                </li>
                
              </ul>
              <Link href="https://apps.apple.com/us/app/%D8%AF%D8%B1%D9%8A%D8%B2%D9%84/id6698719175?platform=iphone">
              <button className="md:mr-52 mt-4 bg-first p-3 px-6 text-[18px] text-white rounded-[50px] hover:shadow-xl transition-all  hover:bg-first">جرب دريزل الأن</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Header;
