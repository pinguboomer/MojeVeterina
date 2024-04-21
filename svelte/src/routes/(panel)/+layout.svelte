<script>
    import SideNav from "$lib/components/layout/SideNav.svelte";
    import TopBar from "$lib/components/layout/TopBar.svelte";

    export let data

    let hideNav = true
</script>

<div class="w-full h-[100dvg] relative md:flex">
    <TopBar {hideNav} on:click={() => hideNav = !hideNav}/>
    <hr class="my-0 md:hidden"/>
    <SideNav user={data.user} class="{hideNav? 'hidden' : ''} md:block w-full md:fixed md:left-0 md:top-0 md:w-72" />
    <div class="w-full my-6 mx-8 md:pl-72">
        <main class="w-full">
            <slot/>
        </main>
    </div>
</div>
