<script>
    import {Card, Heading, Button, P} from 'flowbite-svelte';
</script>

<div class="h-[93dvh] flex flex-col">
    <div class="flex-1 flex flex-col items-center justify-center">
        <Heading class="mb-8 text-center">Rychlé rozhraní</Heading>
        <Card padding="none" size="2xl" class="grid md:grid-cols-2">

            <!--    Zobrazit rezervace-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Rezervace</Heading>
                <P class="my-4 font-light">Zobrazit dnešní rezervace</P>
                <Button href="/calendar">Zobrazit</Button>
            </div>

            <!--    Přidat zvíře-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b md:border-l">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Nový pacient</Heading>
                <P class="my-4 font-light">Přidat nového pacienta</P>
                <Button href="/animals/add">Přidat</Button>
            </div>
            <!--    Kartotéka-->
            <div class="flex flex-col justify-center items-center p-8 text-center border-b md:border-b-0">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Kartotéka</Heading>
                <P class="my-4 font-light">Zobrazit pacienty v kartotéce</P>
                <Button href="/animals">Zobrazit</Button>
            </div>

            <!--    Nová faktura-->
            <div class="flex flex-col justify-center items-center p-8 text-center md:border-l">
                <Heading tag="h3" class="text-lg font-semibold text-gray-900 dark:text-white">Faktury</Heading>
                <P class="my-4 font-light">Přidat novou fakturu</P>
                <Button href="/invoices/add">Přidat</Button>
            </div>
        </Card>
    </div>
</div>
