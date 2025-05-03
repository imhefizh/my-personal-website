import { useSelector } from "react-redux"

export default function Works() {
    const page = useSelector(state => state.general.page)
    return (
        <>
            <div id="works" className={`${page == 3 ? "flex" : "tablet:hidden"} tablet:pt-24 h-auto tablet:w-[52%] text-white flex-col items-center`}>
                <h2 className="text-2xl font-bold tablet:font-medium w-full">My Works</h2>
                <div className="w-full h-32 bg-white"></div>
            </div>
        </>
    )
}