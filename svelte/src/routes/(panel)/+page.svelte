<!--<script>-->
<!--    import {Button, Heading, P} from "flowbite-svelte";-->
<!--    import {ArrowRightOutline} from "flowbite-svelte-icons";-->
<!--</script>-->

<!--<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>-->
<!--<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>-->
<!--<Button href="/">-->
<!--    Learn more-->
<!--    <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />-->
<!--</Button>-->

<script>
    import {Card, Heading, Label, Button, Input, P} from 'flowbite-svelte';
    import NewAnimal from "$lib/components/forms/modal/NewAnimal.svelte";
    import Reservetions from "$lib/components/ReservetionsPopup.svelte";

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
        <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white pt-0">Zobrazit rezervace</Heading>
        <Label for="date-input" class="my-4 font-light">Vyberte datum</Label>
        <Input class="mb-4" id="date-input" type="date" value={date} on:input={e => date = e.target.value || date}/>
        <!--        TODO dodělat odkaz-->
        <Reservetions date={date}/>
<!--        <Button href="/reservations/{date}">Vyhledej</Button>-->
    </div>

    <!--    Přidat zvíře-->
    <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Přidat nové zvíře</Heading>
        <P class="mb-4">Vytvoření nového záznamu do kartotéky</P>
        <NewAnimal></NewAnimal>
<!--        <Button href="/addAnimal">Přidat</Button>-->
    </div>

    <!--    Nové vyšetření-->
    <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Nové vyšetření</Heading>
        <P class="my-4 font-light"> Vytvoření nového záznamu o vyšetření zvířete</P>
        <Button href="/addExamination">Přidat</Button>
    </div>

    <!--    NováFaktůra-->
    <div class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Nová faktůra</Heading>
        <P class="my-4 font-light"> Vytvoření nové faktůry</P>
        <Button href="/addInvoice">Přidat</Button>
    </div>
</Card>
</div>