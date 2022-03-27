import Link from "next/link";
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
        <div>
            <h1>Oops...</h1>
            <h2>That page cannot be found.</h2>
            <p class="text-3xl">
                Go back to the <Link href="/"><a class="text-[#4979ff] underline">Homepage</a></Link>
            </p> 
            
        </div>
    );
}
 
export default NotFound;