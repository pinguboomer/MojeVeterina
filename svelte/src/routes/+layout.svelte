<script>
    import "../app.pcss";
    import Nav from "$lib/components/header/Nav.svelte";
    import SideNavigation from "$lib/components/SideNavigation.svelte";

</script>
<div class="block sm:hidden">
    <Nav></Nav>
    <slot></slot>
</div>
<div class="hidden sm:flex">
    <SideNavigation></SideNavigation>
    <slot></slot>
</div>



