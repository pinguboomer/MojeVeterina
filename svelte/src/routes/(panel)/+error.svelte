<script>
    import { page } from '$app/stores';
    import {Heading, P} from "flowbite-svelte";

    console.log($page)
</script>

<Heading>{$page.status}</Heading>
<P>{$page.error?.message}</P>