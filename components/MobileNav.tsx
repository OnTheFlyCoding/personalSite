'use client';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name:'home',
        path:'/',
    },
    {
        name:'work',
        path:'/work',
    },
    {
        name:'services',
        path:'/services',
    },
    { 
        name:'resume',
        path:'/resume',
    },
    {
        name:'contact',
        path:'/contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px ] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="mt-32 mb-48 text-center text-2xl">
                    <Link
                    href={'/'}>
                    <h1 className="text-4xl font-semibold">Giovanni<span className="text-accent">.</span></h1>
                    </Link>
                </SheetTitle>
                <nav className="flex flex-col items-center justify-center gap-8">
                {links.map((link,i) =>(
                
                <Link 
                href={link.path}
                key={i}
                className={`${link.path === pathname && 'text-accent border-b-2 border-accent '} text-xl capitalize hover:text-accent transition-all`}>
                    {link.name}
                </Link>

            ))}
                </nav>
   
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav