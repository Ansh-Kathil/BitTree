"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchparams = useSearchParams()
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [desc, setdesc] = useState("")
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState('')
    const [isloading, setisloading] = useState(false);
    const handlechange = (index, link, linktext) => {
        setlinks((initiallinks) => {
            return initiallinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })

        })
    }
    useEffect(() => {
        const handleValue = searchparams.get('handle') || "";
        sethandle(handleValue);
    }, [searchparams]);

    const addLink = () => {
        setlinks(links.concat([{ link: "", linktext: "" }]))
    }



    const submitlink = async (text, link) => {
        setisloading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc,
            "visits": 0
        });
        console.log(raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
    const r = await fetch('/api/generate', requestOptions);
    const text = await r.text(); // safer than .json()
    const result = text ? JSON.parse(text) : {};

    if (result.success) {
      toast.success(result.message || "Bitlink created!");
      setlinks([{ link: "", linktext: "" }]);
      setpic("");
      sethandle("");
      setisloading(false);
    } else {
      toast.error(result.message || "Something went wrong");
      setisloading(false);
    }
  } catch (error) {
    console.error("Submit error:", error);
    toast.error("Failed to submit. Please try again.");
    setisloading(false);
  }
  
    }

    return (<><ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
        <div className='bg-[#4B352A] min-h-screen grid grid-cols-2'>
            <div className='col1 flex justify-center items-center flex-col text-[#F0F2BD]'>
                <div className='flex flex-col gap-5 my-8 mt-35 '>
                    <h1 className='font-bold text-4xl'>Create Your Bittree</h1>
                    <div className="item">

                        <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => sethandle(e.target.value)} className='px-4 my-2 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-full ' type="text" placeholder='Choose a handle' />
                        </div>
                    </div>
                    <div className="item">

                        <h2 className='font-semibold text-2xl'>Step 2: Add your Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className="mx-4">

                                <input value={item.linktext || ""} onChange={e => handlechange(index, item.link, e.target.value)} className='my-2 mx-2 px-4 bg-white text-[#4B352A] py-2 focus:outline-[#688ed4] rounded-full ' type="text" placeholder='Enter link text ' />
                                <input value={item.link || ""} onChange={e => handlechange(index, e.target.value, item.linktext)} className='my-2 mx-2 px-4 bg-white text-[#4B352A] py-2 focus:outline-[#688ed4] rounded-full ' type="text" placeholder='Enter link ' />
                            </div>
                        })}
                        <button onClick={() => addLink()} className='py-2 px-5 mx-2 rounded-full bg-slate-900 text-white font-bold  '> +Add Link</button>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={pic || ""} onChange={e => setpic(e.target.value)} className='my-2  mx-2 px-4 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-full ' type="text" placeholder='Enter link of your pic' />
                            <input value={desc || ""} onChange={e => setdesc(e.target.value)} className='my-2  mx-2 px-4 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-full ' type="text" placeholder='Enter Your description' />
                            <button disabled={links[0].link == "" || pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitlink() }} className='py-2 my-5 disabled:bg-slate-500 w-fit px-5 mx-2 rounded-full bg-slate-900 text-white font-bold  '>{!isloading ?  "Create your Bitlink"  : "Loading..." } </button>
                        </div>

                    </div>


                </div>
            </div>

            <div className='col2 flex items-center h-screen bg-[#4B352A]'>
                <img className=' object-contain border-2 ' width={700} src="https://linktr.ee/og/image/handlemusic.jpg" alt="" />
            </div>

        </div>
    </>
    )
}

export default Generate
