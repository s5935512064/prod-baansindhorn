import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import axios from "axios";

const EventPopup = ({ opened }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchEvent();
    async function fetchEvent() {
      const configAxios = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer c36b92cbddf9dd9b9d7e25b4efe6c2520b3a5bbc1cc4eaa7bc4a77abbfdfa18ee0f99207f02d40aa9e45e98899a905af`,
        },
      };
      try {
        const response = await axios.get(
          `https://cms.ssdapp.net/api/events?websiteId=SSD004`,
          configAxios
        );

        if (
          response.status == 200 &&
          response.data != "No event found in the database."
        ) {
          setData(response.data[0]);
          setIsOpen(true);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error message:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    }
  }, []);

  if (data == null) return <></>;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={openModal}>
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
                <Dialog.Panel
                  className="h-[75vh] sm:h-[80vh] lg:h-[70vh] w-fit rounded-md space-y-4 p-6 md:p-8 xl:p-12 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${data.bgImage}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <button
                    type="button"
                    className="size-7 md:size-10 bg-white text-black rounded-full absolute right-4 top-4 flex justify-center items-center"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 md:size-6 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="w-full !h-full z-10 grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-2 md:gap-2 xl:gap-4 justify-items-center md:-translate-y-4">
                    <div className="min-w-[400px] h-full flex  relative !row-span-2 md:row-span-1 -mt-4 md:mt-0 ">
                      <Image
                        src={data.profileImg}
                        alt="profile"
                        sizes="100vw"
                        quality={100}
                        width={0}
                        height={0}
                        layout="fill"
                        className="w-full h-full object-contain object-center absolute inset-0 scale-75 md:scale-100 drop-shadow-md "
                      />
                      <div className="size-24 md:size-32 absolute top-0 left-2  md:hidden     ">
                        <Image
                          src={data.signImg}
                          alt="sign"
                          sizes="100vw"
                          quality={100}
                          width={0}
                          height={0}
                          className="w-full h-full object-contain object-center  "
                        />
                      </div>
                    </div>

                    <div
                      style={{ color: data.color }}
                      className="flex flex-col justify-center items-center gap-2 md:gap-2 max-w-sm -mt-28 md:mt-0 md:-translate-x-5"
                    >
                      <div className="size-32 relative hidden md:block  ">
                        <Image
                          src={data.signImg}
                          alt="sign"
                          sizes="100vw"
                          quality={100}
                          width={0}
                          height={0}
                          className="w-full h-full object-contain object-center  "
                        />
                      </div>
                      <p
                        className={` text-center !whitespace-pre-line text-sm md:text-base xl:text-lg drop-shadow-sm`}
                      >
                        {data.text1.replace(new RegExp("\r?\n", "g"), "<br />")}
                      </p>

                      <div className="flex flex-col md:gap-2 ">
                        <p
                          className={` text-center !whitespace-pre-line text-3xl md:text-4xl xl:text-5xl font-semibold drop-shadow-sm`}
                        >
                          {data.text2.replace(
                            new RegExp("\r?\n", "g"),
                            "<br />"
                          )}
                        </p>

                        <div className="w-full h-10  relative">
                          <Image
                            src={
                              "https://res.cloudinary.com/dndcgytjh/image/upload/fl_preserve_transparency/v1721820504/divide_royal_plj7op.jpg?_s=public-apps"
                            }
                            alt="divide"
                            sizes="100vw"
                            width={0}
                            height={0}
                            layout="fill"
                            className="w-full h-full object-contain object-center drop-shadow-sm"
                          />
                        </div>
                      </div>
                      <p
                        className={` text-center whitespace-pre-line text-sm md:text-base xl:text-lg drop-shadow-sm `}
                      >
                        {data.text3.replace(new RegExp("\r?\n", "g"), "<br />")}
                      </p>
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
