import Footer from "./Footer";
import Navbar from "./Navbar";
import React, {useState, useEffect} from 'react';
import Dropdown from "./Dropdown"

const Layout = ({ children }) => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    useEffect(() => {
        const hideMenu = () => {
            if(window.innerWidth > 639 && isOpen){
                setOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })
    return ( 
        <div>
            <Navbar toggle={toggle} isOpen={isOpen}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            
            <main class={`transition-all duration-500 ${isOpen ? ' opacity-0 h-0 hidden' : 'opacity-100'}`}>{children}</main>
            <Footer/> 
        </div>
    );
}
 
export default Layout;