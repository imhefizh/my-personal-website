import { readAchievement, insertOneAch, insertMany } from "@/db/mongo";

export async function GET(request) {
    try {
        let data = await readAchievement()

        let badges = []
        const certs = []
        for (let x in data) {
            if (data[x].type == "Badges") {
                badges.push(data[x])
            } else {
                certs.push(data[x])
            }
        }
        data = [badges, certs]
        // console.log(data)
        return Response.json(data)
    } catch (e) {
        console.log(e)
        return new Response("Gagal mengambil data", { status: 200 })
    }
}

export async function POST(request) {
    try {
        const { name, img, url, issuer, provided_by } = await request.json()
        const data = await insertOneAch(name, img, url, issuer, provided_by)
        return Response.json(data)
    } catch (error) {
        return new Response("Gagal membuat data baru", { status: 500 })
    }
}