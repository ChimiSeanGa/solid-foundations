import Image from "next/image";
import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    Dropdown,
    DropdownItem,
} from "flowbite-react";

export default function CustomNavbar() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="/">
                <Image
                    src="/solid_foundations_logo.png"
                    alt="Solid Foundations logo"
                    width={300}
                    height={75}
                />
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="transition-all duration-300 ease-in-out data-[flowbite-navbar-toggle]:opacity-0">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<span className="block py-2 px-3 whitespace-nowrap transition hover:text-blue-600">
                        Online Math
                    </span>}
                >
                    <DropdownItem>
                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Algebra</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Pre-calculus</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Calculus</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/online-math" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 transition hover:text-blue-600">Linear Algebra</Link>
                    </DropdownItem>
                </Dropdown>
                <Link className="block py-2 px-3 whitespace-nowrap transition hover:text-blue-600" href="/math1">Math 1</Link>
                <Link className="block py-2 px-3 whitespace-nowrap transition hover:text-blue-600" href="/team">Team</Link>
                <Link className="block py-2 px-3 whitespace-nowrap transition hover:text-blue-600" href="/contact">Contact</Link>
            </NavbarCollapse>
        </Navbar>
    )
}