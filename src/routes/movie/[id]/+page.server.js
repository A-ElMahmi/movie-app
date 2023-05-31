import { error } from '@sveltejs/kit'
import { API_KEY } from '$env/static/private'


export async function load({ params }) {
    const { id } = params

    return {
        movieData: loadMovieData(id),
        videoLink: loadVideoData(id),
        relatedMovies: loadRelatedMovies(id),
        reviews: loadReviews(id),
        cast: loadCast(id)
    }
}

async function loadMovieData(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()

    if (!response.ok) {
        throw error(404)
    }

    return data
}

async function loadVideoData(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    
    return data.results.reverse().find(e => e.type === "Trailer" && e.site === "YouTube")?.key
}

async function loadRelatedMovies(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await response.json()

    return data.results.slice(0, 5)
}

async function loadReviews(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    
    return data.results
}

async function loadCast(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    
    return data.cast.slice(0, 10)
}