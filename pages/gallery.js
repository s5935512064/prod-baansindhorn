import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const image = [
    { id: 1, src: "/assets/gallery/MPH_5567-HDR-Pano_Small.webp", type: "exterior" },
    { id: 2, src: "/assets/gallery/DSCF0216-Pano.webp", type: "exterior" },
    { id: 3, src: "/assets/gallery/DSCF0236-Edi.webp", type: "exterior" },
    { id: 4, src: "/assets/gallery/DSCF0187-Edit-1.webp", type: "exterior" },
    { id: 5, src: "/assets/gallery/DSCF2573.webp", type: "exterior" },
    { id: 6, src: "/assets/gallery/DSCF2575.webp", type: "exterior" },
    { id: 7, src: "/assets/gallery/DSCF2581.webp", type: "exterior" },
    { id: 8, src: "/assets/gallery/MPH_5551-Pano-9.webp", type: "exterior" },
    { id: 9, src: "/assets/gallery/DSCF2556-44.webp", type: "exterior" },
    { id: 10, src: "/assets/gallery/DSCF2567-HDR.webp", type: "exterior" },
    { id: 11, src: "/assets/gallery/DSCF2559-HDR.webp", type: "exterior" },
    { id: 12, src: "/assets/gallery/MPH_5336-HDR.webp", type: "interior" },
    { id: 13, src: "/assets/gallery/DSCF2510-HDR.webp", type: "interior" },
    { id: 14, src: "/assets/gallery/DSCF2507-HDR.webp", type: "interior" },
    { id: 15, src: "/assets/gallery/DSCF2504.webp", type: "interior" },
    { id: 16, src: "/assets/gallery/DSCF2492-HDR.webp", type: "interior" },
    { id: 17, src: "/assets/gallery/DSCF2488.webp", type: "interior" },
    { id: 18, src: "/assets/gallery/DSCF2479.webp", type: "interior" },
    { id: 19, src: "/assets/gallery/DSCF2476.webp", type: "interior" },
    { id: 20, src: "/assets/gallery/DSCF2475.webp", type: "interior" },
    { id: 21, src: "/assets/gallery/DSCF2468-HD.webp", type: "interior" },

    { id: 22, src: "/assets/gallery/DSCF2456-5 copy.webp", type: "interior" },
    { id: 23, src: "/assets/gallery/DSCF2451-HDR.webp", type: "interior" },
    { id: 24, src: "/assets/gallery/DSCF2525.webp", type: "interior" },
    { id: 25, src: "/assets/gallery/DSCF2540-HDR.webp", type: "interior" },
    { id: 26, src: "/assets/gallery/DSCF2530-HDR-37.webp", type: "interior" },
    { id: 27, src: "/assets/gallery/DSCF2546-HDR.webp", type: "interior" },

    { id: 28, src: "/assets/gallery/DSCF2584-Pano.webp", type: "exterior" },

    { id: 29, src: "/assets/gallery/DSCF2513.webp", type: "interior" },
    { id: 30, src: "/assets/gallery/MPH_5340-HDR.webp", type: "interior" },
]

// const videoList = [
//     { id: 1, src: "https://www.youtube.com/watch?v=Xyv6mJ_3uBQ" },
// ]

