"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import Hamburger from "hamburger-react";
import { onlineMathTabs } from "@/app/online-math/online-math-tabs";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-between mx-auto">
                <div className="flex w-full lg:w-auto items-center">
                    <div className="pl-2 pr-2 flex-1">
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src="/solid_foundations_logo.png"
                                alt="Solid Foundations logo"
                                width={300}
                                height={75}
                            />
                        </Link>
                    </div>
                    <div className="lg:hidden flex-1 flex justify-end">
                        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
                    </div>
                </div>
                <div className={`${menuOpen ? "max-h-60" : "max-h-0"} bg-gray-700 lg:bg-transparent overflow-hidden transition-max-height duration-300 ease-in-out lg:max-h-max w-full lg:w-auto text-white lg:text-black`}>
                    <ul className="flex flex-col lg:flex-row p-4">
                        <li className="text-center mr-5 ml-5 flex-1 shrink transition hover:border-blue-600 hover:text-blue-600">
                            <Menu>
                                <MenuButton className="block py-2 px-3 whitespace-nowrap text-center m-auto">
                                    Online Math
                                </MenuButton>
                                <MenuItems anchor="bottom start" transition className="w-40 origin-top-right rounded-xl border border-gray-400 bg-white p-1 mt-2 shadow-lg ring-black/5 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                                    {onlineMathTabs.map((tab) => (
                                        <MenuItem key={tab.id}>
                                            <Link
                                                href={{
                                                    pathname: "/online-math",
                                                    query: { initFlow: tab.id}
                                                }}
                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">
                                                {tab.label}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink transition hover:text-blue-600">
                            <Link href="/math1" className="block py-2 px-3 whitespace-nowrap">Math 1</Link>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink transition hover:text-blue-600">
                            <Link href="/team" className="block py-2 px-3">Team</Link>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink transition hover:text-blue-600">
                            <Link href="/contact" className="block py-2 px-3">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
