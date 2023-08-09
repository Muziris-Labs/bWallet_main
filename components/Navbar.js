"use client";
const { default: Image } = require("next/image");
import { Fragment } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbGridDots } from "react-icons/tb";

// const Navbar = () => {
//   return (
//     <div style={{
//       WebkitBackdropFilter: 'blur(15px)',
//       backdropFilter:'blur(15px)',
//       zIndex:100
//     }} className="fixed w-screen flex items-center text-xl  text-white justify-around py-4 ">
//       <div className="flex items-center font-sec">
//         <Image src="/assets/logo.png" width={50} height={50} />B Wallet
//       </div>
//       <div className="flex gap-8 font-prm pt-4">
//         <h3>Home</h3>
//         <h3>Features</h3>
//         <h3>Contact us</h3>
//       </div>
//       <div className="border border-1 px-2 py-1 font-prm flex items-center gap-3">
//         Launch App
//         <PiArrowUpRightBold/>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Features", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="z-50 bg-transparent fixed w-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-[#141414]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                
                  <div className="flex flex-shrink-0 text-white items-center font-sec">
                    <Image src="/assets/logo.png" width={50} height={50} />B
                    Wallet
                  </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex text-xl justify-between items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white text-xl "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 font-medium text-xl "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                   
                  </div>
                </div>
                <div className="hidden cursor-pointer border text-white border-1 px-2 py-1 font-prm md:flex text-xl items-center gap-3">
                      Launch App
                      <PiArrowUpRightBold />{" "}
                    </div>
              </div>

              <div className=" flex items-center sm:hidden">
                
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <TbGridDots className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute w-screen h-fit transition duration-200 ease-in 
          bg-[#141414] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 " >
            <div className="text-center px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-lg font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
