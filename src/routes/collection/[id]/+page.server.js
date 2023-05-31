import { error } from '@sveltejs/kit'
import { API_KEY } from '$env/static/private'

export async function load({ params }) {
    const response = await fetch(`https://api.themoviedb.org/3/collection/${params.id}?api_key=${API_KEY}&language=en-US`)
    const data = await response.json()

    if (!response.ok) {
        throw error("404", "Collection not found")
    }

    return data;
};