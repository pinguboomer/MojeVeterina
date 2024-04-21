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
    import {formatDate} from "$lib/formatDate.js";

    export let animalId;
    export let examinations = [];

    let filtered = examinations;

    function find(e) {
        const query = e.target.value.toLowerCase();
        if (!query || query?.length === 0) return filtered = examinations;
        filtered = examinations.filter(item => {
            // check if exists owner, species and name, convert to lowercase and check if includes query
            return (item.subject?.toLowerCase().includes(query));
        });
    }
</script>

<div class="w-full">
    <Search class="mb-4" size="md" on:input={find} placeholder="Hledat..." />
    <Table hoverable={true}>
        <TableHead>
            <TableHeadCell>Datum</TableHeadCell>
            <TableHeadCell>Předmět</TableHeadCell>
            <TableHeadCell></TableHeadCell>
        </TableHead>
        <TableBody>
            {#each filtered as item}
                <TableBodyRow>
                    <TableBodyCell>
                        {(item.date)? formatDate(new Date(item.date)) : '-'}
                    </TableBodyCell>
                    <TableBodyCell>
                        {item.subject ?? '-'}
                    </TableBodyCell>
                    <TableBodyCell>
                        <A href="/animals/{animalId}/examinations/{item._id}">Detail</A>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>

    </Table>
</div>
