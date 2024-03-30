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
        BugSolid,
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
            <SidebarItem href="/calendar" label="Kalendář">
                <svelte:fragment slot="icon">
                    <CalendarMonthSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem href="/myInvoices" label="Moje platby">
                <svelte:fragment slot="icon">
                    <FileIcvoiceSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem href="/myAnimals" label="Moji mazlíčci">
                <svelte:fragment slot="icon">
                    <BugSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>