import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../../components/Layout";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Link from "next/link";
import { useRouter } from 'next/router'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const Success = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)
    }, [])

    return (
        <AnimatePresence>
            <Layout>

                <Head>
                    <title>Baan Sindhorn</title>
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
                    <link rel="icon" href="/favicon.svg" />
                </Head>

                <div className="w-full min-h-[85vh]  h-full  flex justify-center relative bg-white">
                    <div className="max-w-7xl w-full h-full absolute px-6 md:px-10 flex justify-center items-center">

                        <div className="flex justify-center w-full flex-col items-center">
                            <Link href={"/"}>

                                <div className="circle-loader load-complete hover:opacity-70 duration-500 cursor-pointer">
                                    <div className="checkmark draw"></div>
                                </div>
                            </Link>

                            <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] text-center">SUCCESS</h1>
                            <p className="text-[#7b7c80] font-serif italic text-center">Your registration has been successful</p>

                        </div>

                    </div>
                </div>
            </Layout>

        </AnimatePresence>
    );
}

export default Success;