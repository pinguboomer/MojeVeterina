<script>
    import {
        A,
        Search,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from "flowbite-svelte";
    import { formatDate } from "$lib/formatDate.js";

    export let animals = [];


    let filtered = animals;

    function find(e) {
        const query = e.target.value.toLowerCase();
        if (!query || query?.length === 0) return filtered = animals;
        filtered = animals.filter(animal => {
            // check if exists species and name, convert to lowercase and check if includes query
            return (animal.species?.toLowerCase().includes(query) || animal.name?.toLowerCase().includes(query));
        });
    }
</script>

<Search class="mb-4" size="md" on:input={find} placeholder="Hledat..." />
<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Druh</TableHeadCell>
        <TableHeadCell>Pohlaví</TableHeadCell>
        <TableHeadCell>Jméno</TableHeadCell>
        <TableHeadCell>Datum narození</TableHeadCell>
        <TableHeadCell>Datum úmrtí</TableHeadCell>
        <TableHeadCell></TableHeadCell>
    </TableHead>
    <TableBody>
        {#each filtered as animal}
            <TableBodyRow>
                <TableBodyCell>
                    {animal.species ?? '-'}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.sex ?? '-'}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.name ?? '-'}
                </TableBodyCell>
                <TableBodyCell>
                    {(animal.birthDate)? formatDate(new Date(animal.birthDate)) : '-'}
                </TableBodyCell>
                <TableBodyCell>
                    {(animal.deathDate)? formatDate(new Date(animal.deathDate)) : '-'}
                </TableBodyCell>
                <TableBodyCell>
                    <A href="animals/{animal._id}">Detail</A>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>