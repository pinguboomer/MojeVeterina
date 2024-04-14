<script>
    import {
        Button,
        Heading,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";


    export let animals = [];


</script>

<Heading tag="h1" class="mb-2">Moji mazlíčci</Heading>
<Table>
    <TableHead>
        <TableHeadCell>Jméno</TableHeadCell>
        <TableHeadCell>Druh</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each animals as animal}
            <TableBodyRow>
                <TableBodyCell>
                    {animal.name}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.species}
                </TableBodyCell>
                <TableBodyCell>
<!--                    TODO -->
                    <Button href="myAnimals/{animal._id}" on:click={() => console.log(animal._id)}>Zobrazit vyšetření</Button>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>