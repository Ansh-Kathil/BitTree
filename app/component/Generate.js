"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Minus } from 'lucide-react';

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
    const removelink = () => {
        if(links.length>1){
            const newlinks = links.slice(0,-1);
            setlinks(newlinks);
        }
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
        <div className='flex w-full justify-center items-center bg-[#F0F2BD]  min-h-screen'>
            <div className='flex bg-[#cecca65d] relative top-15 justify-center rounded-lg items-center p-5 flex-col text-[#4B352A]'>
                <h1 className='font-bold mb-5 text-4xl'>Create Your BitTree</h1>
                <div className='flex items-center gap-10'>
                    <div className=' w-1/2 flex flex-col gap-3 p-3'>
                        <div className="item flex flex-col ">
                            <h2 className='font-semibold text-2xl'>Step 1: Enter your Handle</h2>
                            <div className="ml-20">
                                <input value={handle || ""} onChange={e => sethandle(e.target.value)} className='px-4 my-2 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-lg  ' type="text" placeholder='Choose a handle' />
                            </div>
                        </div>
                        <div className="item flex flex-col">
                            <h2 className='font-semibold text-2xl'>Step 2: Add Picture and Description</h2>
                            <div className="ml-20 flex flex-col">
                                <input value={pic || ""} onChange={e => setpic(e.target.value)} className='my-2 px-4 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-lg ' type="text" placeholder='Enter link of your pic' />
                                <input value={desc || ""} onChange={e => setdesc(e.target.value)} className='my-2   px-4 bg-white py-2 text-[#4B352A] focus:outline-[#688ed4] rounded-lg ' type="text" placeholder='Enter Your description' />
                            </div>
                        </div>
                    </div>
                    <hr className='  bg-white' />
                    <div className=' w-1/2 flex flex-col gap-3 m-3 p-3'>
                            <h2 className='font-semibold text-2xl mb-2'>Step 3: Add your Links</h2>
                        <div className={` ${links.length> 2 ? "overflow-y-scroll": ''} bg-[#eeeff07d]  custom-scroll item flex flex-col  h-45 rounded-lg p-2`}>
                            {links.map((item, index) => (
                                <div key={index} className="flex mx-2">
                                    <input
                                        value={item.linktext}
                                        onChange={e => handlechange(index, item.link, e.target.value)}
                                        className='my-2 mx-2 px-4 bg-white text-[#4B352A] py-2 focus:outline-[#688ed4] rounded-lg w-1/2'
                                        type="text"
                                        placeholder='Enter Platform name'
                                    />
                                    <input
                                        value={item.link}
                                        onChange={e => handlechange(index, e.target.value, item.linktext)}
                                        className='my-2 mx-2 px-4 bg-white text-[#4B352A] py-2 focus:outline-[#688ed4] rounded-lg w-1/2'
                                        type="text"
                                        placeholder='Enter link'
                                    />
                                </div>
                            ))}
                        </div>
                        <div onClick={removelink} className='flex items-center justify-center hover:bg-slate-500 bg-slate-400 w-10 rounded-lg self-end mr-5 '>
                        <Minus />
                        </div>
                        <button onClick={addLink} className='py-2 px-5 select-none rounded-full bg-slate-900 w-1/3 justify-center  text-white font-bold'>
                            +Add Link
                        </button>
                    </div>

                </div>
                <button disabled={ links.some(link => link.link === "" || link.linktext === "") || pic == "" || handle == "" } onClick={() => { submitlink() }} className='py-2 select-none mt-10 my-5 disabled:bg-slate-500 w-[190px] px-5 mx-2 rounded-full bg-slate-900 text-white font-bold  '>{!isloading ? "Create your Bitlink" : "Loading..."} </button>
            </div>
        </div>
    </>
    )
}

export default Generate
