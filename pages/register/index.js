import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../components/Layout";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from 'next/router'
import Script from 'next/script'
import axios from "axios";
import Swal from 'sweetalert2'


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


let URL = process.env.NEXT_PUBLIC_URL + "/api-register/?select=senddata";


const Index = () => {


    const router = useRouter();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const [ipAddress, setIpAddress] = useState("")
    const recaptchaRef = useRef();




    const handleSubmit = async (event) => {

        event.preventDefault();
        // Execute the reCAPTCHA when the form is submitted
        recaptchaRef.current.execute();


        let formData = new FormData();
        formData.append("pkey", process.env.NEXT_PUBLIC_P_KEY);
        formData.append("custname", name);
        formData.append("custlastname", lastName);
        formData.append("custemail", email);
        formData.append("custphone", phone);
        formData.append("unit_type", type);
        formData.append("price", price);
        formData.append("message", message);
        formData.append("contacttype", "5");
        formData.append("provider_id", "BSD");
        formData.append("ipaddr", ipAddress);

        await axios.post(URL, formData)
            .then((response) => {
                if (response.status == 200) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully!',
                        text: "Your registration has been successful",
                        timer: 2000,
                        timerProgressBar: true,

                    }).then((result) => {
                        /* Read more about handling dismissals below */

                        router.push("/register/success")

                    })

                }
            })
            .catch((err) => console.log(err))

    };


    const recaptcha_callback = async (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // document.getElementById("registerButton").disabled = false;
        await recaptchaRef.current.reset();

    }


    useEffect(() => {
        const cookiesIP = axios.get('https://api.db-ip.com/v2/free/self').then(response => {
            setIpAddress(response.data.ipAddress)
        });
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

                <Script src="https://www.google.com/recaptcha/api.js" />

                <div className="w-full min-h-[85vh]  h-full  flex justify-center relative bg-white">
                    <div className="max-w-7xl w-full h-full mt-28 relative px-6 md:px-10">
                        <h1 className="font-bold  text-3xl md:text-4xl font-serif text-[#82603f] text-center">REGISTER</h1>
                        <p className="text-[#7b7c80] font-serif italic text-center">Successful registration will entitle
                            to avail of the special privileges.</p>
                        <div className="w-full h-full grid grid-cols-1 gap-5 py-9 justify-items-center">
                            {/* <div className="w-full h-[350px] md:h-[575px] relative">
                                <Image
                                    src="/assets/banner-register.webp"
                                    alt="register"
                                    layout="fill"

                                    objectFit="contain"
                                />

                            </div> */}

                            <div className="max-w-lg w-full">
                                <form onSubmit={handleSubmit}>
                                    <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey="6LfKKHkgAAAAAJvwXdUQhMeN4XlyNQjCLB3coUNU" onChange={recaptcha_callback} />

                                    <div className='md:px-4 pt-6 grid grid-cols-1  gap-1'>
                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694]  mb-2" htmlFor="name">
                                                First Name
                                            </label> */}
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required />
                                        </div>
                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694]  mb-2" htmlFor="Lname">
                                                Last Name
                                            </label> */}
                                            <input
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Lname" type="text" placeholder="Lastname" required />
                                        </div>

                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694]  mb-2" htmlFor="email">
                                                Email
                                            </label> */}
                                            <input onChange={(e) => setEmail(e.target.value)} className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
                                        </div>
                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694] mb-2" htmlFor="phone">
                                                Phone Number
                                            </label> */}
                                            <input
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone number" />
                                        </div>
                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694]   mb-2" htmlFor="typeUnit">
                                                Unit Type
                                            </label> */}
                                            <div className="relative">
                                                <select
                                                    onChange={(e) => setType(e.target.value)}
                                                    className="block font-light text-sm appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="typeUnit"
                                                    defaultValue="">
                                                    <option value="" disabled > Unit Type </option>
                                                    <option value="1 Bedroom" >1 Bedroom</option>
                                                    <option value="2 Bedroom">2 Bedroom</option>
                                                    <option value="3 Bedroom">3 Bedroom</option>
                                                    <option value="Penthouse">Penthouse</option>
                                                </select>

                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            {/* <label className="block text-[#B6A694]  mb-2" htmlFor="price">
                                                Price
                                            </label> */}
                                            <div className="relative">
                                                <select
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    className="block font-light text-sm appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price"
                                                    defaultValue="">
                                                    <option value="" disabled > Price </option>
                                                    <option value="less than 20 Million Baht" >Less than 20 Million Baht</option>
                                                    <option value="21-30 Million Baht">21-30 Million Baht</option>
                                                    <option value="31-40 Million Baht">31-40 Million Baht</option>
                                                    <option value="41-50 Million Baht">41-50 Million Baht</option>
                                                    <option value="more than 50 Million Baht">More than 50 Million Baht</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2 ">
                                            {/* <label className="block text-[#B6A694]  mb-2" htmlFor="message">
                                                Message
                                            </label> */}
                                            <textarea
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="font-light text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message" />
                                        </div>

                                        <div className="mb-2 ">
                                            {/* <label className="block text-[#B6A694] mb-1" htmlFor="message">
                                                Privacy Policy
                                            </label>
                                            <p className="text-gray-700 text-[13px] mb-1 font-light ">
                                                Siam Sindhorn Co., Ltd. and its group companies (&quot;Company&quot;) collect, use, or disclose your Personal Data for the purpose of communication, public relations, or offering products and services with you in accordance with our Privacy Policy.  In addition, Company also provides appropriate security measures to protect your privacy.
                                            </p>
                                            <p className="text-gray-700 text-[13px] mb-4 font-light">
                                                You can access our Privacy Policy by clicking <Link href="https://siamsindhorn.com/privacy"><span className="text-[#B6A694]">here.</span></Link>
                                            </p> */}
                                            <div className="text-gray-700 text-[13px] font-light">
                                                <input id="policy" type="checkbox" className="mr-2" />
                                                <label htmlFor="policy">

                                                    I have read the <Link href="https://siamsindhorn.com/privacy"><span className="text-[#B6A694]">Privacy Policy </span></Link>, and hereby give my consent for Siam Sindhorn Co., Ltd. and its group companies (&quot;Company&quot;) to collect, use, or disclose my Personal Data.
                                                </label>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="md:px-4 grid justify-items-center">

                                        <input id="registerButton" value="SUBMIT" type="submit" className="w-fit px-6 py-2 bg-[#82603f] text-white hover:bg-white border border-[#82603f] hover:text-[#82603f] duration-300  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none my-2 cursor-pointer" />

                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </Layout>

        </AnimatePresence>
    );
}

export default Index;