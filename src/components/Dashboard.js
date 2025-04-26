export default function Dashboard() {
    return (
        <>
            <div className="px-20 h-screen text-white w-[40%] fixed flex flex-col items-center justify-center">
                <div className="flex flex-col w-full">
                    <p>My name is</p>
                    <h1 className="text-4xl font-semibold">Maulana Hafidz Ismail</h1>
                    <div className="mt-3">
                        <p>Roles:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                Fullstack Web Developer
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                Graphic Designer
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                Software Engineer (Soon)
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                3D Modeller (Soon)
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                AI Developer (Soon)
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                Digital Marketing S. (Soon)
                            </h2>
                            <h2 className="text-black bg-white rounded-full w-fit px-2">
                                Indonesia&apos;s Tony Stark (Soon)
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-15">
                    <p>Hi!👋 Glad to know that you are interested in me. You can call me Hafidz. I&apos;m from Indonesia.</p>
                    <p className="mt-5">Feel free to look around my personal website to get to know me better. Who knows, maybe one day you&apos;ll need my help! This website will serve as a gallery of my works and skills, where I&apos;ll showcase everything I create.</p>

                    {/* List of Content */}
                    <ul className="mt-15">
                        <li className="hover:font-bold py-1 w-fit cursor-pointer">About</li>
                        <li className="hover:font-bold py-1 w-fit cursor-pointer">Articles</li>
                        <li className="hover:font-bold py-1 w-fit cursor-pointer">Badges & Certs</li>
                        <li className="hover:font-bold py-1 w-fit cursor-pointer">Works</li>
                    </ul>

                    {/* Contact Person */}
                    <p className="mt-20">If you have suggestion or anything else for me, you can contact me with these</p>
                    <div className="flex gap-3 w-fit mt-5">
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="800"
                                height="800"
                                viewBox="0 0 1920 1920"
                                className="h-auto w-5 fill-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441zM1919.932 226v52.627l-959.943 832.44L.045 278.628V226z"
                                ></path>
                            </svg>
                            <p>hafidzsml@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="800"
                                height="800"
                                viewBox="0 0 16 16"
                                className="h-auto w-5 fill-white"
                            >
                                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.1 5.1 0 0 1-1.49-.92 5.3 5.3 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.4 1.4 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.6 3.6 0 0 0 5 8.2 8.3 8.3 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.5 2.5 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21"></path>
                                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72M8 14.12a6.1 6.1 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12"></path>
                            </svg>
                            <p>+62 822 8240 1868</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}