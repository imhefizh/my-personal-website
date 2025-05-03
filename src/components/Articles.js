import { useState } from "react"
import { useSelector } from "react-redux"

export default function Articles() {
    const page = useSelector(state => state.general.page)
    const [collapse, setCollapse] = useState(0)
    return (
        <>
            <div id="articles" className={`${page == 1 ? "flex" : "tablet:hidden"} tablet:pt-24 h-auto tablet:w-[52%] text-white flex-col items-center`}>
                <h2 className="text-2xl font-bold tablet:font-medium w-full">Articles</h2>
                <div className="w-full h-32 bg-white"></div>
            </div>
        </>
    )
}