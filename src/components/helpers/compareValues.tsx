import {Country} from "../../countries";

export type SortDirection = "none" | "asc" | "desc";

export function compareValues(valA: unknown, valB: unknown, direction: Exclude<SortDirection, "none">) {
    if (typeof valA === "string" && typeof valB === "string") {
        return direction === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    if (typeof valA === "number" && typeof valB === "number") {
        return direction === "asc" ? valA - valB : valB - valA;
    }
    return 0;
}

export function sortCountriesBy(
    data: Country[],
    column: keyof Country,
    direction: Exclude<SortDirection, "none">
): Country[] {
    return [...data].sort((a, b) => compareValues(a[column], b[column], direction));
}