<script>
    import { page } from '$app/stores'
    import MovieCard from '$lib/MovieCard.svelte'
    import genresList from './genres.json'

    export let data

    $: ({ results, total_pages } = data.search)
    $: currentPage = data.search.page

    $: ({ pathname } = $page.url)
    $: genres = $page.url.searchParams.get("genres").split(",")

    // console.log($page);
    // $: console.log(Object.entries(genresList).filter(([id, _]) => !genres.includes(id)));
    // console.log(id);
    // console.log(genres.includes(id));
</script>


<h1>
    Showing results for:
    {#if genres.length > 1}
        {#each genres as genreId}
        <a href="/search/by/genre?genres={genres.filter(item => item !== genreId)}">{genresList[genreId]}, </a>
        {/each}
    {:else}
        <span>{genresList[genres[0]]}</span>
    {/if} 
</h1>

<section>
    <ul>
        {#each Object.entries(genresList).filter(([id, _]) => !genres.includes(id)) as [id, name]}
            <li><a href="/search/by/genre?genres={[...genres, id].join(',')}">{id}: {name}</a></li>
        {/each}
    </ul>
</section>

<p>Current page: {currentPage}</p>
<ul>
    {#each [...Array(total_pages).keys()].slice(0, 10) as item}
        <li><a href="{pathname}?genres={genres.join(',')}&page={item + 1}">{item + 1}</a></li>
    {/each}
    <li>...</li>
</ul>

<section>
    {#each results as movie}
        <MovieCard {movie} />
    {:else}
        <p>No results found</p>
    {/each}
</section>
