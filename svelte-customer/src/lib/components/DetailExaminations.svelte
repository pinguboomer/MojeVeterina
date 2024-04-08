<script>

    import {Button, Heading, Modal, P} from "flowbite-svelte";
    import {formatDate} from "$lib/formateDate.js";

    //TODO načíst z databáze

    let formModal = false
</script>

<Button on:click={() => (formModal = true)}>Zobrazit detail vyšetření</Button>
<Modal bind:open={formModal} size="md" autoclose={false} class="w-full">
    <div>
        <Heading tag="h1">Vyšetření ze dne:</Heading>
        <Heading tag="h1">{formatDate(new Date())}</Heading>
    </div>

    <div>
        <Heading tag="h2">Váha</Heading>
        <P class="text-2xl">55 Kg</P>
    </div>
    <div>
        <Heading tag="h2">Diagnóza</Heading>
        <P>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Mauris suscipit, ligula sit amet
            pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec iaculis gravida nulla.
            Fusce aliquam vestibulum ipsum. Etiam posuere lacus quis dolor. Donec vitae arcu. Etiam dictum tincidunt
            diam. Integer imperdiet lectus quis justo. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque
            eu. Nunc tincidunt ante vitae massa. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam
            ultricies odio, vitae placerat pede sem sit amet enim.</P>
    </div>
    <div>
        <Heading tag="h2">Doporučení</Heading>
        <P>Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Integer tempor. Phasellus enim erat, vestibulum
            vel, aliquam a, posuere eu, velit. Vivamus luctus egestas leo. Nunc dapibus tortor vel mi dapibus
            sollicitudin. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Et harum quidem rerum
            facilis est et expedita distinctio. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce consectetuer
            risus a nunc. Nulla non lectus sed nisl molestie malesuada. Cras pede libero, dapibus nec, pretium sit amet,
            tempor quis. Praesent id justo in neque elementum ultrices. Pellentesque ipsum. Mauris dictum facilisis
            augue. Morbi scelerisque luctus velit.</P>
    </div>

    <div>
        <Heading tag="h2">Doporučení</Heading>
        <P>Mauris tincidunt sem sed arcu. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Nam sed tellus id
            magna elementum tincidunt. Vivamus porttitor turpis ac leo. Nulla non arcu lacinia neque faucibus fringilla.
            Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nulla quis diam.</P>
    </div>
</Modal>