<script>
    import SideNavigation from "$lib/components/layout/SideNav.svelte";
    import TopNav from "$lib/components/layout/TopNav.svelte";
</script>


<div class="sm:flex">
    <TopNav class="sm:hidden"></TopNav>
    <SideNavigation class="hidden sm:block"></SideNavigation>
    <div class="flex justify-center items-center w-full mx-4">
        <main class=" ">
            <slot/>
        </main>
    </div>
</div>
