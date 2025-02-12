import Image from "next/image";
import Link from "next/link";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

export default function Navbar() {
    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="/solid_foundations_logo.png"
                            alt="Solid Foundations logo"
                            width={400}
                            height={60}
                        />
                    </Link>
                </div>
                <div className="md:block md:w-auto">
                    <ul className="flex flex-row p-4">
                        <li className="text-center mr-5 ml-5 flex-1 shrink rounded border border-black transition hover:border-blue-600 hover:text-blue-600">
                            <Menu>
                                <MenuButton className="block py-2 px-3 whitespace-nowrap">
                                    Online Math
                                </MenuButton>
                                <MenuItems anchor="bottom start" transition className="w-40 origin-top-right rounded-xl border border-gray-400 bg-white p-1 mt-2 shadow-lg ring-black/5 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
                                    <MenuItem>
                                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Algebra</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Pre-calculus</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Calculus</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Linear Algebra</Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink rounded border border-black transition hover:border-blue-600 hover:text-blue-600">
                            <Link href="/math1" className="block py-2 px-3 whitespace-nowrap">Math 1</Link>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink rounded border border-black transition hover:border-blue-600 hover:text-blue-600">
                            <Link href="/team" className="block py-2 px-3">Team</Link>
                        </li>
                        <li className="text-center mr-5 ml-5 flex-1 shrink rounded border border-black transition hover:border-blue-600 hover:text-blue-600">
                            <Link href="/contact" className="block py-2 px-3">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
