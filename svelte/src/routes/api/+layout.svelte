<script>
    import {A, Card, Heading, P} from "flowbite-svelte";
</script>

<div class="flex h-[100dvh] justify-center items-center bg-primary-100">
    <Card>
        <Heading class="mb-6">Ajaj</Heading>
        <P>Zatoulali jste se do neznámých končin. <A href="/">Zpět na hlavní stránku.</A></P>
        <slot/>
    </Card>
</div>
