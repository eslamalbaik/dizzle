import Link from 'next/link'
import React from 'react'

const CopyRight = () => {
  return (
    <div className="w-full py-4 pb-4 flex lg:flex-row gap-4 flex-col justify-between items-center px-12 text-center lg:px-24 border-t-4">
        <h4>جميع الحقوق محفوظة ، شركة دريزل لغسيل السيارات 2024</h4>
        <div className="flex justify-center items-center gap-4">
            <Link href="/" className="border-l-2 pl-2 hover:text-first">سياسة الخصوصية</Link>
            <Link href="/faqs" className="border-l-2 pl-2 hover:text-first">الاسئلة الشائعة</Link>
            <Link href="/" className="border-l-2 pl-2 hover:text-first">حقوق الملكية</Link>
        </div>
    </div>
  )
}

export default CopyRight