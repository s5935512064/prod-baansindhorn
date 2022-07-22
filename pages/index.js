import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout"
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const themes = [
  {
    title: "content1",
    theme: {
      background: "#fff"
    }
  },
  {
    title: "content2",
    theme: {
      background: "#dad8d6"
    }
  }
]

export default function Home() {

  const GroupRef = useRef([]);
  const router = useRouter();

  const onScroll = (e) => {

    if (GroupRef.current[0] == null) {
      document.body.style.backgroundColor = "white"
    }
    else if (GroupRef.current !== null) {
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

          <section className="w-full h-screen flex justify-center relative">
            <div className=" w-full h-full relative ">
              <video
                loop
                autoPlay
                muted
                className="object-cover h-screen w-full object-bottom inset-0"
              >
                <source
                  src="https://eiffelbakery.com/video/BAAN%20SINDHORN_Final.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </section>

          <section id="hero" className="w-full min-h-screen h-full max-w-7xl  p-4 md:p-10 flex items-center mt-20 md:mt-14 2xl:mt-0 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full items-center justify-items-center ">
              <div className="w-full h-[65vh] md:h-[70vh]  overflow-hidden relative flex p-2 md:p-4 border border-[#83603f]">

                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 3, delay: 0 }}
                  className="w-full h-full relative"
                >


                  <Image
                    src="/assets/home/shutterstock_158902820_BW.jpg"
                    alt="shutterstock"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 duration-500" />

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

                  <p className="font-serif italic">Where Your</p>
                  <h1 className="font-bold text-4xl font-serif text-[#82603f] mb-5">HEART <br />BELONGS</h1>

                  <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />

                  {/* <div className="max-w-sm w-full relative h-10 mb-5 ">

                    <Image
                      src="/assets/divide.svg"
                      alt="divide"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div> */}

                  <p className="text-sm max-w-[400px] w-full font-light whitespace-pre-line">Welcome to <span className="text-[#82603f] font-medium">BAAN SINDHORN</span>. Our residence offers a new urban living phenomenon that every family is looking for. This project is situated in a prime location right in heart of Bangkok, with only 32 exquisite units, 2-bedroom or Penthouse, on offer.</p>
                </div>
              </motion.div>


            </div>
          </section>

          <section className="w-full min-h-[45vh] md:min-h-screen h-full relative overflow-hidden  ">
            <Image
              data-aos="zoom-out-up"
              src="/assets/home/home-1-1.jpg"
              alt="home-1-"
              layout="fill"
              objectFit="cover"
              className="grayscale !hidden sm:!block " />
            <Image
              data-aos="zoom-out-up"
              src="/assets/home/home-1.jpg"
              alt="home-1-"
              layout="fill"
              objectFit="cover"
              className="grayscale sm:!hidden " />
          </section>

          <section id="content1" className="w-full min-h-[180vh] h-full   flex justify-center relative">
            <div className="w-full h-full max-w-7xl  p-4 md:p-10 flex items-center absolute">
              <div className="grid grid-cols-1 w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-2  h-full md:h-[85vh]">
                  <div className=" h-full flex justify-center items-center">
                    <div
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="200"
                      className="text-center text-[#7b7c80] grid justify-items-center">
                      <p className="font-serif italic">Exterior and Facilites</p>
                      <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] mb-5">A SENSE OF <br />BELONGING</h1>
                      <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                      <p className="text-sm max-w-[400px] whitespace-pre-line w-full font-light">Sit back and relax. <span className="text-[#82603f] font-medium">BAAN SINDHORN</span> offers close family bond in an ultimate lifestyle. The luxury makes striking feeling of a sumptuous yet cozy flair every family has always promised themselves.</p>
                    </div>
                  </div>
                  <div className="h-[50vh] md:h-full bg-[#83603f] p-10 md:p-20">
                    <div className="h-full border p-2 md:p-4">
                      <div className="relative h-full">
                        <Image
                          data-aos="zoom-in-down"
                          src="/assets/home/shutterstock_277961978_BW.jpg"
                          alt="shutterstock_277961978_BW"
                          layout="fill"
                          objectFit="cover"
                          className="grayscale hover:scale-105 duration-500 " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  h-full md:h-[85vh]">
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    className="h-full flex justify-center items-center md:col-start-2">
                    <div className="text-center text-[#7b7c80] grid justify-items-center">
                      <p className="font-serif italic">Enchanting Rooms</p>
                      <h1 className="font-bold text-3xl md:text-4xl font-serif text-[#82603f] mb-5 max-w-sm w-full">REFLECTING<br />
                        AN APPRECIATION OF FAMILY BOND</h1>
                      <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />
                      <p className="text-sm max-w-[395px] whitespace-pre-line w-full font-light ">Simple but elegant,
                        every corner is designed to be both a place for you to relax with family and sophisticated functional part of working life, while also allowing privacy when desired. <span className="text-[#82603f] font-medium">BAAN SINDHORN</span> represents an eternal family bond as much as it embodies luxury living.</p>
                    </div>
                  </div>

                  <div className="h-[50vh] md:h-full bg-[#83603f] p-10 md:p-20 md:row-start-1">
                    <div className="h-full border p-2 md:p-4">
                      <div className="relative h-full">
                        <Image
                          data-aos="zoom-in-down"
                          src="/assets/home/shutterstock_632932427_BW.jpg"
                          alt="shutterstock_632932427_BW"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="left"
                          className="grayscale hover:scale-105 duration-500 shadow-2xl  " />
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </section>


          {themes.map((item, index) => (
            <div key={index} ref={(e) => (GroupRef.current[index] = e)} data-bgcolor={item.theme.background} className="w-full h-full">
              <section className={classNames(
                item.title == "content2" ? "w-full min-h-screen h-full flex flex-col items-center -translate-y-10  " : "hidden opacity-0")}>

                <div className="w-full h-full max-w-7xl  p-4 md:p-10  mb-10">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    className="text-center text-[#7b7c80] grid justify-items-center">
                    <p className="font-serif italic">Leafly, Rooftop Garden</p>
                    <h1 className="font-bold text-4xl font-serif text-[#82603f] mb-5  max-w-xs w-full ">A GREEN LIFE
                      ON TOP OF <br /> THE WORLD</h1>

                    <hr className="w-28 mb-5" style={{ borderTop: "2px solid #82603f " }} />

                    {/* <div className="max-w-sm w-full relative h-5 mb-5 ">
                      <Image

                        src="/assets/divide.svg"
                        alt="divide"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div> */}
                    <p className="text-sm max-w-[350px] whitespace-pre-line font-light ">Let’s make the most hurried day as slow as <br />a visit to a park.
                      Here, our o2-filled area teams up with the exotic heaven that is hard to beat.</p>
                  </div>
                </div>

                <div className="w-full  h-[75vh] relative">
                  <Image
                    data-aos="zoom-out-up"
                    src="/assets/home/home-image.jpg"
                    alt="home-image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </section>
            </div>
          ))
          }
        </div >
      </Layout>
    </AnimatePresence>

  )
}
