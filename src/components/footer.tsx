"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <div className="max-w-screen-xl mx-auto bg-bk-blue-800 p-4 text-white mt-4">
            <ul className="list-none [&_li]:inline-block [&_li]:mr-5 [&_a]:text-inherit [&_a]:no-underline hover:[&_a]:underline">
                <li className="text-gray-300">&copy; 2025 Alexander Paulin</li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
