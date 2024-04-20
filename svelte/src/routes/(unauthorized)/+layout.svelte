<script>
    import {Card} from "flowbite-svelte";
</script>

<div class="flex min-h-[100dvh] justify-center items-center bg-gray-100">
    <Card class="w-[40rem] m-4">
        <slot/>
    </Card>
</div>