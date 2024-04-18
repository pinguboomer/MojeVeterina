<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Avatar,
        Dropdown,
        DropdownItem, Button
    } from 'flowbite-svelte';
    import {
        CalendarMonthSolid,
        ClipboardSolid,
        HomeSolid,
        ChevronDownOutline, BugSolid
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

<Navbar class="pt-0 pb-0 border-2 border-b-black mb-1.5" >
    <NavBrand href="/">
        <img src="src/lib/images/logo_veterina.png" class="me-3 h-6 sm:h-9" alt="Logo Moje veterina"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Moje veterina</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
        <NavHamburger class1="w-full md:flex md:w-auto md:order-1"/>
    </div>

    <NavUl>
        <NavLi>
            <div class="flex items-center">
                <Avatar id="avatar-menu" class=""/>
                <span class="ml-2">{`${user.name} ${user.surname}`}</span>

                <Dropdown class="w-44 z-20">
                    <!--                    TODO doděalt změnu hesla atd-->
                    <DropdownItem href="/">Učet</DropdownItem>
                    <DropdownItem>
                        <form method="POST" action="/api/logout" use:enhance={onSubmit}>
                            <Button type="submit">Odhlásit se</Button>
                        </form>
                    </DropdownItem>
                </Dropdown>
                <ChevronDownOutline class="w-3 h-3 ms-2   inline"/>
            </div>
        </NavLi>
        <NavLi href="/">
            <div class="flex items-center ">
                <HomeSolid/>
                <span class="ml-2">Domů</span>
            </div>
        </NavLi>
        <NavLi href="/calendar">
            <div class="flex items-center">
                <CalendarMonthSolid/>
                <span class="ml-2">Kalendář</span>
            </div>
        </NavLi>
        <NavLi href="/myInvoices">
            <div class="flex items-center ">
                <ClipboardSolid/>
                <span class="ml-2">Moje platby</span>
            </div>
        </NavLi>
        <NavLi href="/myAnimals">
            <div class="flex items-center ">
                <BugSolid/>
                <span class="ml-2">Moji mazličci</span>
            </div>
        </NavLi>
    </NavUl>

</Navbar>