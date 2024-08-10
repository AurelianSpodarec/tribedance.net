'use client'

import { Button } from "@/components/atoms/button"

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptionFire from "./ParticlesOptionsFire";

function IconPlay() {
  return (
    <svg viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
  )
}

function SectionHomeHero() {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="relative mb-20 overflow-hidden">

      {init &&
        <Particles
          id="tsparticles"
          className="z-10 relative"
          options={particlesOptionFire}
        />
      }
      
      {/* <div className="h-screen object-cover w-full bg-center bg-no-repeat bg-cover " style={{ "backgroundImage": "url(/images/music-studio.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50 h-full flex flex-col"></div>
        <div className="h-full table mx-auto text-center z-30 relative">
          <div className="table-cell align-middle max-w-[829px]">
            <h2 className="text-white uppercase font-bold text-3xl md:text-4xl lg:text-6xl tracking-[5px]">WE'RE ON A MISSION TO HELP YOU GROW AS A HOUSE ARTIST :))</h2>
          </div>
        </div>
        <div className="mx-auto absolute bottom-0 left-0 right-0 w-full text-center mb-4 z-30 relative top-[-65px]">
          <div className="w-6 mx-auto">
            <svg className="text-white" aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" className=""></path></svg>
          </div>
        </div>
        <div>
          <Button label="Music Demo" />
          <Button label="Music Demo" />
        </div>
      </div> */}
      <div className="relative isolate overflow-hidden">
        <img alt="" src="/images/music-studio.jpg" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50 h-full flex flex-col"></div>

        <div className="z-10 relative">


          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">Announcing our next round of funding. <a href="#" className="font-semibold text-white"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">→</span></a></div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">WE'RE ON A MISSION TO HELP YOU GROW AS A HOUSE ARTIST :))</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button label="Watch Teledysk" icon={<IconPlay />} />
                <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SectionHomeHero
