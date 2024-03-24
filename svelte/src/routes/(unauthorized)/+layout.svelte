<script>
    import {Card} from "flowbite-svelte";
</script>

<div class="flex min-h-[100dvh] justify-center items-center bg-primary-100">
    <Card class="w-[40rem]">
        <slot/>
    </Card>
</div>