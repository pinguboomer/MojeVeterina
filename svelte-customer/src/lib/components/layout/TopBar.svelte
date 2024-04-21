<script>
    import Logo from "$lib/components/Logo.svelte";
    import {Button} from "flowbite-svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click');
    }
    export let hideNav = true;
</script>


<div class="md:hidden py-4 px-4 flex justify-between">
    <Logo/>
    <Button on:click={handleClick} outline color="dark" size="xs" class="group">
        {#if hideNav}
            <svg class="w-6 h-6 text-gray-800 group-hover:text-white group-focus:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
        {:else}
            <svg class="w-6 h-6 text-gray-800 group-hover:text-white group-focus:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        {/if}
    </Button>
</div>