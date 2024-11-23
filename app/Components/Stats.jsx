import React from 'react'

const Stats = () => {
  return (
<div className="py-24  pt-12 sm:pt-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[--second] sm:text-4xl ">احصائياتنا
      </h2>
    </div>
  </div>
  <div className="mt-10   pb-12 sm:pb-16">
    <div className="relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">تجاوزنا 73 الف طلب
              ومستمرين</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[--first] "><span>73000</span>+</dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">متوسط تقييمنا من العملاء ممتاز
              </dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[--first] "><span>90</span>%</dd>
            </div>
            <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">عميل
              من أنحاء السعودية</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[--first] "><span>19500</span>+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Stats