<script>
    import "../app.pcss";
    import Nav from "$lib/components/header/Nav.svelte";
    import SideNavigation from "$lib/components/SideNavigation.svelte";
    import {onMount} from "svelte";

    const smallDevice = '(max-width: 767px)'


    let isSmallDevice ;//= window.matchMedia(smallDevice).matches;

    onMount(() => {
        isSmallDevice = matches(smallDevice)
    });

    function matches(query) {
        return window.matchMedia(query).matches;
    }

    function handelResize() {
        isSmallDevice = matches(smallDevice);
    }

</script>
<svelte:window on:resize={handelResize}/>

{#if isSmallDevice}
    <Nav></Nav>
    <slot></slot>
{:else if isSmallDevice !== undefined}
    <div class="flex">
    <SideNavigation></SideNavigation>
        <slot></slot>
    </div>
{/if}


