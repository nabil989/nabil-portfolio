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
            <a className='transform transition-all hover:scale-105 duration-300 whitespace-nowrap text-center mx-auto w-1/2 sm:w-1/3 mt-12 border border-none rounded-lg bg-[#0E0E0E] text-white font-bold py-4 '>More about me ➝</a>
          </Link>
        </div>
        <div className='flex flex-col mx-auto w-4/5 md:w-2/3 lg:w-1/2 justify-center align-middle text-center pt-12 space-y-12'>
          <h className='font-bold text-5xl '>Get in touch</h>
          <p className='text-[#000000B3] text-center text-xl lg:text-base'>I'm always interested in jumping in on new opportunities. If you have something in mind that could help me grow as a developer and/or as a person, feel free to contact me!</p>
          <Link href="mailto: nabilc377@utexas.edu" className=''>
              <div className=' flex flex-row duration-300 align-middle justify-center whitespace-nowrap text-center mx-auto w-1/3 sm:w-1/4 mt-12 border border-none rounded-lg bg-black py-4 text-white font-bold transform transition-all hover:scale-105'>
                <div className = 'mr-2 animate-wave'>👋 </div>
                <a className='mr-1 sm:mr-0'>Say hello</a>
              </div>
              
          </Link>
        </div>
      </div>
    </div>
  )
}
