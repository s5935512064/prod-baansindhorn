import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listMenuItem = [
    { name: "Home", href: "/" },
    { name: "residence", href: "/residence" },
    { name: "Project Details", href: "/project-detail" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },

]

const Navbar = () => {

    const router = useRouter();
    const [menuBar, setMenuBar] = useState(false);
    const [navbarOffset, setNavbarOffset] = useState(false);

    const ToggleSidebar = () => {
        setMenuBar(!menuBar);
    }

    useEffect(() => {
        // setMenuBar(false);
    }, [])

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        const navbar = document.querySelector("#navbar");
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            // if (prevScrollpos > currentScrollPos) {
            //     navbar.style.top = "0";

            // } else {
            //     navbar.style.top = "-64px";
            // }

            if (window.pageYOffset >= 100) {
                setNavbarOffset(true);
            }
            else {
                setNavbarOffset(false);
            }
            prevScrollpos = currentScrollPos;
        }
    })



    return (
        <header className="w-full overflow-hidden relative h-full ">
            <div id="navbar" className={classNames(navbarOffset ? "bg-white/80 backdrop-blur" : "bg-transparent", "fixed top-0 w-full h-[70px] sm:h-24  z-10 ")}
            />
            <Link href={"/"}>
                <div className="fixed top-0 w-14 h-14 sm:w-28  sm:h-20 ml-4 md:ml-10 !z-40 mt-2">
                    <Image
                        src="/assets/Bann-logo-01.svg"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer hover:opacity-70 duration-300" />
                </div>
            </Link>


            <div className="fixed top-0 right-0 w-fit h-[70px] sm:h-24 flex justify-end px-4 md:px-10 z-30 ">
                <div className="inline-flex relative h-full items-center gap-3 w-full ">



                    <button id="menuBtn" type="button" onClick={ToggleSidebar} className={classNames(
                        menuBar ? "text-white border-white" :
                            (!navbarOffset ? (router.pathname === "/" || router.pathname === "/facilities" ? "text-[#83603f] border-[#83603f] border-opacity-0" : "text-[#83603f] border-[#83603f] border-opacity-0") : "text-[#83603f] border-[#83603f] border-opacity-0"), "w-28 h-10 text-sm  rounded-full duration-300 text-center ")}>

                        <span
                            id="menu"
                            className={menuBar ? "menu open -translate-y-3 sm:translate-y-0" : "menu  -translate-y-3 sm:translate-y-0"}
                        >
                            <span className=""></span>

                            <span
                                id="hamburgerBtn"
                                className="menu-link"

                            >
                                <span className="menu-icon">
                                    <span className="menu-line menu-line-1"></span>
                                    <span className="menu-line menu-line-2"></span>
                                    <span className="menu-line menu-line-3"></span>
                                </span>
                            </span>
                        </span>

                        {menuBar ? "CLOSE" : "MENU"} </button>

                </div>
            </div>

            <div id="sideBar" className={classNames(
                menuBar ? "translate-x-0" : "translate-x-full", "h-screen max-w-[512px] w-full bg-[#83603f] fixed right-0 top-0 transform duration-500 z-20")}>

                <div className="w-full h-full flex justify-center items-center  text-white ">
                    <div className="flex flex-col gap-4 font-serif ">
                        {listMenuItem.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <button className={
                                    router.pathname === item.href ? "w-96 px-6 font-semibold text-4xl text-left uppercase" : "w-96 px-6  text-4xl text-left uppercase opacity-70 hover:opacity-100 duration-300"}>{item.name}</button>
                            </Link>
                        ))

                        }


                    </div>

                </div>

            </div>

            <div id="shadow" className={classNames(
                menuBar ? "opacity-70" : "hidden opacity-0", "w-full h-screen  bg-black fixed transform duration-500 z-10")} />


            <Link href={"/register"}>
                <div className={classNames(menuBar ? "" : "", "z-10  fixed bottom-3 w-28 h-10  right-3  flex justify-center items-center  bg-[#83603f] rounded-full shadow md:mr-7 cursor-pointer")}>

                    <div className="absolute w-full h-full flex items-center ">

                        <button id="registerBtn" type="button"
                            className=" text-white text-sm text-center duration-300 w-full ">
                            REGISTER </button>
                    </div>

                </div>
            </Link>

        </header>
    );
}

export default Navbar;