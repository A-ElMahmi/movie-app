<script>
    import MovieCard from '$lib/MovieCard.svelte'

    export let data
    const { popularMovies, topRatedMovies, trendingMovies } = data

    // popularMovies.shift()

    console.log("Loaded")
</script>

<h2>Popular Movies</h2>

<section>
    {#each popularMovies as movie}
        <MovieCard {movie} />
    {/each}
</section>

<h2>Top Rated Movies</h2>

<section>
    {#each topRatedMovies as movie}
        <MovieCard {movie} />
    {/each}
</section>

<h2>Trending Movies</h2>

<section>
    {#each trendingMovies as movie}
        <MovieCard {movie} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }
</style>