import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nabil Chowdhury</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <div className ='flex flex-col items-center justify-center mx-auto space-y-14 '>
        <div className='justify-center text-center space-y-6 mx-auto '>
          <Image src="/croppednabil.png" width={144} height={144}/>
          <h1 className='font-bold text-6xl '>Nabil Chowdhury</h1>
          <p className='text-[#00000099] text-3xl font-medium pt-2'>Aspiring Software Engineer</p>
        </div>
        <div className=' flex flex-col space-y-12 mx-auto w-4/5 md:w-2/3 lg:w-1/2 justify-center align-middle'> 
          <p className='text-nowrap text-[#000000B3] text-center text-xl lg:text-base'>I am currently a Freshmen studying Computer Science at the University of Texas at Austin. I like to build apps in my free time just to mess around.</p>
          <Link href="/about">
            <a className='transform transition-all hover:scale-105 duration-300 whitespace-nowrap text-center mx-auto w-3/5  sm:w-1/3 mt-12 border border-none rounded-lg bg-[#0E0E0E] text-white font-bold py-4 '>More about me ➝</a>
          </Link>
        </div>
        <div className='flex flex-col mx-auto w-4/5 md:w-2/3 lg:w-1/2 justify-center align-middle text-center pt-12 space-y-8'>
          <h className='font-bold text-5xl '>Get in touch</h>
          <p className='text-[#000000B3] text-center text-xl lg:text-base'>I'm always interested in jumping in on new opportunities. If you have something in mind that could help me grow as a developer and/or as a person, feel free to contact me!</p>
          <div className='flex flex-col sm:flex-row items-center align-middle justify-center  sm:space-y-0 space-y-8 sm:space-x-8'>
            <Link href="mailto: contact@nabil.social" className=''>
              <div className='hover:cursor-pointer flex flex-row duration-300 align-middle justify-center whitespace-nowrap text-center w-3/5 sm:w-2/5 md:w-1/3   border border-none rounded-lg bg-black py-4 text-white font-bold transform transition-all hover:scale-105'>
                <div className = 'mr-2 animate-wave'>👋 </div>
                <a className=' '>Say hello</a>
              </div> 
            </Link>
            <Link href='https://calendly.com/nabilchowdhury/intro'>
              <div className='hover:cursor-pointer duration-300 align-middle justify-center whitespace-nowrap text-center  w-3/5 sm:w-2/5 md:w-1/3   text-black  border border-none rounded-lg bg-[#f5f6fa] hover:bg-black py-4 hover:text-white font-bold transform transition-all hover:scale-105'>
                <p className=''>Schedule a meeting</p>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
