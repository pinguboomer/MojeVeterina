<script>

    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    // import {modal, reloadData, token} from "../stores.js";
    import {modal, reloadData, token} from "../../store.js";
    import Calendar from "$lib/components/Calendar.svelte";
    import ReservationsCalendar from "$lib/components/ReservationsCalendar.svelte";

    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear()

    let monthNames = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]

    /*********************************************************/

    // let calendarEventsArray = []
    //
    // onMount(async () => {
    //     calendarEventsArray = await getCalendarEventsArray()
    // })
    //
    // async function getCalendarEventsArray() {
    //     let events = await load("/events", "Nepodařilo se načíst akce.")
    //     let trainings = await load("/trainings", "Nepodařilo se načíst tréninky.")
    //     let matches = await load("/matches", "Nepodařilo se načíst zápasy.")
    //
    //     let out = []
    //
    //     for (let event of events) {
    //         out.push({
    //             detail: event,
    //             type: "event",
    //             date: new Date(event.start),
    //             text: event.type,
    //             color: "black",
    //             background: "lightblue"
    //         })
    //     }
    //
    //     for (let training of trainings) {
    //         out.push({
    //             detail: training,
    //             type: "training",
    //             date: new Date(training.start),
    //             text: training.header,
    //             color: "black",
    //             background: "lightgreen"
    //         })
    //     }
    //
    //     for (let match of matches) {
    //         out.push({
    //             detail: match,
    //             type: "match",
    //             date: new Date(match.start),
    //             text: match.league,
    //             color: "black",
    //             background: "violet"
    //         })
    //     }
    //
    //     return out
    // }
    //
    // async function load(slug, errorText) {
    //     const res = await fetch(PUBLIC_API_URL + slug, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + $token
    //         }
    //     })
    //
    //     if (res.ok) {
    //         return await res.json() || []
    //     }
    //
    //     // alert(errorText)
    //     return []
    // }
    //
    // /*****************************************/
    // // Reload
    // reloadData.subscribe(async value => {
    //     calendarEventsArray = await getCalendarEventsArray()
    //     reloadData.set(false)
    // })

    /*********************************************************/

    let dateForReservations;

    function dateParse(){

    }

    function handleDayClick(e) {
        console.log(e.detail.date)
        dateForReservations = e.detail.date;
        modal.set({show: true, type: "add_choice", details: {date: e.detail.date}})
    }

    function handleEventClick(e) {
        // console.log(e.detail)
        // if (e.detail.type === "training") modal.set({show: true, type: "training_detail", details: e.detail.detail});
        // else if (e.detail.type === "event") modal.set({show: true, type: "event_detail", details: e.detail.detail});
        // else if (e.detail.type === "match") modal.set({show: true, type: "match_detail", details: e.detail.detail});
    }

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


<div>
    <div class="calendar-header">
        <svg on:click={toPrev} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
        </svg>
        <span class="text">
            {monthNames[month]} {year}
        </span>
        <svg on:click={toNext} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
        </svg>
    </div>
    <Calendar
            month={month+1}
            year={year}
            today={date}
            offset={1}
            labels={["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]}
            on:day_click={handleDayClick}
            on:event_click={handleEventClick}
    />
    {#if dateForReservations !== undefined}
        <ReservationsCalendar date={dateForReservations}/>
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

    .calendar-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1rem;
    }
</style>