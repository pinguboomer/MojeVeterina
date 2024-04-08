<script>
    import {Card, Heading, Label, Button, Input, P} from 'flowbite-svelte';
    import MyReservations from "$lib/components/MyReservations.svelte";


    let date = (new Date()).toJSON().slice(0, 10);
</script>
<Heading tag="h1" class="mb-4"
         customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl content-center flex justify-center items-center">
    Rychlé rozhraní
</Heading>
<div class="">
    <Card padding="none" size="2xl" class="grid md:grid-cols-2">

        <!--    Zobrazit rezervace-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white pt-0">Moje rezervace</Heading>
            <Label for="date-input" class="my-4 ">Zobrazit vámi udělané rezervace</Label>
            <MyReservations/>
        </div>

        <!--    Přidat zvíře-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moje faktůry</Heading>
            <P class="mb-4">Zobrazit faktůry</P>
                    <Button href="/myInvoices">Zobrazit</Button>
        </div>

        <!--    Nové vyšetření-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moji mazlíčci</Heading>
            <P class="my-4"> Zobrazot seznam mých mazlíčků</P>
            <Button href="/addExamination">Zobrazit</Button>
        </div>

        <!--    NováFaktůra-->
        <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Moje veterina</Heading>
            <P class="font-light"> Adresa: Praha 10 Mírov</P>
            <P class="font-light"> Tel. 475 587 123</P>
            <P class="font-light"> IČO: 25596641</P>
        </div>
    </Card>
</div>