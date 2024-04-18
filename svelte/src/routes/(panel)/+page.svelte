
<script>
    import {Card, Heading, Button, P} from 'flowbite-svelte';

    import Reservetions from "$lib/components/ReservetionsPopup.svelte";
    import {goto} from "$app/navigation";
    let dateForReservations = new Date();

    export let data;
    export let form;

    $: if (form?.redirect) {
        goto(form.redirect)
    }

</script>
<Heading tag="h1" class="mb-4"
         customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl content-center flex justify-center items-center">
    Rychlé rozhraní
</Heading>
<div class="">
    <Card padding="none" size="2xl" class="grid md:grid-cols-2">

        <!--    Zobrazit rezervace-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white pt-0">Zobrazit rezervace</Heading>
            <P class="mb-4">Zobrazit dnešní rezervace</P>
            <Reservetions
                    date={dateForReservations}
                    animals={data.animals}
                    reservations={data.reservations}
                    clients={data.users}
            />
        </div>

        <!--    Přidat zvíře-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Přidat nové zvíře</Heading>
            <Button href="/animals/add">Přidat</Button>
        </div>

        <!--    Nové vyšetření-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Nové vyšetření</Heading>
            <P class="my-4 font-light"> Vytvoření nového záznamu o vyšetření zvířete</P>
            <Button href="/addExamination">Přidat</Button>
        </div>

        <!--    Nová faktura-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Nová faktura</Heading>
            <P class="my-4 font-light"> Vytvoření nové faktury</P>
            <Button href="/addInvoice">Přidat</Button>
        </div>
    </Card>
</div>