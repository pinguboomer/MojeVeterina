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
    import {
        HomeSolid,
        CalendarMonthSolid,
        BugSolid,
        FileIcvoiceSolid
        //FileInvoiceSolid
    } from "flowbite-svelte-icons";

    import {applyAction, enhance} from '$app/forms';

    function onSubmit() {
        return async ({result}) => {
            await applyAction(result); // might not do anything here

            // if (result.type == 'success' || result.type == 'failure')
            // form = result.data;
        }
    }

    export let user
</script>

<Sidebar class="">
    <SidebarWrapper class="h-[95dvh] m-4 flex flex-col  items-center">
        <img src="src/lib/images/logo_veterina.png" class=" mb-5 me-3 h-28" alt="Logo Moje veterina"/>

        <SidebarGroup>
            <div class="flex  mb-12">
                <Avatar id="avatar-menu" class=""/>
                <SidebarDropdownWrapper label={`${user.name} ${user.surname}`} class="mr-4 font-bold">
                    <!--                    TODO doděalt změnu hesla atd-->
                    <SidebarDropdownItem label="Účet"/>
                    <form method="POST" action="/api/logout" use:enhance={onSubmit}>
                        <Button type="submit">Odhlásit se</Button>
                    </form>
                </SidebarDropdownWrapper>
            </div>
            <SidebarItem href="/" label="Domů">
                <svelte:fragment slot="icon">
                    <HomeSolid
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                </svelte:fragment>
            </SidebarItem>
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