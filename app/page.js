// pages/index.js
"use client"
import Head from 'next/head';
import ThemeToggle from '@/app/components/ThemeToggle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';


const Home = () => {
  const router = useRouter()
  const handleget = () => {
    router.push('/getstarted')
  }
  return (
    <>
      <Header />
      <div className="light-mode pt-20">
        <section style={{ textAlign: 'center', padding: '50px 0' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Welcome to VisitorPro</h2>
          <p>Streamline your visitor management process with our cutting-edge system.</p>
          <button onClick={handleget} href="#" className="m-4  professional-button"><span class="button-text">Get Started</span>
            <span class="button-icon">→</span></button>
        </section>
        <section id="features" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '300px' }}>
            <Image className="mx-auto" src="/im1.svg" height={100} width={100} priority />
            <h3>Easy Check-In</h3>
            <p>Quick and efficient visitor registration process.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '300px' }}>
            <Image className="mx-auto" src="/im2.svg" height={100} width={100} priority />
            <h3>Real-time Notifications</h3>
            <p>Instant alerts for host when visitors arrive.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '300px' }}>
            <Image className="mx-auto" src="/im3.svg" height={100} width={100} priority />
            <h3>Reporting & Analytics</h3>
            <p>Comprehensive insights into visitor traffic.</p>
          </div>
        </section>
      </div>
      <div className="p-4 text-2xl font-bold text-center">Our clients:</div>
      <div class="display-bar">
        <div class="marquee">
          <span ><Image src="/sc1.png" height={800} width={100} priority /></span>
          <span ><Image src="/sc2.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc3.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc4.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc5.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc6.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc8.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc9.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc10.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc11.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc15.png" height={100} width={100} priority /></span>
          <span ><Image src="/sc16.png" height={100} width={100} priority /></span>
        </div>
      </div>
    </>
  );
};

export default Home;
