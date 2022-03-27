import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Navbar = () => {
    const router = useRouter()
    // useEffect(() => {
    //     switch(router.pathname){
    //         case "/":
    //             document.getElementById("home").style.background = 'green'
    //             break;
    //         default:
    //             break;

    //     }
    // })
    // let bgcolor = router.pathname === '/' ? 'bg-red-200' : 'bg-blue-200';
    // let styleD = 'inline-block mr-4 ml-4  rounded-full  w-1/4 items-center text-center'
    console.log(router.pathname)

    return (
        // <nav class="hidden sm:flex  flex-row font-bold border-solid  border-2 justify-center  py-4 items-center">
        //     <Link href="/"> 
        //         <a class="mr-60 hover:text-[gray] transiton ease-linear duration-300">Nabil Chowdhury</a>
        //     </Link>
        //     <div class="border-solid rounded-full border bg-[#0000000A] mr-80 flex items-center py-2">
        //         <span class='inline-block mr-4 ml-4  rounded-full  w-1/4 items-center text-center' style={{ background : router.pathname == "/" ? "red" : ""}}>
        //             <Link href="/">
        //                 <a class=" mx-2 mt-4 mb-40 hover:text-[gray] transiton ease-linear duration-300 items-center">Home</a>
        //             </Link>
        //         </span>
        //         <span class='inline-block mr-4 ml-4  rounded-full  w-1/4 items-center text-center' style={{ background : router.pathname == "/about" ? "red" : ""}}>
        //             <Link href="/about"> 
        //                 <a class=" mx-2 mt-4 mb-40 hover:text-[gray] transiton ease-linear duration-300">About</a>
        //             </Link>
        //         </span>
        //         <span class='inline-block mr-4 ml-4  rounded-full  w-1/4 items-center text-center' style={{ background : router.pathname == "/blog" ? "red" : ""}}>
        //             <Link href="/blog">
        //                 <a class='mx-2 mt-4 mb-40 hover:text-[gray] transiton ease-linear duration-300'>Blog</a>
        //             </Link>
        //         </span>
        //         <span class='inline-block mr-4 ml-4  rounded-full  w-1/4 items-center text-center' style={{ background : router.pathname == "/photography" ? "red" : ""}}>
        //             <Link href="/photography">
        //                 <a class=' ml-2 mr-12 mt-4 mb-40 hover:text-[gray] transiton ease-linear duration-300'>Photography</a>
        //             </Link>
        //         </span>
        //     </div>
        // </nav>


        <div class=' flex flex-row flex-nowrap justify-around h-8 w-full py-8 items-center mt-10 mb-24'>
            <Link href="/"> 
                <a class="hover:text-[gray]  font-medium transiton ease-linear duration-300 text-sm md:text-base w-1/5 text-center" >Nabil Chowdhury</a>
            </Link>
            <nav class=''>
                <ul class=' flex px-1 font-medium gap-x-1 text-sm flex-row h-12 mx-auto justify-center items-center bg-[#0000000A] border-solid rounded-full '>
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
            <div class='font-medium hover:text-[gray] transiton ease-linear duration-300 px-2 w-1/5 text-center' >Contact</div>
        </div>
        
    );
}
export default Navbar;