import { error } from '@sveltejs/kit'
import { API_KEY } from '$env/static/private'


export async function load({ url }) {
    const query = url.searchParams.get("q")
    const pageNo = Number(url.searchParams.get("page")) || 1

    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=${pageNo}&language=en-US&include_adult=false`
    )
    let data = await response.json()

    if (!response.ok) {
        throw error(400, "Invalid search")
    }

    if (pageNo < 0 || pageNo > data.total_pages) {
        throw error(400, "Invalid page number")
    }

    data.results = data.results.filter(({ media_type }) => media_type !== "tv")

    return data
}

export const actions = {
    default: async ({ url }) => {
        const query = url.searchParams.get("q")
    
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${1}&language=en-US`
        )
        const data = await response.json()
    
        if (response.ok) {
            return JSON.stringify(data.results)
        }
    }
}