import { clearAllListeners } from "@reduxjs/toolkit"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function BadgesAndCerts() {
    const page = useSelector(state => state.general.page)
    const [screenH, setScreenH] = useState(0)
    const [whichOne, setWhichOne] = useState(0)
    const [show, setShow] = useState(false)
    const [data, setData] = useState([[], []])

    async function getData() {
        await fetch('/api/achievements').then(res => res.json()).then(data => setData(data))
    }

    useEffect(() => {
        setScreenH(window.screen.width)
        getData()
    }, [])

    return (
        <>
            <div id="badgesAndCerts" className={`${page == 2 ? "flex" : "tablet:hidden"} tablet:pt-24 h-auto tablet:w-[52%] text-white flex-col items-center`}>
                <h2 className="text-2xl font-bold tablet:font-medium w-full">Badges and Certificates</h2>
                <p id="opening" className="leading-relaxed text-left tablet:text-base text-xs mt-3">
                    I like to do my own learning. Often by taking online courses and professional certifications. Here are the badges and certificates I have earned so far...
                </p>
                <ul className="flex gap-5 tablet:gap-10 mt-3">
                    <li className={`${whichOne == 0 ? "border-b-2 border-white border-spacing-5" : ""} cursor-pointer`} onClick={() => setWhichOne(0)}>Badges</li>
                    <li className={`${whichOne == 1 ? "border-b-2 border-white border-spacing-5" : ""} cursor-pointer`} onClick={() => setWhichOne(1)}>Certificates</li>
                </ul>
                <div className={`gap-4 mt-4 grid w-auto ${screenH < 768 ? 'grid-cols-3' : 'grid-cols-5'} overflow-clip`}>
                    {data[0].map((data, index) => (
                        <a key={index} id="badge-card" href={data.url} target="_blank" className={`${index <= 5 || show == true || screenH > 768 ? "" : "hidden"} hover:-translate-y-1 hover:drop-shadow-[0px_7px_10px_rgba(255,255,255,0.2)] bg-black transition-all ease-out duration-200 delay-[150] w-fit flex flex-col items-center cursor-pointer ${whichOne == 0 ? "" : "hidden"} `}>
                            <div className="border border-white rounded-t-md w-fit flex flex-col items-center p-2">
                                <Image className={`${data.shape == "Circle" ? "rounded-full" : ""}`} src={data.img} height={100} width={100} alt={data.name} />
                                <p className="truncate w-20 pt-2 text-xs tablet:text-base">{data.name}</p>
                                <p className="italic font-light pt-1 text-[9px] text-nowrap tablet:text-xs">Issuer: {data.issuer}</p>
                            </div>
                            <div className="w-full bg-white h-5 rounded-b-md text-gray-400 text-[9px] text-nowrap flex items-center justify-center">Provided By {data.provided_by}</div>
                        </a>
                    ))}
                    {data[1].map((data, index) => (
                        <a key={index} id="badge-card" href={data.url} target="_blank" className={`${index <= 5 || show == true || screenH > 768 ? "" : "hidden"} hover:-translate-y-1 hover:drop-shadow-[0px_7px_10px_rgba(255,255,255,0.2)] bg-black transition-all ease-out duration-200 delay-[150] w-fit flex flex-col items-center cursor-pointer ${whichOne == 1 ? "" : "hidden"} `}>
                            <div className="border border-white rounded-t-md w-fit flex flex-col items-center p-2">
                                <Image className={`${data.shape == "Circle" ? "rounded-full" : ""}`} src={data.img} height={100} width={100} alt={data.name} />
                                <p className="truncate w-20 pt-2 text-xs tablet:text-base">{data.name}</p>
                                <p className="italic font-light pt-1 text-[9px] text-nowrap tablet:text-xs">Issuer: {data.issuer}</p>
                            </div>
                            <div className="w-full bg-white h-5 rounded-b-md text-gray-400 text-[9px] text-nowrap flex items-center justify-center">Provided By {data.provided_by}</div>
                        </a>
                    ))}
                </div>
                <div className="pt-5 tablet:hidden flex items-center gap-1 w-full justify-center" onClick={() => setShow((prev) => !prev)}>
                    <div className="bg-white w-5 h-[2px]"></div>
                    <p className="text-xs">{show == false ? "Show more" : "Show less"}</p>
                    <div className="bg-white w-5 h-[2px]"></div>
                </div>
            </div >
        </>
    )
}