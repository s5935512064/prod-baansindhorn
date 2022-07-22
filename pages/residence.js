import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const themes = [
    {
        title: "section1",
        theme: {
            background: "#fff",


        }
    },
    {
        title: "section2",
        theme: {
            background: "#e5e6e7",

        }
    },
    {
        title: "section3",
        theme: {
            background: "#dad8d6",

        }
    },
    {
        title: "section4",
        theme: {
            background: "#fff",

        }
    },
]


const Residence = () => {

    const GroupRef = useRef([]);
    const [openTab, setOpenTab] = useState(1);
    const [openTab2, setOpenTab2] = useState(1);

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


    useEffect(() => {
        Fancybox.bind('[data-fancybox="roomtype"]', {
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
                Panzoom: {
                    zoomFriction: 0.7,
                    maxScale: function () {
                        return 5;
                    },
                },
            },
        });

    }, []);


    useEffect(() => {
        Fancybox.bind('[data-fancybox="floorplan"]', {
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
                Panzoom: {
                    zoomFriction: 0.7,
                    maxScale: function () {
                        return 5;
                    },
                },
            },


        });

    }, []);


    const ConditionContent = (contentTitle) => {

        if (contentTitle.contentTitle == "section1") {
            return (
                <section className=" w-full min-h-screen h-full relative overflow-hidden flex justify-center items-end md:items-center">
                    <div className="w-full h-full max-w-7xl  p-4 md:p-10 flex items-center mt-20 md:mt-14 2xl:mt-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full items-center justify-items-center ">
                            <div className="w-full h-[65vh] md:h-[768px]  overflow-hidden relative flex p-2 md:p-4 border border-[#83603f]">

                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 3, delay: 0 }}
                                    className="w-full h-full relative"
                                >


                                    <Image
                                        src="/assets/floorplan/DSCF0187-Edit-1.webp"
                                        alt="DSCF0187-Edit-1"
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:scale-105 duration-500" />

                                </motion.div>

                            </div>

                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", duration: 3, delay: 0 }}

                                className="w-full h-full flex justify-center items-center"
                            >


                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Unit Matrix</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5">EXCELLENCE<br />
                                        IN EVERY PREFERENCE</h1>

                                    <div className="hidden md:block w-full relative h-[500px] ">

                                        <Image
                                            src="/assets/floorplan/unit-matrix.png"
                                            alt="unit-matrix"
                                            layout="fill"
                                            objectFit="contain"
                                            className="hidden md:visible"
                                        />

                                    </div>

                                    <div className="visible md:hidden w-full relative h-[500px] ">

                                        <Image
                                            src="/assets/floorplan/unit-matrix-mobile.png"
                                            alt="unit-matrix"
                                            layout="fill"
                                            objectFit="contain"
                                            className="block md:hidden"
                                        />

                                    </div>



                                </div>
                            </motion.div>


                        </div>

                    </div>
                </section>
            )

        }
        else if (contentTitle.contentTitle == "section2") {
            return (
                <section className=" w-full  h-full relative overflow-hidden flex justify-center items-center flex-col">
                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] mb-5 text-center font-serif">MASTER PLAN</p>
                    <div className="hidden md:block w-full max-w-7xl h-[734px] relative ">
                        <Image
                            data-aos="zoom-out-up"
                            src="/assets/floorplan/masterplan.png"
                            alt="masterplan"
                            layout="fill"
                            quality={100}
                            objectFit="contain"

                        />

                    </div>

                    <div className="md:hidden w-full h-full max-w-7xl  p-4  flex items-center ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full items-center justify-items-center ">

                            <div className="w-full h-[350px] sm:h-[450px] overflow-hidden relative flex p-2 md:p-4 ">

                                <motion.div
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 3, delay: 0 }}
                                    className="w-full h-full relative"
                                >


                                    <Image
                                        data-aos="zoom-out-up"
                                        src="/assets/floorplan/mobile-master.png"
                                        alt="masterplan"
                                        layout="fill"
                                        objectFit="contain"
                                    />

                                </motion.div>

                            </div>

                            <motion.div
                                initial={{ y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, } }}
                                animate={{
                                    y: 0,
                                    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
                                }}

                                className="w-full h-full flex justify-center items-center"
                            >

                                <div className="text-center text-[#7b7c80] grid justify-items-center">
                                    <p className="font-serif italic">Master Plan</p>
                                    <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5">INNOVATIVE AND VERSATITLE LAYOUT THAT CAPTIVATES ALL FAMILIES</h1>

                                    <div className="text-sm max-w-md w-fit font-light text-left"><ul className=" list-decimal">
                                        <li> Drop off</li>
                                        <li> Main Entrance</li>
                                        <li> Residence Lobby</li>
                                        <li> Residence Lounge</li>
                                        <li> Multi-Purpose Room</li>
                                        <li> Fitness Room</li>
                                        <li> Male Locker Room</li>
                                        <li> Female Locker Room</li>
                                        <li> Sauna Room</li>
                                        <li> Steam Room</li>
                                        <li> Indoor Swimming Pool</li>
                                        <li> Onsen</li>

                                    </ul>
                                    </div>


                                </div>
                            </motion.div>


                        </div>

                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section3") {
            return (
                <section className=" w-full h-full relative overflow-hidden flex justify-center items-center ">

                    <div className="w-full h-full max-w-7xl  p-4 md:p-10  flex items-center  ">
                        <div className="w-full relative  h-full">
                            <div className="flex flex-wrap">
                                <div className="w-full  h-full flex flex-col items-center">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-5">
                                        <div className="md:px-6 md:py-5 flex-auto overflow-hidden">
                                            <div className="tab-content tab-space max-h-[728px] h-full">
                                                <div className={openTab === 1 ? "flex flex-col" : "hidden"} id="link1">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] mb-5 text-center font-serif">  <span className="">2 <span className="text-sm align-top -ml-2 ">nd </span></span> - <span className="mr-2">7 <span className="text-sm align-top -ml-2 ">th </span></span> FLOOR PLAN</p>

                                                    <div
                                                        data-caption="2nd - 7th FLOOR PLAN"
                                                        href="/assets/floorplan/floor-1-image.png"
                                                        data-fancybox="floorplan"
                                                        className="w-full h-[350px] md:h-[480px] relative">


                                                        <Image
                                                            src="/assets/floorplan/floor-1-image.png"
                                                            alt="floor-1-image"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>
                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] mb-5 text-center font-serif"> <span className="mr-1">8 <span className="text-sm align-top -ml-2 ">th </span></span> FLOOR PLAN</p>

                                                    <div
                                                        data-caption="8th FLOOR PLAN"
                                                        href="/assets/floorplan/floor-2-image.png"
                                                        data-fancybox="floorplan"

                                                        className="w-full h-[350px] md:h-[480px]  relative">


                                                        <Image
                                                            src="/assets/floorplan/floor-2-image.png"
                                                            alt="floor-2-image"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <ul
                                        className="flex mb-0 list-none flex-wrap flex-row w-fit justify-center "
                                        role="tablist"
                                    >
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-48">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 1
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                <span className="mr-1">2 <span className="text-xs align-top -ml-[2px]  ">nd</span></span> - <span className="mr-1">7 <span className="text-xs align-top -ml-[2px]  ">th </span></span> Floor Plan
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                <span className="mr-1">8 <span className="text-xs align-top -ml-[2px]  ">th </span></span> Floor Plan
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            )
        }

        else if (contentTitle.contentTitle == "section4") {
            return (
                <section className=" w-full h-full relative overflow-hidden flex justify-center items-center ">

                    <div className="w-full h-full max-w-7xl  p-4 md:p-10  flex items-center  ">
                        <div className="w-full relative  h-full">
                            <div className="flex flex-wrap">
                                <div className="w-full  h-full flex flex-col items-center">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-5">
                                        <div className="md:px-6 md:py-5 flex-auto overflow-hidden">
                                            <div className="tab-content tab-space max-h-[728px] h-full">
                                                <div className={openTab2 === 1 ? "flex flex-col items-center" : "hidden"} id="link1">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">ROOM TYPE A</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">160.88 sq.m. (2 Bedroom)</p>

                                                    <div
                                                        data-caption="ROOM TYPE A&lt;br /&gt;160.88 sq.m. (2 Bedroom)"
                                                        href="/assets/floorplan/room-a.jpg"
                                                        data-fancybox="roomtype"

                                                        className="max-w-[575px] w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/room-a.jpg"
                                                            alt="room-a"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>
                                                <div className={openTab2 === 2 ? "flex flex-col items-center" : "hidden"} id="link2">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">ROOM TYPE B</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">157.98 sq.m. (2 Bedroom)</p>

                                                    <div
                                                        data-caption="ROOM TYPE B&lt;br /&gt;157.98 sq.m. (2 Bedroom)"
                                                        href="/assets/floorplan/room-b.jpg"
                                                        data-fancybox="roomtype"

                                                        className="max-w-[575px] w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/room-b.jpg"
                                                            alt="room-b"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>

                                                <div className={openTab2 === 3 ? "flex flex-col items-center" : "hidden"} id="link3">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">ROOM TYPE C</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">122.36 sq.m. (2 Bedroom)</p>

                                                    <div
                                                        data-caption="ROOM TYPE C&lt;br /&gt;122.36 sq.m. (2 Bedroom)"
                                                        href="/assets/floorplan/room-c.jpg"
                                                        data-fancybox="roomtype"

                                                        className="max-w-[575px] w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/room-c.jpg"
                                                            alt="room-c"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>

                                                <div className={openTab2 === 4 ? "flex flex-col items-center" : "hidden"} id="link4">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">ROOM TYPE D</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">126.16 sq.m. (2 Bedroom)</p>

                                                    <div
                                                        data-caption="ROOM TYPE D&lt;br /&gt;126.16 sq.m. (2 Bedroom)"
                                                        href="/assets/floorplan/room-d.jpg"
                                                        data-fancybox="roomtype"
                                                        className="max-w-[575px] w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/room-d.jpg"
                                                            alt="room-d"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>

                                                <div className={openTab2 === 5 ? "flex flex-col items-center" : "hidden"} id="link5">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">ROOM TYPE E</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">168.47 sq.m. (2 Bedroom)</p>

                                                    <div
                                                        data-caption="ROOM TYPE E&lt;br /&gt;168.47 sq.m. (2 Bedroom)"
                                                        href="/assets/floorplan/room-e.jpg"
                                                        data-fancybox="roomtype"
                                                        className="max-w-[640px] w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/room-e.jpg"
                                                            alt="room-e"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>

                                                <div className={openTab2 === 6 ? "flex flex-col items-center" : "hidden"} id="link6">
                                                    <p className=" font-bold text-3xl md:text-4xl  text-[#82603f] text-center font-serif">PENTHOUSE</p>
                                                    <p className="text-[#7b7c80] font-serif italic text-center  mb-5">392.22 sq.m. (3 Bedroom)</p>

                                                    <div
                                                        data-caption="PENTHOUSE&lt;br /&gt;392.22 sq.m. (3 Bedroom)"
                                                        href="/assets/floorplan/penthouse.jpg"
                                                        data-fancybox="roomtype"
                                                        className="max-w-5xl w-full h-[380px] md:h-[388px] relative sm:my-5">


                                                        <Image
                                                            src="/assets/floorplan/penthouse.jpg"
                                                            alt="penthouse"
                                                            layout="fill"
                                                            quality={100}
                                                            objectFit="contain"
                                                        />

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <ul
                                        className="flex mb-0 list-none flex-wrap flex-row w-fit justify-center "
                                        role="tablist"
                                    >
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 1
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                Room Type A
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 2
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Room Type B
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 3
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(3);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Room Type C
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 4
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(4);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Room Type D
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 5
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(5);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Room Type E
                                            </a>
                                        </li>
                                        <li role="tab" className="-mb-px  last:mr-0 flex-auto text-center w-40">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab2 === 6
                                                        ? "text-white bg-[#82603f] border border-[#82603f]"
                                                        : "text-gray-500 hover:text-[#82603f] border border-[#82603f] bg-white ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab2(6);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Penthouse
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            )
        }
    }

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
                <div className="min-h-screen w-full h-full relative flex flex-col justify-center items-center gap-5">

                    {themes.map((item, index) => (
                        <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background}

                            className="w-full h-full relative">
                            <ConditionContent contentTitle={item.title} />
                        </div>
                    ))
                    }
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Residence;