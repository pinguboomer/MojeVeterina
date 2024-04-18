<script>
    import SideNavigation from "$lib/components/layout/SideNav.svelte";
    import TopNav from "$lib/components/layout/TopNav.svelte";

    export let data
</script>


<div class="sm:flex">
    <TopNav class="sm:hidden" user={data.user}></TopNav>
    <SideNavigation class="hidden sm:block" user={data.user}></SideNavigation>
    <div class="flex justify-center items-center w-full mx-4">
        <main class="w-full">
            <slot/>
        </main>
    </div>
</div>
