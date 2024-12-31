import {Country} from "../../countries";
import React, {useEffect, useState} from "react";
import Thead from "./Thead";
import {sortCountriesBy} from "../helpers/compareValues";

interface TableProps {
    data: Country[];
}
const Table: React.FC<TableProps> = ({data}) => {
    const [sortedData, setSortedData] = useState<Country[]>(data);
    const [sortColumn, setSortColumn] = useState<keyof Country | null>(null);
    const [sortDirection, setSortDirection] = useState<"none" | "asc" | "desc">("none");

    const handleSort = (column: keyof Country) => {
        if (sortColumn === column) {
            setSortDirection((prev) =>
                prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
            );
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    }
    useEffect(() => {
        if (sortDirection === "none" || !sortColumn) {
            setSortedData(data);
            return;
        }
        const sorted = sortCountriesBy(data, sortColumn, sortDirection);

        setSortedData(sorted);
    }, [data, sortColumn, sortDirection]);

    return (
        <table>
            <thead>
            <tr>
                <Thead label="Country" column="country" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
                <Thead label="Population" column="population" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
                <Thead label="Deaths" column="deaths" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
                <Thead label="Recovered" column="recovered" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
                <Thead label="Lat." column="lat" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
                <Thead label="Lng." column="lng" sortColumn={sortColumn} sortDirection={sortDirection}
                       onSort={handleSort}/>
            </tr>
            </thead>
            <tbody>
            {sortedData.map((country) => (
                <tr key={country.country}>
                    <td>{country.country}</td>
                    <td>{country.population}</td>
                    <td>{country.deaths}</td>
                    <td>{country.recovered}</td>
                    <td>{country.lat}</td>
                    <td>{country.lng}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default Table