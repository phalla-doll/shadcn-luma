export type Location = {
    name: string
    coordinates: [number, number] // [lng, lat]
    zoom: number
}

export const locations: Location[] = [
    {
        name: "All Phnom Penh",
        coordinates: [104.9162, 11.5564],
        zoom: 12,
    },
    {
        name: "BKK1 (Expats)",
        coordinates: [104.92, 11.553],
        zoom: 15,
    },
    {
        name: "Riverside / Daun Penh",
        coordinates: [104.9225, 11.56],
        zoom: 15,
    },
    {
        name: "Russian Market",
        coordinates: [104.917, 11.5475],
        zoom: 15,
    },
    {
        name: "Diamond Island",
        coordinates: [104.9355, 11.55],
        zoom: 15,
    },
    {
        name: "Tuol Kork",
        coordinates: [104.91, 11.572],
        zoom: 15,
    },
    {
        name: "Sen Sok / AEON 2",
        coordinates: [104.88, 11.58],
        zoom: 14,
    },
    {
        name: "Chroy Changvar",
        coordinates: [104.935, 11.575],
        zoom: 15,
    },
]
