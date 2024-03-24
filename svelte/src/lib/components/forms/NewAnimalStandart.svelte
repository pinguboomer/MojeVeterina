<script>
    import {Button, Heading, Input, Label, Select} from "flowbite-svelte";
    import {PUBLIC_API_URL} from "$env/static/public";

    let selected;

    const owner = [{ name: 'Václav Buřil' },
        { name: 'Tomáš Němeček' },
        { name: 'František Brýl' },
        { name: 'Filip Macháček' }];

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

<form class="flex flex-col space-y-6" action="#">
    <Heading tag="h3" class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Přidání nového zvířete</Heading>
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
<!--        TODO načíst z DB-->
        <Select class="mt-2" items={owner} bind:value={selected} />
    </Label>
    <Button  class="w-full1" on:click={add}>Přidat nové zvíře</Button>
</form>