<script>
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";

    export let animals = [];
</script>

<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>Majitel</TableHeadCell>
        <TableHeadCell>Datum narození</TableHeadCell>
        <TableHeadCell>Druh</TableHeadCell>
        <TableHeadCell>Pohlaví</TableHeadCell>
        <TableHeadCell>Jméno</TableHeadCell>
        <TableHeadCell>Datum úmrtí</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each animals as animal}
            <TableBodyRow>
                <TableBodyCell>
                    {animal.owner}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.birthDate}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.species}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.sex}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.name}
                </TableBodyCell>
                <TableBodyCell>
                    {animal.deathDate}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>