import { useState } from "react"
import { useSelector } from "react-redux"

export default function Articles() {
    const page = useSelector(state => state.general.page)
    const [collapse, setCollapse] = useState(0)
    return (
        <>
            <div id="articles" className={`${page == 1 ? "flex" : "hidden"} tablet:pt-24 min-h-dvh h-auto min-w-[52%] text-white flex-col items-center`}>
                <h2>Articles</h2>
                <div className="w-full h-32 bg-white"></div>
            </div>
        </>
    )
}