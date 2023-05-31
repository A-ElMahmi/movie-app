<script>
    import { marked } from 'marked'
    import { imagePath } from '$lib/utils.js'
    import MovieCard from '$lib/MovieCard.svelte';

    marked.setOptions({
        mangle: false,
        headerIds: false
    });

    export let data;
    $: ({ details, movies, images } = data)

    console.log(data);
</script>


<h1>{details.name}</h1>
<img src={imagePath(details.profile_path)} alt="{details.name}'s picture">
<p>{@html marked.parse(details.biography)}</p>

<h2>Movies</h2>
<section>
    {#each movies as movie}
        <div>
            <MovieCard {movie} />
            <p>{movie.character}</p>
        </div>
    {/each}
</section>

<h2>Images</h2>
{#each images as image}
    <img src={imagePath(image.file_path)} alt="{details.name}'s picture">
{/each}


<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
</style>
