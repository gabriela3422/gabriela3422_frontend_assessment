import {Country} from "../../countries";
import React from "react";

type SortDirection = "none" | "asc" | "desc";

interface TheadProps {
    label: string;
    column: keyof Country;
    sortColumn: keyof Country | null;
    sortDirection: SortDirection;
    onSort: (column: keyof Country) => void;
}

const Thead: React.FC<TheadProps> = ({label, column, onSort, sortDirection, sortColumn}) => {
    const isActive = column === sortColumn;

    return (
        <th
            onClick={() => onSort(column)}
        >
            {label}
            {isActive
                ? sortDirection === "asc"
                    ? " ▲"
                    : sortDirection === "desc"
                        ? " ▼"
                        : ""
                : ""}
        </th>
    )
}
export default Thead