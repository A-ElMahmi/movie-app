import { error } from '@sveltejs/kit'
import { API_KEY } from '$env/static/private'

export async function load({ params }) {
    const { id } = params

    return {
        details: loadDetails(id),
        movies: loadMovies(id),
        images: loadImages(id)
    }
};

async function loadDetails(id) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    
    if (!response.ok) {
        throw error("404", "Person not found")
    }

    return data
}

async function loadMovies(id) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()

    return data.cast.slice(0, 10)
}

async function loadImages(id) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`)
    const data = await response.json()

    return data.profiles
}