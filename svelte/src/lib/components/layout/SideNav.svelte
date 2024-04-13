<script>
    import {
        Avatar, Button,
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from "flowbite-svelte";
    // import {
    //     HomeSolid,
    //     CalendarMonthSolid,
    //     ClipboardSolid,
    //     FileInvoiceSolid
    // } from "flowbite-svelte-icons";
    import logo from "$lib/images/logo_veterina.png";

    import {applyAction, enhance} from '$app/forms';

    // export let form = undefined;
    function onSubmit() {
        return async ({result}) => {
            await applyAction(result); // might not do anything here

            // if (result.type == 'success' || result.type == 'failure')
            // form = result.data;
        }
    }
</script>

<Sidebar class={$$restProps.class}>
    <SidebarWrapper class="h-[95dvh] m-4 flex flex-col  items-center">
        <img src={logo} class=" mb-5 me-3 h-28" alt="Logo Moje veterina"/>

        <SidebarGroup>
            <div class="flex  mb-12">
                <Avatar id="avatar-menu" class=""/>
                <SidebarDropdownWrapper label="Václav Buřil" class="mr-4 font-bold">
                    <!--                    TODO odkaz-->
                    <SidebarDropdownItem label="Účet"/>
                    <form method="POST" action="/api/logout" use:enhance={onSubmit}>
                        <Button type="submit">Odhlásit se</Button>
                    </form>
                </SidebarDropdownWrapper>
            </div>
            <SidebarItem href="/" label="Domů">
                <svelte:fragment slot="icon">
<!--                    <HomeSolid-->
<!--                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>-->
                </svelte:fragment>
            </SidebarItem>
            <!--            TODO odkaz-->
            <SidebarItem href="/calendar" label="Calendář">
                <svelte:fragment slot="icon">
<!--                    <CalendarMonthSolid-->
<!--                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>-->
                </svelte:fragment>
            </SidebarItem>

            <SidebarDropdownWrapper label="Kartotéka">
                <svelte:fragment slot="icon">
<!--                    <ClipboardSolid-->
<!--                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>-->
                </svelte:fragment>
                <SidebarDropdownItem href="/animals"  label="Vyhledat zvíře"/>
                <SidebarDropdownItem href="/animals/add" label="Přidat zvíře"/>
            </SidebarDropdownWrapper>
            <SidebarDropdownWrapper label="Faktůry">
                <svelte:fragment slot="icon">
<!--                    <FileInvoiceSolid-->
<!--                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>-->
                </svelte:fragment>
                <SidebarDropdownItem href="/addInvoices" label="Nová faktura"/>
                <SidebarDropdownItem href="/allInvoices" label="Vyhledání faktury"/>
                <SidebarDropdownItem label="Zobrazeni faktur"/>
            </SidebarDropdownWrapper>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>