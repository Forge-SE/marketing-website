import Image from "next/image";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
  <main className="text-white space-y-20">
  <section className="bg-[url(/bg.png)] bg-cover bg-center h-screen flex flex-col items-center justify-center p-10">
<Navbar/>
<div className="flex flex-col justify-center items-center text-center gap-3 h-[90vh]   ">
    <h1 className="text-[5rem] font-semibold heading leading-[1.2] w-3/4">Building software that ignites growth</h1>
    <p className="font-light text-xl w-2/5">From concept to code, we craft custom software that transforms businesses. Let’s bring your vision to life.</p>
    <div className="flex gap-7 mt-10">
  <button className="bg-white text-black font-semibold text-lg px-4 py-3 rounded-xs heading">
      Get Started
    </button>
  <button className="bg-transparent text-white border border-white  font-semibold text-lg px-4 py-3 rounded-xs heading">
      Meet with an engineer
    </button>
    </div>
  
</div>
  </section>
  <section className="flex justify-center items-center p-10">
      <div className="w-1/2 flex flex-col justify-center items-start gap-5">
        <h2 className="text-5xl font-semibold heading">Innovate. Build. Scale.</h2>
        <p className="text-xl font-light text-justify w-3/4 leading-normal">
At Forge, we craft cutting-edge software solutions designed to elevate businesses worldwide. From intelligent automation to seamless user experiences, we bring ideas to life. Whether you&apos;re a startup aiming for rapid growth or an established enterprise seeking innovation, our expert team turns your vision into powerful, scalable technology
        </p>
         <button className="bg-white text-black font-semibold text-lg px-4 py-3 rounded-xs heading">
      Meet The Team
    </button>
      </div>
      <div className="">
      <Image src="/Asset.png" alt="Image" width={700} height={500} />
      </div>
  </section>
  <section className="flex flex-col justify-center items-center p-10">
      <h2 className="text-5xl font-semibold heading text-center">Elite Engineering</h2>
      <p className="text-xl font-light  w-3/4 leading-normal text-center mt-2">
        We just love  building awesome solutions for businesses. Name it.
      </p>
      <div className="flex flex-col justify-center items-center gap-20 mt-10 w-full">
        <div className="flex justify-between items-center px-10 py-5 bg-[url(/Software.svg)] bg-cover bg-center w-3/5 rounded-lg h-[35vh]">
        <div className="w-1/2 flex flex-col justify-center items-start gap-5">
        <h2 className="heading text-4xl text-black font-semibold">Software Development</h2>
        <div className="flex gap-5">
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Web</span>
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Mobile</span>
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Desktop</span>
        </div>
        <p className="text-lg font-normal text-justify w-full  text-black leading-normal">
          Scalable, high-performance applications tailored to your business needs. From powerful enterprise software to intuitive mobile apps, we bring your vision to every device
        </p>
         <button className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-xs heading">
      Get Started
    </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <Image src="/cube-group.svg" alt="Image" width={350} height={350} />
        </div>
        </div>

        <div className="flex flex-row-reverse justify-between items-center px-10 py-5 bg-[url(/Saas.svg)] bg-cover bg-center w-3/5 rounded-lg h-[35vh] ">
        <div className="w-1/2 flex flex-col justify-center items-end gap-5 text-right">
        <h2 className="heading text-4xl text-black font-semibold">SaaS Based Solutions</h2>
        <div className="flex gap-5">
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Web</span>
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Mobile</span>
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Desktop</span>
        </div>
        <p className="text-lg font-normal  w-full  text-black leading-normal text-right">
Scalable, cloud-based applications designed for flexibility and growth. Empower your business with secure, subscription-based software that evolves with your needs        </p>
         <button className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-xs heading">
      Get Started
    </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <Image src="/triangle-group.svg" alt="Image" width={350} height={350} />
        </div>
        </div>


        <div className="flex justify-between items-center px-10 py-5 bg-[url(/AI.svg)] bg-cover bg-center w-3/5 rounded-lg h-[35vh] ">
        <div className="w-1/2 flex flex-col justify-center items-start  gap-5 ">
        <h2 className="heading text-4xl text-black font-semibold">AI Powered Solutions</h2>
        <div className="flex gap-5">
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">LLMs</span>
            <span className="border border-black rounded-md px-5 py-3 text-md text-black font-bold">Agent Development</span>
        </div>
        <p className="text-lg font-normal  w-full  text-black leading-normal">
Intelligent systems that learn, adapt, and automate. Elevate your business with smart analytics, personalized user experiences, and data-driven decision-making.   </p>
      <button className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-xs heading">
      Get Started
    </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <Image src="/stair-group.svg" alt="Image" width={350} height={350} />
        </div>
        </div>
        </div>
  </section>
  </main>
  );
}
