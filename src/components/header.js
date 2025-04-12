"use client"

export default function Header() {
    return (
        <div className="px-16 flex justify-between text-white w-screen h-[10dvh] items-center">
            {/* Contact Us */}
            <button className="border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black cursor-pointer" onClick={() => window.location.replace('https://api.whatsapp.com/send/?phone=%2B6285789789896&text&type=phone_number&app_absent=0')}>Contact Me</button>

            {/* Humberger Menu */}
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="h-auto w-9 cursor-pointer">
                <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* The Menu */}
            <nav className="absolute"></nav>
        </div>
    )
}