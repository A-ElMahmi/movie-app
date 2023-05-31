<script>
    import { page } from '$app/stores'
    import MovieCard from '$lib/MovieCard.svelte'
    import PersonCard from '$lib/PersonCard.svelte'

    export let data

    $: ({ results, total_pages } = data)
    $: ({ pathname } = $page.url)
    $: query = $page.url.searchParams.get("q")
</script>

<h1>Search results</h1>

<p>Current page: {data.page}</p>
<ul>
    {#each [...Array(total_pages).keys()] as item}
        <li><a href="{pathname}?q={query}&page={item + 1}">{item + 1}</a></li>
    {/each}
</ul>

<section>
    {#each results as result}
        {#if result.media_type === "movie"}
            <MovieCard movie={result} />
        {:else if  result.media_type === "person"}
            <PersonCard person={result} />
        {/if}
    {:else}
        <p>No results found</p>
    {/each}
</section>