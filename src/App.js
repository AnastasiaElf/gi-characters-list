import { useMemo, useState } from "react";
import "./App.css";
import data from "./data/data";
import Card from "./library/card/card";
import Select, { components } from "react-select";

const sortOptions = [
    { value: "rarity", label: "Rarity" },
    { value: "element", label: "Element" },
    { value: "weapon", label: "Weapon" },
    { value: "gender", label: "Gender" },
    { value: "body", label: "Body" },
    { value: "region", label: "Region" },
    { value: "name", label: "Name" },
    { value: "releasedate", label: "Release date" },
];

const filterOptions = [
    {
        label: "Rarity",
        options: [
            { value: "5", label: "5*", dataGroup: "rarity" },
            { value: "4", label: "4*", dataGroup: "rarity" },
        ],
    },
    {
        label: "Element",
        options: [
            { value: "anemo", label: "Anemo", dataGroup: "element" },
            { value: "geo", label: "Geo", dataGroup: "element" },
            { value: "cryo", label: "Cryo", dataGroup: "element" },
            { value: "electro", label: "Electro", dataGroup: "element" },
            { value: "dendro", label: "Dendro", dataGroup: "element" },
            { value: "hydro", label: "Hydro", dataGroup: "element" },
            { value: "pyro", label: "Pyro", dataGroup: "element" },
        ],
    },

    {
        label: "Weapon",
        options: [
            { value: "sword", label: "Sword", dataGroup: "weapon" },
            { value: "claymore", label: "Claymore", dataGroup: "weapon" },
            { value: "polearm", label: "Polearm", dataGroup: "weapon" },
            { value: "catalyst", label: "Catalyst", dataGroup: "weapon" },
            { value: "bow", label: "Bow", dataGroup: "weapon" },
        ],
    },
    {
        label: "Gender",
        options: [
            { value: "male", label: "Male", dataGroup: "gender" },
            { value: "female", label: "Female", dataGroup: "gender" },
        ],
    },
    {
        label: "Body size",
        options: [
            { value: "small", label: "S", dataGroup: "body" },
            { value: "medium", label: "M", dataGroup: "body" },
            { value: "large", label: "L", dataGroup: "body" },
        ],
    },
    {
        label: "Region",
        options: [
            { value: "mondstadt", label: "Mondstadt", dataGroup: "region" },
            { value: "liyue", label: "Liyue", dataGroup: "region" },
            { value: "inazuma", label: "Inazuma", dataGroup: "region" },
            { value: "noregion", label: "No region", dataGroup: "region" },
        ],
    },
    {
        label: "Version",
        options: [
            { value: "1.0", label: "Version 1.0", dataGroup: "releaseversion" },
            { value: "1.1", label: "Version 1.1", dataGroup: "releaseversion" },
            { value: "1.2", label: "Version 1.2", dataGroup: "releaseversion" },
            { value: "1.3", label: "Version 1.3", dataGroup: "releaseversion" },
            { value: "1.4", label: "Version 1.4", dataGroup: "releaseversion" },
            { value: "1.5", label: "Version 1.5", dataGroup: "releaseversion" },
            { value: "1.6", label: "Version 1.6", dataGroup: "releaseversion" },
            { value: "2.0", label: "Version 2.0", dataGroup: "releaseversion" },
            { value: "2.1", label: "Version 2.1", dataGroup: "releaseversion" },
            { value: "2.2", label: "Version 2.2", dataGroup: "releaseversion" },
            { value: "2.3", label: "Version 2.3", dataGroup: "releaseversion" },
            { value: "2.4", label: "Version 2.4", dataGroup: "releaseversion" },
            { value: "2.5", label: "Version 2.5", dataGroup: "releaseversion" },
            { value: "2.6", label: "Version 2.6", dataGroup: "releaseversion" },
        ],
    },
];

function App() {
    const characters = useMemo(() => {
        let result = [];
        Object.entries(data).forEach(([key, value]) => {
            result.push({
                id: key,
                ...value,
                releasedate: new Date(value.releasedate),
            });
        });

        // result = result.sort((a, b) => a.name.localeCompare(b.name));
        // result = result.sort((a, b) => a.releasedate - b.releasedate);
        return result;
    }, []);

    const [selectedSortOptions, setSelectedSortOptions] = useState([]);
    const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

    const CustomMultiValue = (props) => <components.MultiValue {...props}>{props.data.label}</components.MultiValue>;

    const CustomOption = ({ children, ...props }) => {
        return <components.Option {...props}>{children}</components.Option>;
    };

    return (
        <div className="main">
            <Select options={sortOptions} defaultValue={selectedSortOptions} onChange={setSelectedSortOptions} />
            <Select
                options={filterOptions}
                isMulti
                defaultValue={selectedFilterOptions}
                onChange={setSelectedFilterOptions}
                hideSelectedOptions={false}
                closeMenuOnSelect={false}
                components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
            />
            <div className="cards">
                {characters.map((elem) => (
                    <Card data={elem} key={elem.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
