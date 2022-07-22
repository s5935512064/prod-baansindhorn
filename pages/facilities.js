import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const themes = [
    {
        title: "section1",
        theme: {
            background: "#e5e6e7"
        }
    },
    {
        title: "section2",
        theme: {
            background: "#fff"
        }
    },
    {
        title: "section3",
        theme: {
            background: "#e5e6e7"
        }
    },
    {
        title: "section4",
        theme: {
            background: "#fff"
        }
    }
]


const Facilities = () => {

    const GroupRef = useRef([]);
    const router = useRouter()
    const [show, setShow] = useState(false)

    const onScroll = (e) => {

        if (GroupRef.current[0] == null) {
            document.body.style.backgroundColor = "white"
        }
        else {

            const styles = GroupRef.current.map((item, index) => {

                const rect = item.getBoundingClientRect();

                return { item, rect };

            })
                .find((item) => item.rect.bottom >= window.innerHeight * 0.5);

            document.body.style.backgroundColor = `${styles.item.dataset.bgcolor}`
        }


    }


    useEffect(() => {

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll, false)

    }, [])

    const ConditionContent = (contentTitle) => {

        if (contentTitle.contentTitle == "section1") {
            return (
                <section className="w-full h-screen relative overflow-hidden flex justify-center items-end md:items-center">
                    <motion.div
                        className="w-full h-full absolute  right-0 bottom-0"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ type: "spring", duration: 3, delay: 0 }}
                    >

                        <div className="block w-full h-[65vh] md:h-full bg-[url('/assets/facilities/DSCF2443.webp')] bg-cover bg-no-repeat bg-center">
                            <div className="w-full h-full bg-gradient-to-b from-white opacity-20" />
                        </div>

                        {/* <div className="visible md:hidden w-full h-[65vh] md:h-full bg-[url('/assets/facilities/facilities-banner-m.jpg')] bg-cover bg-no-repeat bg-center">
                            <div className="w-full h-full bg-gradient-to-b from-white opacity-40" />
                        </div> */}
                    </motion.div>

                    <div data-aos="fade-up"
                        data-aos-delay="300"
                        className="max-w-md w-full h-[35vh] md:h-[55vh] bg-white/80 backdrop-blur relative flex items-center p-10">
                        <div
                            className="text-center text-[#7b7c80] grid justify-items-center items-center">
                            <p className="font-serif italic">Residence Lobby</p>
                            <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-5">BOUTIQUE,<br />
                                YET STYLISH</h1>
                            <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                            <p className="text-sm max-w-[350px] whitespace-pre-line w-full font-light">Witness the superior atmosphereas you walk through the extravagant lobby. The fabulous lobby is a welcoming place of architectural genius with uncompromising grandeur.</p>
                        </div>
                    </div>
                </section>
            )

        }
        else if (contentTitle.contentTitle == "section2") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-center">
                    <div className="max-w-7xl w-full h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2  h-auto md:h-[85vh]">
                            <div className="h-[50vh] md:h-full  p-10 md:p-20 ">
                                <div className="h-full border border-[#83603f] p-2 md:p-4">
                                    <div className="relative h-full">
                                        <Image

                                            data-aos="zoom-in-down"
                                            src="/assets/facilities/DSCF2465-HDR.webp"
                                            alt="DSCF2465-HDR"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                className="h-full flex justify-center items-center px-6 md:px-10">
                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Residence Lounge</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5 max-w-md w-full">WHERE MAJESTIC BEAUTY AND FUNCTIONALITY COME TOGETHER</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-md w-full font-light">Imagine indulging in an idyllic weekend with your family members amid elegant ambiance. The generous proportions of the lounge enable any dream to become reality.</p>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section3") {
            return (
                <section className="w-full  h-full flex flex-col items-center">
                    <div className="w-full h-full max-w-7xl p-4 md:p-10  mb-5">
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="200"
                            className="text-center text-[#7b7c80] grid justify-items-center  ">
                            <p className="font-serif italic">Indoor Swimming Pool</p>
                            <h1 className="font-bold text-4xl font-serif text-[#82603f]  w-full max-w-lg">WHEN A SUN-KISSED BEACH COMES TO YOUR BACKYARD</h1>

                        </div>
                    </div>

                    <div className="hidden md:block w-full h-[500px] md:h-[75vh] relative">
                        <Image
                            data-aos="zoom-out-up"
                            src="/assets/facilities/DSCF2498-HDR.webp"
                            alt="DSCF2498-HDR"
                            layout="fill"
                            objectFit="cover"
                        />

                    </div>
                    <div className="md:hidden w-full h-[350px] md:h-[75vh] relative">
                        <Image
                            data-aos="zoom-out-up"
                            src="/assets/facilities/DSCF2498-HDR.webp"
                            alt="DSCF2498-HDR"
                            layout="fill"
                            objectFit="cover"
                        />

                    </div>
                </section>
            )
        }
        else if (contentTitle.contentTitle == "section4") {
            return (
                <section className="w-full h-full relative overflow-hidden flex justify-center items-center">
                    <div className="max-w-7xl w-full h-full ">
                        <div className="grid grid-cols-1 md:grid-cols-2  h-auto md:h-[85vh] ">
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                className="h-full flex justify-center items-center px-6 md:px-10">
                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Fitness Room</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5 max-w-md w-full">REJUVENATION BEYOND IMAGINATION!</h1>
                                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                                    <p className="text-sm max-w-[350px] whitespace-pre-line w-full font-light">The private residential gym offers state-of-the-art work out equipment including weights and cardio machines, allowing you to work out in style.</p>
                                </div>
                            </div>

                            <div className="h-[50vh] md:h-full  p-10 md:p-20 ">
                                <div className="h-full border border-[#83603f] p-2 md:p-4">
                                    <div className="relative h-full">
                                        <Image

                                            data-aos="zoom-in-down"
                                            src="/assets/facilities/DSCF2501-HDR.webp"
                                            alt="DSCF2501-HDR"
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

    }


    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {
            Thumbs: false,
            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },

            Image: {
                zoom: false,
                click: false,
                wheel: "slide",
            },
        });

    }, []);


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
                <div id="provisioningPages" className="min-h-screen w-full h-full relative flex flex-col justify-center items-center gap-5">
                    {themes.map((item, index) => (
                        <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background} className="w-full h-full relative">
                            <ConditionContent contentTitle={item.title} />
                        </div>
                    ))
                    }
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Facilities;