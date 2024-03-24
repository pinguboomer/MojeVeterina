<script>
    import {
        Avatar,
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from "flowbite-svelte";
    import {
        HomeSolid,
        CalendarMonthSolid,
        ClipboardSolid,
        FileIcvoiceSolid
    } from "flowbite-svelte-icons";
</script>

<Sidebar class="">
    <SidebarWrapper class="h-[95dvh] m-4 flex flex-col  items-center">
        <img src="src/lib/images/logo_veterina.png" class=" mb-5 me-3 h-28" alt="Logo Moje veterina"/>

        <SidebarGroup>
            <div class="flex  mb-12">
                <Avatar id="avatar-menu" class=""/>
                <SidebarDropdownWrapper label="Václav Buřil" class="mr-4 font-bold">
                    <!--                    TODO odkaz-->
                    <SidebarDropdownItem label="Účet"/>
                    <SidebarDropdownItem label="Odhlásit"/>
                </SidebarDropdownWrapper>
            </div>
            <SidebarItem href="/" label="Domů">
                <svelte:fragment slot="icon">
                    <HomeSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
            <!--            TODO odkaz-->
            <SidebarItem href="/calendar" label="Calendář">
                <svelte:fragment slot="icon">
                    <CalendarMonthSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>

            <SidebarDropdownWrapper label="Kartotéka">
                <svelte:fragment slot="icon">
                    <ClipboardSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
                <SidebarDropdownItem href="/addExaminations" label="Nové vyšetření"/>
                <SidebarDropdownItem href="/addAnimal" label="Přidat zvíře"/>
                <SidebarDropdownItem href="/allAnimal"  label="Vyhledat zvíře"/>
            </SidebarDropdownWrapper>
            <SidebarDropdownWrapper label="Faktůry">
                <svelte:fragment slot="icon">
                    <FileIcvoiceSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
                <SidebarDropdownItem href="/addInvoices" label="Nová faktura"/>
                <SidebarDropdownItem href="/allInvoices" label="Vyhledání faktury"/>
                <SidebarDropdownItem label="Zobrazeni faktur"/>
            </SidebarDropdownWrapper>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>