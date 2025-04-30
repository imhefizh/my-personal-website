import { useSelector } from "react-redux"

export default function About() {
    const page = useSelector(state => state.general.page)

    return (
        <>
            <div id="about" className={`${page == 0 ? "flex" : "hidden"} min-h-dvh h-auto w-full laptopL:ml-[50.5%] laptop:ml-[48.5%] text-white flex-col items-center pt-[6dvh] tablet:pt-[11dvh]`}>
                <h1 className="text-2xl">About Me</h1>
                <div className="text-left laptopL:px-20 px-10 mt  tablet:text-base text-xs mt-7">
                    <p className="text-justify">Hi!👋 Glad to know that you are interested in me. You can call me Hafidz. I&apos;m from Indonesia.</p>
                    <p className="mt-2 text-justify">
                        I&apos;m a youth who loves building clean, functional, and meaningful digital solutions. Whether it&apos;s a simple boarding house system or a full-stack web app, I enjoy turning real-life problems into smooth, tech-powered experiences.
                    </p>
                    <p className="mt-2 text-justify">
                        Most of the time, you&apos;ll find me tweaking projects, solving bugs, or experimenting with small devices like the ESP32. I love learning by doing—and yes, coffee helps a lot ☕😄

                        While I take my code seriously, I always keep the vibes relaxed. I believe good ideas often come from casual conversations and curious minds.
                    </p>
                </div>
            </div>
        </>
    )
}