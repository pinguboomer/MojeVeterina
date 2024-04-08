<script>
    import {Button, Modal, P} from "flowbite-svelte";

    export let disabled;
    let formModal = false;

//TODO delete z databáze
    function deleteReservations(){
        formModal = false;
    }

</script>

<Button on:click={() => (formModal = true)} disabled={disabled}>Zrušit rezervaci</Button>
<Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
    <div class="flex flex-col items-center justify-center">
        <P class="text-red-700 mb-5">Opravdu chcete zrušit rezervaci?</P>
        <div class="space-x-4">
            <Button on:click={deleteReservations} class="bg-red-700">Ano</Button>
            <Button on:click={formModal = false}>Ne</Button>
        </div>
</Modal>