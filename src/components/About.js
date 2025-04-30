import { useState } from "react"
import { useSelector } from "react-redux"

export default function About() {
    const page = useSelector(state => state.general.page)
    const [collapse, setCollapse] = useState(0)

    return (
        <>
            <div id="about" className={`${page == 0 ? "flex" : "hidden"} min-h-dvh h-auto w-full laptopL:ml-[50.5%] laptop:ml-[48.5%] text-white flex-col items-center pt-[6dvh] tablet:pt-[11dvh] px-10 tablet:px-0`}>
                <h1 id="page-title" className="text-2xl">About Me</h1>
                <div id="content" className="text-left laptopL:px-20 tablet:text-base text-xs mt-7">
                    <p id="opening" className="text-justify">
                        Everyone like to read less and get the point straightly. So I&apos;ll make this page with several questions that help you to know me. Here we go...
                    </p>
                    {/* Questions */}
                    <ol>
                        <li id="point" className="mt-5 select-none" onClick={() => setCollapse(collapse != 1 ? 1 : 0)}>
                            <div className="flex gap-2 items-center justify-between tablet:px-20">
                                <h3 className="cursor-pointer text-nowrap text-base tablet:text-lg">
                                    Who are you?
                                </h3>
                                {/* <div className="bg-white w-full h-[2px]"></div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-auto w-6 shrink-0 ${collapse == 1 ? "rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <p className={`${collapse == 1 ? "block" : "hidden"} my-4 text-justify tablet:text-base text-xs border-b border-white pb-3`}>I am Maulana Hafidz Ismail. Everyone knows me as Hafidz, 21 years old of life made me being a curious person.</p>
                        </li>

                        <li id="point" className="mt-2 select-none" onClick={() => setCollapse(collapse != 2 ? 2 : 0)}>
                            <div className="flex gap-2 items-center justify-between tablet:px-20">
                                <h3 className="cursor-pointer text-nowrap text-base tablet:text-lg">
                                    What are you interested to?
                                </h3>
                                {/* <div className="bg-white w-full h-[2px]"></div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-auto w-6 shrink-0 ${collapse == 2 ? "rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <p className={`${collapse == 2 ? "block" : "hidden"} my-4 text-justify tablet:text-base text-xs border-b border-white pb-3`}>Digital world, computer, any technologies, are always look like an awesome magic for me. If our anchestor had magic spell and magic book to teleport, to cure people, and make everyone life easier, today we have advance technologies for doing those things! And much more efficient because everyone can use it easily.</p>
                        </li>

                        <li id="point" className="mt-2 select-none" onClick={() => setCollapse(collapse != 3 ? 3 : 0)}>
                            <div className="flex gap-2 items-center justify-between tablet:px-20">
                                <h3 className="cursor-pointer text-nowrap text-base tablet:text-lg">
                                    Any dream for life? Any vision?
                                </h3>
                                {/* <div className="bg-white w-full h-[2px]"></div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-auto w-6 shrink-0 ${collapse == 3 ? "rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <p className={`${collapse == 3 ? "block" : "hidden"} my-4 text-justify tablet:text-base text-xs border-b border-white pb-3`}>I am dreaming about better life for everyone. I got news that some people using their capability to make other&apos;s life worse, even some people in goverment, I want fight them one day later, for now I just need to learn more and make some money to get into next step.</p>
                        </li>

                        <li id="point" className="mt-2 select-none" onClick={() => setCollapse(collapse != 4 ? 4 : 0)}>
                            <div className="flex gap-2 items-center justify-between tablet:px-20">
                                <h3 className="cursor-pointer text-nowrap text-base tablet:text-lg">
                                    What you want to be?
                                </h3>
                                {/* <div className="bg-white w-full h-[2px]"></div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-auto w-6 shrink-0 ${collapse == 4 ? "rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <p className={`${collapse == 4 ? "block" : "hidden"} my-4 text-justify tablet:text-base text-xs border-b border-white pb-3`}>I want to be a great visionary person, just like every visionary people on earth that bring a solution for everyone problems.</p>
                        </li>

                        <li id="point" className="mt-2 select-none" onClick={() => setCollapse(collapse != 5 ? 5 : 0)}>
                            <div className="flex gap-2 items-center justify-between tablet:px-20">
                                <h3 className="cursor-pointer text-nowrap text-base tablet:text-lg">
                                    Do your have any Role Model?
                                </h3>
                                {/* <div className="bg-white w-full h-[2px]"></div> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-auto w-6 shrink-0 ${collapse == 5 ? "rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <p className={`${collapse == 5 ? "block" : "hidden"} my-4 text-justify tablet:text-base text-xs border-b border-white pb-3`}>For my career, I am inspired by Tony Stark, Linus Torvalds, and Steve Jobs. For being human, it is always Prophet Muhammad SAW.</p>
                        </li>
                    </ol>
                    {/* Experienced With */}
                    <p id="mid" className="text-justify mt-5">
                        My mind always starts with &quot;How if..&quot; when facing a problem, and to get the answer I have to make my insights wider and gain more experiences. I know it is still a few, but here is what am I experienced with
                    </p>
                </div>
            </div>
        </>
    )
}