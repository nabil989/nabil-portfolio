import Footer from "./footer";
import Navbar from "./navbar";
import React, {useState, useEffect} from 'react';
import Dropdown from "./dropdown"

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
            <div className={`${!isOpen ? 'hidden h-0' : ''}`}>
                <Footer toggle={toggle}/> 
            </div>
            <main className={`transition-all duration-500 ${isOpen ? 'overflow-hidden opacity-0 h-0 transition-none ease-out ' : 'opacity-100'}`}>
                {children}
            </main>
            <div className={`${isOpen ? 'hidden h-0' : ''}`}>
                <Footer/> 
            </div>
        </div>
    );
}
 
export default Layout;