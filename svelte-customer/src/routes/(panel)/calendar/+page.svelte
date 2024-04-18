<script>
    import FullCalendar from "$lib/components/FullCalendar.svelte";
    import ReservationsCalendar from "$lib/components/ReservationsCalendar.svelte";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    export let data;
    export let form;

    $: if (form?.redirect) {
        goto(form.redirect)
    }


    const monthLabels = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
    const dayLabels = ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]


    let dateForReservations = new Date();

    const isDate = $page.url.searchParams.get('date');
    if (isDate)
        dateForReservations = new Date(isDate)


</script>


<div>

    <FullCalendar
            bind:active={dateForReservations}
            monthLabels={monthLabels}
            dayLabels={dayLabels}
    />
    {#if dateForReservations !== undefined}
        <ReservationsCalendar
                date={dateForReservations}
                form={form}
                animals={data.animals}
                reservations={data.reservations}
        />
    {/if}
</div>


<style>
    .calendar-header svg {
        width: 1.5rem;
        height: 1.5rem;
        transition: transform 0.1s ease-out;
    }

    .calendar-header svg:hover {
        cursor: pointer;
        transform: translateY(-1px);
    }

    .calendar-header .text {
        display: inline-block;
        width: 12rem;
        text-align: center;
    }

</style>