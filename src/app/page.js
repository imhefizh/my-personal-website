'use client'
import Header from "@/components/header";
import Showcases from "@/components/showcases";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [navBack, setNavBack] = useState({
    position: 0,
    width: 0,
    index: 0
  })

  const [count, setCount] = useState(100)

  return (
    <>
      <header className="fixed z-50 top-0">
        <Header />
      </header>

      {/* Content */}
      <main className="w-full flex flex-col items-center justify-start relative z-20">
        {/* Hero */}
        <div className="w-screen h-[70dvh] pt-[0dvh] flex items-center px-[9%]">
          <div className="text-white">
            <h1 className="font-bold text-[6vw] -mb-7">PORTFOLIO</h1>
            <h2 className="font-light ml-1 text-xl tracking-wider">Maulana Hafidz Ismail</h2>
          </div>
          <div className="text-white w-screen flex justify-end">
            <p>Lets build something big</p>
          </div>
        </div>
        {/* End of Hero */}

        {/* List Of Portfolio */}
        <ul className="border-b px-[15%] border-white  text-white flex w-screen justify-around text-lg items-center h-[3.8dvh]">
          <li className={`relative z-10 cursor-pointer h-full ${navBack.index == 1 ? 'text-black' : ''}`} id="Website" onClick={() => { setNavBack({ position: document.getElementById('Website').getBoundingClientRect().left, width: document.getElementById('Website').getBoundingClientRect().width, index: 1 }) }}>Website</li>
          <li className={`relative z-10 cursor-pointer h-full ${navBack.index == 2 ? 'text-black' : ''}`} id="Modelling" onClick={() => { setNavBack({ position: document.getElementById('Modelling').getBoundingClientRect().left, width: document.getElementById('Modelling').getBoundingClientRect().width, index: 2 }) }}>3D Modelling</li>
          <li className={`relative z-10 cursor-pointer h-full ${navBack.index == 3 ? 'text-black' : ''}`} id="AI" onClick={() => { setNavBack({ position: document.getElementById('AI').getBoundingClientRect().left, width: document.getElementById('AI').getBoundingClientRect().width, index: 3 }) }}>Artificial Intelligence</li>
          <li className={`relative z-10 cursor-pointer h-full ${navBack.index == 4 ? 'text-black' : ''}`} id="PhotoG" onClick={() => { setNavBack({ position: document.getElementById('PhotoG').getBoundingClientRect().left, width: document.getElementById('PhotoG').getBoundingClientRect().width, index: 4 }) }}>Photography</li>
          <div style={{ width: navBack.width + 40, left: navBack.position - 20 }} className={`${navBack.index == 0 ? "hidden" : ''} absolute bg-white h-[3.8dvh] rounded-t-lg z-0`}></div>
        </ul>
        {/* End of The List */}
        <Showcases />
      </main>
      {/* End of Content */}

      {/* Background */}
      <div className="absolute h-screen bg-gradient-to-b from-transparent from-0% to-black w-screen top-0 z-10"></div>
      <div className="absolute z-0 top-0 ">
        <div className="absolute z-20 bg-black h-screen w-screen opacity-70"></div>
        <div className="absolute z-10 bg-silver h-screen w-screen mix-blend-difference"></div>
        <Image src='/brown-fur-close-up-detail.jpg' alt="Overlay" width={1000} height={1000} className="h-screen object-cover w-screen top-0" />
      </div>
      {/* End of Background */}

    </>
  );
}
