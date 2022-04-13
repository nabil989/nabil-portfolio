import Link from "next/link";
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='font-semibold text-2xl'>Oops...</h1>
            <h2 className='font-semibold text-xl'>That page cannot be found.</h2>
            <p className="text-3xl">
                Go back to the <Link href="/"><a className="text-[#4979ff] underline">Homepage</a></Link>
            </p> 
            
        </div>
    );
}
 
export default NotFound;