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
    import {onMount} from "svelte";
    import {formatDate} from "$lib/formateDate.js";
    import DetailExaminations from "$lib/components/DetailExaminations.svelte";

    let animals = [{date: formatDate(new Date()), species: 'Krokodýl'},
        {date: formatDate(new Date()), species: 'Krokodýl'},
        {date: formatDate(new Date()), species: 'Krokodýl'}];

    onMount(() => {
        //TODO z databáze
        load()
    })

    function load() {

    }


</script>

<Heading tag="h1" class="mb-2">Moji mazlíčci</Heading>
<Table>
    <TableHead>
        <TableHeadCell>Datum</TableHeadCell>
        <TableHeadCell>Druh</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each animals as animal}
            <TableBodyRow>
                <TableBodyCell>
                    {animal.date}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.species}
                </TableBodyCell>
                <TableBodyCell>
                    <!--                    TODO -->
<!--                    <Button>Zobrazit Detail</Button>-->
                    <DetailExaminations/>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>