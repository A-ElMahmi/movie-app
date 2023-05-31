<script>
    import { marked } from 'marked'
    import DOMPurify from 'dompurify'
    
    const config = {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'em', 'strong', 'a', 'ul', 'ol', 'li']
    }

    let value = ""
    $: value = marked.parse(value)
    $: cleanValue = DOMPurify.sanitize(value, config)

    // console.log(DOMPurify.sanitize);
</script>


<h1>Attack</h1>

<textarea type="text" bind:value></textarea>

<p>{@html value}</p>
<p>{@html cleanValue}</p>

<!-- <button onmouseover="alert()" style="width:100%;border:none;background:white;color:white;">
    Danger
    </button> -->