export const COMPLEXITY_FILTERS = [
    { id: 1, label: '1-3' },
    { id: 2, label: '4-6' },
    { id: 3, label: '7-8' },
    { id: 4, label: '9-10' },
] as const;

export type ComplexityFilterId = typeof COMPLEXITY_FILTERS[number]['id'];