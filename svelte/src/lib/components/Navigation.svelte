<script>
    import {
        Sidebar,
        SidebarWrapper,
        SidebarBrand,
        SidebarItem,
        SidebarGroup,
        Avatar,
        SidebarDropdownWrapper, SidebarDropdownItem
    } from 'flowbite-svelte';
    import {
        ClipboardSolid, CalendarMonthSolid, FileInvoiceOutline, HomeSolid
    } from 'flowbite-svelte-icons';
    import logo from '$lib/images/logo_veterina.png'

    let site = {
        name: 'Moje Veterina',
        href: '/',
        img: logo
    };

    export let user
</script>

<Sidebar class="h-[100dvh]">
    <SidebarWrapper>
        <SidebarGroup>
            <SidebarBrand {site} />
            <div>
                <Avatar />
                <span>{user?.name?? ''} {user?.surname?? ''}</span>
            </div>

            <SidebarItem href="/" label="Domů">
                <svelte:fragment slot="icon">
                    <HomeSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem href="/calendar" label="Kalendář">
                <svelte:fragment slot="icon">
                    <CalendarMonthSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>

            <SidebarDropdownWrapper label="Kartotéka">
                <svelte:fragment slot="icon">
                    <ClipboardSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>

                <SidebarDropdownItem href="/customers"  label="Klienti"/>
                <SidebarDropdownItem href="/animals"  label="Vyhledat zvíře"/>
                <SidebarDropdownItem href="/animals/add" label="Přidat zvíře"/>
            </SidebarDropdownWrapper>

            <SidebarDropdownWrapper label="Faktury">
                <svelte:fragment slot="icon">
                    <FileInvoiceOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>

                <SidebarDropdownItem href="/invoices/add" label="Přidat fakturu"/>
                <SidebarDropdownItem href="/invoices" label="Vyhledat fakturu"/>
            </SidebarDropdownWrapper>

            <SidebarItem href="/staff" label="Zaměstnanci">
                <svelte:fragment slot="icon">
                    <CalendarMonthSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>

