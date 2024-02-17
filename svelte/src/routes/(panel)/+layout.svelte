<script>
    import SideNavigation from "$lib/components/SideNavigation.svelte";
</script>

<div class="flex">
    <SideNavigation/>
    <main class="w-full m-4">
        <slot/>
    </main>
</div>
