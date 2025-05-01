import { useSelector } from "react-redux"

export default function Works() {
    const page = useSelector(state => state.general.page)
    return (
        <>
            <div id="works" className={`${page == 3 ? "flex" : "hidden"} tablet:pt-24 min-h-dvh h-auto w-[52%] text-white flex-col items-center`}>
                <h2>My Works</h2>
                <h3>Not posted anything yet</h3>
            </div>
        </>
    )
}