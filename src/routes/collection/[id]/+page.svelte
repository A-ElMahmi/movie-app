<script>
    import { imagePath } from '$lib/utils.js'
    import MovieCard from '$lib/MovieCard.svelte';

    export let data;
    $: ({ name, overview, backdrop_path, parts } = data)
</script>

<h1>{name}</h1>
<img src={imagePath(backdrop_path)} alt={name}>
<p>{overview}</p>

<section>
    {#each parts as movie}
        <MovieCard {movie} maxSize="25px" />
    {/each}
</section>


<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
</style>
