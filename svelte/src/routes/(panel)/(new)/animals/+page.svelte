<script>
    export let data

    alert('data: ' + JSON.stringify(data, null, 2))
</script>

<pre>
    {#each data.animals as animal}
        {JSON.stringify(animal, null, 2)}
    {/each}
</pre>