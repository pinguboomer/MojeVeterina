<script>
    import {
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from "flowbite-svelte";
    import {ArrowRightToBracketSolid, GridSolid, MailBoxSolid, UserSolid} from "flowbite-svelte-icons";
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
</script>

<Sidebar class="">
    <SidebarWrapper class="h-[100dvh] m-4">
        <SidebarGroup>
            <SidebarItem label="Dashboard"></SidebarItem>
            <SidebarDropdownWrapper label="E-commerce">
                <SidebarDropdownItem label="Products" />
                <SidebarDropdownItem label="Billing" />
                <SidebarDropdownItem label="Invoice" />
            </SidebarDropdownWrapper>
            <SidebarItem label="Kanban" {spanClass}>
                <svelte:fragment slot="icon">
                    <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                    <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Inbox" {spanClass}>
                <svelte:fragment slot="icon">
                    <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                    <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Users">
                <svelte:fragment slot="icon">
                    <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign In">
                <svelte:fragment slot="icon">
                    <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem label="Sign Up"></SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>