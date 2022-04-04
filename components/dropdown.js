import Link from 'next/Link'
const Dropdown = ({isOpen, toggle}) => {
    return (
        // grid grid-rows-4 text-center items-center bg-cyan-600
        <div className={` flex flex-col space-y-2 ml-7 align-middle justify-center text-left my-auto font-medium text-4xl transition-all duration-500 select-none' ${isOpen ? 'opacity-100 pointer-events-auto' : 'transition-none h-0 -translate-y-2 opacity-0 pointer-events-none'}`} onClick={toggle}>
            <Link href='/'>
                <a className='hover:text-[gray] transiton ease-linear duration-300 mr-auto'>Home</a>
            </Link>
            <Link href='/about'>
                <a className='hover:text-[gray] transiton ease-linear duration-300 mr-auto'>About</a>
            </Link>
            <Link href='/bookmarks'>
                <a className='hover:text-[gray] transiton ease-linear duration-300 mr-auto'>Bookmarks</a>
            </Link>
            <Link href='/photography'>
                <a className='hover:text-[gray] transiton ease-linear duration-300 mr-auto'>Photography</a>
            </Link>
            <Link href='/projects'>
                <a className='hover:text-[gray] transiton ease-linear duration-300 mr-auto'>Projects</a>
            </Link>
        </div>
    );
}
 
export default Dropdown;