const Gallery = () => {


    const [openTab, setOpenTab] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [openTab])


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

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {
            Carousel: {
                on: {
                    change: (that) => {
                        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                            friction: 0,
                        });
                    },
                },
            },
        });

        const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
            Dots: false,
            friction: 0.9,
            center: true,
            slidesPerPage: 1,
        });

        const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
            Sync: {
                target: mainCarousel,
                friction: 0.96,
            },
            Dots: false,
            Navigation: false,
            center: true,
            slidesPerPage: 1,
            infinite: false,
        });

    }, [openTab])

    useEffect(() => {
        if (openTab == 2) {
            setTimeout(() => {
                Fancybox.bind('[data-fancybox', {
                    Carousel: {
                        on: {
                            change: (that) => {
                                mainCarousel2.slideTo(mainCarousel2.findPageForSlide(that.page), {
                                    friction: 0,
                                });
                            },
                        },
                    },
                });

                const mainCarousel2 = new Carousel(document.querySelector("#mainCarousel2"), {
                    Dots: false,
                    friction: 0.9,
                    center: true,
                    slidesPerPage: 1,
                });

                const thumbCarousel2 = new Carousel(document.querySelector("#thumbCarousel2"), {
                    Sync: {
                        target: mainCarousel2,
                        friction: 0.96,
                    },
                    Dots: false,
                    Navigation: false,
                    center: true,
                    slidesPerPage: 1,
                    infinite: false,
                });
            }, 600)


        }
    })
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
                <div className="w-full min-h-[85vh] h-full  flex justify-center relative bg-white ">
                    <div className="max-w-7xl w-full h-full mt-28 relative px-6 md:px-10">
                        <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] text-center">GALLERY</h1>
                        <div className="flex flex-wrap">
                            <div className="w-full h-full relative ">

                                <div className="relative top-5  w-full pb-2 flex justify-center px-2 md:px-10" >
                                    <ul
                                        className="flex mb-0 list-none flex-wrap flex-row w-fit justify-center"
                                        role="tablist"
                                        aria-owns="tab-1 tab-2 tab-3"
                                    >
                                        <li id="tab-1" role="tab" className="w-fit sm:w-44 -mb-px last:mr-0 flex-auto text-center border border-[#82603f] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 1
                                                        ? "text-white bg-[#82603f]"
                                                        : "text-[#82603f]  duration-300")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"

                                            >
                                                INTERIOR
                                            </a>
                                        </li>
                                        <li id="tab-2" role="tab" className="w-fit sm:w-44 -mb-px last:mr-0 flex-auto text-center border border-[#82603f] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-[#82603f]"
                                                        : "text-[#82603f]  duration-300  ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"

                                            >
                                                EXTERIOR
                                            </a>
                                        </li>

                                        <li id="tab-3" role="tab" className="w-fit sm:w-44 -mb-px last:mr-0 flex-auto text-center border border-[#82603f] ">
                                            <a
                                                className={
                                                    "text-sm px-5 py-3  block leading-normal " +
                                                    (openTab === 3
                                                        ? "text-white bg-[#82603f]"
                                                        : "text-[#82603f]  duration-300 ")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(3);
                                                }}
                                                data-toggle="tab"
                                                href="#link3"

                                            >
                                                VIDEO
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative flex flex-col min-w-0 break-words w-full mt-4 ">
                                    <div className="md:py-5 flex-auto h-fit ">
                                        <div className="tab-content tab-space h-fit  mt-6 md:mt-0 " >
                                            <div className={openTab === 1 ? "w-full grid grid-cols-1" : "hidden"} id="link1">

                                                <div id="mainCarousel" className="carousel w-full h-[500px] sm:h-[700px]">

                                                    {image.filter((p) => p.type == "interior")
                                                        .map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className="carousel__slide w-full h-[500px] sm:h-[700px] "
                                                                data-src={item.src}
                                                                data-fancybox="interior"
                                                            >
                                                                <img src={item.src}
                                                                    className="object-cover h-full w-full object-center " />
                                                            </div>
                                                        ))

                                                    }

                                                </div>

                                                <div id="thumbCarousel" className="carousel mt-3 -translate-y-28 md:translate-y-0">
                                                    {image.filter((p) => p.type == "interior")
                                                        .map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className="carousel__slide">
                                                                <img className="panzoom__content object-cover" src={item.src} />
                                                            </div>
                                                        ))

                                                    }

                                                </div>



                                            </div>
                                            <div className={openTab === 2 ? "w-full grid grid-cols-1" : "hidden"} id="link2">

                                                {loading ? <div className="w-full min-h-[700px] h-full flex justify-center items-center">
                                                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                        width="40px" height="40px" viewBox="0 0 50 50" >
                                                        <path fill="#b5a191" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                                            <animateTransform attributeType="xml"
                                                                attributeName="transform"
                                                                type="rotate"
                                                                from="0 25 25"
                                                                to="360 25 25"
                                                                dur="0.6s"
                                                                repeatCount="indefinite" />
                                                        </path>
                                                    </svg>
                                                </div> :
                                                    <div >
                                                        <div id="mainCarousel2" className="carousel w-full h-[500px] sm:h-[700px]">


                                                            {image.filter((p) => p.type == "exterior")
                                                                .map((item, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="carousel__slide w-full h-[500px] sm:h-[700px]  "
                                                                        data-src={item.src}
                                                                        data-fancybox="exterior"

                                                                    >
                                                                        <img src={item.src}
                                                                            className="object-cover h-full w-full object-center " />
                                                                    </div>
                                                                ))

                                                            }



                                                        </div>

                                                        <div id="thumbCarousel2" className="carousel mt-3 -translate-y-28 md:translate-y-0">
                                                            {image.filter((p) => p.type == "exterior")
                                                                .map((item, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="carousel__slide">
                                                                        <img className="panzoom__content object-cover" src={item.src} />
                                                                    </div>
                                                                ))

                                                            }

                                                        </div>
                                                    </div>

                                                }




                                            </div>
                                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                                {loading ? <div className="w-full min-h-[700px] h-full flex justify-center items-center">
                                                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                        width="40px" height="40px" viewBox="0 0 50 50" >
                                                        <path fill="#b5a191" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                                                            <animateTransform attributeType="xml"
                                                                attributeName="transform"
                                                                type="rotate"
                                                                from="0 25 25"
                                                                to="360 25 25"
                                                                dur="0.6s"
                                                                repeatCount="indefinite" />
                                                        </path>
                                                    </svg>
                                                </div> :
                                                    <div className=" w-full min-h-[700px] h-full grid grid-cols-1  gap-2  ">

                                                        <div className="w-full h-full relative">
                                                            <video
                                                                loop
                                                                autoPlay
                                                                muted
                                                                className="object-cover w-full object-top"
                                                            >
                                                                <source
                                                                    src="https://eiffelbakery.com/video/BAAN%20SINDHORN_Final.mp4"
                                                                    type="video/mp4"
                                                                />
                                                            </video>
                                                        </div>

                                                    </div>

                                                }







                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>






                        {/*                         
                        <div className="w-full h-full grid grid-cols-3 grid-rows-4 gap-2">
                            {image.map((item, index) => (
                                <div
                                    data-caption=""
                                    href={item.src}
                                    data-fancybox="gallery"
                                    key={index} className="w-full overflow-hidden cursor-pointer relative ">
                                    <Image
                                        src={item.src}
                                        alt="gallery"
                                        layout="responsive"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                </div>
                            ))
                            }
                        </div> */}
                    </div>
                </div>
            </Layout>
        </AnimatePresence>
    );
}

export default Gallery;