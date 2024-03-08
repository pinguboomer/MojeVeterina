<script>
    import {page} from "$app/stores";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';

    $: activeUrl = $page.url.pathname;
</script>

<Navbar  class=" pt-0 pb-0 border-2 border-b-black mb-1.5">
    <NavBrand href="/">
        <img src="src/lib/images/logo_veterina.png" class="me-3 h-6 sm:h-9" alt="Logo Moje veterina" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Moje veterina</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
        <Avatar id="avatar-menu"/>
        <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
            <span class="block text-sm">Bonnie Green</span>
            <span class="block truncate text-sm font-medium">name@flowbite.com</span>
        </DropdownHeader>
        <!--        TODO upravit možnosti-->
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    <NavUl {activeUrl}>
<!--        TODO upravit cesty-->
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>