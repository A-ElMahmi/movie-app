import { error } from '@sveltejs/kit'

const apiKey = "02e0391446ac7691b1e8b805d192ae11"

export async function load({ cookies }) {
    let sessionId = cookies.get("sessionId")

    if (!sessionId) {
        const response = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`)
        const data = await response.json()

        sessionId = data.guest_session_id

        if (response.ok)
            cookies.set("sessionId", data.guest_session_id, { path: "/" })
        else
            throw error(400, "Failed to create Session ID")
    }

    const response = await fetch(`https://api.themoviedb.org/3/guest_session/${sessionId}/rated/movies?api_key=${apiKey}`)
    const data = await response.json()

    if (response.ok)
        return data
}

export const actions = {
    submitRating: async ({cookies, request}) => {
        const data = await request.formData()
        
        const sessionId = cookies.get("sessionId")
        const movieId = data.get("movieId")
        const rating = data.get("rating") / 2
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${apiKey}&guest_session_id=${sessionId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({ "value": rating })
        })
        
        const responseData = await response.json()
        
        if (responseData.success === false)
            throw error(400, responseData.status_message)
    },
    
    getMovieName: async ({ request }) => {
        const formData = await request.formData()
        const movieId = formData.get("movieId")

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        const data = await response.json()

        console.log(data.title);

        return { "id": movieId, "movie": data.title }
    }
}