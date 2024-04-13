<script>
    export let data
</script>

<pre>
    {#each data.examinations as examination}
        {JSON.stringify(examination, null, 2)}
    {/each}
</pre>