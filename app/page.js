"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
            <p className="text-[#4B352A] text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="input flex gap-2">
              <input value={text} onChange={(e)=>settext(e.target.value)} className="px-2 py-2 focus:outline-green-800 rounded-md bg-white" type="text" placeholder="Enter Your Handle" />
              <button onClick={()=>createtree()} className="bg-[#B2CD9C] rounded-full px-4 py-4 font-semibold">Claim Your tree</button>
            </div>


        </div>
        <div className=" flex items-center flex-col justify-end mr-[10vw]">
              <img width={650} src="https://clipart-library.com/images_k/fall-tree-transparent/fall-tree-transparent-17.png" alt="" />
        </div>

      </section>

      
    </main>
  );
}
