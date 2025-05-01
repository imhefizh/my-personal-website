import { useSelector } from "react-redux"

export default function BadgesAndCerts() {
    const page = useSelector(state => state.general.page)
    return (
        <>
            <div id="badgesAndCerts" className={`${page == 2 ? "flex" : "hidden"} tablet:pt-24 min-h-dvh h-auto w-[52%] text-white flex-col items-center`}>
                <h2>Badges and Certificates</h2>
                <h3>Not posted anything yet</h3>
            </div>
        </>
    )
}