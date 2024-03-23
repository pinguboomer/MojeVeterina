import {writable} from "svelte/store";

export const user = writable(null);

export const token = writable(null);

export const modal = writable({show: false, type: "", details: {}})

export const reloadData = writable(false)

