
import Navbar from "@/components/Navbar";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { ArrowBigLeft, ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

 function Home() {
  return (
    <div className=" relative  w-full flex flex-col overflow-hidden">
       
    {/* <Navbar/> */}
    <div className="h-[40rem] mt-12 w-full rounded-md flex flex-col justify-center md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
    
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Unlock the Power of Social Proof: <br /> Capture Testimonials That Convert!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>

        
      </div>
      <button className="relative inline-flex mt-10 h-12 md:h-[4.5rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <Link href={"/dashboard"} className="inline-flex h-full w-full px-2 md:px-8 cursor-pointer items-center justify-center rounded-full bg-slate-950 py-4 text-lg font-medium text-white backdrop-blur-3xl">
         Go To Dashboard 
<ArrowRight className="ml-2"/>
        </Link>
      </button>
      {/* <ShimmerButton >Get Started </ShimmerButton> */}
    </div>
    </div>
  );
}

export default Home
