"use client";
import React, { useState } from "react";
import ShimmerButton from "./ui/ShimmerButton";

import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <nav className="flex px-[140px] py-8 items-center justify-between">
        <span className="font-semibold text-3xl bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">Testimonials.IO</span>

        <div className="flex gap-4 items-center">
          
          <Link href={"/signup"}>
          <ShimmerButton>Signin</ShimmerButton>
          </Link>
          
          </div>
      </nav>
    );
  }
  export default Navbar
 