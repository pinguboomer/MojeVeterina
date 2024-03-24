<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()

    export let month = 12;
    export let year = 2022;
    export let today = null; // Date
    export let offset = 0;

    export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

    function makeCalendarArray (month, year, offset, events) {
        let days = new Date(year, month, 0).getDate();  // number of days in month

        let first = new Date(year, month, 1 - days).getDay() - offset   // map first day in month to current offset
        if (first < 0) {
            first += 7;
        }

        let day = - first - days;   // calculate first day in calendar

        let whileTo = 0 // setup number of extra shown days in month for 'for' loop stop
        while((day - whileTo) % 7 !== 0) {
            whileTo += 1
        }

        const calendar = []     // initialize

        for (let i = day; i < whileTo; i += 1) {     // while : first calendar day to whileTo
            let date = new Date(year, month, i+1)
            calendar.push({
                date,
                events: events.filter(v => sameDay(v.date, date))
            })
        }

        return calendar;
    }

    // Labels
    $: reorderedLabels = reorderLabels(labels, offset);

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


<div class="calendar">
    {#each reorderedLabels as label}
        <div class="header">{label}</div>
    {/each}

    {#each calendarArray as cell}
        <div class="cell" class:sunday={cell.date.getDay() === 0} class:out={!sameMonth(cell.date, thisMonth)} class:today={sameDay(cell.date, today)}>
            <span class="date" on:click|self={() => dispatch("day_click", {date: cell.date})}>{cell.date.getDate()}</span>
            {#each cell.events as event}
                <span class="event" style="{(event.color)? 'color:'+event.color : ''};{(event.background)? 'background-color:'+event.background:''}" on:click={() => dispatch("event_click", event)}>
                    {event.text}
                </span>
            {/each}
        </div>
    {/each}
</div>


<style>
    .calendar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 2.5rem 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        /*background: greenyellow;*/
        width: 100%;
        /*min-width: 80rem;*/
        padding-top: 25px;
    }

    .header {
        width: 100%;
        font-size: 1.25rem;
        text-align: center;
        padding: 0.5rem 0;
        background: #147ECF;
        color: white;
        border: black solid 1px !important;
    }

    .cell {
        height: calc(100%);
        width: calc(100%);
        min-height: 6rem;
        font-size: 1.125rem;
        text-align: right;
        font-weight: bold;
        border: solid black 1px;
        overflow: hidden;
        padding: 0.25rem;
        background: white;
    }

    .cell .date {
        display: block;
        margin-bottom: 0.125rem;
        /*background: red;*/
        width: fit-content;
        float: right;
        cursor: pointer;
    }

    .cell .event {
        background: #00CC00;
        width: fit-content;
        max-width: calc(100% - 0.5rem);
        padding: 0.2rem 0.5rem;
        font-size: 1rem;
        border-radius: 0.4rem;
        margin: 0.125rem;
        display: inline-block;
        cursor: pointer;
    }

    .sunday {
        /*
        background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='57' height='57' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Ccircle cx='20' cy='20' r='10' fill='rgba(178, 245, 234,1)'/%3E%3Ccircle cx='0' cy='40' r='10' fill='rgba(178, 245, 234,1)'/%3E%3Ccircle cx='40' cy='0' r='10' fill='rgba(178, 245, 234,1)'/%3E%3Ccircle cx='0' cy='0' r='10' fill='rgba(178, 245, 234,1)'/%3E%3Ccircle cx='40' cy='40' r='10' fill='rgba(178, 245, 234,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
         */
        background: #e0edef;
    }


    .today {
        background: #f4c5c5;
    }

    .out {
        color: rgba(30,30,30, 0.5);
        background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='25' height='25' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(247, 250, 252,1)'/%3E%3Cpath d='M-10 30h60v20h-60zM-10-10h60v20h-60' fill='rgba(226, 232, 240,1)'/%3E%3Cpath d='M-10 10h60v2h-60zM-10-30h60v2h-60z' fill='rgba(226, 232, 240,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
        cursor: not-allowed;
    }

    .out .date, .out .event {
        cursor: not-allowed;
    }

</style>