<script>
    import Nav from "$lib/components/header/Nav.svelte";
    import SideNavigation from "$lib/components/SideNavigation.svelte";
</script>

<div class="block sm:hidden">
    <Nav></Nav>
    <div class="flex justify-center items-center ">
        <main class=" ">
            <slot/>
        </main>
    </div>
</div>
<div class="hidden sm:flex">
    <SideNavigation></SideNavigation>
    <div class="flex justify-center items-center ">
        <main class=" ">
            <slot/>
        </main>
    </div>
</div>