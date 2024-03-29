<script>
    import Calendar from "$lib/components/Calendar.svelte";
    import CalendarHeader from "$lib/components/CalendarHeader.svelte";

    export let day_click = () => {}

    export let event_click = () => {}

    export let date = new Date()
    export let active = null
    export let month = date.getMonth()
    export let year = date.getFullYear()

    export let disableDaysOutsideMonth
    export let dayLabels
    export let monthLabels

    function toPrev() {
        if (--month < 0) {
            month = 11;
            year--;
        }
    }

    function toNext() {
        if (++month > 11) {
            month = 0;
            year++;
        }
    }
</script>

<div class="w-full">
    <CalendarHeader
        month={month}
        year={year}
        on:prev={toPrev}
        on:next={toNext}
        monthLabels={monthLabels}
    />
    <Calendar
            month={month+1}
            year={year}
            today={date}
            bind:active={active}
            offset={1}
            labels={["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]}
            on:day_click={day_click}
            on:event_click={event_click}
            dayLabels={dayLabels}
            disableDaysOutsideMonth={disableDaysOutsideMonth}
    />
</div>