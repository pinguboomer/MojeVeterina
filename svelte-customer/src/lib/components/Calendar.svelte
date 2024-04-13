<script>
    import {createEventDispatcher} from "svelte"
    import {twMerge} from "tailwind-merge";
    import {redirect} from "@sveltejs/kit";
    import {goto} from "$app/navigation";

    const dispatch = createEventDispatcher()

    const SATURDAY = 6;
    const SUNDAY = 0;

    export let month = 12;
    export let year = 2022;
    export let today = null; // Date
    export let active = null; // Date
    export let offset = 0;

    export let disableDaysOutsideMonth = true;

    export let dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    export let disableDays = [];

    export let events = []
    /*
    [
        {
            date: new Date("21-12-2022"),
            text: "Konec světa byl před 10 lety"
        },
        {
            date: new Date("21-12-2022"),
            text: "Konec světa byl před 10 lety"
        },
        {
            date: new Date("12-12-2022"),
            text: "Konec světa"
        }
    ]
    * */

    $: thisMonth = new Date(year, month, 0)

    // Calendar
    $: calendarArray = makeCalendarArray(month, year, offset, events)

    function makeCalendarArray(month, year, offset, events) {
        let days = new Date(year, month, 0).getDate();  // number of days in month

        let first = new Date(year, month, 1 - days).getDay() - offset   // map first day in month to current offset
        if (first < 0) {
            first += 7;
        }

        let day = -first - days;   // calculate first day in calendar

        let whileTo = 0 // setup number of extra shown days in month for 'for' loop stop
        while ((day - whileTo) % 7 !== 0) {
            whileTo += 1
        }

        const calendar = []     // initialize

        for (let i = day; i < whileTo; i += 1) {     // while : first calendar day to whileTo
            let date = new Date(year, month, i + 1)
            calendar.push({
                date,
                events: events.filter(v => sameDay(v.date, date))
            })
        }

        return calendar;
    }

    // Labels
    $: reorderedLabels = reorderLabels(dayLabels, offset);

    function reorderLabels(labels, offset) {
        let reorderedLabels = []
        for (let i = 0; i < 7; i++) {
            reorderedLabels.push(labels[indexWithOffset(i, offset, 7)])
        }
        return reorderedLabels
    }

    // Index with offset
    function indexWithOffset(index, offset, max) {
        if (index + offset < max) {
            return index + offset;
        }

        return index + offset - max;
    }

    // Compare if is same day
    function sameDay(d1, d2) {
        return d1?.getFullYear() === d2?.getFullYear() &&
            d1?.getMonth() === d2?.getMonth() &&
            d1?.getDate() === d2?.getDate();
    }

    function sameMonth(d1, d2) {
        return d1?.getFullYear() === d2?.getFullYear() &&
            d1?.getMonth() === d2?.getMonth()
    }
</script>


<div class="calendar calendar-grid w-full">
    {#each reorderedLabels as label}
        <div class="header text-center font-medium text-gray-600 flex items-center justify-center bg-gray-50{reorderedLabels.indexOf(label)===0? ' rounded-l-lg' : ''}{reorderedLabels.indexOf(label)===reorderedLabels.length-1? ' rounded-r-lg' : ''}">{label}</div>
    {/each}

    {#each calendarArray as cell}
        <div
                data-day="{cell.date.toISOString()}"
                class=""
        >
            <button
                    class={twMerge(
/* base */               "font-semibold w-full rounded-lg p-4 hover:bg-gray-100 transition-colors",
/* is saturday */        (cell.date.getDay() === SATURDAY)? " " : "",
/* is sunday */          (cell.date.getDay() === SUNDAY)? " " : "",
/* is not this month */  (!sameMonth(cell.date, thisMonth))? "text-gray-400 hover:text-gray-500" : "",
/* is today */           (sameDay(cell.date, today))? "bg-gray-100": "",
/* active day */         (cell.date === active)? "bg-primary-600 text-white hover:bg-primary-600 hover:text-white": "",
                         "disabled:cursor-default disabled:bg-transparent disabled:text-gray-400"
                )}
                    on:click|self={() => { dispatch("day_click", {date: cell.date}); active = cell.date; goto("?date=" + cell.date.toISOString().split('T')[0]); console.log(cell.date.toISOString()) }}
                    disabled={disableDaysOutsideMonth && !sameMonth(cell.date, thisMonth) || cell.date.getDay() === SATURDAY || cell.date.getDay() === SUNDAY ||  cell.date < new Date()}
            >
                {cell.date.getDate()}
            </button>
            <!--{#each cell.events as event}-->
            <!--    <button class="event" style="{(event.color)? 'color:'+event.color : ''};{(event.background)? 'background-color:'+event.background:''}" on:click={() => dispatch("event_click", event)}>-->
            <!--        {event.text}-->
            <!--    </button>-->
            <!--{/each}-->
        </div>
    {/each}
</div>


<style>
    .calendar-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 2.5rem 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        /*width: 100%;*/
        /*padding-top: 25px;*/
    }
</style>