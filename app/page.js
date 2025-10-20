"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github } from 'lucide-react';
import Link from "next/link";

export default function Home() {

  const router = useRouter()
  const [text, settext] = useState("")
  const createtree = () => {
   
    router.push(`/generate?handle=${text}`)
  }
  
  return (
    <main>
      <section className="bg-[#F0F2BD]  min-h-[100vh] grid grid-cols-2">
        <div className=" flex items-center flex-col justify-center ml-[10vw] gap-4">
            <p className="text-[#4B352A] font-bold text-5xl">Everything you are. In one, simple link in bio.</p>
            <p className="text-[#4B352A] text-xl">BitTree is a simple, no-nonsense alternative to cluttered bio links. Create one clean page to share all your socials, projects, and content — without the bloat. Perfect for anyone who wants a fast, minimal, and personal way to connect everything they do.</p>
            <div className="input flex gap-4">
              <input value={text} onChange={(e)=>settext(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md bg-white" type="text" placeholder="Enter Your Handle" />
              <button onClick={()=>createtree()} className="bg-[#B2CD9C]  p-3 rounded-lg text-black ">Claim Your tree</button>
            </div>
        </div>
        
        <div className=" flex items-center flex-col justify-end mr-[10vw]">
              <img width={650} src="https://clipart-library.com/images_k/fall-tree-transparent/fall-tree-transparent-17.png" alt="" />
        </div>
        <Link target="_blank" href={"https://github.com/Ansh-Kathil/BitTree"} className="absolute bottom-5 right-10  bg-slate-800 p-2 cursor-pointer rounded-md ">
          <Github className="invert"/>
        </Link>

      </section>
    </main>
  );
}
