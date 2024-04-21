<script>
    import Calendar from "$lib/components/Calendar.svelte";
    import CalendarHeader from "$lib/components/CalendarHeader.svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()

    export let date = removeTime(new Date())
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

    function removeTime(date) {
        // Přičtení časové zóny
        let timezoneOffsetMinutes = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() - timezoneOffsetMinutes);

        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
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
            on:day_click={(e) => dispatch('day_click', { date: e.detail.date })}
            on:event_click={(e) => dispatch('event_click', { event: e.detail })}
            dayLabels={dayLabels}
            disableDaysOutsideMonth={disableDaysOutsideMonth}
    />
</div>