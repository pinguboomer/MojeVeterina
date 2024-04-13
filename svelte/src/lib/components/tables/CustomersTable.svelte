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
    export let customers = [];

    console.log(customers)

    let filtered = customers;

    function find(e) {
        const query = e.target.value.toLowerCase();
        if (!query || query?.length === 0) return filtered = customers;
        filtered = customers.filter(item => {
            // check if exists owner, species and name, convert to lowercase and check if includes query
            const name = item.name?.toLowerCase() + ' ' + item.surname?.toLowerCase();
            return (name?.toLowerCase().includes(query) || item.email?.toLowerCase().includes(query) || item.phone?.toLowerCase().includes(query))
        });
    }
</script>

<div class="w-full">
    <Search class="mb-4" size="md" on:input={find} placeholder="Hledat..." />
    <Table hoverable={true}>
        <TableHead>
            <TableHeadCell>Jméno a příjmení</TableHeadCell>
            <TableHeadCell>E-mail</TableHeadCell>
            <TableHeadCell>Telefonní číslo</TableHeadCell>
            <TableHeadCell></TableHeadCell>
        </TableHead>
        <TableBody>
            {#each filtered as item}
                <TableBodyRow>
                    <TableBodyCell>
                        {item.name + ' ' + item.surname}
                    </TableBodyCell>
                    <TableBodyCell>
                        {item.email ?? '-'}
                    </TableBodyCell>
                    <TableBodyCell>
                        {item.phone ?? '-'}
                    </TableBodyCell>
                    <TableBodyCell>
                        <A href="/customers/{item._id}">Detail</A>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>
