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


    let dateForReservations = removeTime(new Date());

    const isDate = $page.url.searchParams.get('date');

    if (isDate) {
        dateForReservations = removeTime(new Date(isDate))
    }
    function removeTime(date) {
        // Přičtení časové zóny
        let timezoneOffsetMinutes = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() - timezoneOffsetMinutes);

        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
</script>


<div>
    <FullCalendar
            bind:active={dateForReservations}
            monthLabels={monthLabels}
            dayLabels={dayLabels}
            on:day_click={(e) => {
                let timezoneOffsetMinutes = e.detail.date.getTimezoneOffset();
                const date = e.detail.date.setMinutes(e.detail.date.getMinutes() - timezoneOffsetMinutes);
                goto('?date=' + new Date(date).toISOString().split('T')[0])
                //invalidateAll()
            }}
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
