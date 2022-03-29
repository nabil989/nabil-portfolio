import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div class=' flex flex-row flex-nowrap justify-start sm:justify-around h-8 w-full py-8 items-center mt-10 mb-24'>
            <div className="w-1/8 flex hover:scale-105 duration-300 ml-7 mb-7 cursor-pointer sm:hidden" >
                <svg className="w-8 h-8" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>   
            </div>
            <Link href="/"> 
                <a class="hover:text-[gray] hidden md:block font-medium transiton ease-linear duration-300 text-sm md:text-base w-1/5 text-center" >Nabil Chowdhury</a>
            </Link>
            <nav>
                <ul class='hidden sm:flex px-1 font-medium gap-x-1 lg:text-sm text-base flex-row h-12 mx-auto justify-center items-center bg-[#0000000A] border-solid rounded-full '>
                    <li class=''>
                        <Link href="/"> 
                            <a class=" rounded-full py-3 leading  hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/" ? "white" : ""}}>Home</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/about"> 
                            <a class="rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/about" ? "white" : ""}}>About</a>
                        </Link> 
                    </li>
                    {/* <li>
                        <Link href="/blog"> 
                            <a class=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/blog" ? "white" : ""}}>Blog</a>
                        </Link> 
                    </li> */}
                    <li>
                        <Link href="/bookmarks"> 
                            <a class=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/bookmarks" ? "white" : ""}}>Bookmarks</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/photography"> 
                            <a class=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/photography" ? "white" : ""}}>Photography</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/projects"> 
                            <a class=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/projects" ? "white" : ""}}>Projects</a>
                        </Link> 
                    </li>
                </ul>
            </nav>
            <div class='font-medium hidden md:block  hover:text-[gray] transiton ease-linear duration-300 px-2 w-1/5 text-center'>
                <Link href="mailto: nabilc377@utexas.edu" class=''>
                    Contact
                </Link>
            </div>
        </div>
        
    );
}
export default Navbar;