<script>
    import {Card, Heading, Button, P} from 'flowbite-svelte';
    import MyReservations from "$lib/components/MyReservations.svelte";

    export let data;
</script>


<div class="h-[93dvh] flex flex-col">
    <div class="flex-1 flex flex-col items-center justify-center">
        <Heading class="mb-8 text-center">Rychlé rozhraní</Heading>
        <Card padding="none" size="2xl" class="grid md:grid-cols-2">

            <!--    Moje rezervace-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white pt-0">Moje rezervace</Heading>
                <P class="my-4 font-light">Zobrazit vámi udělané rezervace</P>
                <MyReservations reservations={data.reservations} animals={data.animals}/>
            </div>

            <!--    Moji mazlíčci-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b md:border-l">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moji mazlíčci</Heading>
                <P class="my-4 font-light">Zobrazit seznam mých mazlíčků</P>
                <Button href="/animals">Zobrazit</Button>
            </div>

            <!--    Faktury-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b md:border-b-0">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moje faktury</Heading>
                <P class="my-4 font-light">Zobrazit moje faktury</P>
                <Button href="/myInvoices">Zobrazit</Button>
            </div>

            <!--    Nová faktura-->
            <div class="flex flex-col justify-center items-center p-8 text-center md:border-l">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moje veterina</Heading>
                <P class="font-light"> Adresa: Mírov 5, Praha 10 </P>
                <P class="font-light"> Tel.: 475 587 123</P>
                <P class="font-light"> IČO: 25596641</P>
            </div>
        </Card>
    </div>
</div>