import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } =  params
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")
    const items = await collection.findOneAndUpdate(
        { handle },
        { $inc: { visits: 1 } },
        { returnDocument: "after" }
    );



    if (!items) {
        return notFound();
    }

    return <div className=" cursor-default flex min-h-screen text-white bg-[#1e1f29] justify-center items-start py-10 " >
        {items &&
            <>
                <div className="absolute rounded-lg  right-10 p-3 text-sm mt-4 text-white bg-gray-800">
                    Visited {items.visits} times
                </div>
                <div className="photo gap-4 flex justify-center flex-col items-center ">

                    <img className="rounded-full" width={100} src={items.pic} alt="" />
                    <span className="font-bold text-xl">@{items.handle}</span>
                    <span className="desc w-150 text-center ">{items.desc}</span>
                    <div className="links">
                        {items.links.map((item, index) => {
                            return <Link key={index} href={item.link} target="_blank"><div className="py-4 flex justify-center shadow-lg px-2 rounded-md bg-[#171515e7] hover:bg-transparent border hover:border-gray-700 border-amber-100 my-3 min-w-96" >

                                {item.linktext}
                            </div>
                            </Link>
                        })}
                    </div>
                </div>
                <Link href={'/'}><div className="fixed bg-gray-800 p-3 rounded-lg text-white bottom-10 right-10 gap-2 flex justify-center items-center">
                    <span>Create your own handle</span>
                    <img width="20" className="invert" height="20" src="https://img.icons8.com/ios-filled/100/circled-up-right.png" alt="circled-down-left"/>
                </div>
                </Link>
                <div className="absolute w-50 bottom-3 left-3">
                    <img src="/logoo.png" alt="" />
                </div>
            </>
        }
    </div>
}