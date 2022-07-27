import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

const EventPopup = ({ opened }) => {

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <>

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
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">

                        <div className="flex min-h-full items-center justify-center p-10 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel className="transform  p-4 text-left align-middle transition-all max-w-7xl w-full bg-[url('/assets/king2565/R10BG.svg')] bg-no-repeat bg-cover bg-center h-[55vh] sm:h-[65vh] lg:h-[80vh] relative">
                                    <div className=" absolute -top-7 -right-1">
                                        <button onClick={closeModal} className="z-50 border-none outline-none">
                                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>

                                    <div className="w-full h-full border-img relative">
                                        <div className="w-24 h-24 bg-[url('/assets/king2565/R10Sign.png')] bg-contain bg-no-repeat bg-right absolute top-0 right-0 lg:hidden" />

                                        <div className="w-full h-full relative grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 gap-3 mt-4 lg:mt-0">

                                            <div className="bg-[url('/assets/king2565/R10.png')] bg-no-repeat bg-contain  bg-center flex items-center justify-center h-full relative row-span-2 ">
                                            </div>

                                            <div className="h-full w-full relative justify-center grid grid-cols-1 justify-items-center   lg:grid-rows-2 items-end gap-3 lg:-translate-x-8 ">

                                                <div className="w-full max-h-[250px] h-full relative bg-[url('/assets/king2565/R10Sign.png')] bg-no-repeat bg-center bg-contain hidden lg:block  translate-y-8 xxl:translate-y-16 ">
                                                </div>

                                                <div className="w-full h-full relative scale-75 hidden lg:block">
                                                    <Image
                                                        priority
                                                        src="/assets/king2565/R10Text-desktop.png"
                                                        alt="text"
                                                        layout="fill"
                                                        objectFit="contain"
                                                        objectPosition={"center"}

                                                    />
                                                </div>

                                                <div className="w-full h-full relative scale-90 -translate-y-4 lg:hidden">
                                                    <Image
                                                        priority
                                                        src="/assets/king2565/R10Text-m.png"
                                                        alt="text"
                                                        layout="fill"
                                                        objectFit="contain"
                                                        objectPosition={"center"}

                                                    />
                                                </div>

                                            </div>


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

export default EventPopup;