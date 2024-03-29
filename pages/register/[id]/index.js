import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../../components/Layout";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Link from "next/link";
import { useRouter } from 'next/router'
import { saveAs } from "file-saver";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const Success = () => {

    const { query } = useRouter();
    const router = useRouter();
    const [fromQR, setFromQR] = useState(false)

    const saveFile = () => {
        saveAs(
            "/files/Baan Sindhorn - Brochure (Execution Copy).pdf",
            "Baan Sindhorn - Brochure.pdf"
        );
    };


    useEffect(() => {

        console.log(fromQR)

        async function chckFromQr() {
            if (query.QrCode != undefined) {
                setFromQR(true)
            } else {
                setFromQR(false)
            }
        }

        chckFromQr()

    })

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push("/")
    //     }, 5000)
    // }, [])

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
                    <link rel="icon" type="image/x-icon" href="/favicon.svg" />
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



                            <button onClick={saveFile} className="text-sm px-4 py-2 text-white rounded-md shadow btn-grad mt-8 inline-flex gap-2 items-center">
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5833 10V17.5833H2.41667V10H0.25V17.5833C0.25 18.775 1.225 19.75 2.41667 19.75H17.5833C18.775 19.75 19.75 18.775 19.75 17.5833V10H17.5833ZM11.0833 10.7258L13.8892 7.93083L15.4167 9.45833L10 14.875L4.58333 9.45833L6.11083 7.93083L8.91667 10.7258V0.25H11.0833V10.7258Z" fill="currentColor" />
                                </svg>

                                download brochure</button>


                        </div>

                    </div>
                </div>
            </Layout>

        </AnimatePresence>
    );
}

export default Success;