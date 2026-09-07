"use client";



import React from "react";
import Image from "next/image";

export default function Home() {


  return (


    <div className="flex min-h-screen flex-col bg-background">

      <nav className="flex w-full items-center justify-between py-4 px-60 ">
          <div className="flex items-center gap-3">
            <a href="/" className="text-l g font-bold text-foreground-nav">
              FB
            </a>
            <a href="/about" className="text-lg font-bold text-foreground-nav">
              TW
            </a>
            <a href="/contact" className="text-lg font-bold text-foreground-nav">
              TK
            </a>
          </div>

         <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="text-foreground-main text-lg font-semibold">
            Software Engineer Portfolio
          </a>
        </div>

         <div>
          <a href="/" className="text-lg font-semibold text-foreground-nav">
            Home
          </a>
        </div>
      </nav>
      
    
    <div className="relative flex flex-1 items-center justify-center">
  <main className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center text-foreground-main">
    


        <div className="absolute text-right translate-x-90 -translate-y-30">
          <h1 className="whitespace-nowrap text-7xl font-bold pt-4">
            Joachim Chiong
          </h1>

          <p className="text-2xl pt-4">Web Development Made Simple</p>
          <p className="text-2xl pt-4">Efficient and Scalable Solutions</p>
        </div>




        <Image
          src="/images/goat.webp"
          alt="goat"
          width={550}
          height={550}
          className="grayscale absolute rotate-12 -translate-x-120 -translate-y-20"
        />

          <Image
          src="/images/phone.jpg"
          alt="phone"
          width={550}
          height={550}
          className="grayscale absolute rotate-12 translate-x-120 translate-y-70"
        />


      </main>

      </div>







    </div>
  );
}
