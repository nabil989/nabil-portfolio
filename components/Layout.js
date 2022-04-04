import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import React, {useState, useEffect} from 'react';
import Dropdown from "./Dropdown.js"

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
            <main className={`transition-all duration-500 ${isOpen ? ' opacity-0 h-0 transition-none ease-out ' : 'opacity-100'}`}>
                {children}
            </main>
            <Footer/> 
        </div>
    );
}
 
export default Layout;