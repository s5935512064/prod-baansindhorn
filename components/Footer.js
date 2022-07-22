import Link from 'next/link';
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'

const Footer = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className="w-full h-full flex justify-center items-center my-4 mt-10">
                <div className="max-w-7xl w-full h-full px-4 py-2">
                    <div className=" h-1/2 items-end flex  mb-1  divide-x divide-[#b6a694] gap-2">
                        <div className="flex h-full  flex-col sm:flex-row-reverse sm:mb-1 sm:items-center w-fit ">
                            <div className="flex sm:items-center gap-1 sm:ml-2 ">


                                <Link href={"https://www.facebook.com/Sindhornvillage"} >

                                    <a target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32.84"
                                            height="32.84"
                                            viewBox="0 0 32.84 32.84"
                                            className="cursor-pointer"
                                        >
                                            <circle
                                                id="Ellipse_9"
                                                data-name="Ellipse 9"
                                                cx="15.67"
                                                cy="15.67"
                                                r="15.67"
                                                transform="translate(0.75 0.75)"
                                                fill="none"
                                                stroke="#82603f"
                                                strokeWidth="1"
                                            />
                                            <path
                                                id="Path_548020"
                                                data-name="Path 548020"
                                                d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                                transform="translate(-71.834 -38.578)"
                                                fill="#82603f"
                                            />
                                        </svg>
                                    </a>
                                </Link>

                                <Link href={"https://www.instagram.com/sindhornvillage/"} >

                                    <a target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32.84"
                                            height="32.84"
                                            viewBox="0 0 32.84 32.84"
                                        >
                                            <circle
                                                id="Ellipse_9"
                                                data-name="Ellipse 9"
                                                cx="15.67"
                                                cy="15.67"
                                                r="15.67"
                                                transform="translate(0.75 0.75)"
                                                fill="none"
                                                stroke="#82603f"
                                                strokeWidth="1"
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="26"
                                                height="24"
                                                viewBox="0 0 32.84 32.84"
                                            >
                                                <path
                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                    fill="#82603f"
                                                    transform="translate(9 10)"
                                                />
                                            </svg>
                                        </svg>
                                    </a>
                                </Link>



                                <Link href={"https://lin.ee/URizy9M"} >

                                    <a target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="33.492"
                                            height="33.499"
                                            viewBox="0 0 33.492 33.499"
                                            className="cursor-pointer"
                                        >
                                            <path
                                                id="Path_548021"
                                                data-name="Path 548021"
                                                d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
                                                transform="translate(-197.758 -38.248)"
                                                fill="none"
                                                stroke="#82603f"
                                                strokeWidth="1"
                                            />
                                            <path
                                                id="Path_548022"
                                                data-name="Path 548022"
                                                d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                                                transform="translate(-197.758 -38.248)"
                                                fill="#82603f"
                                            />
                                        </svg>
                                    </a>
                                </Link>

                            </div>
                            <p className="text-xs font-light text-[#82603f] mt-1 sm:mb-0">More channel to follow us. </p>




                        </div>



                        <button onClick={openModal} className="text-[#82603f]  text-xs font-light  sm:hidden pl-3">
                            Disclaimer
                        </button>


                        <Link href={"https://siamsindhorn.com/privacy"}>
                            <p className="text-xs font-light cursor-pointer text-[#82603f] sm:hidden pl-3">Privacy Policy</p>
                        </Link>



                    </div>

                    <div className="flex  w-full h-1/2 items-center border-[#82603f] border-t pt-2 text-[#82603f] gap-4 border-collapse">
                        <p className="text-xs font-light ">Copyright © 2022 , Siam Sindhorn Co.,Ltd. All Rights Reserved.</p>

                        <button onClick={openModal} className="text-xs font-light underline hidden sm:block">
                            Disclaimer
                        </button>

                        <Link href={"https://siamsindhorn.com/privacy"}>
                            <p className="text-xs font-light underline cursor-pointer hidden sm:block">Privacy Policy</p>
                        </Link>



                    </div>

                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#010F2A] bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" transform overflow-hidden   p-3 text-left align-middle shadow-xl transition-all w-11/12 md:max-w-2xl border-2 border-[#B6A694]">
                                    <div className="w-full h-full bg-white py-4  px-6">
                                        <Dialog.Title
                                        >
                                            <div className="flex justify-between items-center pb-3">
                                                <p className="text-2xl font-bold text-[#82603f]">Disclaimer</p>
                                                <button onClick={closeModal} className="z-50">
                                                    <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                                    </svg>
                                                </button>
                                            </div>

                                        </Dialog.Title>
                                        <div className="">

                                            <p className="font-light text-[#3C4858] whitespace-pre-wrap break-words text-sm md:text-base text-justify indent-5">All information, plans, specification, images and perspectives contained in this website are for general information and illustrative purposes only, illustrations are artistís impressions and have been enhanced by computer graphics for reference. The exact construction appearance may differ from the specifications, images and perspectives contained in this website. The information and/or details contained herein are subject to change without prior notice and cannot form part of an offer, recommendation to purchase or contract. Siam Sindhorn Co., Ltd. reserves the right to make revisions of any features and amenities denoted in the website at any time.</p>
                                        </div>
                                    </div>
                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Footer;