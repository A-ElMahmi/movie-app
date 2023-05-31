import { error } from '@sveltejs/kit'
import { API_KEY } from '$env/static/private'


export async function load({ url }) {
    return {
        search: loadGenreSearch(url),
        // genresList: loadGenresList()
    }
}

async function loadGenreSearch(url) {
    const genres = url.searchParams.get("genres")
    const pageNo = Number(url.searchParams.get("page")) || 1
    
    if (!genres) {
        throw error(400, "Genre input required")
    }
    
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres}&page=${pageNo}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    )
    let data = await response.json()
    
    if (!response.ok) {
        throw error(400, "Invalid search")
    }
    
    if ((pageNo < 0 || pageNo > data.total_pages) && data.total_pages > 0) {
        throw error(400, "Invalid page number")
    }
    
    return data
}


// async function loadGenresList() {
//     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
//     const data = await response.json()

//     if (!response.ok) {
//         throw error(500, "Internal server error")
//     }

//     return data.genres
// }