import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'


export default function Home() {
  return (
  <>
    <Head>
      <title> Nabil | Home</title>
    </Head>
    <div class ='flex flex-col items-center justify-center mx-auto space-y-14 '>
      <div class='justify-center text-center space-y-4'>
        <Image src="/croppednabil.png" width={144} height={144}/>
        <h1 class='font-bold text-5xl '>Nabil Chowdhury</h1>
        <p class='text-[#00000099] text-3xl font-semibold'>I code sometimes.</p>
      </div>
      <div class=''>

      </div>
    </div>
  </>
   
  )
}
