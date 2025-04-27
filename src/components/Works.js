import { useSelector } from "react-redux"

export default function Works() {
    const page = useSelector(state => state.general.page)
    return (
        <>
            <div id="works" className={`${page == 3 ? "flex" : "hidden"} min-h-dvh h-auto w-full laptopL:ml-[50.5%] laptop:ml-[48.5%] text-white flex-col items-center justify-center`}>
                <h2>My Works</h2>
                <h3>Not posted anything yet</h3>
            </div>
        </>
    )
}