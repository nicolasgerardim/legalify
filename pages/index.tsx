import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import About from '../components/About'
import About2 from '../components/About2'
import Prices from '../components/Prices'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>

    <div className="flex min-h-screen flex-col items-center font-body justify-center">
      <Head>
        <title>Legalify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <MainSection/>
        <Service/>
        <About/>
        <About2/>
        <Prices/>

      </main>

      <Footer/>

      <div className='fixed right-10 bottom-5'
      >
      <Image src="/whatsapp.svg" alt="whatsapp logo" height={61} width={61} />

      </div>

    </div>
    </>

  )
}

export default Home
