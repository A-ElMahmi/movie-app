<script>
    import SearchBox from "./SearchBox.svelte"
</script>


<svelte:head>
    <link rel="stylesheet" href="/src/global.css">

    <title>Movies</title>
</svelte:head>

<header>Movies</header>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>

<SearchBox />

<slot />
