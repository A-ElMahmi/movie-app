import { API_KEY } from '$env/static/private'

export async function load() {
    return {
        popularMovies: loadPopular(),
        topRatedMovies: loadTopRated(),
        trendingMovies: loadTrending()
    }
}

async function loadPopular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await response.json()
    
    if (response.ok) {
        return data.results
    }
}

async function loadTopRated() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()

    if (response.ok) {
        return data.results
    }    
}

async function loadTrending() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()
    
    if (response.ok) {
        return data.results
    }    
}
