import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const Books = () => {
    return (
        <div className='flex flex-col justify-center align-middle text-center'>
            <Head>
                <title>Books</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            <div className='space-y-4 w-full '>
                <h1 className='font-bold text-4xl'>Intriguing Books</h1>
                <p className='text-[#000000B3]'>Just a collection of books that I've read that I personally find interesting. Click on the cover to get my take on the book.</p>
            </div>
            
            <div className='grid  grid-cols-3 grid-rows-2 align-middle justify-center items-center w-1/2'>
                <div className='hover:scale-105 transition-all duration-300 '>
                    <Link href='/books/grit'>
                        <Image width='250px' height='250px' src='/../public/book_covers/grit.jpeg'/>
                    </Link>
                </div>
                <div className='hover:scale-105 transition-all duration-300 '>
                    <Link href='/books/grit'>
                        <Image width='250px' height='250px' src='/../public/book_covers/grit.jpeg'/>
                    </Link>
                </div>
                <div className='hover:scale-105 transition-all duration-300'>
                    <Link href='/books/grit'>
                        <Image width='250px' height='250px' src='/../public/book_covers/grit.jpeg'/>
                    </Link>
                </div>
                
            </div>
            
        </div>
    );
}
 
export default Books;