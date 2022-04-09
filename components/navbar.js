import Link from "next/link";
import { useRouter } from 'next/router'

const Navbar = ({toggle, isOpen}) => {
    const router = useRouter()
    return (
        <div className=' flex flex-row flex-nowrap justify-start sm:justify-around h-8 w-full py-8 items-center mt-10 sm:mb-24 select-none'>
            <div className="w-1/8 flex hover:scale-105 duration-300 ml-7 mb-7 cursor-pointer sm:hidden select-none" onClick={toggle}>
                <svg className={`w-8 h-8 ${isOpen ? 'hidden' : ''}`}  fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`w-8 h-8 ${!isOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={toggle}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg> 
            </div>
            <Link href="/"> 
                <a className="hover:text-[gray] hidden lg:block font-medium transiton ease-linear duration-300 text-sm lg:text-base w-1/5 text-center" >Nabil Chowdhury</a>
            </Link>
            <nav>
                <ul className='hidden sm:flex px-1 font-medium gap-x-1 lg:text-sm text-base flex-row h-12 mx-auto justify-center items-center bg-[#0000000A] border-solid rounded-full '>
                    <li className=''>
                        <Link href="/"> 
                            <a className=" rounded-full py-3 leading  hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/" ? "white" : ""}}>Home</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/about"> 
                            <a className="rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/about" ? "white" : ""}}>About</a>
                        </Link> 
                    </li>
                    {/* <li>
                        <Link href="/blog"> 
                            <a className=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/blog" ? "white" : ""}}>Blog</a>
                        </Link> 
                    </li> */}
                    <li>
                        <Link href="/bookmarks"> 
                            <a className=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/bookmarks" ? "white" : ""}}>Bookmarks</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/photography"> 
                            <a className=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/photography" ? "white" : ""}}>Photography</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/projects"> 
                            <a className=" rounded-full py-3 hover:text-[gray] transiton ease-linear duration-300 px-3" style={{ background : router.pathname == "/projects" ? "white" : ""}}>Projects</a>
                        </Link> 
                    </li>
                </ul>
            </nav>
            <div className='font-medium hidden lg:block  hover:text-[gray] text-sm lg:text-base transiton ease-linear duration-300 px-2 w-1/5 text-center'>
                <Link href="mailto: contact@nabil.social" className=''>
                    Contact
                </Link>
            </div>
        </div>
        
    );
}
export default Navbar;