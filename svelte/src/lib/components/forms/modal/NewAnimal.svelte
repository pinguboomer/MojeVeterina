<script>
    import {Button, Modal, Label, Input, Checkbox, Heading} from 'flowbite-svelte';
    import {PUBLIC_API_URL} from "$env/static/public";
   let formModal = false;

   async function add(){
       //Todo test

       const res = await fetch(PUBLIC_API_URL + '/v1/animals' ,{

           method: "POST",
           headers:{
               "Content-Type": 'application/json'
           },
           body:{
               "species": "pes",
               "sex": "male",
               "name": "Honza",
               "birthDate": "2010-03-10T23:44:56.289Z",
               "deathDate": null,
               "owner": "65e352d6d67152adb841fde2"
           }
       })
       if (!res.ok) {
           return alert("Přidání se nepodařilo, zkuste to znovu.")
       }
   }
</script>

<Button on:click={() => (formModal = true)}>Přidat</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
        <Heading tag="h1" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Přidání nového zvířete</Heading>
        <Label class="space-y-2">
            <span>Druh</span>
            <Input type="text" name="species" required />
        </Label>
        <Label class="space-y-2">
            <span>Pohlaví</span>
            <Input type="text" name="sex" required />
        </Label>
        <Label class="space-y-2">
            <span>Datum narození</span>
            <Input type="date" name="birthdate" required />
        </Label>
        <Label class="space-y-2">
            <span>Majitel</span>
            <Input type="select" name="sex" required />
        </Label>
        <Button  class="w-full1" on:click={add}>Přidat nové zvíře</Button>
    </form>
</Modal>