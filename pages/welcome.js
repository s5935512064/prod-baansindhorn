import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const welcome = () => {
    return (
        <AnimatePresence>

            <Head>
                <title>๓ มิถุนายน ๒๕๖๗ เนื่องในโอกาสวันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี</title>
                <meta name="description" content="Find 7 properties from 2 to 2 bed  units for Sale &amp; Rent available at Baan Sindhorn, Pathum Wan,  Bangkok" />
                <meta content="22 ยูนิตสำหรับขาย และ 10 ยูนิตสำหรับเช่าที่ Baan Sindhorn (บ้านสินธร) ราคาตลาดเฉลี่ย คือ 0 บาท/ตรม. แนวโน้มราคา: คงที่" name="description" />
                <meta content="บ้านสินธร,คอนโดมิเนียม,ปทุมวัน,กรุงเทพฯ" name="keywords" />
                <meta content="//https://baansindhorn.com/" property="og:url" />
                <meta content="Baan Sindhorn (บ้านสินธร)" property="og:title" />

                <meta content="22 ยูนิตสำหรับขาย และ 10 ยูนิตสำหรับเช่าที่ Baan Sindhorn (บ้านสินธร)
ราคาตลาดเฉลี่ย คือ 0 บาท/ตรม. แนวโน้มราคา: คงที่" property="og:description" />
                <meta name="apple-mobile-web-app-title" content="Baan Sindhorn" />
                <meta name="application-name" content="Baan Sindhorn" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="icon" type="image/x-icon" href="/favicon.svg" />
            </Head>
            <div className="min-h-screen w-full relative bg-[url('/assets/king2565/01_background.webp')] bg-center bg-cover bg-no-repeat flex justify-center items-center px-4 md:px-6 lg:px-8 xl:px-10 ">
                <div className="w-full flex flex-col items-center gap-4 max-w-[1440px] font-Noto py-10  ">
                    <div className="relative  w-full flex px-7 gap-4 translate-y-4 xl:translate-y-2 ">

                        <div className="relative min-h-[45vh] md:min-h-[50vh] w-full ">
                            <div className="w-12 sm:w-14 h-full  absolute  left-[1%] sm:left-[4%]   md:left-1/3 -top-[15%] md:-top-[10%]">
                                <Image
                                    src={"/assets/king2565/royal_suthida.webp"}
                                    alt="queen"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="top"

                                />
                            </div>
                            <Image
                                src="/assets/king2565/Asset 2.webp"
                                alt="queen"
                                layout="fill"

                                objectFit="contain"



                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <h2 className="max-w-screen-md text-white text-sm sm:text-base md:text-xl text-center">
                            ๓ มิถุนายน ๒๕๖๗ เนื่องในโอกาสวันเฉลิมพระชนมพรรษา
                            <br />
                            สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี
                        </h2>

                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium drop-shadow-md ">
                            ทรงพระเจริญ
                        </h1>

                        <h2 className="max-w-screen-md text-white  text-center text-sm sm:text-base md:text-lg">
                            ด้วยเกล้าด้วยกระหม่อม
                            <br />
                            ข้าพระพุทธเจ้า คณะผู้บริหาร และบุคลากร โครงการ สินธร วิลเลจ ในเครือบริษัท สยามสินธร จำกัด
                        </h2>
                    </div>

                    <Link
                        href={"/"}
                    >
                        <div className="w-40 sm:w-48 h-[80px]  relative flex justify-center items-center group xl:mt-2  cursor-pointer">
                            <p className="text-white text-center md:group-hover:text-xl px-4 py-2  absolute w-full h-full  flex items-center justify-center  transition-all duration-200 font-medium text-base md:text-lg "> เข้าสู่เว็บไซต์</p>
                            <Image
                                src={"/assets/king2565/border.webp"}
                                alt="border"
                                layout="fill"
                                objectFit="contain"
                                className="w-full h-full"
                            />
                        </div>


                    </Link>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default welcome;