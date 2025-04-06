export const RATE_FILTERS = [
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
] as const;

export type RateFilterId = typeof RATE_FILTERS[number]['id'];