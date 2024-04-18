<script>
    import Nav from "$lib/components/header/Nav.svelte";
    import SideNavigation from "$lib/components/SideNavigation.svelte";

    export let data
</script>

<div class="block sm:hidden">
    <Nav user={data.user}></Nav>
    <div class="flex justify-center items-center ">
        <main class=" ">
            <slot/>
        </main>
    </div>
</div>
<div class="hidden sm:flex">
    <SideNavigation user={data.user}></SideNavigation>
    <div class="flex justify-center items-center ">
        <main class=" ">
            <slot/>
        </main>
    </div>
</div>