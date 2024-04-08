<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    export let month = new Date().getMonth();
    export let year = new Date().getFullYear();


</script>


<div class="calendar-header w-full flex items-center mb-4">
    <button on:click={() => {dispatch("prev")}} class="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
        <svg class="w-full h-full fill-gray-400 hover:fill-gray-600 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </button>
    <span class="w-full font-bold px-4 text-center text-2xl">
        {monthLabels[month]} {year}
    </span>
    <button on:click={() => {dispatch("next")}} class="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
        <svg class="w-full h-full fill-gray-400 hover:fill-gray-600 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </button>
</div>